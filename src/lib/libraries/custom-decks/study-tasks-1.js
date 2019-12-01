import React from 'react';
import styles from './deck-content-styles.css';
import gfClickedBlock from './intro/gf-clicked.png';
import undo from './intro/undo.gif';
import deleteCode from './intro/delete-code.gif';
import moveSay from './intro/move-say.gif';
import gfMoveSay from './intro/gf-move-say.gif';
import squareJumpOutput from './intro/square-jump-output.gif';
import jumpUpward from './intro/jump-upward-code.png';
import makeABlockResult from './intro/make-a-block-result.png';
import jump01 from './intro/jump-block-01.gif';
import rightArrow from './intro/right-arrow.png';
import movingPart from './intro/moving-part.gif';
import useJump from './intro/use-jump.gif';
import defineBasicJump from './intro/define-basic-jump.png';
import defineAnimatedJump from './intro/define-animated-jump.png';
import ifTouchingThenJump from './intro/if-touching-then-jump.png';
import initialJumpingSquare from './intro/initial-jumping-square.gif';


import {
    PracticeLabel, StepLabel, TipsLabel, GreenFlagButton, CheckButtonImg, BeforeAfter
} from './card-components';

export const studyTasks1 = {
    steps: [
        {
            id: 'intro-instructions',
            content:
                (
                    <div className={styles.contentContainer}>
                        <p> You will go through a sequence of cards in this deck.
                            <span className={styles.yellowMark}> The last card will provide you with the <b> completion code </b> to copy and paste into the main survey page.</span>
                        </p>

                        <p>
                            You can drag this card deck around and place it wherever you like.
                        </p>

                        <p>
                            <span className={styles.yellowMark}>The cards with <PracticeLabel /> label require you to complete some simple programming tasks.</span>
                            For those cards, you will need to check your work by clicking <CheckButtonImg /> before you can go to the next card.
                        </p>
                        <p>
                            Click <img src={rightArrow} style={{ width: '2rem', verticalAlign: 'middle' }} /> to go to the next card.
                        </p>
                    </div>
                ),
            title: (
                <p className={styles.contentTitle}>Part 1: The Basics of Scratch</p>
            ),
            projectId: 330600515
        },
        {
            id: 'move-say',
            title: (<p className={styles.contentTitle}><PracticeLabel />Create Your First Scratch Program</p>),
            content: (
                <div className={styles.contentContainer}>
                    <p>
                        <StepLabel step="step 1/2" /><b>Create a simple block sequence: </b>
                        The yellow square is the active <b>character object</b> controlled by your code.
                        Make the square move and say "hello" for 2 seconds as shown below:
                    <img src={moveSay} className={styles.contentImage} style={{ width: '320px' }} />
                    </p>

                    <p>
                        Scratch provides a wide range of blocks that are color-coded according to their category (e.g., Motion, Looks, etc.). You can drag them from the <b>block palette</b> and put them together in the <b>workspace</b>. Each block performs a specific action on the character object such as "move" the character object forward.
                    </p>
                    <p>
                        The sequence of blocks you created is called a <b>"script"</b>.  Clicking the script to make it run---executing each block in sequence.  <span className={styles.yellowMark}>Clicking a script is a useful way to experiment or test a specific part of the program.</span>
                    </p>

                    <p>
                        <StepLabel step="step 2/2" /><b>Run your first program: </b>
                        Place <img src={gfClickedBlock} className={styles.block} /> block at the top of the script you created so that it will be run when the <GreenFlagButton /> button is clicked. Click <GreenFlagButton /> to run your first Scratch program!
                    <img src={gfMoveSay} className={styles.contentImage} style={{ width: '320px' }} />
                    </p>
                </div>
            ),
            expected: [["event_whenflagclicked", "motion_movesteps", "looks_sayforsecs"]],
            shouldCleanup: true,
            projectId: 330600515
        },
        {
            id: 'essential-practice',
            title: (<p className={styles.contentTitle}><TipsLabel />Essential Scratch Basics</p>),
            content: (
                <div className={styles.contentContainer}>
                    <p>
                        Although Scratch is a novice programming language, it can still be quite challenging for a complete beginner to work through this quick tutorial. We compile a list of basic Scratch tips that will save you a headache and help you finish this tutorial in the most efficient way possible.
                        You should go through these tips and try to practice with a sample program we provided.
                    </p>

                    <p>
                        <b>Undo previous actions: </b>
                        <img src={undo} className={styles.contentImage} style={{ width: '240px', float: 'left' }} />
                        It's very likely you will make some mistakes (e.g., putting blocks in the wrong place). To undo, you can right click (empty space) and select "undo" or press <b>ctrl+z</b>.
                    </p>
                    <p>
                        <b>Selecting and moving blocks: </b>
                        <img src={movingPart} className={styles.contentImage} style={{ width: '196px', float: 'left' }} />
                        When you drag a block, the whole sequence of blocks connected below it will also follow.
                        For example, to move only "turn" and "move" blocks except the "say" block and put them inside the "repeat" block,
                        we may need to disconnect the unwanted blocks in the sequence.
                    </p>
                    <p>
                        <b>Delete blocks:</b>
                        Drag a block or a sequence of blocks in the workspace and drop it in the block palette to delete.
                        <img src={deleteCode} className={styles.contentImage} style={{ width: '400px' }} />
                    </p>
                    <p>
                        <b>Duplicate blocks:</b>
                        Right click at the block and select "duplicate" will copy the whole sequence that follows that block. You may delete the part of the sequence that you don't need.
                    </p>
                </div>
            ),
            shouldCleanup: true,
            setupCode: '<xml xmlns="http://www.w3.org/1999/xhtml"><block type="event_whenflagclicked" id="[2ONjiAOc?]9eF3Z+QEM" x="249" y="272"><next><block type="motion_movesteps" id="Eb$$fG-9A]-tmVr~n[I#"><value name="STEPS"><shadow type="math_number" id="zl+8(`n`[f!Yfbpqh8X;"><field name="NUM">10</field></shadow></value><next><block type="looks_sayforsecs" id="^o~k~D6p4S1OvDvty:o:"><value name="MESSAGE"><shadow type="text" id="Z1A$+3nshB^`%ynv!?g/"><field name="TEXT">Hello!</field></shadow></value><value name="SECS"><shadow type="math_number" id="(C8eEKy,s06ZsJ}L~94e"><field name="NUM">2</field></shadow></value></block></next></block></next></block><block type="event_whenflagclicked" id="f%3[i7d7;8coUxe2$AZo" x="270" y="581"><next><block type="motion_movesteps" id="d]dEohLyWA|o[ZH.9L3j"><value name="STEPS"><shadow type="math_number" id=":4;bMSuV,oEeiUB/WV)%"><field name="NUM">10</field></shadow></value><next><block type="control_repeat" id=".is6W,trwFwbg)M0y,mh"><value name="TIMES"><shadow type="math_whole_number" id="!.DV*]$eZTl`=dK~7T5w"><field name="NUM">10</field></shadow></value><next><block type="motion_turnright" id="V6PUt`{jMl.vI,Z:o)Lh"><value name="DEGREES"><shadow type="math_number" id="4tM6y)3O-CdrR]T~@tvP"><field name="NUM">15</field></shadow></value><next><block type="motion_movesteps" id="!#W6RiH0OmP+)=I;)odk"><value name="STEPS"><shadow type="math_number" id="}-%c*DkpyyOnR3S*~3+8"><field name="NUM">10</field></shadow></value><next><block type="looks_say" id="{ghFDWY81BS4`trFX$:y"><value name="MESSAGE"><shadow type="text" id=".|XU,lw$~xBP)%)!YtN8"><field name="TEXT">Hello!</field></shadow></value></block></next></block></next></block></next></block></next></block></next></block></xml>'
        },
        {
            id: 'create-jump-block',
            title: (<p className={styles.contentTitle}><PracticeLabel />Create Your Own Block</p>),
            content: (
                <div className={styles.contentContainer}>
                    <BeforeAfter before={initialJumpingSquare} after={squareJumpOutput} />
                    <p> You will program the square to do a jump to avoid the moving purple spikes.
                    </p>
                    <p>
                        <StepLabel step="Step 0" /><b>Click <GreenFlagButton /> to see how the initial program looks like. </b>
                        <img src={ifTouchingThenJump} className={styles.contentImage} style={{ width: '200px', float: 'left' }} />
                        A good time to jump is when the square starts touching the purple color.
                        Unfortunately, Scratch does not have a "jump" block but we can create one!

                        The idea is to move the square up and down. You will learn to create your own block or a <b>custom block</b> called "jump" that we can use in our program (like the one on the right) to make the square jump .
                    </p>
                    <p>
                        <StepLabel step="Step 1" /> <b>Create a custom block</b>:
                        <img src={jump01} className={styles.contentImage} style={{ width: '400px' }} />
                        You should see two things being created (shown in the picture below): 1) your <b>jump</b> custom block in the palette (left) and 2) the <b>define jump</b> block in the workspace (right)<br />
                        <img src={makeABlockResult} className={styles.contentImage} />
                    </p>
                    <p>
                        <StepLabel step="Step 2" /><b>Use the "jump" block in your code</b>:
                        It will do nothing yet because we did not provide the definition of what jump will do.
                        <img src={useJump} className={styles.contentImage} />
                    </p>
                    <p>
                        <img src={defineBasicJump} className={styles.contentImage} style={{ width: '120px', float: 'right' }} /><br />
                        <StepLabel step="Step 3" /><b>Provide the definition for jump:</b><br />
                        Put what jump will do. Let's try the basic jump by moving the square up, take a little pause and moving it down. Then click <GreenFlagButton /> to see the result.
                    </p>
                    <p>
                        <img src={defineAnimatedJump} className={styles.contentImage} style={{ width: '120px', float: 'left' }} /><br />
                        <StepLabel step="Step 4" />The square moves up and down to avoid the moving spikes but it does not animate the movement smoothly. Let's improve it by replacing the old definition with a new one (shown on the right). The idea is to move the square little by little  (changing y 8 steps for 5 times which gives a change of 40 steps in total to animate the up movement and the same for down movement but we use -8 steps for the change in y).
                    </p>
                    <p>
                        Click <GreenFlagButton /> to see the result.
                    </p>
                </div>
            ),
            projectId:
                 339735285
                //  ||
                // 346126463 //test
            ,
            expected: [
                ["event_whenflagclicked", "control_forever", "control_if", "sensing_touchingcolor", "procedures_call"],
                ["procedures_definition", "control_repeat", "motion_changeyby", "control_repeat", "motion_changeyby"]
            ]
        },
        {
            id: 'copy-completion-code',
            title: (<p className={styles.contentTitle}>Congratulations! You have completed Part 1.</p>),
            completionCode: 'jumpstart',
            recordCompletion: true
        }
    ]
}