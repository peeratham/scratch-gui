
import React from 'react';
import { FormattedMessage } from 'react-intl';
import styles from './deck-content-styles.css';
import classnames from 'classnames';

// Intro
import greenFlagButton from './intro/greenflag.png';
import stopButton from './intro/stop.png';
import gfClickedBlock from './intro/gf-clicked.png';
import libraryIntro from './intro/lib-getting-started.jpg';
import stepMove from './intro/intro1.gif';
import stepMoveSayHello from './intro/intro2.gif';
import inspectCode from './intro/figure-out-code-1.gif'
import deleteCode from './intro/delete-code.gif';
import sayRandomNum from './intro/say-random-number.gif';
import coloringTheCat from './intro/coloring-the-cat.gif';
import spriteAndMedia from './intro/sprite-and-media.gif';
import jump0 from './intro/tutorial-noparam-custom-block.gif';
import jump1 from './intro/tutorial-1param-custom-block.gif'
import cloningConcept from './intro/cloning-concept.gif';
import walkingMovement from './intro/walking-movement.gif';
import catCloning from './intro/cat-cloning.png';
import originalVsGoal from './custom-block-deck/original-vs-goal.png';
import copyPasteReuse from './custom-block-deck/copy-paste-modify.gif';

import pickRandomNum from './intro/pick-random.png';
import setColorEffect from './intro/set-color-effect.png';

//QI
import customBlockCfg from './intro/custom-block-cfg.png';
import modifyBrightness from './custom-block-deck/modify-brightness-effect.png';
import modifyRepeat from './custom-block-deck/modify-repeat.png';

import abstractExtractCustomBlock from './custom-block-deck/abstract-extract-custom-block.png';

import enableHintRefactoring from './custom-block-deck/enable-hint-refactoring.gif';
import modifyChangeXBy from './custom-block-deck/modify-change-x-by.png';

import expectedImprovement from './custom-block-deck/expected-improvement.png';
import highlightedPart from './custom-block-deck/highlighted-to-extract.png';

import tipsIcon from './custom-block-deck/tips-icon.png';

//study tasks
import studyTaskPreview from './study-tasks/study-task-preview.gif';
import programExplained from './study-tasks/original-program-explained.png';
import programExplained1 from './study-tasks/original-program-explained-1-horizontal.png';
import programExplained2 from './study-tasks/original-program-explained-2.png';
import programExplained3 from './study-tasks/original-program-explained-3.png';
import whenIStartAsCloneBlock from './study-tasks/when-i-start-as-clone.png';
import modificationTarget from './study-tasks/highlighted-modification-target.png';

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
import checkButton from './intro/check-button.png';
import needHelpButton from './intro/need-help.png';

import featureTogglingImg from './custom-block-deck/feature-toggle.png';

const Label = ({ text }) => <span className={styles.cardType}>{text}</span>;
const PracticeLabel = () => <Label text="Practice" />;
const QuizLabel = () => <Label text="Quiz" />;
const TipsLabel = () => <Label text="Tips" />;
const ConceptLabel = () => <Label text="Concept" />;

const GreenFlagButton = () => <img src={greenFlagButton} className={styles.smallInlinePic} />;
const StopButton = () => <img src={stopButton} className={styles.smallInlinePic} />;
const CheckButtonImg = () => <img src={checkButton} className={styles.checkButton} />;


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
            {
                id: 'intro-instructions',
                title: (
                    <div className={styles.contentContainer}>
                        <p className={styles.contentTitle}>Part 1: The Basics of Scratch</p>
                        <div className={styles.scrollable} style={{ height: '250px', float: 'left' }}>
                            <p> Completing this part will prepare you for Parts 2 and 3.
                                First, we want to provide you with a general guide to navigate the user study card deck.
                                You will go through a sequence of cards in this deck.
                                <span className={styles.yellowMark}> The last card will provide you with the completion code
                                    to copy and paste into the main survey page.</span>
                            </p>

                            <p>
                                You can drag this card deck around and place it wherever you like.
                                Click <img src={rightArrow} style={{ width: '2rem', verticalAlign: 'middle' }} /> to go to the next card and
                                <img src={rightArrow} className={styles.flipHorizontal} style={{ width: '2rem', verticalAlign: 'middle' }} /> to the previous card.
                            </p>

                            <p className={styles.yellowMark}> The cards with <PracticeLabel /> label require you to complete some simple programming tasks.
                            For these cards, you will need to check your work by clicking <CheckButtonImg /> before you can go to the next card.
                            Other card are for you to learn and require no work for you to perform.</p>

                            <p className={styles.yellowMark}>Please feel free to use live chat by
                            clicking <img src={needHelpButton} className={styles.needHelp} /> at the bottom of the page
                            if you have difficulties completing any cards due to instructions being unclear, bugs or other technical issues.</p>
                        </div>
                    </div>
                )
            },
            {
                id: 'intro-vid',
                title: (<span style={{ fontSize: '1rem' }}>Watch a Preview of Scratch (1 min)</span>),
                video: 'rpjvs3v9gj'
            },
            {
                id: 'move-say',
                title: (
                    <div className={styles.contentContainer}>
                        <p><PracticeLabel /> Experiment with some command blocks. To go to the next card, create a sequence of blocks shown below and click "Check".</p>
                    </div>
                ),
                image: stepMove,
                expected: [["motion_movesteps", "looks_sayforsecs"]],
                shouldCleanup: true
            },
            {
                id: 'gf-move-say',
                title: (
                    <div className={styles.contentContainer}>
                        <p><PracticeLabel /> Place <img src={gfClickedBlock} className={styles.block} /> block
                        at the top of the block sequence called a script,
                    then click the <GreenFlagButton /> button to run your first program!</p>
                    </div>
                ),
                image: stepMoveSayHello,
                expected: [["event_whenflagclicked", "motion_movesteps", "looks_sayforsecs"]],
            },
            {
                id: 'tip-inspect',
                title: (
                    <div className={styles.contentContainer}>
                        <p><TipsLabel /> You can separate program parts and click each of them to see what it does.</p>
                    </div>
                ),
                // setupCode: "<xml xmlns='http://www.w3.org/1999/xhtml'><block type='event_whenflagclicked' id='K+6DxCUq`c$nW]J9917d' x='91' y='88'><next><block type='control_forever' id='8p.EClpJ`2=QZ#0+`Swp'><statement name='SUBSTACK'><block type='control_repeat' id='Cq.ael%UMOJyNHB9[+e+'><value name='TIMES'><shadow type='math_whole_number' id='nY?;B3?TpUvh0@n=e4xV'><field name='NUM'>10</field></shadow></value><statement name='SUBSTACK'><block type='looks_changeeffectby' id='`Ls7^xrYZxm65wm}ko(p'><field name='EFFECT'>GHOST</field><value name='CHANGE'><shadow type='math_number' id='p!5VpWaX*0;%yQSTTlq|'><field name='NUM'>10</field></shadow></value></block></statement><next><block type='control_repeat' id='O@oN3W-R38.oSeZtr[62'><value name='TIMES'><shadow type='math_whole_number' id='WsHP7W,iMf{P~%4kc-00'><field name='NUM'>10</field></shadow></value><statement name='SUBSTACK'><block type='looks_changeeffectby' id='Ctd7:vUTr0p$Va9K7f:l'><field name='EFFECT'>GHOST</field><value name='CHANGE'><shadow type='math_number' id='V`x.64iC*N]4jU,bD/Ln'><field name='NUM'>-10</field></shadow></value></block></statement></block></next></block></statement></block></next></block></xml>",
                image: inspectCode,
                shouldCleanup: true
            },
            {
                id: 'tip-delete',
                title: (
                    <div className={styles.contentContainer}>
                        <p><TipsLabel /> Right click a block then select "Delete Block" to delete it.
                        When a block is dragged, the block sequence connected below it will also move along.
                        To delete, place a block or a sequence of blocks to the block palette area.
                    </p>
                    </div>
                ),
                image: deleteCode,
                shouldCleanup: true
            },
            {
                id: 'color-random',
                title: (
                    <div className={styles.contentContainer}>
                        <p className={styles.contentTitle}>Let's Change the Color of the Cat</p>
                        <div className={styles.scrollable} style={{ height: '300px' }}>
                            <p><PracticeLabel />
                                Create a program that makes the cat turns purple for 1 second when the green flag is clicked.
                                Use the following color effect values of 50,100,140,180.
                                Click "check" to see whether you use the right value!</p>
                            <img src={coloringTheCat} style={{ width: '400px' }} />
                        </div>
                    </div>
                ),
                shouldCleanup: true,
                expected: [[//140
                    "event_whenflagclicked", "looks_seteffectto", "control_wait", "looks_cleargraphiceffects"]],
                customCheck: "workspace.getAllBlocks().filter(b=>b.type==='looks_seteffectto').filter(b=>b.getChildren()[0].getFieldValue('NUM')==='140').length === 1"
            },
            {
                id: 'concept-sprite',
                title: (
                    <div className={styles.contentContainer}>
                        <p className={styles.contentTitle}>What Is A Sprite?</p>
                        <div className={styles.scrollable} style={{ height: '300px' }}>
                            <p>A Scratch program can contain many graphical characters or known as a <b>"sprite"</b>.
                    Each sprite has Code, Costumes and Sounds associated with it.</p>
                            <img src={spriteAndMedia} style={{ width: '400px' }} />
                        </div>
                    </div>
                ),
                shouldCleanup: true
            },
            {
                id: 'walking-anim',
                title: (
                    <div className={styles.contentContainer}>
                        <p className={styles.contentTitle}>A Forever Walking Cat</p>
                        <div className={styles.scrollable} style={{ height: '300px' }}>
                            <p><PracticeLabel /> Create a basic walking animation.
                    You will learn to make the Cat switch its <b>costume</b> and how a <b>Forever</b> block
                                                                                                                                                                                            can be used to repeat the sequence of blocks inside it forever
                    unless you stop the program by clicking <StopButton />.
                            </p>
                            <img src={walkingMovement} style={{ width: '400px' }} />
                        </div>
                    </div>
                ),
                expected: [
                    ["event_whenflagclicked", "control_forever", "looks_switchcostumeto", "control_wait", "looks_switchcostumeto", "control_wait"]
                ],
                shouldCleanup: true
            },
            {
                id: 'exercise-custom-block',
                title: (
                    <div className={styles.contentContainer}>
                        <p className={styles.contentTitle}>Making Your Own Block: A Jump Block</p>
                        <div className={styles.scrollable} style={{ height: '300px' }}>
                            <p>
                                The program (already created for you) animates cat jumping continuously.
                                Click <GreenFlagButton /> to see the jumping animation.
                                We can make a "jump" custom block out of the program part that performs the jumping action. <br />
                            </p>
                            <p>
                                <PracticeLabel /> Follow the steps below to make a jump block and use it in the code.
                                Click <GreenFlagButton /> to check whether the "jump" custom block indeed makes the cat jump.
                            </p>
                            <img src={jump0} style={{ width: '400px' }} />
                        </div>
                    </div>
                ),
                setupCode:
                    "<xml xmlns='http://www.w3.org/1999/xhtml'><variables><variable type='' id='`jEk@4|i[#Fk?(8x)AV.-my variable' islocal='false' iscloud='false'>my variable</variable></variables><block type='event_whenflagclicked' id='XG3B]7tQO?9{fcPe${Ek' x='200' y='329'><next><block type='control_forever' id='r6NRa`6c|S6Q?:^orT2C'><statement name='SUBSTACK'><block type='control_repeat' id='NLH?/iZ2KT4gTJ`G]t!v'><value name='TIMES'><shadow type='math_whole_number' id='Qa-pGAX@}=-#K*YsMl.r'><field name='NUM'>10</field></shadow></value><statement name='SUBSTACK'><block type='motion_changeyby' id='w9@CehxUS_72Tcx4_z;S'><value name='DY'><shadow type='math_number' id='Mc`LlV3LKet:yE308yP8'><field name='NUM'>2</field></shadow></value></block></statement><next><block type='control_wait' id='{r=;7@mSu*cOh|.*Npz('><value name='DURATION'><shadow type='math_positive_number' id='9,7lBs/r~PiI,Utq_-3T'><field name='NUM'>0.1</field></shadow></value><next><block type='control_repeat' id=']$L98xB}[blm)*2@8^$D'><value name='TIMES'><shadow type='math_whole_number' id='cCSAEMik`Xh*V9E$;JK,'><field name='NUM'>10</field></shadow></value><statement name='SUBSTACK'><block type='motion_changeyby' id='U^cvx=fq1}V(B{iy5NgV'><value name='DY'><shadow type='math_number' id='Vr6HQ/R6dmfQg/^?x)!b'><field name='NUM'>-2</field></shadow></value></block></statement></block></next></block></next></block></statement></block></next></block></xml>",
                // "<xml xmlns='http://www.w3.org/1999/xhtml'><block type='event_whenflagclicked' id='*2_U~)FT}hV}IOw`WpgI' x='85' y='-257'><next><block type='procedures_call' id='g=H`Y5OO:g%1*FQZ6|?`'><mutation proccode='jump' argumentids='[]' warp='false'></mutation><next><block type='looks_sayforsecs' id='Z#w){$DU+bEc%yC6C~{9'><value name='MESSAGE'><shadow type='text' id='O|Bgc[[|w0V`3Gz6;13J'><field name='TEXT'>Hello!</field></shadow></value><value name='SECS'><shadow type='math_number' id='3E)nusFZxU6MrHR/[N0k'><field name='NUM'>2</field></shadow></value><next><block type='procedures_call' id='t!lUpD{h{:qsfvVIIxHC'><mutation proccode='jump' argumentids='[]' warp='false'></mutation></block></next></block></next></block></next></block><block type='procedures_definition' id='+T)h:,DF~eAw@DD)7Q#-' x='442' y='-254'><statement name='custom_block'><shadow type='procedures_prototype' id='rz~]Ha`+;%uQvVA|qn%C'><mutation proccode='jump' argumentids='[]' argumentnames='[]' argumentdefaults='[]' warp='false'></mutation></shadow></statement><next><block type='motion_changeyby' id='k(AUhXY}Q][D%L;Q+a|#'><value name='DY'><shadow type='math_number' id='U@zOSWEJ1Gc|kVcEiT61'><field name='NUM'>10</field></shadow></value><next><block type='control_wait' id='e7n0whD12mI*HElF-01A'><value name='DURATION'><shadow type='math_positive_number' id='[ss53aQ(PuYF}3SI?m9g'><field name='NUM'>0.5</field></shadow></value><next><block type='motion_changeyby' id='ru7G};a,FsP~}VE/9CkB'><value name='DY'><shadow type='math_number' id='9FHdK6P-J.{];3Qj=**S'><field name='NUM'>-10</field></shadow></value></block></next></block></next></block></next></block></xml>",
                expected: [
                    ["event_whenflagclicked", "control_forever", "procedures_call"],
                    ["procedures_definition", "control_repeat", "motion_changeyby", "control_wait", "control_repeat", "motion_changeyby"]
                ],
                shouldCleanup: true
            },
            {
                id: 'exercise-custom-block-param',
                title: (
                    <div className={styles.contentContainer}>
                        <p className={styles.contentTitle}> Jump With A Different Height</p>
                        <div className={styles.scrollable} style={{ height: '300px' }}>
                            <p> We want to make the cat jump with 2 different heights.<br />
                                <PracticeLabel /> Follow the steps below to introduce a height parameter to the "jump" custom block.
                                Modify the program so the cat alternates between a high jump (jump 15) and a low jump (jump 5).
                                Click <GreenFlagButton /> to see whether the change to the "jump" custom block indeed makes the cat jump with different heights.
                            </p>
                            <img src={jump1} style={{ width: '400px' }} />
                        </div>
                    </div>
                ),
                // setupCode:
                // "<xml xmlns='http://www.w3.org/1999/xhtml'><variables><variable type='' id='`jEk@4|i[#Fk?(8x)AV.-my variable' islocal='false' iscloud='false'>my variable</variable></variables><block type='event_whenflagclicked' id='XG3B]7tQO?9{fcPe${Ek' x='213' y='80'><next><block type='control_forever' id='r6NRa`6c|S6Q?:^orT2C'><statement name='SUBSTACK'><block type='procedures_call' id='8lsqu%un%`2q{0%*Wqm#'><mutation proccode='jump' argumentids='[]' warp='false'></mutation></block></statement></block></next></block><block type='procedures_definition' id='LI-IL[,^qf_-B=I=Bjez' x='474' y='80'><statement name='custom_block'><shadow type='procedures_prototype' id='u5H]H[72J4}JhDqh!=7l'><mutation proccode='jump' argumentids='[]' argumentnames='[]' argumentdefaults='[]' warp='false'></mutation></shadow></statement><next><block type='control_repeat' id='NLH?/iZ2KT4gTJ`G]t!v'><value name='TIMES'><shadow type='math_whole_number' id='Qa-pGAX@}=-#K*YsMl.r'><field name='NUM'>10</field></shadow></value><statement name='SUBSTACK'><block type='motion_changeyby' id='w9@CehxUS_72Tcx4_z;S'><value name='DY'><shadow type='math_number' id='Mc`LlV3LKet:yE308yP8'><field name='NUM'>2</field></shadow></value></block></statement><next><block type='control_wait' id='{r=;7@mSu*cOh|.*Npz('><value name='DURATION'><shadow type='math_positive_number' id='9,7lBs/r~PiI,Utq_-3T'><field name='NUM'>0.1</field></shadow></value><next><block type='control_repeat' id=']$L98xB}[blm)*2@8^$D'><value name='TIMES'><shadow type='math_whole_number' id='cCSAEMik`Xh*V9E$;JK,'><field name='NUM'>10</field></shadow></value><statement name='SUBSTACK'><block type='motion_changeyby' id='U^cvx=fq1}V(B{iy5NgV'><value name='DY'><shadow type='math_number' id='Vr6HQ/R6dmfQg/^?x)!b'><field name='NUM'>-2</field></shadow></value></block></statement></block></next></block></next></block></next></block></xml>", 
                expected: [
                    ["event_whenflagclicked", "control_forever", "procedures_call", "procedures_call"],
                    ["procedures_definition", "control_repeat", "motion_changeyby", "control_wait", "control_repeat", "motion_changeyby", "argument_reporter_string_number", "argument_reporter_string_number"]
                ], // customCheck: 1. cb has a param, 2 jumps (with string input) 
            },
            {
                id: 'concept-cloning',
                title: (
                    <div className={styles.contentContainer}>
                        <p className={styles.contentTitle}> Jump With A Different Height</p>
                        <div className={styles.scrollable} style={{ height: '300px' }}>
                            <p><ConceptLabel /> We can clone (creating multiple copies of) a main character sprite
                        by using "create clone of "myself" and "when I start as a clone" blocks.</p>
                            <img src={cloningConcept} style={{ width: '400px' }} />
                        </div>
                    </div>
                ),
                shouldCleanup: true,
            },
            {
                id: 'exercise-cloning',
                title: (
                    <div className={styles.contentContainer}>
                        <p className={styles.contentTitle}> The Copycats</p>
                        <div className={styles.scrollable} style={{ height: '300px' }}>
                            <p>A small program (already created for you) creates 5 invisible cat clones.
                            Each goes to a random position, becomes visible, and says "Hello!"
                            Click <GreenFlagButton /> button to see it in action.
                        </p>
                            <p>
                                <PracticeLabel /> Modify the program so each cat clone in addition to going to a random position,
                                says a random number (1-10) instead of "Hello!", and sets itself to a random color effect (1-200).
                            You will need to use some of these blocks:
                            <img src={pickRandomNum} style={{ width: '10rem', verticalAlign: 'middle' }} /> and
                            <img src={setColorEffect} style={{ width: '10rem', verticalAlign: 'middle' }} />.
                            The picture below shows an example of the expected output when <GreenFlagButton /> button is clicked.
                        </p>
                            <img src={catCloning} style={{ width: '300px' }} />
                        </div>
                    </div>
                ),
                setupCode: "<xml xmlns='http://www.w3.org/1999/xhtml'><block type='event_whenflagclicked' id='Ed+KUz?n--I~Td}6xi2I' x='99' y='-250'><next><block type='looks_hide' id='{8jqxUwd*%?pt6oC2Wq!'><next><block type='control_repeat' id='gIU9=Mv12Wh@~awauzub'><value name='TIMES'><shadow type='math_whole_number' id='lkypM}p}o-Lz/pqMeSzw'><field name='NUM'>5</field></shadow></value><statement name='SUBSTACK'><block type='control_create_clone_of' id='`^yOe_.aB{y|A}Fej8QL'><value name='CLONE_OPTION'><shadow type='control_create_clone_of_menu' id='[[8S}#7`aMP[IN#;{e|,'><field name='CLONE_OPTION'>_myself_</field></shadow></value></block></statement></block></next></block></next></block><block type='control_start_as_clone' id='enXotOX{(Gyls@7Yb=JV' x='99' y='56'><next><block type='looks_show' id='X%,+1;_b#2bd.4g,l^mt'><next><block type='motion_goto' id='%c3q3613gGFNkD$D66(o'><value name='TO'><shadow type='motion_goto_menu' id='_pdjAzCJtp4#Vdz0bm#0'><field name='TO'>_random_</field></shadow></value><next><block type='looks_say' id='s7owYH^c0?k{~10Y^p7q'><value name='MESSAGE'><shadow type='text' id='KN(cq~:7%TBk|8jdsEX-'><field name='TEXT'>Hello!</field></shadow></value></block></next></block></next></block></next></block></xml>",
                shouldCleanup: true,
                expected: [
                    ["event_whenflagclicked", "looks_hide", "control_repeat", "control_create_clone_of"],
                    ["control_start_as_clone", "looks_show", "motion_goto", "looks_say", "looks_seteffectto", "operator_random", "operator_random"]
                ]
            },
            {
                id: 'copy-completion-code',
                title: (
                    <div className={styles.contentContainer}>
                        <p style={{ fontSize: '1.25rem', margin: '1rem' }}>Please copy and paste the completion code below to the main survey.</p>
                    </div>
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
                        <div className={styles.scrollable} style={{ height: '300px' }}>
                            <img src={originalVsGoal} className={styles.contentImage} style={{ width: '400px' }} />
                            <p>
                                An experienced Scratch programmer created and shared this project, "Shapes and Shades" that generates a row of green squares with decreasingly lighter shades (left side).
                                Click <GreenFlagButton /> to see it in action.
                            </p>
                            <p>
                                We will modify this project to make it look like the right side of the picture above
                                (adding blue-shaded row of triangles and make both rows span the width of the stage)
                                Modifying and extending someone else's project is called "remixing".
                                It's a fun and engaging way to learn programming.
                            </p>
                            <p>
                                The last card will provide you with the completion code to copy and paste into the main survey page.
                            </p>
                        </div>
                    </div>
                )
            },
            {
                id: 'copy-paste',
                title: (
                    <div className={styles.contentContainer}>
                        <p className={styles.contentTitle}>Adding a Row of Blue-Shaded Triangles</p>
                        <div className={styles.scrollable} style={{ height: '300px' }}>
                            <p>
                                <PracticeLabel /> Follow the step-by-step animated guide below.
                                It shows how to add a triangle row by reusing the program part that generates a square row and
                                 changes it as follows:<br />
                                1) switch the costume to "triangle"<br />
                                2) position it below the square row (set go to x, y  to -215 and 60 respectively)<br />
                                3) set the color effect to 85 for blue.<br />
                                Click <GreenFlagButton /> often as you make changes to see if you are on the right track!
                            </p>
                            <img src={copyPasteReuse} className={styles.contentImage} />
                        </div>
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
                        <p className={styles.contentTitle}>Generate More Shaded Shapes</p>
                        <div className={styles.scrollable} style={{ height: '300px' }}>
                            <img src={modifyRepeat} className={styles.contentImage} style={{ width: '200px' }} />
                            <p><PracticeLabel /> Both rows are a bit short.
                        Let's make the rows longer by <span className={styles.highlightText}> increase the repetitions of the repeat blocks from
                        5 to 9</span>
                                to create more shaded shape clones. <span className={styles.highlightText}>Make sure to change the values in both repeat blocks!</span>
                                Click <GreenFlagButton /> as you make changes to see if you are on the right track!
                        <span className={styles.yellowMark}> You will find that the rows do not seem to get longer as we expected even if we create more clones!?
                                                                Actually the rows get longer but we just don't see them as their high brightness values
                        make them appear to be white and blend with the white background. We will fix that next!</span>
                            </p>
                        </div>
                    </div>
                ),
                customCheck: "workspace.getAllBlocks().filter(b=>b.type==='control_repeat').filter(b=>b.getChildren()[0].getFieldValue('NUM')==='9').length === 2"
            },
            {
                id: 'modification-2',
                title: (
                    <div className={styles.contentContainer}>
                        <div className={styles.scrollable} style={{ height: '300px' }}>
                            <p className={styles.contentTitle}>Increase the Brightness More Slowly</p>
                            <img src={modifyBrightness} className={styles.contentImage} style={{ width: '250px' }} />
                            <p>
                                <PracticeLabel /> Each subsequent shape clone becomes too bright too quickly.
                            Let's <span className={styles.highlightText}>reduce the brightness values of the "change brightness effect by" block from 15 to 9.
                            Make sure to change the value in both places!</span>
                                Click <GreenFlagButton /> as you make changes to see if you are on the right track!
                            <span className={styles.yellowMark}>Now you should see the rows get longer!</span>
                            </p>
                        </div>
                    </div>
                ),
                customCheck: "workspace.getAllBlocks().filter(b=>b.type==='looks_changeeffectby').filter(b=>b.getChildren()[0].getFieldValue('NUM')==='9').length === 2"
            },
            {
                id: 'which-part',
                title: (
                    <div className={styles.contentContainer}>
                        <p className={styles.contentTitle}>Your Code Can Be Improved!</p>
                        <div className={styles.scrollable} style={{ height: '300px', float: 'left' }}>
                            <p>
                                <img src={highlightedPart} style={{ width: '200px', float: 'left' }} />
                                Your current program should have these same highlighted parts as appeared on the left. These parts
                                generate green and blue rows of shaded color shapes respectively.
                                We modify these program parts quite often to make the same changes.
                                These parts are <b>almost the same except for the color effect value of the <em>set color effect</em> block</b>:
                                the one in the top part has 35 for the green effect value and the one in the bottom part has 85 for blue.
                                This code duplication makes modifying code difficult.
                            </p>
                            <p>
                                To make our code <b>easy to understand and modify</b>, we can <b>extract a custom block</b> from these parts and call it <b>"generateShades"</b> block with a <b>"color"</b> parameter.
                            </p>
                        </div>
                    </div>
                )
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
                    </div>
                )
            },
            {
                id: 'intro-QIS',
                title: (
                    <div className={styles.contentContainer}>
                        <p className={styles.contentTitle}>Getting Help From Code Wizard</p>
                        <div className={styles.scrollable} style={{ height: '300px', float: 'left' }}>
                            <p><PracticeLabel /> Toggle <b>Code Wizard</b> <img src={featureTogglingImg} className={styles.imgInline} />
                                to see improvement hints and follow their suggestions.
                                The improved code should look like the one below.
                                Click <GreenFlagButton /> to make sure your program still works the same.
                                Click <CheckButtonImg /> when you are done.
                            </p>
                            <img src={expectedImprovement} className={styles.contentImage} style={{ width: '400px' }} />
                        </div>
                    </div>
                ),
                onlyVisibleToGroup: 'automated',
                customCheck: "(workspace.getAllBlocks().filter(b=>b.type==='procedures_prototype').length === 1)&&(workspace.getAllBlocks().filter(b=>b.type==='procedures_call').length===2)"
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
                        <p className={styles.contentTitle}>Modifying Once Within Custom Block's Definition</p>
                        <div className={styles.scrollable} style={{ height: '300px', float: 'left' }}>
                            <p><PracticeLabel /> For this last step, we need to increase the distance between each shape clone to make both rows span the width of the stage.
                                <span className={styles.highlightText}>Use the following values: 25,30, 35, 40 and 50.</span> Each time click <CheckButtonImg /> to see if you use the right value!
                            </p>
                            <img src={modifyChangeXBy} className={styles.contentImage} style={{ width: '400px' }} />
                        </div>
                    </div>),
                customCheck: "workspace.getAllBlocks().filter(b=>b.type==='motion_changexby').filter(b=>b.getChildren()[0].getFieldValue('NUM')==='40').length === 1"
            },
            {
                id: 'takeaway',
                title: (
                    <div className={styles.contentContainer}>
                        <div style={{ display: 'flex', flexDirection: 'row' }}>
                            <div style={{ display: 'flex', alignItems: 'center' }}>
                                <img src={tipsIcon} style={{ margin: '0.5rem' }} /></div>
                            <p style={{ fontSize: '1.25rem' }}>
                                <b>Custom blocks</b> make code easy to understand and modify. Can you imaging how difficult it would be to modify this program if we had 3 more rows of shaded shapes?
                        </p>
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
                        <p className={styles.contentTitle}>Part 3: Let's Make It Look Cooler <br />and Share It With Your Peers!</p>
                        <div className={styles.scrollable} style={{ height: '300px' }}>
                            <p>
                                You will remix the project <b>"The Particle Radiator"</b> created by <a target="_blank" className={styles.externalLink} href="https://scratch.mit.edu/projects/328143397/">tpeera4</a>.
                                This project creates a simple animation as seen on the left of the animated picture below.
                                Click <GreenFlagButton /> to see it in action.
                                We will modify it so that the final animation looks like the one on the right.
                                <span className={styles.yellowMark}>
                                    Your completed work will be shared with participants in our future user study who could learn
                                    from and remix your project! Please make sure your program is easy to understand and modify!</span>
                            </p>
                            <img src={studyTaskPreview} className={styles.contentImage} />
                            <p>
                                The last card will provide you with the completion code for you to copy and paste into the main survey page.
                            </p>
                        </div>
                    </div>
                )
            },
            {
                title:
                    (
                        <div className={styles.contentContainer}>
                            <p className={styles.contentTitle}>How Does This Program Work?</p>
                            <div className={styles.scrollable} style={{ height: '300px' }}>
                                <img src={programExplained1} style={{ width: '350px' }} />
                                <p>
                                    The two program parts above continuously radiate 20 particle clones.
                                    The first 10 particle clones are specified to be red and the remaining 10 blue.
                                    These clones will later be set to the specified color and be animated by the program part
                                    that starts with <img src={whenIStartAsCloneBlock} className={styles.imgInline} style={{ width: '8rem' }} /> block.
                                </p>
                                {/* <img src={programExplained3} style={{ width: '400px' }} /> */}
                            </div>
                        </div>
                    ),
                id: 'preview-clone-attribute-setting'
            },
            {
                title: (

                    <div className={styles.contentContainer}>
                        <p className={styles.contentTitle}>What Parts Of The Program Are We Modifying?</p>
                        <div className={styles.scrollable} style={{ height: '300px' }}>
                            <p>
                                <img src={modificationTarget} style={{ width: '180px', float: 'left', marginRight: '0.4rem' }} />
                                To be aesthetically pleasing, the animations of the red and blue particles have to behave similarly to each other.
                                So we will only modify the code within the highlighted parts shown on the left.
                                <b> Just to give you a heads up, you will make 3 changes to the highlighted part, and each change
                                    will ask you to experiment with a set of value settings</b><br />
                                <span className={styles.yellowMark}>It might be a good idea to extract a custom block from these common parts
                                to make your code easy to understand and modify, though this additional step is not required.
                                Your peers would appreciate your effort in keeping your code easy to understand and modify when they remix your project!</span>
                            </p>
                        </div>
                    </div>
                ),
                id: 'modification-target'
            },
            {
                title: (
                    <div>
                        <p>
                            <TipsLabel /> To complete the remaining of this programming task, you might find a <em>reference</em> guide  helpful.
                            You can always switch between the <em>Instruction</em> and <em>Reference</em> tab.
                        </p>
                        <img src={referenceGuide} className={styles.imgInline} />
                        {/* <img src={cloneAction} className={styles.imgPreview} /> */}
                    </div>
                ),
                onlyVisibleToGroup: 'manual',
                id: 'reference-guid-tips'
            },
            {
                id: 'modify-repeat',
                title: (
                    <div className={styles.contentContainer}>
                        <p className={styles.contentTitle}>Make Particles Move Farther</p>
                        <div className={styles.scrollable} style={{ height: '300px' }}>
                            <p>
                                <img src={changeRepeatInputHint} className={styles.imgFloat} />
                                Modify the part that animates the particle clones so that they cover the entire available area.<br />
                                <b>Hint</b>: Try to change the number of repetitions for the repeat block (currently 8). Use the following values: 10, 12 and 18. &nbsp;
                        <em>Click <CheckButtonImg /> to see if the right value is used. </em>
                            </p>
                            <img src={studyTask1} style={{ width: '400px' }} />
                        </div>
                    </div>),
                customCheck:
                    "(workspace.getAllBlocks().filter(b=>b.type==='control_repeat').filter(b=>b.getChildren()[0].getFieldValue('NUM')==='18').length === 2)||" +
                    "((workspace.getAllBlocks().filter(b=>b.type==='control_repeat').filter(b=>b.getChildren()[0].getFieldValue('NUM')==='18').length === 1) &&" +
                    "((workspace.getAllBlocks().filter(b=>b.type==='procedures_prototype').length === 1)&&(workspace.getAllBlocks().filter(b=>b.type==='procedures_call').length===2)))"
            },
            {
                id: 'modify-size',
                title: (
                    <div className={styles.contentContainer}>
                        <p className={styles.contentTitle}>Make Particles Slightly Grow In Size</p>
                        <div className={styles.scrollable} style={{ height: '300px' }}>
                            <p>
                                <PracticeLabel />Make both the red and blue particles slightly grow in size as they move like the picture below on the right.<br />
                                <b>Hint</b>: Add <img src={changeSizeByImg} className={styles.block} /> block after <img src={moveBlock} className={styles.block} />
                                and experiment with the input value to the <em>change size by</em> block. Try the following input values  (50, 30, 5).
                        </p>
                            <img src={studyTask2} style={{ width: '400px' }} />
                        </div>
                    </div>
                ),
                customCheck:
                    "(workspace.getAllBlocks().filter(b=>b.type==='looks_changesizeby').filter(b=>b.getChildren()[0].getFieldValue('NUM')==='5').length === 2)||" +
                    "((workspace.getAllBlocks().filter(b=>b.type==='looks_changesizeby').filter(b=>b.getChildren()[0].getFieldValue('NUM')==='5').length === 1) &&" +
                    "((workspace.getAllBlocks().filter(b=>b.type==='procedures_prototype').length === 1)&&(workspace.getAllBlocks().filter(b=>b.type==='procedures_call').length===2)))"
            },
            {
                id: 'modify-ghost',
                title: (
                    <div className={styles.contentContainer}>
                        <p className={styles.contentTitle}>Make Particles Gradually Fade</p>
                        <div className={styles.scrollable} style={{ height: '300px' }}>
                            <p><PracticeLabel />
                                <b>Hint</b>: Add <img src={changeGhostEffect} className={styles.block} /> after <img src={changeSizeByImg} className={styles.block} /> and experiment with the effect values of 20, 15, 10, 5.
                        </p>
                            <img src={studyTask3} style={{ width: '400px' }} />
                        </div>
                    </div>
                ),
                customCheck:
                    "(workspace.getAllBlocks().filter(b=>b.type==='looks_changeeffectby').filter(b=>b.getChildren()[0].getFieldValue('NUM')==='5').length === 2)||" +
                    "((workspace.getAllBlocks().filter(b=>b.type==='looks_changeeffectby').filter(b=>b.getChildren()[0].getFieldValue('NUM')==='5').length === 1) &&" +
                    "((workspace.getAllBlocks().filter(b=>b.type==='procedures_prototype').length === 1)&&(workspace.getAllBlocks().filter(b=>b.type==='procedures_call').length===2)))"
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