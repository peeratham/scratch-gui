
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

import InstructionHint from './instruction-hint';

export const refactorSlides = {
    steps: [
        {
            id: 'simple-slides',
            title: (<p className={styles.contentTitle}><PracticeLabel />Simple Slides</p>),
            content: (
                <div className={styles.contentContainer}>
                    Some simple slides combination of right and up


                </div>
            ),
            projectId: 341014499,
            // active: true
        },
        {
            id: 'slower-slides',
            title: (<p className={styles.contentTitle}><PracticeLabel />Slower Slides</p>),
            content: (
                <div className={styles.contentContainer}>
                    Adjust to make it slower suggesting using repeat and change x/y
                </div>
            ),
            // active: true
        },
        {
            id: 'slide-right-up',
            title: (<p className={styles.contentTitle}><PracticeLabel />Extracting Slide Blocks (Right and Up)</p>),
            content: (
                <div className={styles.contentContainer}>
                    Hard to modify. You can extract a custom block for right and up.
                    Use Code Wizard
                </div>
            ),
            showCodeWizard: true,
            // active: true
        },
        {
            id: 'slide-right-up-manual',
            title: (<p className={styles.contentTitle}><PracticeLabel />Manually Extracting Slide Blocks (Right and Up)</p>),
            content: (
                <div className={styles.contentContainer}>
                    Hard to modify. You can extract a custom block for right and up.
                    Manually
                </div>
            ),
            onlyVisibleToGroup: 'manual',
            // active: true
        },
        {
            id: 'slide-left-down',
            title: (<p className={styles.contentTitle}><PracticeLabel />Extracting Slide Blocks (Left and Down)</p>),
            content: (
                <div className={styles.contentContainer}>
                    Let's practice. See if you can use less hints as possible.
                    <InstructionHint id='hint-summary' content={'hint-summary'}>
                        <InstructionHint id='hint1' content={'hint1'}>
                            <InstructionHint id='hint1.1' content={'hint1.1'}>
                                <InstructionHint id='hint1.1' content={'hint1.1.1'} />
                            </InstructionHint>
                        </InstructionHint>
                        <InstructionHint id='hint2' content={'hint2'}>
                            <InstructionHint id='hint2.1' content={'hint2.1'}>
                                <InstructionHint id='hint2.1' content={'hint2.1.1'} />
                            </InstructionHint>
                        </InstructionHint>
                    </InstructionHint>
                </div>
            ),
            showCodeWizard: true,
            customCheck:'true',
            active: true
        },
        {
            id: 'slide-left-down-manual',
            title: (<p className={styles.contentTitle}><PracticeLabel />Manually Extracting Slide Blocks (Left and Down)</p>),
            content: (
                <div className={styles.contentContainer}>
                    Manually
                </div>
            ),
            onlyVisibleToGroup: 'manual',
            active: true
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
    urlId: 'refactor-slides'
}