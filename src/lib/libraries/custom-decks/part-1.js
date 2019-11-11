
import React from 'react';
import styles from './deck-content-styles.css';
import gfClickedBlock from './intro/gf-clicked.png';
import undo from './intro/undo.gif';
import inspectCode from './intro/figure-out-code-1.gif'
import deleteCode from './intro/delete-code.gif';
import moveSay from './intro/move-say.gif';
import gfMoveSay from './intro/gf-move-say.gif';
import slidingSquareOutput1 from './intro/sliding-square-output-1.gif';
import squareJumpOutput from './intro/square-jump-output.gif';
import jumpUpward from './intro/jump-upward-code.png';
import jumpDownward from './intro/jump-downward-code.png';
import makeABlockResult from './intro/make-a-block-result.png';
import defineJump from './intro/define-jump.png';
import extractSlideRight from './intro/extract-slide-right.gif';
import renameToSlideRight from './intro/rename-to-slide-right.gif';
import orangeBlue from './intro/orange-blue.gif';
import orangeBlueStarter from './intro/orange-blue-starter.gif';
import orangeBlueModifyTarget from './intro/orange-blue-modify-target-2.png';
import orangeBlueHint from './intro/set-color-effect-to-hint.png';
import jump01 from './intro/jump-block-01.gif';
import jump02 from './intro/jump-block-02.gif';
import purpleSpike from './intro/purple-spike.png';
import redSpike from './intro/red-spike.png';
import jumpLow from './intro/jump-low.png';
import jumpBlank from './intro/jump-blank.png';
import jumpWhat from './intro/jump-what.png';
import addParameter from './intro/add-parameter.gif';
import useParameter from './intro/use-parameter.gif';
import createCloneBlock from './intro/create-clone.png';
import foreverWalking from './intro/forever-walking.png';
import repeatBlock from './intro/repeat.png';
import foreverBlock from './intro/forever.png';
import switchCostumeBlock from './intro/switch-costume-to.png';

import catCloning from './intro/cat-cloning.png';
import pickRandomNum from './intro/pick-random.png';
import setColorEffect from './intro/set-color-effect.png';
import rightArrow from './intro/right-arrow.png';
import featureTogglingImg from './custom-block-deck/feature-toggle.png';
import scratchTabs from './intro/scratch-tabs.png';
import blockAsInput from './intro/block-as-input.png';


import whenIStartAsCloneBlock from './study-tasks/when-i-start-as-clone.png';

import {
    Label, ColoredLabel, PracticeLabel, StepLabel, QuizLabel, TipsLabel,
    ConceptLabel, GreenFlagButton, StopButton, CheckButtonImg, BeforeAfter, ScrollableContainer
} from './card-components';

export const part1 = {
    steps: [
        {
            id: 'intro-instructions',
            content:
                (
                    <div className={styles.contentContainer}>
                        <p> Completing this part will prepare you for Parts 2 and 3.
                            First, we want to provide you with a general guide to navigate the user study card deck.
                            You will go through a sequence of cards in this deck.
                            <span className={styles.yellowMark}> The last card will provide you with the <b> completion code </b>
                                to copy and paste into the main survey page.</span>
                        </p>

                        <p>
                            You can drag this card deck around and place it wherever you like.
                            Click <img src={rightArrow} style={{ width: '2rem', verticalAlign: 'middle' }} /> to go to the next card and
                            <img src={rightArrow} className={styles.flipHorizontal} style={{ width: '2rem', verticalAlign: 'middle' }} /> to the previous card.
                        </p>

                        <p>
                            <span className={styles.yellowMark}>The cards with <PracticeLabel /> label require you to complete some simple programming tasks.</span>
                            For these cards, you will need to check your work by clicking <CheckButtonImg /> before you can go to the next card. Other cards are for you to learn and require no work for you to perform.
                        </p>
                    </div>
                ),
            title: (
                <p className={styles.contentTitle}>Part 1: The Basics of Scratch</p>
            ),
            projectId: 330600515
        },
        {
            id: 'intro-vid',
            title: (
                <p className={styles.contentTitle}>Programming With Scratch (50-second Teaser)</p>
            ),
            video: 'rpjvs3v9gj'
        },
        {
            id: 'move-say',
            title: (<p className={styles.contentTitle}><PracticeLabel />Create Your First Scratch Program</p>),
            content: (
                <div className={styles.contentContainer}>
                    <p><StepLabel step="step 1/2" />
                        <img src={moveSay} className={styles.contentImage} style={{ width: '320px' }} /><br />
                        Create a sequence of blocks as shown below. Each block performs a specific action.
                        Click any block in the sequence for the square to perform all actions specified by the sequence.
                    </p>
                    <p><StepLabel step="step 2/2" />
                        Place <img src={gfClickedBlock} className={styles.block} /> block at the top of a block sequence to run that program part when the <GreenFlagButton /> button is clicked. Click <GreenFlagButton /> to run your first Scratch program!
                            <img src={gfMoveSay} className={styles.contentImage} style={{ width: '320px' }} />
                    </p>
                    <p><StepLabel step="finally" /><span className={styles.yellowMark}>Click <CheckButtonImg /> to check your work (also run the program).
                        </span>
                    </p>
                </div>
            ),
            expected: [["event_whenflagclicked", "motion_movesteps", "looks_sayforsecs"]],
            // shouldCleanup: true
        },
        {
            id: 'tip-inspect',
            title: (<p className={styles.contentTitle}><TipsLabel />Working with Blocks</p>),
            content: (
                <div className={styles.contentContainer}>
                    <p>
                        <b>How to Undo Previous Action </b><br />
                        Right click on the empty space. Select Undo.
                                        <img src={undo} className={styles.contentImage} style={{ width: '300px' }} />
                    </p>
                    <p>
                        <b>How to Figure Out What a Program Part Does: </b><br />
                        You can separate program parts and click each of them to see what it does.
                                        <img src={inspectCode} className={styles.contentImage} style={{ width: '400px' }} />
                    </p>
                    <p>
                        <b>How to Delete Blocks: </b><br />
                        Right click a block then select "Delete Block" to delete just that block.
                                    <span className={styles.yellowMark}>A quicker way to delete block is to drag and drop it in the block palette area.When a block is dragged, the block sequence connected below it will also move along.
                                    Placing a sequence of blocks in the block palette area will delete all blocks in the sequence.</span>
                        <img src={deleteCode} className={styles.contentImage} style={{ width: '400px' }} />
                    </p>
                </div>
            ),
            shouldCleanup: true
        },
        {
            id: 'simple-slides',
            title: (<p className={styles.contentTitle}><PracticeLabel />Simple Slides</p>),
            content: (
                <div className={styles.contentContainer}>
                    Some simple slides combination of right and up
                </div>
            ),
            active: true
        },
        {
            id: 'slower-slides',
            title: (<p className={styles.contentTitle}><PracticeLabel />Slower Slides</p>),
            content: (
                <div className={styles.contentContainer}>
                    Adjust to make it slower suggesting using repeat and change x/y
                </div>
            ),
            active: true
        },
        {
            id: 'slide-right-up',
            title: (<p className={styles.contentTitle}><PracticeLabel />Extracting Slide Blocks</p>),
            content: (
                <div className={styles.contentContainer}>
                    Hard to modify. You can extract a custom block (right and up)
                </div>
            ),
            active: true
        },
        {
            id: 'slide-right-up-ma',
            title: (<p className={styles.contentTitle}><PracticeLabel />Extracting Slide Blocks (Manually)</p>),
            content: (
                <div className={styles.contentContainer}>
                    Hard to modify. You can extract a custom block (right and up)
                </div>
            ),
            active: true,

        },
        {
            id: 'sliding-square',
            title: (<p className={styles.contentTitle}><PracticeLabel />Go Square Go!</p>),
            content: (
                <div className={styles.contentContainer}>
                    <p>
                        <img src={slidingSquareOutput1} className={styles.contentImage} style={{ width: '220px', float: 'right' }} />
                        Program the the blue square to slide through all checkpoints. The result should look like the animation on the right. You will add to the script that starts with <b>when I receive "Level 1 Start".</b>
                        <span className={styles.yellowMark}>Each slide animation is a little pause (0.1 seconds) followed by a 100-step movement in a given direction.</span>
                        {/* <img src={goSquare} className={styles.block} style={{ width: '10rem', height: 'auto' }} />. */}
                    </p>
                    <p><StepLabel step="Step 0/3" />
                        (Already completed for you as an example!) Please, click <GreenFlagButton /> to see the example. We move the square rightward to the first checkpoint. If you look at the grid lines in the background, the first checkpoint is 100 steps to the right of the starting point. We <b>repeat</b> the <b>"change x by 10"</b> block <b>10</b> times (i.e., 10 x 10 = 100).
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
                        You can extract these two recurring block sequences as custom blocks to make your program easy to understand and modify. The steps below will guide you:
                    </p>
                    <p><StepLabel step="Step 0/2" />
                        {/* Toggle on <b>Code Wizard</b> to see code improvement hints: */}
                        Toggle <b>Code Wizard</b> on <img src={featureTogglingImg} className={styles.imgInline} style={{ width: '180px' }} />
                        to see improvement hints and follow their suggestions.
                    </p>
                    <p><StepLabel step="Step 1/2" />
                        A hint icon should show up next to the recurring block sequence.
                        Click the hint icon and adjust the selection so it covers the recurring block sequences that do the slide right animation and then click Extract.
                        <img src={extractSlideRight} className={styles.contentImage} style={{ height: '240px', width: 'auto' }} /><br />
                        Rename the extracted custom block to "Slide Right".
                        <img src={renameToSlideRight} className={styles.contentImage} style={{ height: '240px', width: 'auto' }} />

                    </p>
                    <p><StepLabel step="Step 2/2" />
                        Follow the similar steps in Step 1/2 to extract a "Slide Up" custom block.
                    </p>
                    <p><StepLabel step="Finally" />
                        Click <GreenFlagButton /> to see the result! Everything should work like before!
                        Click <CheckButtonImg /> to check your work.
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
        {
            id: 'jumping-square',
            title: (<p className={styles.contentTitle}><PracticeLabel />Avoid the Spikes</p>),
            content: (
                <div className={styles.contentContainer}>
                    <img src={squareJumpOutput} className={styles.contentImage} style={{ width: '200px', float: 'right' }} />
                    <p>You will program the square to do a basic jump to avoid the purple spikes!
                        The square should jump when if it's touching the purple color.
                        A basic jump simply putting an upward movement followed by a downward movement.
                    </p>
                    <p style={{ marginTop: '1rem', marginBottom: '1.5rem' }}>
                        <img src={jumpUpward} className={styles.contentImage} style={{ width: '110px', float: 'left' }} />
                        <StepLabel step="Step 1/2" /> Put together the block sequence that moves the square up (shown on the left) and put it inside the <b>if touching color then...</b> block.<br />
                    </p>
                    <p>
                        <img src={jumpDownward} className={styles.contentImage} style={{ width: '110px', float: 'right' }} />
                        <StepLabel step="Step 2/2" /> Put together the block sequence that moves the square down (shown on the right).  Connect it to the sequence created in the previous step.<br />
                    </p>
                </div>
            ),
            projectId: 341014499
        },
        {
            id: 'jump-custom-block',
            title: (<p className={styles.contentTitle}><PracticeLabel />Making Your Own Block: A Jump Block</p>),
            content: (
                <div className={styles.contentContainer}>
                    <p>
                        In the previous step, we make the square jump by putting together the block sequence that moves the square up and down. Let's turn that code into a custom-made block and give it a descriptive name for what it does (i.e, "jump") <br />
                    </p>

                    <p>
                        <StepLabel step="Step 1/2" /> Follow the animated guide below to make your jump custom block.
                        <img src={jump01} className={styles.contentImage} style={{ width: '400px' }} />
                        You should see two things being created (shown in the picture below): 1) your <b>jump</b> block in the pallette (left) and 2) the <b>define jump</b> block in your workspace (right)<br />
                        <img src={makeABlockResult} className={styles.contentImage} />
                    </p>
                    <p>
                        <StepLabel step="Step 2/2" />
                        The <img src={defineJump} className={styles.imgInline} style={{ width: '6rem' }} /> lets you define what <b>jump</b> block should do. Follow the animated guide below that show how to use the block sequence you created previously as the definition for your jump block. Finally you will use the created jump block in your code to make the square jump.
                            <img src={jump02} className={styles.contentImage} style={{ width: '400px' }} />
                    </p>
                    <p>
                        <StepLabel step="Finally" />
                        Click <GreenFlagButton /> to see whether the created <b>jump</b> custom block indeed makes the square jump!
                        </p>
                </div>
            ),
            // expected: [
            //     ["event_whenflagclicked", "control_forever", "procedures_call"],
            //     ["procedures_definition", "control_repeat", "motion_changeyby", "control_wait", "control_repeat", "motion_changeyby"]
            // ],
            projectId: 339735285
        },
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
        {
            id: 'walking-anim',
            title: (<p className={styles.contentTitle}><PracticeLabel />A Forever Walking Cat</p>),
            content: (
                <div className={styles.contentContainer}>
                    <p>
                        <img src={foreverWalking} style={{ width: '200px', marginRight: '1rem', float: 'left' }} />
                        Put together blocks to create a basic walking animation program shown on the left. You will learn about a character's costumes and how to repeat actions.
                                        Once you are done, click <CheckButtonImg /> to check your work.
                                    </p>
                    <p>Below we provide you with useful information on how Scratch allows us to control the character's appearance and its actions.</p>
                    <p>
                        <b>A character and its costumes:</b><br />
                        The Cat is a character object also known as a "sprite".
                        A Scratch program can contain many sprites.
                                        You can see the available costumes by clicking the Costumes tab. <img src={scratchTabs} className={styles.imgInline} style={{ width: '150px' }} /> You can change a character sprite's <em>costume</em> by using <img src={switchCostumeBlock} className={styles.imgInline} style={{ width: '140px' }} />.
                                    </p>
                    <p>
                        <b>Repeating actions:</b><br />
                        You can make your program repeat a sequence of actions a given number of times with
                                        <img src={repeatBlock} className={styles.imgInline} style={{ width: '100px' }} /> and the
                                        <b>"forever"</b> block <img src={foreverBlock} className={styles.imgInline} style={{ width: '100px' }} /> can be used to repeat the sequence of blocks inside it forever unless you stop the program by clicking <StopButton />
                    </p>
                </div>
            ),
            expected: [
                ["event_whenflagclicked", "control_forever", "looks_switchcostumeto", "control_wait", "looks_switchcostumeto", "control_wait"]
            ],
            shouldCleanup: true
        },

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
        {
            id: 'exercise-cloning',
            title: (
                <div className={styles.contentContainer}>
                    <p className={styles.contentTitle}><PracticeLabel />The Copycats</p>
                    <ScrollableContainer height='300px'>
                        <img src={catCloning} className={styles.contentImage} style={{ width: '250px' }} />
                        <p>You will get to learn about cloning that are used to create multiple copies of a sprite. Cloning is an advanced concept and can be used to create a powerful visual output. We don't expect you to master it in this short amount of time, but we hope you will develop a conceptual understanding of how it works.
                        </p>
                        <p>
                            <StepLabel step="Step 0/2" /> Click <GreenFlagButton /> button to see a simple clone demo (already created for you). The program starts with <img src={gfClickedBlock} className={styles.imgInline} style={{ width: '6rem', verticalAlign: 'middle' }} />. Here is how this program works: it hides the Cat sprite and creates 5 copies of itself (invisible cat clones) using <img src={createCloneBlock} className={styles.imgInline} style={{ width: '9rem', verticalAlign: 'middle' }} />.
                            When each clone is created, each will start performing actions as specified after <img src={whenIStartAsCloneBlock} className={styles.imgInline} style={{ width: '7rem', verticalAlign: 'middle' }} />.
                    Currently, each clone shows itself (becomes visible), goes to a random position, and says "Hello!"
                    The next two steps guide you to modify this program so the output looks like the picture above.
                            <span className={styles.yellowMark}>You should only modify the program part that starts with <img src={whenIStartAsCloneBlock} className={styles.imgInline} style={{ width: '7rem', verticalAlign: 'middle' }} />
                            </span>
                        </p>
                        <p>
                            <StepLabel step="Step 1/2" />
                            Modify the program so each cat clone instead of saying "Hello!", <span className={styles.highlightText}>says a random number picked from the range 1 to 10</span>. Use <img src={pickRandomNum} style={{ width: '9rem', verticalAlign: 'middle', margin: '0.2rem' }} />

                            In case you aren't aware of this: some block can be used as an input to another block if it's compatible with each other (e.g., <img src={blockAsInput} style={{ width: '6rem', verticalAlign: 'middle', margin: '0.1rem' }} /> will make the cat say "3").
                        </p>
                        <p>
                            <StepLabel step="Step 2/2" />
                            Each clone should also change its color randomly.
                            Put <img src={setColorEffect} style={{ width: '9rem', verticalAlign: 'middle', margin: '0.2rem' }} /> next to "say" block. Set the color effect value to <span className={styles.highlightText}> a random value picked from the range 1 to 200.</span>
                        </p>
                    </ScrollableContainer>
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
}