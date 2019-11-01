
import React from 'react';
import { FormattedMessage } from 'react-intl';
import styles from './deck-content-styles.css';
import classnames from 'classnames';

// Intro
import greenFlagButton from './intro/greenflag.png';
import stopButton from './intro/stop.png';
import gfClickedBlock from './intro/gf-clicked.png';
import undo from './intro/undo.gif';
import libraryIntro from './intro/lib-getting-started.jpg';
import stepMove from './intro/intro1.gif';
import stepMoveSayHello from './intro/intro2.gif';
import inspectCode from './intro/figure-out-code-1.gif'
import deleteCode from './intro/delete-code.gif';
import moveSay from './intro/move-say.gif';
import gfMoveSay from './intro/gf-move-say.gif';
import goSquare from './intro/go-square-when-receive.png';
import goSquareOutput from './intro/go-square-output.gif';
import slidingSquareOutput1 from './intro/sliding-square-output-1.gif';
import squareJumpOutput from './intro/square-jump-output.gif';
import jumpUpward from './intro/jump-upward-code.png';
import jumpDownward from './intro/jump-downward-code.png';
import makeABlockResult from './intro/make-a-block-result.png';
import jumpBlock from './intro/jump-block.png';
import defineJump from './intro/define-jump.png';
import orangeBlue from './intro/orange-blue.gif';
import orangeBlueStarter from './intro/orange-blue-starter.gif';
import orangeBlueModifyTarget from './intro/orange-blue-modify-target-2.png';
import orangeBlueHint from './intro/set-color-effect-to-hint.png';
import sayRandomNum from './intro/say-random-number.gif';
import coloringTheCat from './intro/coloring-cat.png';
import purpleCat from './intro/purple-cat.png';
import spriteAndMedia from './intro/sprite-and-media.gif';
import jump0 from './intro/tutorial-noparam-custom-block.gif';
import jump01 from './intro/jump-block-01.gif';
import jump02 from './intro/jump-block-02.gif';
import purpleSpike from './intro/purple-spike.png';
import redSpike from './intro/red-spike.png';
import jumpLow from './intro/jump-low.png';
import jumpBlank from './intro/jump-blank.png';
import jumpWhat from './intro/jump-what.png';
import jump1 from './intro/tutorial-1param-custom-block.gif'
import addParameter from './intro/add-parameter.gif';
import useParameter from './intro/use-parameter.gif';
import useBlockWithParam from './intro/use-block-with-param.gif';
import createCloneBlock from './intro/create-clone.png';
import cloningConcept from './intro/cloning-concept.gif';
import walkingMovement from './intro/walking-movement.gif';
import foreverWalking from './intro/forever-walking.png';
import repeatBlock from './intro/repeat.png';
import foreverBlock from './intro/forever.png';
import switchCostumeBlock from './intro/switch-costume-to.png';

import catCloning from './intro/cat-cloning.png';
import originalVsGoal from './custom-block-deck/original-vs-goal.png';
import copyPasteReuse from './custom-block-deck/copy-paste-modify.gif';
import copyPasteOnly from './custom-block-deck/copy-paste-only.gif';
import expectedMods from './custom-block-deck/expected-modifications.png';

import pickRandomNum from './intro/pick-random.png';
import setColorEffect from './intro/set-color-effect.png';
import blockAsInput from './intro/block-as-input.png';

import scratchTabs from './intro/scratch-tabs.png';

//QI
import customBlockCfg from './intro/custom-block-cfg.png';
import modifyBrightness from './custom-block-deck/modify-brightness-effect.png';
import modifyRepeat from './custom-block-deck/modify-repeat.png';

import abstractExtractCustomBlock from './custom-block-deck/abstract-extract-custom-block.png';

import enableHintRefactoring from './custom-block-deck/enable-hint-refactoring.gif';
import modifyChangeXBy from './custom-block-deck/modify-change-x-by.png';

import expectedImprovement from './custom-block-deck/expected-improvement.png';
import highlightedPart from './custom-block-deck/highlighted-to-extract.png';
import beforeAfter from './custom-block-deck/before-after.png';

import tipsIcon from './custom-block-deck/tips-icon.png';
import generateShades from './custom-block-deck/generate-shades.png';

//study tasks
import studyTaskPreview from './study-tasks/study-task-preview.gif';
import programExplained from './study-tasks/original-program-explained.png';
import programExplained1 from './study-tasks/original-program-explained-1.png';
import programExplained3Particles from './study-tasks/original-program-explained-three-particles.png';
import threeParticleBefore from './study-tasks/3particle-before.gif';
import threeParticleAfter from './study-tasks/3particle-after1.gif';
import threeParticleAfter2 from './study-tasks/3particle-after2.gif';
import blackArrowRight from './study-tasks/arrow.gif';

import whenIStartAsCloneBlock from './study-tasks/when-i-start-as-clone.png';
import modificationTarget from './study-tasks/highlighted-modification-target-2.png';

import moveFurther from './study-tasks/move-further.gif';
import growBigger from './study-tasks/grow-bigger.gif';
import gradualFade from './study-tasks/gradual-fade.gif';
import addingSpin from './study-tasks/adding-spin.gif';
import colorEffect from './study-tasks/color-effect.gif';
import turnRightBlock from './study-tasks/turn-right.png';
import changeColorEffectBlock from './study-tasks/change-color-effect.png';


import cloneAction from './study-tasks/clone-action.png';
import createCloneSeq from './study-tasks/create-clone-seq.png';
import studyTask1 from './study-tasks/study-task-1.gif';
import studyTask2 from './study-tasks/study-task-2.gif';
import studyTask3 from './study-tasks/study-task-3.gif';
import changeSizeByImg from './study-tasks/change-size-by.png';
import changeGhostEffect from './study-tasks/change-ghost-effect.png';
import moveBlock from './study-tasks/move-block.png';
import saveFeature from './study-tasks/save-feature.png';
import referenceGuide from './study-tasks/reference-guide.png';
import changeRepeatInputHint from './study-tasks/change-repeat-input-hint.png';


// navigation guide
import rightArrow from './intro/right-arrow.png';
import checkButton from './intro/check-button-2.png';
import needHelpButton from './intro/need-help.png';

import featureTogglingImg from './custom-block-deck/feature-toggle.png';

const Label = ({ text }) => <span className={styles.cardType}>{text}</span>;
const ColoredLabel = ({ text, color }) => <span className={styles.cardType} style={{ backgroundColor: color }}>{text}</span>;
const PracticeLabel = () => <ColoredLabel text="Practice" color="#21a39d" />;
const StepLabel = ({ step }) => <ColoredLabel text={step} color="#21a39d" />;
const QuizLabel = () => <Label text="Quiz" />;
const TipsLabel = () => <ColoredLabel text="Tips" color="#63B3ED" />;
const ConceptLabel = () => <Label text="Concept" />;

const GreenFlagButton = () => <img src={greenFlagButton} className={styles.smallInlinePic} />;
const StopButton = () => <img src={stopButton} className={styles.smallInlinePic} />;
const CheckButtonImg = () => <img src={checkButton} className={styles.checkButton} />;
const BeforeAfter = ({ before, after }) => <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center' }}>
    <img src={before} style={{ width: '180px' }} />
    <img src={blackArrowRight} style={{ height: '30px', alignSelf: 'center', padding: '0.3rem' }} />
    <img src={after} style={{ width: '180px' }} />
</div>

class ScrollableContainer extends React.Component {
    constructor(props) {
        super(props);
        this.myRef = this.refs.div;//React.createRef();
    }
    render() {
        const { height } = this.props;
        return <div className={styles.scrollable} style={{ height: height, float: 'left' }} ref={elem => this.myRef = elem}>
            {this.props.children}
        </div>;
    }
}

export default {
    'scratch-basics': {
        name: (
            <FormattedMessage
                defaultMessage="Getting Started"
                description="Name for the 'Getting Started' how-to"
                id="gui.howtos.intro-move-sayhello-hat.name"
            />
        ),
        tags: ['help', 'stuck', 'how', 'can', 'say'],
        img: libraryIntro,
        steps: [
            // {
            //     id: 'intro-instructions',
            //     content:
            //         (
            //             <div className={styles.contentContainer}>
            //                 <p> Completing this part will prepare you for Parts 2 and 3.
            //                     First, we want to provide you with a general guide to navigate the user study card deck.
            //                     You will go through a sequence of cards in this deck.
            //                     <span className={styles.yellowMark}> The last card will provide you with the <b> completion code </b>
            //                         to copy and paste into the main survey page.</span>
            //                 </p>

            //                 <p>
            //                     You can drag this card deck around and place it wherever you like.
            //                     Click <img src={rightArrow} style={{ width: '2rem', verticalAlign: 'middle' }} /> to go to the next card and
            //                     <img src={rightArrow} className={styles.flipHorizontal} style={{ width: '2rem', verticalAlign: 'middle' }} /> to the previous card.
            //                 </p>

            //                 <p>
            //                     <span className={styles.yellowMark}>The cards with <PracticeLabel /> label require you to complete some simple programming tasks.</span>
            //                     For these cards, you will need to check your work by clicking <CheckButtonImg /> before you can go to the next card. Other cards are for you to learn and require no work for you to perform.
            //                 </p>
            //             </div>
            //         ),
            //     title: (
            //         <p className={styles.contentTitle}>Part 1: The Basics of Scratch</p>
            //     ),
            //     projectId: 330600515
            // },
            // {
            //     id: 'intro-vid',
            //     title: (
            //         <p className={styles.contentTitle}>Programming With Scratch (50-second Teaser)</p>
            //     ),
            //     video: 'rpjvs3v9gj'
            // },
            // {
            //     id: 'move-say',
            //     title: (<p className={styles.contentTitle}><PracticeLabel />Create Your First Scratch Program</p>),
            //     content: (
            //         <div className={styles.contentContainer}>
            //             <p><StepLabel step="step 1/2" />
            //                 <img src={moveSay} className={styles.contentImage} style={{ width: '320px' }} /><br/>
            //                 Create a sequence of blocks as shown below. Each block performs a specific action.
            //                 Click any block in the sequence for the square to perform all actions specified by the sequence.
            //             </p>
            //             <p><StepLabel step="step 2/2" />
            //                 Place <img src={gfClickedBlock} className={styles.block} /> block at the top of a block sequence to run that program part when the <GreenFlagButton /> button is clicked. Click <GreenFlagButton /> to run your first Scratch program!
            //                     <img src={gfMoveSay} className={styles.contentImage} style={{ width: '320px' }} />
            //             </p>
            //             <p><StepLabel step="finally" /><span className={styles.yellowMark}>Click <CheckButtonImg /> to check your work (also run the program).
            //                 </span>
            //             </p>
            //         </div>
            //     ),
            //     expected: [["event_whenflagclicked", "motion_movesteps", "looks_sayforsecs"]],
            //     // shouldCleanup: true
            // },
            // {
            //     id: 'tip-inspect',
            //     title: (<p className={styles.contentTitle}><TipsLabel />Working with Blocks</p>),
            //     content: (
            //         <div className={styles.contentContainer}>
            //             <p>
            //                 <b>How to Undo Previous Action </b><br />
            //                 Right click on the empty space. Select Undo.
            //                                 <img src={undo} className={styles.contentImage} style={{ width: '300px' }} />
            //             </p>
            //             <p>
            //                 <b>How to Figure Out What a Program Part Does: </b><br />
            //                 You can separate program parts and click each of them to see what it does.
            //                                 <img src={inspectCode} className={styles.contentImage} style={{ width: '400px' }} />
            //             </p>
            //             <p>
            //                 <b>How to Delete Blocks: </b><br />
            //                 Right click a block then select "Delete Block" to delete just that block.
            //                             <span className={styles.yellowMark}>A quicker way to delete block is to drag and drop it in the block palette area.When a block is dragged, the block sequence connected below it will also move along.
            //                             Placing a sequence of blocks in the block palette area will delete all blocks in the sequence.</span>
            //                 <img src={deleteCode} className={styles.contentImage} style={{ width: '400px' }} />
            //             </p>
            //         </div>
            //     ),
            //     shouldCleanup: true
            // },
            {
                id: 'sliding-square',
                title: (<p className={styles.contentTitle}><PracticeLabel />Go Square Go!</p>),
                content: (
                    <div className={styles.contentContainer}>
                        <p>
                            <img src={slidingSquareOutput1} className={styles.contentImage} style={{ width: '220px', float:'right' }} />
                            Program the the blue square to slide through all checkpoints. The result should look like the animation on the right. You will add to the script that starts with <b>when I receive "Level 1 Start"</b> Each slide animation is a little pause (0.1 seconds) followed by a 100-step movement in a given direction.
                            {/* <img src={goSquare} className={styles.block} style={{ width: '10rem', height: 'auto' }} />. */}
                        </p>
                        <p><StepLabel step="Step 0/3" />
                            (Already completed for you as an example!) Please, click <GreenFlagButton/> to see the example. We move the square rightward to the first checkpoint. If you look at the grid lines in the background, the first checkpoint is 100 steps to the right of the starting point. We <b>repeat</b> the <b>"change x by 10"</b> block <b>10</b> times (i.e., 10 x 10 = 100).
                        </p>
                        <p>
                            <StepLabel step="Step 1/3" />Move the square upward to the second checkpoint which is 100 steps above the first one. Following what we did for the first checkpoint, using the combination of repeat block but this time, use the <b>"change y by 10"</b> block instead.
                        </p>
                        <p>
                            <StepLabel step="Step 2/3" />Move the square rightward to the third check point, similar to step 0/3.
                        </p>
                        <p>
                            <StepLabel step="Step 3/3" />Move the square upward to the final checkpoint, similar to Step 1/3
                        </p>
                    </div>
                ),
                projectId: 341014499
            },
            {
                id: 'my-sliding-block',
                title: (<p className={styles.contentTitle}><PracticeLabel />Making Your Own Slide Blocks!</p>),
                content: (
                    <div className={styles.contentContainer}>
                        <p>
                            Your program works great and we can improve it further! In the long run, it pays off if you improve your program along the way. You might notice two recurring block sequences.
                            The first recurring block sequence performs slide right and the other slide up. 
                            We can extract these two recurring block sequences as custom blocks. The steps below guide you how:
                        </p>
                        <p><StepLabel step="Step 0/2" />
                            Toggle on <b>Code Wizard</b> to see code improvement hints:
                        </p>
                        <p><StepLabel step="Step 1/2" />
                            Create "Slide Right" custom block.
                        </p>
                        <p><StepLabel step="Step 2/2" />
                            Create "Slide Up" custom block.
                        </p>
                    </div>
                ),
                projectId: 341049519
            },
            {
                id: 'using-your-slide-blocks',
                title: (<p className={styles.contentTitle}><PracticeLabel />Using your slide blocks to complete all checkpoints</p>),
                content: (
                    <div className={styles.contentContainer}>
                        Program the blue square to slide through all the checkpoints.
                        Sliding through the first two checkpoints have been completed for you!
                    </div>
                ),
                projectId: 341055614
            },
            // {
            //     id: 'jumping-square',
            //     title: (<p className={styles.contentTitle}><PracticeLabel />Avoid the Spikes</p>),
            //     content: (
            //         <div className={styles.contentContainer}>
            //             <img src={squareJumpOutput} className={styles.contentImage} style={{ width: '200px', float:'right' }} />
            //             <p>You will program the square to do a basic jump to avoid the purple spikes!
            //                 The square should jump when if it's touching the purple color.
            //                 A basic jump simply putting an upward movement followed by a downward movement. 
            //             </p>
            //             <p style={{marginTop:'1rem', marginBottom:'1.5rem'}}>
            //                 <img src={jumpUpward} className={styles.contentImage} style={{ width: '110px', float:'left' }} />
            //                 <StepLabel step="Step 1/2" /> Put together the block sequence that moves the square up (shown on the left) and put it inside the <b>if touching color then...</b> block.<br />
            //             </p>
            //             <p>
            //                 <img src={jumpDownward} className={styles.contentImage} style={{ width: '110px', float:'right' }} />
            //                 <StepLabel step="Step 2/2" /> Put together the block sequence that moves the square down (shown on the right).  Connect it to the sequence created in the previous step.<br />
            //             </p>
            //         </div>
            //     ),
            //     projectId: 341014499
            // },
            // {
            //     id: 'jump-custom-block',
            //     title: (<p className={styles.contentTitle}><PracticeLabel />Making Your Own Block: A Jump Block</p>),
            //     content: (
            //         <div className={styles.contentContainer}>
            //             <p>
            //                 In the previous step, we make the square jump by putting together the block sequence that moves the square up and down. Let's turn that code into a custom-made block and give it a descriptive name for what it does (i.e, "jump") <br />
            //             </p>

            //             <p>
            //                 <StepLabel step="Step 1/2" /> Follow the animated guide below to make your jump custom block.
            //                 <img src={jump01} className={styles.contentImage} style={{ width: '400px' }} />
            //                 You should see two things being created (shown in the picture below): 1) your <b>jump</b> block in the pallette (left) and 2) the <b>define jump</b> block in your workspace (right)<br />
            //                 <img src={makeABlockResult} className={styles.contentImage} />
            //             </p>
            //             <p>
            //                 <StepLabel step="Step 2/2" />
            //                 The <img src={defineJump} className={styles.imgInline} style={{ width: '6rem' }} /> lets you define what <b>jump</b> block should do. Follow the animated guide below that show how to use the block sequence you created previously as the definition for your jump block. Finally you will use the created jump block in your code to make the square jump. 
            //                     <img src={jump02} className={styles.contentImage} style={{ width: '400px' }} />
            //             </p>
            //             <p>
            //                 <StepLabel step="Finally" />
            //                 Click <GreenFlagButton /> to see whether the created <b>jump</b> custom block indeed makes the square jump!
            //                 </p>
            //         </div>
            //     ),
            //     // expected: [
            //     //     ["event_whenflagclicked", "control_forever", "procedures_call"],
            //     //     ["procedures_definition", "control_repeat", "motion_changeyby", "control_wait", "control_repeat", "motion_changeyby"]
            //     // ],
            //     projectId: 339735285
            // },
            {
                id: 'jump-with-height',
                title: (<p className={styles.contentTitle}><PracticeLabel /> Help Square Jump <br /> Over Those Dangerous Spikes</p>),
                content: (
                    <div className={styles.contentContainer}>
                        <p>
                            <StepLabel step="Before we start!" /> Let's put your jump block to the test! Click <GreenFlagButton /> to see it in action. Your jump block works quite well at avoiding small purple <img src={purpleSpike} className={styles.imgInline} style={{ height: '1rem' }} />
                            spikes but not the big red ones <img src={redSpike} className={styles.imgInline} style={{ height: '2rem' }} />. Your jump block simply didn't make the square jump high enough :(<br />
                        </p>
                        <p>
                            One way to fix it is to create another jump block that does a high jump (e.g. a high jump block). But there's a better way---adding a "height" parameter to your jump custom block's definition so that you can specify how high a jump should be when you use it.<br />
                            Follow the steps below to add a height parameter to the "jump" custom block.
                            </p>
                        <p>
                            <StepLabel step="Step 1/3" /> Edit the jump block definition and add "height" parameter.
                                <img src={addParameter} className={styles.contentImage} style={{ width: '400px' }} />
                        </p>
                        <div>
                            <img src={useParameter} className={styles.contentImage} style={{ width: '150px', float: 'right' }} />
                            <p>
                                <StepLabel step="Step 2/3" />
                                The number of times we repeat the <b>change y by</b> block, the higher the jump!
                                Use "height" parameter in the jump block's definition to make the cat jump with a height value specified when the jump block is used. (See the animated guide on the right).
                                </p>
                        </div>
                        <p>
                            <StepLabel step="Step 3/3" />  You should see the previous two jump blocks now have a blank input slot like <img src={jumpBlank} className={styles.imgInline} style={{ width: '4rem' }} />.
                            Specify the program so the square
                                jumps low <img src={jumpLow} className={styles.imgInline} style={{ width: '4rem' }} /> over the purple spikes and jumps high <img src={jumpWhat} className={styles.imgInline} style={{ width: '4rem' }} /> over the red ones.
                                You will need to figure out what that <b>?</b> value is so the square jump just high enough to avoid the red spikes (and so it doesn't say "Ouch!")
                        </p>
                    </div>
                ),
                expected: [
                    ["event_whenflagclicked", "control_forever", "procedures_call", "procedures_call"],
                    ["procedures_definition", "control_repeat", "motion_changeyby", "control_wait", "control_repeat", "motion_changeyby", "argument_reporter_string_number", "argument_reporter_string_number"]
                ], // customCheck: 1. cb has a param, 2 jumps (with string input) 
                projectId: 339717424
            },
            {
                id: 'orange-blue-phenomenon',
                title: (<p className={styles.contentTitle}><PracticeLabel />The Orange-Blue Phenomenon</p>),
                content: (
                    <div className={styles.contentContainer}>
                        <BeforeAfter before={orangeBlueStarter} after={orangeBlue} />
                        <p>
                            We have prepared for you a starter program. A yellow spinny square is flying to the right passing blue and orange background. It should look like the left preview animation.<br />
                            <StepLabel step="Step 0/2" /> Please, click <GreenFlagButton /> to see how it looks like.

                            Your goal is to complete this starter project to make an orange-blue phenomenon come true!
                            (like the one on the right). Basically, the square should turn orange when the moving background behind it is blue and it should turn blue when the background behind it is orange.
                        </p>
                        <p>
                            <img src={orangeBlueModifyTarget} style={{ width: '150px', marginRight: '1rem', float: 'left' }} />
                            <StepLabel step="Step 1/2" />
                            We will need to change the square's color (currently yellow). You will need to use two <b>set [color] effect</b> blocks (<img src={setColorEffect} style={{ width: '9rem', verticalAlign: 'middle', margin: '0.2rem' }} />)
                            Put one inside "if (touching blue) " and the other inside "if (touching orange) ".
                        </p>
                        <p style={{ display: 'block' }}>
                            <StepLabel step="Step 2/2" />
                            You will need to figure out the value to use for the color effect value <span style={{ fontSize: '1rem', color: 'blue' }}><b>?</b></span> for each of <img className={styles.imgInline} src={orangeBlueHint} style={{ width: '9rem', verticalAlign: 'middle', margin: '0.2rem' }} /> block so that it turns the square to orange and blue. The color effect value should be between 1 to 200.
                        </p>
                        <p>
                            Click <CheckButtonImg /> when you are done to check your work.
                        </p>
                        {/* 192 for blue and 89 for orange */}
                    </div>
                ),
                expected: [[//140
                    "event_whenflagclicked", "looks_seteffectto", "control_wait", "looks_cleargraphiceffects"]],
                customCheck: "workspace.getAllBlocks().filter(b=>b.type==='looks_seteffectto').filter(b=>b.getChildren()[0].getFieldValue('NUM')==='140').length === 1",
                projectId: 339759428
            },
            // {
            //     id: 'walking-anim',
            //     title: (<p className={styles.contentTitle}><PracticeLabel />A Forever Walking Cat</p>),
            //     content: (
            //         <div className={styles.contentContainer}>
            //             <p>
            //                 <img src={foreverWalking} style={{ width: '200px', marginRight: '1rem', float: 'left' }} />
            //                 Put together blocks to create a basic walking animation program shown on the left. You will learn about a character's costumes and how to repeat actions.
            //                                 Once you are done, click <CheckButtonImg /> to check your work.
            //                             </p>
            //             <p>Below we provide you with useful information on how Scratch allows us to control the character's appearance and its actions.</p>
            //             <p>
            //                 <b>A character and its costumes:</b><br />
            //                 The Cat is a character object also known as a "sprite".
            //                 A Scratch program can contain many sprites.
            //                                 You can see the available costumes by clicking the Costumes tab. <img src={scratchTabs} className={styles.imgInline} style={{ width: '150px' }} /> You can change a character sprite's <em>costume</em> by using <img src={switchCostumeBlock} className={styles.imgInline} style={{ width: '140px' }} />.
            //                             </p>
            //             <p>
            //                 <b>Repeating actions:</b><br />
            //                 You can make your program repeat a sequence of actions a given number of times with
            //                                 <img src={repeatBlock} className={styles.imgInline} style={{ width: '100px' }} /> and the
            //                                 <b>"forever"</b> block <img src={foreverBlock} className={styles.imgInline} style={{ width: '100px' }} /> can be used to repeat the sequence of blocks inside it forever unless you stop the program by clicking <StopButton />
            //             </p>
            //         </div>
            //     ),
            //     expected: [
            //         ["event_whenflagclicked", "control_forever", "looks_switchcostumeto", "control_wait", "looks_switchcostumeto", "control_wait"]
            //     ],
            //     shouldCleanup: true
            // },

            {
                id: 'mysterious-squares',
                title: (<p className={styles.contentTitle}>...the mysterious squares</p>),
                content: (
                    <div className={styles.contentContainer}>
                        <p>
                            The animation on the right will help you understand <b>cloning</b>, an advanced concept in Scratch.
                            Cloning is used to create multiple copies of a character object (e.g., the square) and can be used to create a powerful visual output.
                        </p>
                        <p>
                            Watch the animation and try to understand what part of the code correspond to the animation you see when you click <GreenFlagButton />.
                        </p>
                        <p>
                            We don't expect you to master this concept in this short amount of time, but we hope you will develop a conceptual understanding of how it works to help you complete the remaining of the programming tasks.
                        </p>
                    </div>
                ),
                projectId: 339738293
            },
            // {
            //     id: 'exercise-cloning',
            //     title: (
            //         <div className={styles.contentContainer}>
            //             <p className={styles.contentTitle}><PracticeLabel />The Copycats</p>
            //             <ScrollableContainer height='300px'>
            //                 <img src={catCloning} className={styles.contentImage} style={{ width: '250px' }} />
            //                 <p>You will get to learn about cloning that are used to create multiple copies of a sprite. Cloning is an advanced concept and can be used to create a powerful visual output. We don't expect you to master it in this short amount of time, but we hope you will develop a conceptual understanding of how it works.
            //                 </p>
            //                 <p>
            //                     <StepLabel step="Step 0/2" /> Click <GreenFlagButton /> button to see a simple clone demo (already created for you). The program starts with <img src={gfClickedBlock} className={styles.imgInline} style={{ width: '6rem', verticalAlign: 'middle' }} />. Here is how this program works: it hides the Cat sprite and creates 5 copies of itself (invisible cat clones) using <img src={createCloneBlock} className={styles.imgInline} style={{ width: '9rem', verticalAlign: 'middle' }} />.
            //                     When each clone is created, each will start performing actions as specified after <img src={whenIStartAsCloneBlock} className={styles.imgInline} style={{ width: '7rem', verticalAlign: 'middle' }} />.
            //             Currently, each clone shows itself (becomes visible), goes to a random position, and says "Hello!"
            //             The next two steps guide you to modify this program so the output looks like the picture above.
            //                     <span className={styles.yellowMark}>You should only modify the program part that starts with <img src={whenIStartAsCloneBlock} className={styles.imgInline} style={{ width: '7rem', verticalAlign: 'middle' }} />
            //                     </span>
            //                 </p>
            //                 <p>
            //                     <StepLabel step="Step 1/2" />
            //                     Modify the program so each cat clone instead of saying "Hello!", <span className={styles.highlightText}>says a random number picked from the range 1 to 10</span>. Use <img src={pickRandomNum} style={{ width: '9rem', verticalAlign: 'middle', margin: '0.2rem' }} />

            //                     In case you aren't aware of this: some block can be used as an input to another block if it's compatible with each other (e.g., <img src={blockAsInput} style={{ width: '6rem', verticalAlign: 'middle', margin: '0.1rem' }} /> will make the cat say "3").
            //                 </p>
            //                 <p>
            //                     <StepLabel step="Step 2/2" />
            //                     Each clone should also change its color randomly.
            //                     Put <img src={setColorEffect} style={{ width: '9rem', verticalAlign: 'middle', margin: '0.2rem' }} /> next to "say" block. Set the color effect value to <span className={styles.highlightText}> a random value picked from the range 1 to 200.</span>
            //                 </p>
            //             </ScrollableContainer>
            //         </div>
            //     ),
            //     setupCode: "<xml xmlns='http://www.w3.org/1999/xhtml'><block type='event_whenflagclicked' id='Ed+KUz?n--I~Td}6xi2I' x='99' y='-250'><next><block type='looks_hide' id='{8jqxUwd*%?pt6oC2Wq!'><next><block type='control_repeat' id='gIU9=Mv12Wh@~awauzub'><value name='TIMES'><shadow type='math_whole_number' id='lkypM}p}o-Lz/pqMeSzw'><field name='NUM'>5</field></shadow></value><statement name='SUBSTACK'><block type='control_create_clone_of' id='`^yOe_.aB{y|A}Fej8QL'><value name='CLONE_OPTION'><shadow type='control_create_clone_of_menu' id='[[8S}#7`aMP[IN#;{e|,'><field name='CLONE_OPTION'>_myself_</field></shadow></value></block></statement></block></next></block></next></block><block type='control_start_as_clone' id='enXotOX{(Gyls@7Yb=JV' x='99' y='56'><next><block type='looks_show' id='X%,+1;_b#2bd.4g,l^mt'><next><block type='motion_goto' id='%c3q3613gGFNkD$D66(o'><value name='TO'><shadow type='motion_goto_menu' id='_pdjAzCJtp4#Vdz0bm#0'><field name='TO'>_random_</field></shadow></value><next><block type='looks_say' id='s7owYH^c0?k{~10Y^p7q'><value name='MESSAGE'><shadow type='text' id='KN(cq~:7%TBk|8jdsEX-'><field name='TEXT'>Hello!</field></shadow></value></block></next></block></next></block></next></block></xml>",
            //     shouldCleanup: true,
            //     expected: [
            //         ["event_whenflagclicked", "looks_hide", "control_repeat", "control_create_clone_of"],
            //         ["control_start_as_clone", "looks_show", "motion_goto", "looks_say", "looks_seteffectto", "operator_random", "operator_random"]
            //     ]
            // },
            {
                id: 'copy-completion-code',
                title: (
                    <div className={styles.contentContainer}>
                        <p className={styles.contentTitle}>Congratulations! You complete Part 1.</p>
                        <p style={{ fontSize: '1.1rem', margin: '1rem' }}>Please copy and paste the completion code below to the main survey.</p>
                    </div>
                ),
                content: (
                    <div></div>
                ),
                shouldCleanup: true,
                completionCode: 'scratch101',
                recordCompletion: true
            }
        ],
        urlId: 'getStarted'
    },

    'color-shade-generator': {
        steps: [
            {
                id: 'intro',
                title: (
                    <div className={styles.contentContainer}>
                        <p className={styles.contentTitle}>Part 2: Let's Remix and Learn from Your Peers</p>
                        <ScrollableContainer height='300px'>
                            <img src={originalVsGoal} className={styles.contentImage} style={{ width: '400px' }} />
                            <p>
                                A novice Scratch programmer created and shared this project, "Shapes and Shades" that generates a row of green squares with decreasingly lighter shades (left side).
                                Click <GreenFlagButton /> to see it in action.
                            </p>
                            <p className={styles.yellowMark}>
                                We will modify this project to make it look like the right side of the picture above
                                (adding blue-shaded row of triangles and make both rows span the width of the stage)
                                Modifying and extending someone else's project is called <b>"remixing"</b>.
                            It's a fun and engaging way to learn programming.
                            </p>
                            <p>
                                The last card will provide you with the completion code to copy and paste into the main survey page.
                            </p>
                        </ScrollableContainer>
                    </div>
                )
            },
            {
                id: 'copy-paste',
                title: (
                    <div className={styles.contentContainer}>
                        <p className={styles.contentTitle}><PracticeLabel /> Adding a Row of Blue-Shaded Triangles</p>
                        <ScrollableContainer height='300px'>
                            <p>
                                <img src={copyPasteOnly} className={styles.contentImage} style={{ width: '220px', float: 'left' }} />
                                Let's add a triangle row by reusing the program part that generates a square row and modify it to produce a row of blue-shaded triangles.
                                First, <span className={styles.highlightText}>duplicate the part that starts with
                                "clear graphic effects" block</span> and connect the replicated part to the end of the sequence.
                            </p>
                            <p>
                                <img src={expectedMods} className={styles.contentImage} style={{ width: '200px', float: 'left' }} />
                                <span className={styles.yellowMark}>Then modify it to look like the picture of on the left (the modified locations are highlighted in red <b>duplicated part</b>).
                                The specific detail of the changes are:
                                </span><br />
                                1) switch the costume to "triangle"<br />
                                2) position it below the square row by setting y:60 for the "go to x: y:" block<br />
                                3) set the color effect to 85 for blue.<br />
                                Click <GreenFlagButton /> often as you make changes to see if you are on the right track!
                            </p>
                        </ScrollableContainer>
                    </div>
                ),
                expected: [
                    ["event_whenflagclicked", "looks_hide", "looks_cleargraphiceffects", "looks_switchcostumeto", "motion_gotoxy", "looks_seteffectto", "control_repeat", "looks_cleargraphiceffects", "looks_switchcostumeto", "motion_gotoxy", "looks_seteffectto", "control_repeat", "motion_changexby", "looks_changeeffectby", "control_create_clone_of", "motion_changexby", "looks_changeeffectby", "control_create_clone_of"],
                    ["control_start_as_clone", "looks_show", "control_wait", "control_delete_this_clone"]
                ]
            },
            {
                id: 'modification-1',
                title: (
                    <div className={styles.contentContainer}>
                        <p className={styles.contentTitle}><PracticeLabel />Generate More Shaded Shapes</p>
                        <ScrollableContainer height='300px'>
                            <img src={modifyRepeat} className={styles.contentImage} style={{ width: '200px' }} />
                            <p>Both rows are a bit short.
                        Let's make the rows longer by <span className={styles.highlightText}> increase the repetitions of the repeat blocks from
                        5 to 9</span>
                                to create more shaded shape clones. <span className={styles.highlightText}>Make sure to change the values in both repeat blocks!</span>
                                Click <GreenFlagButton /> as you make changes to see if you are on the right track!
                        <span className={styles.yellowMark}> You will find that the rows do not seem to get longer as we expected even if we create more clones!? Actually the rows get longer but we just don't see them as their high brightness values
                        make them appear to be white and blend with the white background. We will fix that next!</span>
                            </p>
                        </ScrollableContainer>
                    </div>
                ),
                setupCode: "<xml xmlns='http://www.w3.org/1999/xhtml'><variables><variable type='' id='`jEk@4|i[#Fk?(8x)AV.-my variable' islocal='false' iscloud='false'>my variable</variable></variables><block type='event_whenflagclicked' id='GoTQ97j2EJXhLs!EDUM}' x='32' y='-545'><next><block type='looks_hide' id='_#~+WH0Un%_=d?xxXopA'><next><block type='looks_cleargraphiceffects' id='LXwA[VJyg1rza;F$R`$/'><next><block type='looks_switchcostumeto' id='=3U}RCYakN,it35w{%ce'><value name='COSTUME'><shadow type='looks_costume' id='IZWl+mz$@osw+u(dcTBA'><field name='COSTUME'>square</field></shadow></value><next><block type='motion_gotoxy' id='|1yB]x7`h.hi6QtA1FW?'><value name='X'><shadow type='math_number' id='/,IQ4-6EqF?BXg!=pSl/'><field name='NUM'>-215</field></shadow></value><value name='Y'><shadow type='math_number' id='cm8^@f`tEiO54d[5fzM`'><field name='NUM'>120</field></shadow></value><next><block type='looks_seteffectto' id='rP0yU%a`)#0-H_[ydMCX'><field name='EFFECT'>COLOR</field><value name='VALUE'><shadow type='math_number' id='w-mhN?[/n9RlZP-|()dh'><field name='NUM'>35</field></shadow></value><next><block type='control_repeat' id='(4O$sHR,g!3GAhtHeAO;'><value name='TIMES'><shadow type='math_whole_number' id='a.k}V-k@e,Ya:*/t9i8('><field name='NUM'>5</field></shadow></value><statement name='SUBSTACK'><block type='motion_changexby' id='#av-crB}[j4|eb9{hTl-'><value name='DX'><shadow type='math_number' id='*x2[m~lSgg~k{f?eC.*F'><field name='NUM'>20</field></shadow></value><next><block type='looks_changeeffectby' id='cNEh@0/x)pxw{i=4.;8d'><field name='EFFECT'>BRIGHTNESS</field><value name='CHANGE'><shadow type='math_number' id='?tfo-)YIU*7yDMZL0ri0'><field name='NUM'>15</field></shadow></value><next><block type='control_create_clone_of' id='n(9_@Y^%f3q8uzw^qFg~'><value name='CLONE_OPTION'><shadow type='control_create_clone_of_menu' id='f2XAnacOoA#hc(fIQ@3,'><field name='CLONE_OPTION'>_myself_</field></shadow></value></block></next></block></next></block></statement><next><block type='looks_cleargraphiceffects' id='?[G@7Sn]Qd#I;t4h5]%I'><next><block type='looks_switchcostumeto' id='%:CkQ!*!dt+~%GV5n)SY'><value name='COSTUME'><shadow type='looks_costume' id='1oqdHx7l+O))k?b+wN1c'><field name='COSTUME'>triangle</field></shadow></value><next><block type='motion_gotoxy' id='l5C!#{^d}M_Wp9gxhdqg'><value name='X'><shadow type='math_number' id='M{bhnKt4{f8ac8s(T+H~'><field name='NUM'>-215</field></shadow></value><value name='Y'><shadow type='math_number' id='wcV7iHY:DAN=+.)r`h/V'><field name='NUM'>60</field></shadow></value><next><block type='looks_seteffectto' id='Yyx/evN3MqD;IIiqhT/M'><field name='EFFECT'>COLOR</field><value name='VALUE'><shadow type='math_number' id='YBCQ~%g0q.XjpBcXHN#q'><field name='NUM'>85</field></shadow></value><next><block type='control_repeat' id='jx3$oX^-#%bPc3xp}qT('><value name='TIMES'><shadow type='math_whole_number' id='$t?$CQQnw=~X%;ap-PHP'><field name='NUM'>5</field></shadow></value><statement name='SUBSTACK'><block type='motion_changexby' id='Q*z#)`XC~SFNwlkHH?Fc'><value name='DX'><shadow type='math_number' id=']T9vkTSqymXL+Q+jOMrj'><field name='NUM'>20</field></shadow></value><next><block type='looks_changeeffectby' id='h)K=5tTab~sG!F_bxIIs'><field name='EFFECT'>BRIGHTNESS</field><value name='CHANGE'><shadow type='math_number' id='-jXI[3aGK+t0i@tr:G(c'><field name='NUM'>15</field></shadow></value><next><block type='control_create_clone_of' id=':5SGONYRC3vET]fHmoD2'><value name='CLONE_OPTION'><shadow type='control_create_clone_of_menu' id='AqriWy)JvM8%Yc01~aUv'><field name='CLONE_OPTION'>_myself_</field></shadow></value></block></next></block></next></block></statement></block></next></block></next></block></next></block></next></block></next></block></next></block></next></block></next></block></next></block></next></block></next></block><block type='control_start_as_clone' id=';^A_yDtWBl=[e9X?h3-v' x='355' y='-504'><next><block type='looks_show' id='34#G|!#qC+u?0RL5_l-z'><next><block type='control_wait' id='h#Dx+p/mZjf;4Vy.PttQ'><value name='DURATION'><shadow type='math_positive_number' id=':gT2k-pq|VV|t)s5TxER'><field name='NUM'>1</field></shadow></value><next><block type='control_delete_this_clone' id='pS5+F}nygYS+*|oV@,$3'></block></next></block></next></block></next></block></xml>",
                shouldCleanup: true,
                customCheck: "workspace.getAllBlocks().filter(b=>b.type==='control_repeat').filter(b=>b.getChildren()[0].getFieldValue('NUM')==='9').length === 2"
            },
            {
                id: 'modification-2',
                title: (
                    <div className={styles.contentContainer}>
                        <ScrollableContainer height='300px'>
                            <p className={styles.contentTitle}><PracticeLabel />Increase the Brightness More Slowly</p>
                            <img src={modifyBrightness} className={styles.contentImage} style={{ width: '250px' }} />
                            <p>Each subsequent shape clone becomes too bright too quickly.
                            Let's <span className={styles.highlightText}>reduce the brightness values of the "change brightness effect by" block from 15 to 9.
                            Make sure to change the value in both places!</span>
                                Click <GreenFlagButton /> as you make changes to see if you are on the right track!
                            <span className={styles.yellowMark}>Now you should see the rows get longer!</span>
                            </p>
                        </ScrollableContainer>
                    </div>
                ),
                setupCode: "<xml xmlns='http://www.w3.org/1999/xhtml'><variables><variable type='' id='`jEk@4|i[#Fk?(8x)AV.-my variable' islocal='false' iscloud='false'>my variable</variable></variables><block type='event_whenflagclicked' id='GoTQ97j2EJXhLs!EDUM}' x='0' y='0'><next><block type='looks_hide' id='_#~+WH0Un%_=d?xxXopA'><next><block type='looks_cleargraphiceffects' id='LXwA[VJyg1rza;F$R`$/'><next><block type='looks_switchcostumeto' id='=3U}RCYakN,it35w{%ce'><value name='COSTUME'><shadow type='looks_costume' id='IZWl+mz$@osw+u(dcTBA'><field name='COSTUME'>square</field></shadow></value><next><block type='motion_gotoxy' id='|1yB]x7`h.hi6QtA1FW?'><value name='X'><shadow type='math_number' id='/,IQ4-6EqF?BXg!=pSl/'><field name='NUM'>-215</field></shadow></value><value name='Y'><shadow type='math_number' id='cm8^@f`tEiO54d[5fzM`'><field name='NUM'>120</field></shadow></value><next><block type='looks_seteffectto' id='rP0yU%a`)#0-H_[ydMCX'><field name='EFFECT'>COLOR</field><value name='VALUE'><shadow type='math_number' id='w-mhN?[/n9RlZP-|()dh'><field name='NUM'>35</field></shadow></value><next><block type='control_repeat' id='(4O$sHR,g!3GAhtHeAO;'><value name='TIMES'><shadow type='math_whole_number' id='a.k}V-k@e,Ya:*/t9i8('><field name='NUM'>9</field></shadow></value><statement name='SUBSTACK'><block type='motion_changexby' id='#av-crB}[j4|eb9{hTl-'><value name='DX'><shadow type='math_number' id='*x2[m~lSgg~k{f?eC.*F'><field name='NUM'>20</field></shadow></value><next><block type='looks_changeeffectby' id='cNEh@0/x)pxw{i=4.;8d'><field name='EFFECT'>BRIGHTNESS</field><value name='CHANGE'><shadow type='math_number' id='?tfo-)YIU*7yDMZL0ri0'><field name='NUM'>15</field></shadow></value><next><block type='control_create_clone_of' id='n(9_@Y^%f3q8uzw^qFg~'><value name='CLONE_OPTION'><shadow type='control_create_clone_of_menu' id='f2XAnacOoA#hc(fIQ@3,'><field name='CLONE_OPTION'>_myself_</field></shadow></value></block></next></block></next></block></statement><next><block type='looks_cleargraphiceffects' id='?[G@7Sn]Qd#I;t4h5]%I'><next><block type='looks_switchcostumeto' id='%:CkQ!*!dt+~%GV5n)SY'><value name='COSTUME'><shadow type='looks_costume' id='1oqdHx7l+O))k?b+wN1c'><field name='COSTUME'>triangle</field></shadow></value><next><block type='motion_gotoxy' id='l5C!#{^d}M_Wp9gxhdqg'><value name='X'><shadow type='math_number' id='M{bhnKt4{f8ac8s(T+H~'><field name='NUM'>-215</field></shadow></value><value name='Y'><shadow type='math_number' id='wcV7iHY:DAN=+.)r`h/V'><field name='NUM'>60</field></shadow></value><next><block type='looks_seteffectto' id='Yyx/evN3MqD;IIiqhT/M'><field name='EFFECT'>COLOR</field><value name='VALUE'><shadow type='math_number' id='YBCQ~%g0q.XjpBcXHN#q'><field name='NUM'>85</field></shadow></value><next><block type='control_repeat' id='jx3$oX^-#%bPc3xp}qT('><value name='TIMES'><shadow type='math_whole_number' id='$t?$CQQnw=~X%;ap-PHP'><field name='NUM'>9</field></shadow></value><statement name='SUBSTACK'><block type='motion_changexby' id='Q*z#)`XC~SFNwlkHH?Fc'><value name='DX'><shadow type='math_number' id=']T9vkTSqymXL+Q+jOMrj'><field name='NUM'>20</field></shadow></value><next><block type='looks_changeeffectby' id='h)K=5tTab~sG!F_bxIIs'><field name='EFFECT'>BRIGHTNESS</field><value name='CHANGE'><shadow type='math_number' id='-jXI[3aGK+t0i@tr:G(c'><field name='NUM'>15</field></shadow></value><next><block type='control_create_clone_of' id=':5SGONYRC3vET]fHmoD2'><value name='CLONE_OPTION'><shadow type='control_create_clone_of_menu' id='AqriWy)JvM8%Yc01~aUv'><field name='CLONE_OPTION'>_myself_</field></shadow></value></block></next></block></next></block></statement></block></next></block></next></block></next></block></next></block></next></block></next></block></next></block></next></block></next></block></next></block></next></block><block type='control_start_as_clone' id=';^A_yDtWBl=[e9X?h3-v' x='0' y='984'><next><block type='looks_show' id='34#G|!#qC+u?0RL5_l-z'><next><block type='control_wait' id='h#Dx+p/mZjf;4Vy.PttQ'><value name='DURATION'><shadow type='math_positive_number' id=':gT2k-pq|VV|t)s5TxER'><field name='NUM'>1</field></shadow></value><next><block type='control_delete_this_clone' id='pS5+F}nygYS+*|oV@,$3'></block></next></block></next></block></next></block></xml>",
                shouldCleanup: true,
                customCheck: "workspace.getAllBlocks().filter(b=>b.type==='looks_changeeffectby').filter(b=>b.getChildren()[0].getFieldValue('NUM')==='9').length === 2"
            },
            {
                id: 'which-part',
                title: (
                    <div className={styles.contentContainer}>
                        <p className={styles.contentTitle}>Your Code Can Be Improved!</p>
                        <ScrollableContainer height='300px'>
                            <p>
                                <img src={highlightedPart} style={{ width: '190px', float: 'left' }} />
                                Your current program should have these same highlighted parts as appeared on the left. These parts
                                generate green and blue rows of shaded color shapes respectively.
                                We modify these program parts quite often to make the same changes.
                                These parts are <b>almost the same except for the color effect value of the <em>set color effect</em> block</b>:
                            the one in the top part has 35 for the green effect value and the one in the bottom part has 85 for blue.
                            This code duplication can make modifying code difficult.
                            </p>
                            <p>
                                To make our code <b>easy to understand and modify</b>, we can make use of <b>custom block</b> that you learned previously. The next few cards will guide you to do that.
                                {/* from these parts and call it <b>"generateShades"</b> block with a <b>"color"</b> parameter. The next few cards will guide you to do that. */}
                                {/* <img src={generateShades} className={styles.imgInline} style={{width:'170px', marginLeft:'0.5rem',marginRight:'0.5rem'}}/> */}
                            </p>
                        </ScrollableContainer>
                    </div>
                ),
                setupCode: "<xml xmlns='http://www.w3.org/1999/xhtml'><variables><variable type='' id='`jEk@4|i[#Fk?(8x)AV.-my variable' islocal='false' iscloud='false'>my variable</variable></variables><block type='event_whenflagclicked' id='GoTQ97j2EJXhLs!EDUM}' x='0' y='0'><next><block type='looks_hide' id='_#~+WH0Un%_=d?xxXopA'><next><block type='looks_cleargraphiceffects' id='LXwA[VJyg1rza;F$R`$/'><next><block type='looks_switchcostumeto' id='=3U}RCYakN,it35w{%ce'><value name='COSTUME'><shadow type='looks_costume' id='IZWl+mz$@osw+u(dcTBA'><field name='COSTUME'>square</field></shadow></value><next><block type='motion_gotoxy' id='|1yB]x7`h.hi6QtA1FW?'><value name='X'><shadow type='math_number' id='/,IQ4-6EqF?BXg!=pSl/'><field name='NUM'>-215</field></shadow></value><value name='Y'><shadow type='math_number' id='cm8^@f`tEiO54d[5fzM`'><field name='NUM'>120</field></shadow></value><next><block type='looks_seteffectto' id='rP0yU%a`)#0-H_[ydMCX'><field name='EFFECT'>COLOR</field><value name='VALUE'><shadow type='math_number' id='w-mhN?[/n9RlZP-|()dh'><field name='NUM'>35</field></shadow></value><next><block type='control_repeat' id='(4O$sHR,g!3GAhtHeAO;'><value name='TIMES'><shadow type='math_whole_number' id='a.k}V-k@e,Ya:*/t9i8('><field name='NUM'>9</field></shadow></value><statement name='SUBSTACK'><block type='motion_changexby' id='#av-crB}[j4|eb9{hTl-'><value name='DX'><shadow type='math_number' id='*x2[m~lSgg~k{f?eC.*F'><field name='NUM'>20</field></shadow></value><next><block type='looks_changeeffectby' id='cNEh@0/x)pxw{i=4.;8d'><field name='EFFECT'>BRIGHTNESS</field><value name='CHANGE'><shadow type='math_number' id='?tfo-)YIU*7yDMZL0ri0'><field name='NUM'>9</field></shadow></value><next><block type='control_create_clone_of' id='n(9_@Y^%f3q8uzw^qFg~'><value name='CLONE_OPTION'><shadow type='control_create_clone_of_menu' id='f2XAnacOoA#hc(fIQ@3,'><field name='CLONE_OPTION'>_myself_</field></shadow></value></block></next></block></next></block></statement><next><block type='looks_cleargraphiceffects' id='?[G@7Sn]Qd#I;t4h5]%I'><next><block type='looks_switchcostumeto' id='%:CkQ!*!dt+~%GV5n)SY'><value name='COSTUME'><shadow type='looks_costume' id='1oqdHx7l+O))k?b+wN1c'><field name='COSTUME'>triangle</field></shadow></value><next><block type='motion_gotoxy' id='l5C!#{^d}M_Wp9gxhdqg'><value name='X'><shadow type='math_number' id='M{bhnKt4{f8ac8s(T+H~'><field name='NUM'>-215</field></shadow></value><value name='Y'><shadow type='math_number' id='wcV7iHY:DAN=+.)r`h/V'><field name='NUM'>60</field></shadow></value><next><block type='looks_seteffectto' id='Yyx/evN3MqD;IIiqhT/M'><field name='EFFECT'>COLOR</field><value name='VALUE'><shadow type='math_number' id='YBCQ~%g0q.XjpBcXHN#q'><field name='NUM'>85</field></shadow></value><next><block type='control_repeat' id='jx3$oX^-#%bPc3xp}qT('><value name='TIMES'><shadow type='math_whole_number' id='$t?$CQQnw=~X%;ap-PHP'><field name='NUM'>9</field></shadow></value><statement name='SUBSTACK'><block type='motion_changexby' id='Q*z#)`XC~SFNwlkHH?Fc'><value name='DX'><shadow type='math_number' id=']T9vkTSqymXL+Q+jOMrj'><field name='NUM'>20</field></shadow></value><next><block type='looks_changeeffectby' id='h)K=5tTab~sG!F_bxIIs'><field name='EFFECT'>BRIGHTNESS</field><value name='CHANGE'><shadow type='math_number' id='-jXI[3aGK+t0i@tr:G(c'><field name='NUM'>9</field></shadow></value><next><block type='control_create_clone_of' id=':5SGONYRC3vET]fHmoD2'><value name='CLONE_OPTION'><shadow type='control_create_clone_of_menu' id='AqriWy)JvM8%Yc01~aUv'><field name='CLONE_OPTION'>_myself_</field></shadow></value></block></next></block></next></block></statement></block></next></block></next></block></next></block></next></block></next></block></next></block></next></block></next></block></next></block></next></block></next></block><block type='control_start_as_clone' id=';^A_yDtWBl=[e9X?h3-v' x='0' y='984'><next><block type='looks_show' id='34#G|!#qC+u?0RL5_l-z'><next><block type='control_wait' id='h#Dx+p/mZjf;4Vy.PttQ'><value name='DURATION'><shadow type='math_positive_number' id=':gT2k-pq|VV|t)s5TxER'><field name='NUM'>1</field></shadow></value><next><block type='control_delete_this_clone' id='pS5+F}nygYS+*|oV@,$3'></block></next></block></next></block></next></block></xml>",
                shouldCleanup: true
            },
            {
                id: 'extract-cb-intro',
                title: (
                    <div className={styles.contentContainer}>
                        <p className={styles.contentTitle}>Extract Custom Block</p>
                        <p>
                            <img src={abstractExtractCustomBlock} className={styles.contentImage}
                                style={{ width: '250px', float: 'left' }} />
                            You can <b>extract a custom block</b> from <b>common program parts that tend to be modified together</b>.
                        Such common program parts perform a similar action and are often the result of copying and pasting code.
                        </p>
                        <p>
                            After a custom block is extracted, there should not be any changes in what the program does.
                            However, your restructured code should be easier to understand and modify.
                        </p>
                    </div>
                )
            },
            {
                id: 'intro-QIS',
                title: (
                    <div className={styles.contentContainer}>
                        <p className={styles.contentTitle}><PracticeLabel />Getting Help From Code Wizard</p>
                        <ScrollableContainer height='300px'>
                            <p>Toggle <b>Code Wizard</b> <img src={featureTogglingImg} className={styles.imgInline} />
                                to see improvement hints and follow their suggestions.
                                The picture below gives a high-level view of the parts we are improving (left) and its resulting improvement (right). Scroll down to see the enlarged picture of the expected improved code.
                                Click <GreenFlagButton /> to make sure your program still works the same.
                                Click <CheckButtonImg /> when you are done.
                            </p>
                            <b>Before and After:</b>
                            <img src={beforeAfter} className={styles.contentImage} style={{ width: '420px' }} />
                            <b>Expected resulting improvement:</b>
                            <img src={expectedImprovement} className={styles.contentImage} style={{ width: '400px' }} />
                        </ScrollableContainer>
                    </div>
                ),
                onlyVisibleToGroup: 'automated',
                customCheck: "(workspace.getAllBlocks().filter(b=>b.type==='procedures_prototype').length > 0)&&(workspace.getAllBlocks().filter(b=>b.type==='procedures_call').length>=2)"
            },
            {
                id: 'intro-manual',
                title: (<p>Let's create a "generateShape" custom block</p>),
                onlyVisibleToGroup: 'manual',
                video: 'apchqdve3p',
                customCheck: "(workspace.getAllBlocks().filter(b=>b.type==='procedures_prototype').length === 1)&&(workspace.getAllBlocks().filter(b=>b.type==='procedures_call').length===2)"
            },
            {
                id: 'modification-final',
                title: (
                    <div className={styles.contentContainer}>
                        <p className={styles.contentTitle}><PracticeLabel />Modifying Once Within Custom Block's Definition</p>
                        <ScrollableContainer height='300px'>
                            <p>For this last step, we need to increase the distance between each shape clone to make both rows span the width of the stage.
                                <span className={styles.highlightText}>Use the following values: 25,30, 35, 40 and 50.</span> Each time click <CheckButtonImg /> to see if you use the right value!
                            </p>
                            <img src={modifyChangeXBy} className={styles.contentImage} style={{ width: '400px' }} />
                        </ScrollableContainer>
                    </div>),
                setupCode: "<xml xmlns='http://www.w3.org/1999/xhtml'><variables><variable type='' id='`jEk@4|i[#Fk?(8x)AV.-my variable' islocal='false' iscloud='false'>my variable</variable></variables><block type='procedures_definition' id='c3' x='272' y='128'><statement name='custom_block'><shadow type='procedures_prototype' id='YMk3c'><mutation proccode='generateShades %s' argumentids='[&quot;param0_ID&quot;]' argumentnames='[&quot;color&quot;]' argumentdefaults='[&quot;&quot;]' warp='false'></mutation><value name='param0_ID'><shadow type='argument_reporter_string_number' id='sjwDGF'><field name='VALUE'>color</field></shadow></value></shadow></statement><next><block type='looks_seteffectto' id='SO'><field name='EFFECT'>COLOR</field><value name='VALUE'><shadow xmlns='' type='math_number' id='8X'><field name='NUM'>35</field></shadow><block type='argument_reporter_string_number' id='b5'><field name='VALUE'>color</field></block></value><next><block type='control_repeat' id='Sm'><value name='TIMES'><shadow type='math_whole_number' id='s1'><field name='NUM'>9</field></shadow></value><statement name='SUBSTACK'><block type='motion_changexby' id='Pc'><value name='DX'><shadow type='math_number' id='uq'><field name='NUM'>20</field></shadow></value><next><block type='looks_changeeffectby' id='nP'><field name='EFFECT'>BRIGHTNESS</field><value name='CHANGE'><shadow type='math_number' id='i1'><field name='NUM'>9</field></shadow></value><next><block type='control_create_clone_of' id='MU'><value name='CLONE_OPTION'><shadow type='control_create_clone_of_menu' id='63'><field name='CLONE_OPTION'>_myself_</field></shadow></value></block></next></block></next></block></statement></block></next></block></next></block><block type='event_whenflagclicked' id='GoTQ97j2EJXhLs!EDUM}' x='-3' y='213'><next><block type='looks_hide' id='_#~+WH0Un%_=d?xxXopA'><next><block type='looks_cleargraphiceffects' id='LXwA[VJyg1rza;F$R`$/'><next><block type='looks_switchcostumeto' id='=3U}RCYakN,it35w{%ce'><value name='COSTUME'><shadow type='looks_costume' id='IZWl+mz$@osw+u(dcTBA'><field name='COSTUME'>square</field></shadow></value><next><block type='motion_gotoxy' id='|1yB]x7`h.hi6QtA1FW?'><value name='X'><shadow type='math_number' id='/,IQ4-6EqF?BXg!=pSl/'><field name='NUM'>-215</field></shadow></value><value name='Y'><shadow type='math_number' id='cm8^@f`tEiO54d[5fzM`'><field name='NUM'>120</field></shadow></value><next><block type='procedures_call' id='DoSomething12%s_Call1'><mutation proccode='generateShades %s' argumentids='[&quot;param0_ID&quot;]' warp='false'></mutation><value name='param0_ID'><shadow type='text' id='DoSomething12%s_Call1_param_0'><field name='TEXT'>35</field></shadow></value><next><block type='looks_cleargraphiceffects' id='?[G@7Sn]Qd#I;t4h5]%I'><next><block type='looks_switchcostumeto' id='%:CkQ!*!dt+~%GV5n)SY'><value name='COSTUME'><shadow type='looks_costume' id='1oqdHx7l+O))k?b+wN1c'><field name='COSTUME'>triangle</field></shadow></value><next><block type='motion_gotoxy' id='l5C!#{^d}M_Wp9gxhdqg'><value name='X'><shadow type='math_number' id='M{bhnKt4{f8ac8s(T+H~'><field name='NUM'>-215</field></shadow></value><value name='Y'><shadow type='math_number' id='wcV7iHY:DAN=+.)r`h/V'><field name='NUM'>60</field></shadow></value><next><block type='procedures_call' id='DoSomething12%s_Call2'><mutation proccode='generateShades %s' argumentids='[&quot;param0_ID&quot;]' warp='false'></mutation><value name='param0_ID'><shadow type='text' id='DoSomething12%s_Call2_param_0'><field name='TEXT'>85</field></shadow></value></block></next></block></next></block></next></block></next></block></next></block></next></block></next></block></next></block></next></block><block type='control_start_as_clone' id=';^A_yDtWBl=[e9X?h3-v' x='288' y='597'><next><block type='looks_show' id='34#G|!#qC+u?0RL5_l-z'><next><block type='control_wait' id='h#Dx+p/mZjf;4Vy.PttQ'><value name='DURATION'><shadow type='math_positive_number' id=':gT2k-pq|VV|t)s5TxER'><field name='NUM'>1</field></shadow></value><next><block type='control_delete_this_clone' id='pS5+F}nygYS+*|oV@,$3'></block></next></block></next></block></next></block></xml>",
                shouldCleanup: true,
                customCheck: "workspace.getAllBlocks().filter(b=>b.type==='motion_changexby').filter(b=>b.getChildren()[0].getFieldValue('NUM')==='40').length === 1"
            },
            {
                id: 'takeaway',
                title: (
                    <div className={styles.contentContainer}>
                        <div style={{ display: 'flex', flexDirection: 'row' }}>
                            <div style={{ display: 'flex', alignItems: 'center' }}>
                                <img src={tipsIcon} style={{ maxWidth: '100%', marginRight: '1rem', }} /></div>
                            <div style={{ display: 'flex' }}>
                                <p style={{ fontSize: '1.25rem' }}>
                                    <b>Custom blocks</b> make code easy to understand and modify. Can you imaging how difficult it would be to modify this program if we had 3 more rows of shaded shapes?
                                </p>
                            </div>
                        </div>
                    </div>
                )
            },
            {
                id: 'copy-completion-code',
                title: (
                    <div><p style={{ fontSize: '1.25rem', margin: '1rem' }}>Please copy and paste the completion code below to the main survey.</p></div>
                ),
                completionCode: 'abstraction',
                recordCompletion: true
            }
        ]
    },
    'particle-radiator': {
        steps: [
            {
                id: 'study-task-intro',
                title: (
                    <div className={styles.contentContainer}>
                        <p className={styles.contentTitle}>Part 3: A Collaborative Compuational Art Project</p>
                        <ScrollableContainer height='300px'>
                            <p>
                                You will contribute to a collaborative effort in making a compational art project. The participants in the first user study did an exceptional job at getting the project set up. The animation had been improved by the participants in the second user study (left animation shown below). Click <GreenFlagButton /> to see it in action.
                                In this part, you will continue this collaborative effort, building on what others have done so far, focusing on improving the look and feel of particle animation. The final look and feel should look like the one on the right. <span className={styles.yellowMark}> While you work, please consider improving code to make it easy for participants in the future user study to understand and modify your code.</span>
                            </p>
                            <BeforeAfter before={threeParticleBefore} after={threeParticleAfter2} />
                            <p>
                                The last card will provide you with the completion code for you to copy and paste into the main survey page.
                            </p>
                        </ScrollableContainer>
                    </div>
                )
            },
            {
                title:
                    (
                        <div className={styles.contentContainer}>
                            <p className={styles.contentTitle}>How Does This Program Work?</p>
                            <ScrollableContainer height='300px'>
                                <img src={programExplained3Particles} style={{ width: '200px', float: 'right' }} />
                                <p>
                                    The two program parts in the workspace that look like
                                    the picture on the right are responsible for continuously radiating 30 particle clones.
                                    Each set of 10 particle clones generated is specified to be red, blue and green.
                                    These clones will later be set to the specified color and be animated by the program part
                                    that starts with <img src={whenIStartAsCloneBlock} className={styles.imgInline} style={{ width: '6rem' }} /> block.
                                </p>
                            </ScrollableContainer>
                        </div>
                    ),
                id: 'preview-clone-attribute-setting'
            },
            {
                title: (

                    <div className={styles.contentContainer}>
                        <p className={styles.contentTitle}>What Parts Of The Program Are We Modifying?</p>
                        <ScrollableContainer height='300px'>
                            <p>
                                <img src={modificationTarget} style={{ width: '180px', float: 'left', marginRight: '0.4rem' }} />
                                To be aesthetically pleasing, the animations of the red, blue and green particles have to behave similarly to each other.
                                So we will only modify the code within the highlighted parts shown on the left.
                            </p>
                            <p>
                                <b>Just to give you a heads up, you will make numerous changes to improve the look and feel of the particle animation.</b>
                            </p>
                            <p ><span className={styles.yellowMark}>It might be a good idea to extract a custom block from any common parts to make your code easy to understand and modify, though this additional step is not required.
                            </span></p>
                        </ScrollableContainer>
                    </div>
                ),
                id: 'modification-target'
            },
            {
                onlyVisibleToGroup: 'automated',
                id: 'qis-on-options',
                featurePrompt: true
            },
            {
                title: (
                    <div>
                        <p>
                            <TipsLabel /> To complete the remaining of this programming task, you might find a <em>reference</em> guide  helpful.
                            You can always switch between the <em>Instruction</em> and <em>Reference</em> tab.
                        </p>
                        <img src={referenceGuide} className={styles.imgInline} />
                    </div>
                ),
                onlyVisibleToGroup: 'manual',
                id: 'reference-guid-tips'
            },
            {
                id: 'modify-repeat',
                title: (
                    <div className={styles.contentContainer}>
                        <p className={styles.contentTitle}><PracticeLabel />Make Particles Move Farther</p>
                        <ScrollableContainer height='300px'>
                            <p>
                                <img src={changeRepeatInputHint} className={styles.imgFloat} />
                                Modify the part that animates the particle clones so that they cover the entire available area.
                                <span className={styles.highlightText}><b> Hint</b>: Try to change the number of repetitions for the repeat block (currently 8). Use the following values: 10, 12 and 18.</span> &nbsp;
                        <em>Click <CheckButtonImg /> to see if the right value is used. </em>
                            </p>
                            <BeforeAfter before={threeParticleBefore} after={moveFurther} />
                        </ScrollableContainer>
                    </div>),
                customCheck:
                    "(workspace.getAllBlocks().filter(b=>b.type==='control_repeat').filter(b=>b.getChildren()[0].getFieldValue('NUM')==='18').length === 3)||" +
                    "((workspace.getAllBlocks().filter(b=>b.type==='control_repeat').filter(b=>b.getChildren()[0].getFieldValue('NUM')==='18').length === 1) &&" +
                    "((workspace.getAllBlocks().filter(b=>b.type==='procedures_prototype').length === 2)&&(workspace.getAllBlocks().filter(b=>b.type==='procedures_call').length===6)))"
            },
            {
                id: 'modify-size',
                title: (
                    <div className={styles.contentContainer}>
                        <p className={styles.contentTitle}><PracticeLabel />Make Particles Slightly Grow In Size</p>
                        <ScrollableContainer height='300px'>
                            <p>
                                Make both the red, blue and green particles slightly grow in size as they move like the picture below on the right.<br />
                                <span className={styles.highlightText}>
                                    <b>Hint</b>: Add <img src={changeSizeByImg} className={styles.block} /> block after <img src={moveBlock} className={styles.block} /> and experiment with the input value to the <em>change size by</em> block. Try the input values of 50, 30,5.</span>
                            </p>
                            <BeforeAfter before={moveFurther} after={growBigger} />
                        </ScrollableContainer>
                    </div>
                ),
                customCheck:
                    "(workspace.getAllBlocks().filter(b=>b.type==='looks_changesizeby').filter(b=>b.getChildren()[0].getFieldValue('NUM')==='5').length === 3)||" +
                    "((workspace.getAllBlocks().filter(b=>b.type==='looks_changesizeby').filter(b=>b.getChildren()[0].getFieldValue('NUM')==='5').length === 1) &&" +
                    "((workspace.getAllBlocks().filter(b=>b.type==='procedures_prototype').length === 2)&&(workspace.getAllBlocks().filter(b=>b.type==='procedures_call').length===6)))"
            },
            {
                id: 'modify-ghost',
                title: (
                    <div className={styles.contentContainer}>
                        <p className={styles.contentTitle}><PracticeLabel />Make Particles Gradually Fade</p>
                        <ScrollableContainer height='300px'>
                            <p>
                                <b>Hint</b>: Add <img src={changeGhostEffect} className={styles.block} /> after <img src={changeSizeByImg} className={styles.block} /> and <span className={styles.highlightText}>experiment with the effect values of 20, 15, 10, 5.</span>
                            </p>
                            <BeforeAfter before={growBigger} after={gradualFade} />
                        </ScrollableContainer>
                    </div>
                ),
                customCheck:
                    "(workspace.getAllBlocks().filter(b=>b.type==='looks_changeeffectby').filter(b=>b.getChildren()[0].getFieldValue('NUM')==='5').length === 3)||" +
                    "((workspace.getAllBlocks().filter(b=>b.type==='looks_changeeffectby').filter(b=>b.getChildren()[0].getFieldValue('NUM')==='5').length === 1) &&" +
                    "((workspace.getAllBlocks().filter(b=>b.type==='procedures_prototype').length === 2)&&(workspace.getAllBlocks().filter(b=>b.type==='procedures_call').length===6)))"
            },
            {
                id: 'adding-spin',
                title: (
                    <div className={styles.contentContainer}>
                        <p className={styles.contentTitle}><PracticeLabel />Make Particles Slightly Spin</p>
                        <ScrollableContainer height='300px'>
                            <p>
                                <b>Hint</b>: Add <img src={turnRightBlock} className={styles.block} /> after <img src={changeGhostEffect} className={styles.block} /> and <span className={styles.highlightText}>experiment with the effect values so it looks close enough to the expected animation on the right.</span>
                            </p>
                            <BeforeAfter before={gradualFade} after={addingSpin} />
                        </ScrollableContainer>
                    </div>
                ),
                customCheck:
                    "(workspace.getAllBlocks().filter(b=>b.type==='motion_turnright').length === 4)||" +
                    "((workspace.getAllBlocks().filter(b=>b.type==='motion_turnright').length === 2) &&" +
                    "((workspace.getAllBlocks().filter(b=>b.type==='procedures_prototype').length === 2)&&(workspace.getAllBlocks().filter(b=>b.type==='procedures_call').length===6)))"
            },
            {
                id: 'adding-color-effect',
                title: (
                    <div className={styles.contentContainer}>
                        <p className={styles.contentTitle}><PracticeLabel />Slight Color Effect</p>
                        <ScrollableContainer height='300px'>
                            <p>
                                <b>Hint</b>: Add <img src={changeColorEffectBlock} className={styles.block} /> after <img src={turnRightBlock} className={styles.block} /> and <span className={styles.highlightText}>experiment with the effect values so it looks close enough to the expected animation on the right.</span>
                            </p>
                            <BeforeAfter before={addingSpin} after={colorEffect} />
                        </ScrollableContainer>
                    </div>
                ),
                customCheck:
                    "(workspace.getAllBlocks().filter(b=>b.type==='looks_changeeffectby').filter(b=>b.getField('EFFECT').getValue()==='COLOR').length === 3)||" +
                    "((workspace.getAllBlocks().filter(b=>b.type==='looks_changeeffectby').filter(b=>b.getField('EFFECT').getValue()==='COLOR').length === 1) &&" +
                    "((workspace.getAllBlocks().filter(b=>b.type==='procedures_prototype').length === 2)&&(workspace.getAllBlocks().filter(b=>b.type==='procedures_call').length===6)))"
            },
            {
                id: 'download-work',
                title: (
                    <div>
                        <p>
                            Download your completed work file to your computer and <em>upload it to the main survey</em>.
                            To download your completed work, click File and then select "Save to your computer".
                        </p>
                        <img src={saveFeature} />
                    </div>
                )
            },
            {
                id: 'copy-completion-code',
                title: (
                    <div><p style={{ fontSize: '1.25rem', margin: '1rem' }}>Please copy and paste the completion code below to the main survey.</p></div>
                ),
                completionCode: 'happy-scratching',
                recordCompletion: true
            }
        ]
    }
}