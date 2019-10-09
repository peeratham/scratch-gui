// import PropTypes from 'prop-types';
import React, { Fragment } from 'react';
import { FormattedMessage } from 'react-intl';
import Draggable from 'react-draggable';
import classnames from 'classnames';

import ScratchBlocks from 'scratch-blocks';

import styles from './custom-card.css';
import rightArrow from './icon--next.svg';
import leftArrow from './icon--prev.svg';
import closeIcon from './icon--close.svg';
import shrinkIcon from './icon--shrink.svg';
import expandIcon from './icon--expand.svg';
import isEqual from 'lodash.isequal';

import { workspaceFromXml, addBlocksToWorkspace } from '../../lib/hints/hint-test-workspace-setup.js';
import { saveDataToMongo, queryData } from "../../lib/custom-analytics";
import { CopyToClipboard } from 'react-copy-to-clipboard';
// reference for latest update: https://github.com/LLK/scratch-gui/blob/develop/src/components/cards/cards.jsx
import Floater from 'react-floater';
// analytics
import analytics from "../../lib/custom-analytics";

import Reference from './reference.jsx';

const enableCloseCard = false;
const bypassCheck = false;

const QISCardHeader = ({ onCloseCards, onShrinkExpandCards, totalSteps, step, expanded, dbManager, onViewSelected, view }) => (
    <div className={styles.headerButtons}>
        {/* <div classnames={styles.viewButtonGroup}> */}
        {/* <div className={styles.allButton}>
                <div className={styles.viewSelectable}
                    onClick={() => { onViewSelected('instructions') }}>Instructions</div>
            </div>
            <div className={styles.allButton}>
                <div className={styles.viewSelectable}
                    onClick={() => { onViewSelected('reference') }}>Reference
            </div>
            </div> */}
        <div className={styles.viewButtonGroup}>
            <div className={view === 'instructions' ? styles.selectedViewSelectable : styles.viewSelectable}
                onClick={() => { onViewSelected('instructions') }}
            >Instruction</div>
            <div className={view === 'reference' ? styles.selectedViewSelectable : styles.viewSelectable}
                onClick={() => { onViewSelected('reference') }}
            >Reference</div>
        </div>
        {/* </div> */}
        {view === 'instructions' && totalSteps > 1 ? (
            <div className={styles.stepsList}>
                {Array(totalSteps).fill(0)
                    .map((_, i) => (
                        <div
                            className={i === step ? styles.activeStepPip : styles.inactiveStepPip}
                            key={`pip-step-${i}`}
                        />
                    ))}
            </div>
        ) : <div></div>}

        <div
            className={classnames(styles.viewSelectable)}
            onClick={onShrinkExpandCards}
        >
            <img
                style={{ display: 'inline-block', width: '16px', marginRight: '0.2rem', verticalAlign: 'bottom' }}
                draggable={false}
                src={expanded ? shrinkIcon : expandIcon}
            />
            {expanded ?
                <span>Shrink</span> :
                <span>Expand</span>
            }
        </div>
        {enableCloseCard && <div
            className={styles.removeButton}
            onClick={onCloseCards}
        >
            <span>Close</span>
            <img
                className={styles.closeIcon}
                src={closeIcon}
            />
        </div>}

    </div>
)


// // Video step needs to know if the card is being dragged to cover the video
// // so that the mouseup is not swallowed by the iframe.
const VideoStep = ({ video, dragging }) => (
    <div className={styles.stepVideo}>
        {dragging ? (
            <div className={styles.videoCover} />
        ) : null}
        <iframe
            allowFullScreen
            frameBorder="0"
            height="338"
            scrolling="no"
            src={`https://fast.wistia.net/embed/iframe/${video}?seo=false&videoFoam=true`}
            title="📹"
            width="600"
        />
        <script
            async
            src="https://fast.wistia.net/assets/external/E-v1.js"
        />
    </div>
);

const charsum = function (s) {
    var i, sum = 0;
    for (i = 0; i < s.length; i++) {
        sum += (s.charCodeAt(i) * (i + 1));
    }
    return sum
};

const array_hash = function (a) {
    var i, sum = 0
    for (i = 0; i < a.length; i++) {
        var cs = charsum(a[i])
        sum = sum + (65027 / cs)
    }
    return ("" + sum).slice(0, 16)
}

function eqSet(as, bs) {
    if (as.size !== bs.size) return false;
    for (var a of as) if (!bs.has(a)) return false;
    return true;
}

const checkStmtSequence = ({ topBlock, expected, shouldExcludeShadow }) => {


    const expectedHashes = new Set(expected.map(seq => array_hash(seq)));
    const allTopBlockHashes = new Set(topBlock.map(tb => {
        let actual = dfsTraverse(tb);
        let filteredActual = null;
        if (shouldExcludeShadow) {
            filteredActual = actual.filter(n => !n.isShadow_).map(b => b.type);
        }
        return filteredActual;
    }).map(seq => array_hash(seq)));

    return expectedHashes.subSetOf(allTopBlockHashes);
}

const getCousinBlocks = topBlock => {
    let blocks = [];

    let curBlock = topBlock;
    while (curBlock) {
        blocks.push(curBlock);
        curBlock = curBlock.getNextBlock();
    }
    return blocks;
}

const dfsTraverse = (topBlock) => {
    let seen = [];
    let toExplore = [];
    getCousinBlocks(topBlock).reverse().forEach(b => toExplore.push(b));

    while (toExplore.length > 0) {
        let next = toExplore.pop();
        if (seen.indexOf(next) < 0) {
            seen.push(next); //if not already visited 
            // get all of its children and next block
            next.getChildren().reverse().forEach(c => toExplore.push(c));
        }
    }
    return seen;
}

Set.prototype.subSetOf = function (otherSet) {
    if (this.size > otherSet.size)
        return false;
    else {
        for (var elem of this) {
            if (!otherSet.has(elem))
                return false;
        }
        return true;
    }
}


const workspaceContainsScript = ({ workspace, expected, shouldExcludeShadow = true }) => {
    window.workspace = workspace;
    //test dfs
    let seen = dfsTraverse(workspace.getTopBlocks()[0]);
    // const found = workspace.getTopBlocks().find(topBlock => checkStmtSequence({ topBlock, expected, shouldExcludeShadow }));
    const found = checkStmtSequence({ topBlock: workspace.getTopBlocks(), expected, shouldExcludeShadow });
    return !!found;
}

const checkStepCompletion = ({ onCompleteStep, expected, currentInstructionId, customCheck, onShowReminderMessage, endStepTimer }) => () => {
    let isComplete = null;
    if (!expected) {
        isComplete = true;//not specified => auto complete
    } else {
        const workspace = ScratchBlocks.getMainWorkspace();
        isComplete = workspaceContainsScript({ workspace, expected });
    }


    if (customCheck) {
        isComplete = isComplete && eval(customCheck);

    }

    //analytics
    analytics.event({
        category: "Instruction",
        action: isComplete ? 'pass' : 'fail',
        label: currentInstructionId
    });

    if (isComplete) {
        endStepTimer(currentInstructionId);
    }

    isComplete ? onCompleteStep(currentInstructionId) : onShowReminderMessage("Please follow the instruction and try again");
}

const populateWorkspace = (setupCode) => {
    let workspace = Blockly.getMainWorkspace();
    if (workspace) {
        setTimeout(() => {
            workspaceFromXml(workspace, setupCode);
            setTimeout(() => {
                workspace.cleanUp();
                workspace.scrollCenter();
            }, 0)
        }, 100);
    }
}

const configureWorkspace = ({ shouldCleanup, dragging, setupCode, setUpdateCodeStatus, populateWorkspace }) => () => {
    const workspace = Blockly.getMainWorkspace();
    if (workspace && shouldCleanup && !dragging) {
        workspace.clear();
    }
    if (setupCode) {
        // setTimeout(()=>{
        populateWorkspace(setupCode);
        // },2000);
    }
    setUpdateCodeStatus(true);

}

class ImageStep extends React.Component {
    constructor(props) {
        super(props);
        this.state = { copied: false };
    }

    componentDidMount() {
        const {
            setUpdateCodeStatus, shouldCleanup, dragging, setupCode
        } = this.props;

        this.props.vm.addListener("workspaceUpdate",
            configureWorkspace({ shouldCleanup, dragging, setupCode, setUpdateCodeStatus, populateWorkspace }));
    }

    componentDidUpdate() {


        const {
            isAlreadySetup, setUpdateCodeStatus, shouldCleanup, dragging, setupCode
        } = this.props;


        // configureWorkspace({shouldCleanup,dragging,setupCode, setUpdateCodeStatus, populateWorkspace})();

        if ((setupCode || shouldCleanup) && !isAlreadySetup) {
            // clear
            const workspace = Blockly.getMainWorkspace();
            if (workspace && shouldCleanup && !dragging) {
                workspace.clear();
            }
            if (setupCode) {
                // setTimeout(()=>{
                populateWorkspace(setupCode);
                // },2000);
            }
            setUpdateCodeStatus(true);
        }
    }

    render() {
        const { title, image, completionCode } = this.props;
        if(completionCode&&!this.state.copied){
            this.props.endDeckTimer();
        }
        return (
            <Fragment>
                <div className={styles.stepTitle}>
                    {title}
                </div>
                {completionCode && <div>
                    <div style={{ color: 'red', marginBottom: '30px', fontWeight: 'bold' }}>{completionCode}</div>
                    <CopyToClipboard text={completionCode}>
                        <div className={styles.copyCompletionCodeButton} onClick={() => { this.setState({ copied: true }) }}>
                            Click me to copy the completion code {this.state.copied && <span style={{ color: "#718096" }}>COPIED!</span>
                            }</div>
                    </CopyToClipboard>
                </div>
                }
                {completionCode && this.state.copied && <h4>After pasting the completion code to the main survey, <br />you may close this Scratch editor!</h4>}
                <div className={styles.stepImageContainer}>
                    <img
                        className={styles.stepImage}
                        draggable={false}
                        src={image}
                    />
                </div>
            </Fragment>
        )
    }
}


const NextPrevButtons = ({ isRtl, onNextStep, onPrevStep, expanded, stepCompleted, setUpdateCodeStatus, currentInstructionId, onShowReminderMessage }) => {
    return (
        <Fragment>
            {onNextStep ? (
                <div>
                    <div className={expanded ? styles.rightCard : styles.hidden} />
                    <div
                        className={expanded ? (stepCompleted ? styles.rightButton : classnames(styles.buttonDisabled, styles.rightButton)) : styles.hidden}
                        onClick={stepCompleted ? (() => () => {
                            setUpdateCodeStatus(false); //clear setup status to false

                            //analytics
                            analytics.event({
                                category: "Instruction",
                                action: "view",
                                label: currentInstructionId
                            });
                            onNextStep();
                        })() : () => { onShowReminderMessage("Please check your work to continue."); }}
                    >
                        <img
                            draggable={false}
                            src={isRtl ? leftArrow : rightArrow}
                        />
                    </div>
                </div>
            ) : null}
            {onPrevStep ? (
                <div>
                    <div className={expanded ? (isRtl ? styles.rightCard : styles.leftCard) : styles.hidden} />
                    <div
                        className={expanded ? (isRtl ? styles.rightButton : styles.leftButton) : styles.hidden}
                        onClick={(() => () => {
                            setUpdateCodeStatus(false);
                            onPrevStep();
                        })()}
                    >
                        <img
                            draggable={false}
                            src={isRtl ? rightArrow : leftArrow}
                        />
                    </div>
                </div>
            ) : null}
        </Fragment>
    )
};

const Instructions = ({ dragging, stepCompleted, expanded, styles, steps, step, isAlreadySetup, setUpdateCodeStatus, vm, endDeckTimer }) => {
    return (
        <div className={expanded ? styles.stepBody : styles.hidden}>
            {
                steps[step].video ? (
                    <VideoStep
                        dragging={dragging}
                        video={steps[step].video}
                    />
                ) : (
                        <ImageStep
                            dragging={dragging}
                            image={steps[step].image}
                            title={steps[step].title}
                            stepCompleted={stepCompleted}
                            completionCode={steps[step].completionCode}
                            shouldCleanup={steps[step].shouldCleanup}
                            setupCode={steps[step].setupCode}
                            isAlreadySetup={isAlreadySetup}
                            setUpdateCodeStatus={setUpdateCodeStatus}
                            vm={vm}
                            endDeckTimer={endDeckTimer}
                        />
                    )
            }
            {steps[step].trackingPixel && steps[step].trackingPixel}
        </div>
    );
};

class CustomCards extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isAlreadySetup: false,
            selectedView:
                'instructions',
            // 'reference',
            shouldShowReminder: false,
            reminderMessage: null
        }
        this.setUpdateCodeStatus = this.setUpdateCodeStatus.bind(this);
        this.onViewSelected = this.onViewSelected.bind(this);
        this.onShowReminderMessage = this.onShowReminderMessage.bind(this);
        this.startStepTimer = this.startStepTimer.bind(this);
        this.endStepTimer = this.endStepTimer.bind(this);
        this.startDeckTimer = this.startDeckTimer.bind(this);
        this.endDeckTimer = this.endDeckTimer.bind(this);
    }

    setUpdateCodeStatus(alreadySetup) {
        this.setState({
            isAlreadySetup: alreadySetup
        })
    }

    onViewSelected(viewName) {
        this.setState({ selectedView: viewName });
    }

    onShowReminderMessage(msg) {
        this.setState({
            shouldShowReminder: true,
            reminderMessage: msg
        });

        setTimeout(() => {
            this.setState({
                shouldShowReminder: false,
                reminderMessage: null
            });
        }, 2000);
    }

    startDeckTimer(){
        const startDeckTime = new Date();
        this.setState({ startDeckTime: startDeckTime });
    }

    endDeckTimer() {
        const endTime = new Date();
        let timeDiff = endTime - this.state.startDeckTime; //in ms
        // strip the ms
        timeDiff /= 1000;

        // get seconds 
        const seconds = Math.round(timeDiff);
        saveDataToMongo('completion', this.props.activeDeckId+'_time-spent', seconds);
    }

    startStepTimer() {
        const startStepTime = new Date();
        this.setState({ startStepTime: startStepTime });
    }

    endStepTimer(stepId) {
        const endTime = new Date();
        let timeDiff = endTime - this.state.startStepTime; //in ms
        // strip the ms
        timeDiff /= 1000;

        // get seconds 
        const seconds = Math.round(timeDiff);
        saveDataToMongo('completion', this.props.activeDeckId+'_'+ stepId, seconds);
        this.setState({ startStepTime: null });
    }

    componentDidMount() {
        const {
            content, activeDeckId,
            step,
            qualityHintToggleVisible, stepCompleted
        } = this.props;


        if (qualityHintToggleVisible) {
            this.steps = content[activeDeckId].steps.filter(c => c.onlyVisibleToGroup === undefined || c.onlyVisibleToGroup === 'automated')
        } else {
            this.steps = content[activeDeckId].steps.filter(c => c.onlyVisibleToGroup === undefined || c.onlyVisibleToGroup === 'manual')
        }

        // activateDeck
        this.props.onActivateDeckFactory(this.props.activeDeckId)();
        this.startDeckTimer();
    }

    componentDidUpdate() {

        const {
            step,
            completed
        } = this.props;

        if ((!!this.steps[step].expected || !!this.steps[step].customCheck)
            && !!!this.state.startStepTime && !completed.includes(this.steps[step].id)) {
            this.startStepTimer();
        }
    }

    render() {
        const {
            activeDeckId,
            content,
            dragging,
            isRtl,
            locale,
            onActivateDeckFactory,
            onCloseCards,
            onShrinkExpandCards,
            onDrag,
            onStartDrag,
            onEndDrag,
            onShowAll,
            onNextStep,
            onPrevStep,
            showVideos,
            step,
            expanded,
            stepCompleted,
            completed,
            onCompleteStep,
            vm,
            qualityHintToggleVisible,
            ...posProps
        } = this.props;
        let { x, y } = posProps;

        if (activeDeckId === null) return;

        if (x === 0 && y === 0) {
            // initialize positions
            x = isRtl ? -292 : 292;
            // The tallest cards are about 385px high, and the default position is pinned
            // to near the bottom of the blocks palette to allow room to work above.
            const tallCardHeight = 385;
            const bottomMargin = 60; // To avoid overlapping the backpack region
            y = window.innerHeight - tallCardHeight - bottomMargin;
        }

        let steps = null;

        if (qualityHintToggleVisible) {
            steps = content[activeDeckId].steps.filter(c => c.onlyVisibleToGroup === undefined || c.onlyVisibleToGroup === 'automated')
        } else {
            steps = content[activeDeckId].steps.filter(c => c.onlyVisibleToGroup === undefined || c.onlyVisibleToGroup === 'manual')
        }

        // populateWorkspace({ vm });
        if (steps[step].recordCompletion) {
            //dbmanager record tutorial completion
            saveDataToMongo('completion', activeDeckId, new Date().toLocaleString('en-US', { timeZone: "America/New_York" }));
        }

        return (
            <Draggable bounds="parent" position={{ x: x, y: y }} onDrag={onDrag} >
                <div className={styles.cardContainer}>
                    <div className={styles.card}>
                        <QISCardHeader
                            expanded={expanded}
                            step={step}
                            totalSteps={steps.length}
                            onCloseCards={onCloseCards}
                            onShowAll={onShowAll}
                            onShrinkExpandCards={onShrinkExpandCards}
                            onViewSelected={this.onViewSelected}
                            view={this.state.selectedView}
                        />
                        {this.state.selectedView === 'instructions' &&
                            <Instructions
                                dragging={dragging}
                                stepCompleted={stepCompleted}
                                steps={steps}
                                expanded={expanded}
                                styles={styles}
                                step={step}
                                isAlreadySetup={this.state.isAlreadySetup}
                                setUpdateCodeStatus={this.setUpdateCodeStatus}
                                vm={vm}
                                endDeckTimer={this.endDeckTimer}
                            />}

                        {this.state.selectedView === 'reference' && <Reference expanded={expanded} activeDeckId={activeDeckId} />}


                        {this.state.selectedView === 'instructions' && expanded &&
                            !!(steps[step].expected || steps[step].customCheck) &&
                            <div className={styles.footer}>
                                {completed.includes(steps[step].id) ? <div className={styles.completedStatus}>Completed</div> :
                                    <Floater content={this.state.reminderMessage || "Click to check your work!"}
                                        open={!!this.state.reminderMessage}
                                        styles={{
                                            floater: {
                                                zIndex: 9999
                                            }
                                        }}>
                                        <div className={styles.checkButton}
                                            onClick={checkStepCompletion({
                                                onCompleteStep, vm, expected: steps[step].expected, customCheck: steps[step].customCheck,
                                                onShowReminderMessage: this.onShowReminderMessage,
                                                currentInstructionId: steps[step].id,
                                                endStepTimer: this.endStepTimer
                                            })}>Check</div>
                                    </Floater>
                                }
                            </div>}

                        {this.state.selectedView === 'instructions' && <NextPrevButtons
                            expanded={expanded}
                            isRtl={false}
                            dragging={dragging}
                            onNextStep={step < steps.length - 1 ? onNextStep : null}
                            onPrevStep={step > 0 ? onPrevStep : null}
                            stepCompleted={bypassCheck || (!steps[step].expected && !steps[step].customCheck) || completed.includes(steps[step].id)}
                            checkCompletion={checkStepCompletion({ onCompleteStep, vm, expected: steps[step].expected, currentInstructionId: steps[step].id })}
                            isAlreadySetup={this.state.isAlreadySetup}
                            setUpdateCodeStatus={this.setUpdateCodeStatus}
                            currentInstructionId={steps[step].id}
                            onShowReminderMessage={this.onShowReminderMessage}
                        />}
                    </div>
                </div>
            </Draggable>
        );
    }
}

export default CustomCards;
