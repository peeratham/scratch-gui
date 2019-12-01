import React from 'react';
import styles from './deck-content-styles.css';
import rightArrow from './intro/right-arrow.png';
import slidingSquareOutput1 from './slide/quick-slide.gif';
import basicSlide from './slide/basic-slide.gif';
import changeYByBlock from './slide/change-y-by.png';
import basicSlideRight from './slide/basic-slide-right.png';
import slowerSlideRight from './slide/slower-slide-right.png';
import basicSlideUp from './slide/basic-slide-up.png';
import slowerSlideUp from './slide/slower-slide-up.png';
import featureTogglingImg from './custom-block-deck/feature-toggle.png';
import hintSlideRight from './slide/hint-slide-right.png';
// import hintPlacement from './slide/hint-placement.png';
import extractBlockButton from '../../../components/hint-overlay/extract-button.svg';
import refactoredScript from './slide/refactored-script-2.png';
import renameToSlideRight from './slide/rename-to-slide-right.gif';
import identifySlideRight from './slide/identify-slide-right.png';
import createSlideRight from './slide/create-slide-right.gif';
import provideDefinition from './slide/provide-definition.gif';
import replacedWithCustomBlock from './slide/replaced-with-custom-block.png';
import replacedWithSlideRight from './slide/replaced-with-slide-right.gif';
import refinedSlideRight0 from './slide/refined-slide-right-0.png';
import refinedSlideRight1 from './slide/refined-slide-right-1.png';
import refinedSlideRight2 from './slide/refined-slide-right-2.png';

import slideUpHint from './slide/slide-up-hint.png';
import identifySlideUp from './slide/identify-slide-up.png';
import refactoredSlideUp from './slide/refactored-script-3.png';
import provideDefSlideUp from './slide/provide-definition-slide-up.gif';
import replacedWithSlideUp from './slide/replaced-with-slide-up.gif';
import createSlideUp from './slide/create-slide-up.gif';
import wizardRefactoredSlideUp from './slide/wizard-refactored-slide-up.png';
import renameToSlideUp from './slide/rename-to-slide-up.gif';

import refinedSlideUp0 from './slide/refined-slide-up-0.png';
import refinedSlideUp1 from './slide/refined-slide-up-1.png';
import refinedSlideUp2 from './slide/refined-slide-up-2.png';


import {
    PracticeLabel, StepLabel, TipsLabel, GreenFlagButton, CheckButtonImg, BeforeAfter, HintIcon
} from './card-components';

const slideRightCheck = `
(function () {
    var targetPrototype = workspace.getAllBlocks().filter(b => b.type === 'procedures_prototype' && b.inputList[0].fieldRow[0].getText().toLowerCase() === 'slide right');
    return targetPrototype.length === 1;
})()
//@ sourceURL=slideRightCheck.js;
`

const adjustedSlideRightCheck = `
(function () {
    const checkIfSlideRight = p => p.inputList[0].fieldRow[0].getText().toLowerCase() === 'slide right';
    const targetCustomBlock = workspace.getAllBlocks()
        .filter(b => b.type === 'procedures_definition'
            && b.getChildren().filter(p =>
                p.type === 'procedures_prototype' && checkIfSlideRight(p)).length > 0)[0];
    var blockList = dfsTraverse(targetCustomBlock);
    // repeat
    var repeatBlock = blockList.filter(b => b.type === 'control_repeat')[0];
    var timeInput = repeatBlock.getChildren().filter(c => c.type === 'math_whole_number')[0];
    var correctTimeInput = timeInput.getFieldValue('NUM') === '10';
    // change x by

    var changeXBlock = blockList.filter(b => b.type === 'motion_changexby')[0];
    var changeByVal = changeXBlock.getChildren().filter(c => c.type === 'math_number')[0];
    var correctChangeBy = changeByVal.getFieldValue('NUM') === '10';
    return correctTimeInput && correctChangeBy;
})()
//@ sourceURL=adjustedSlideRightCheck.js;
`;

const slideUpCheck = `
(function () {
    var targetPrototype = workspace.getAllBlocks().filter(b => b.type === 'procedures_prototype' && b.inputList[0].fieldRow[0].getText().toLowerCase() === 'slide up');
    return targetPrototype.length === 1;
})()
//@ sourceURL=slideUpCheck.js;
`

const adjustedSlideUpCheck = `
(function () {
    const checkIfSlideUp = p => p.inputList[0].fieldRow[0].getText().toLowerCase() === 'slide up';

    const targetCustomBlock = workspace.getAllBlocks()
        .filter(b => b.type === 'procedures_definition'
            && b.getChildren().filter(p =>
                p.type === 'procedures_prototype' && checkIfSlideUp(p)).length>0)[0];
    const blockList = dfsTraverse(targetCustomBlock);
    // repeat
    const repeatBlock = blockList.filter(b => b.type === 'control_repeat')[0];
    const timeInput = repeatBlock.getChildren().filter(c => c.type === 'math_whole_number')[0];
    const correctTimeInput = timeInput.getFieldValue('NUM') === '10';
    // change x by

    const changeYBlock = blockList.filter(b => b.type === 'motion_changeyby')[0];
    const changeByVal = changeYBlock.getChildren().filter(c => c.type === 'math_number')[0];
    const correctChangeBy = changeByVal.getFieldValue('NUM') === '10';
    return correctTimeInput && correctChangeBy;
})()
//@ sourceURL=adjustedSlideUpCheck.js;
`;

export const studyTasks2 = {
    steps: [
        {
            id: 'intro-instructions',
            title: (
                <p className={styles.contentTitle}>Part 2: Improving Code with Custom Blocks</p>
            ),
            content:
                (
                    <div className={styles.contentContainer}>
                        <p>

                        </p>
                        <p> You will go through a sequence of cards in this deck.
                            <span className={styles.yellowMark}> The last card will provide you with the <b> completion code </b> to copy and paste into the main survey page.</span>
                        </p>
                        <p>
                            <span className={styles.yellowMark}>The cards with <PracticeLabel /> label require you to complete some simple programming tasks.</span>
                            For these cards, you will need to check your work by clicking <CheckButtonImg /> before you can go to the next card.
                        </p>
                        <p>
                            Click <img src={rightArrow} style={{ width: '2rem', verticalAlign: 'middle' }} /> to go to the next card.
                        </p>
                    </div>
                ),
            projectId: 330600515
        },
        {
            id: 'basic-slide',
            title: (<p className={styles.contentTitle}><PracticeLabel />Go Square Go!</p>),
            content: (
                <div className={styles.contentContainer}>
                    <p>
                        <img src={basicSlide} className={styles.contentImage} style={{ width: '220px', float: 'right' }} />
                        Program the blue square to slide through all checkpoints. The result should look like the animation on the right. You will add to the script that starts with <b> when I receive "Square Go"</b> block.
                        Each checkpoint is placed at one of the corners of square grid whose each side is 100 steps long.
                        <span className={styles.yellowMark}>A basic slide is <b>a 100-step move in a given direction</b>.</span>
                    </p>
                    <p><StepLabel step="Step 1" />
                        <img src={basicSlideRight} className={styles.contentImage} style={{ width: '100px', float: 'left' }} />
                        One "slide right" to the first checkpoint is completed for you as an example! 
                        The "wait" block is used before "change x by 100" block so that the square takes a little pause before the move.
                        For now, you will need a <b>wait</b> block like the example before each move, otherwise the movement will be too fast for your eyes to see.
                        Click <GreenFlagButton /> to see how this basic slide right looks like.
                    </p>

                    <p>
                        <StepLabel step="Step 2" />Your turn! Move the square upward to the second checkpoint which is 100 steps above the first one. Following what we did for the first checkpoint but use
                        <img src={changeYByBlock} className={styles.imgInline} style={{ width: '110px' }} /> the <b>block that changes the character object's y</b> instead.
                    </p>
                    <p>
                        <StepLabel step="Step 3" />Complete the remaining two checkpoints! Click <CheckButtonImg /> when you are done.
                    </p>
                </div>
            ),
            projectId: 341014499,
            // customCheck: "(function(){var b = workspace.getAllBlocks().filter(b=>b.type==='event_whenbroadcastreceived').filter(b=>b.inputList[0].fieldRow[1].getText()==='Square Go')[0]; return b.type==='event_whenbroadcastreceived';})()"
            expected: [["event_whenbroadcastreceived", "control_wait", "motion_changexby", "control_wait", "motion_changeyby", "control_wait", "motion_changeyby", "control_wait", "motion_changexby"]]
        },
        {
            id: 'smoother-slide',
            title: (<p className={styles.contentTitle}><PracticeLabel />Animate the slide moves</p>),
            content: (
                <div className={styles.contentContainer}>
                    <img src={slidingSquareOutput1} className={styles.contentImage} style={{ width: '220px', float: 'right' }} />
                    <p>
                        Now that you get it to work we can start making it look better. The square movement was too dramatic appearing at one checkpoint to another. Just like how we use the <b>repeat</b> block to help animate a jump movement in Part 1, we can do the same here to animate the slides.
                    </p>
                    <div>
                        <p>
                            <StepLabel step="Step 1" /> <b>Animate slide right</b><br />
                            Change all program parts that move the square to the right to <span className={styles.yellowMark}>repeat the change x by 20 block for 5 times </span> as shown below.
                        </p>
                        <BeforeAfter before={basicSlideRight} after={slowerSlideRight} w1='120px' w2='120px' />
                    </div>
                    <div>
                        <p><StepLabel step="Step 2" /> <b>Animate slide up</b><br />
                            Make a similar change to all recurring program parts that move the square up.
                        </p>
                        <BeforeAfter before={basicSlideUp} after={slowerSlideUp} w1='120px' w2='120px' />
                    </div>
                </div>
            ),
            expected: [["event_whenbroadcastreceived", "control_repeat", "motion_changexby", "control_repeat", "motion_changeyby", "control_repeat", "motion_changeyby", "control_repeat", "motion_changexby"]]
        },
        {
            id: 'reflection',
            title: (<p className={styles.contentTitle}>Let's Slow Down to Reflect</p>),
            content: (
                <div className={styles.contentContainer}>
                    <p>
                        <img src={slowerSlideRight} className={styles.contentImage} style={{ width: '110px', float: 'right' }} />
                        Your program works great! But <b>it  was not easy to understand for someone who hasn't seen it before</b>. The recurring blob of blocks such as the one on the right was not obvious at first glance that it makes the square slide right.
                    </p>
                    <p>
                        <b>Nor was the code easy to modify!</b> You probably felt that it was too repetitive having to modify parts that had been replicated. For example, when tweaking slide right to be slower, you had to make the same change to not just one but all of its duplicate parts.
                    </p>
                    <p>
                        If you recall, in Part 1 you already had a brief experience creating a custom block "jump". <b>For the remaining cards, you will learn to use custom block to make your program easier to understand and modify by extracting a custom block from recurring program parts.</b>
                    </p>
                </div>
            )
        },
        {
            id: 'automated-refactor-slide-right',
            title: (<p className={styles.contentTitle}>Extract a slide right custom block with Code Wizard</p>),
            content: (
                <div className={styles.contentContainer}>
                    <p style={{ paddingBottom: '1rem' }}>
                        <img src={slowerSlideRight} className={styles.contentImage} style={{ width: '100px', float: 'left' }} />
                        First identify the part that you want to extract as a custom block (i.e., a recurring part that makes the square slide right (shown on the left).
                        Then follow the steps below to extract custom block using Code Wizard.
                    </p>
                    <p style={{ paddingBottom: '1rem' }}>
                        <StepLabel step="Step 1" /> <b>Toggle Code Wizard <br /> <img src={featureTogglingImg} className={styles.imgInline} style={{ width: '200px', padding: '0.5rem' }} /> <br />
                            Look for hints <HintIcon /> placed next to the corresponding recurring parts.</b><br />

                        <img src={hintSlideRight} className={styles.contentImage} style={{ width: '150px', float: 'right' }} />
                        When mouse over the hint icon, you should see the parts that are duplicates of one another being highlighted.
                    </p>
                    <p style={{ paddingBottom: '1rem' }}>
                        <StepLabel step="Step 2" /> <b>Extract</b><br />
                        Click the hint icon <HintIcon /> to see its options.
                        With the correct part selected, click <img src={extractBlockButton} className={styles.imgInline} style={{ width: '2.5rem' }} />  to extract that part as a custom block. <br />
                        <img src={refactoredScript} className={styles.contentImage} style={{ width: '250px', float: 'left' }} />
                        You should see a new custom block similar to ["DoSomething.."] get created and all the recurring parts now being replaced with the newly created custom block as shown on the left.
                    </p>
                    <p>
                        <StepLabel step="Step 3" /> <b>Rename the extracted custom block to something more descriptive. </b>
                        Let's rename it to <b>"slide right"</b> <br />
                        <img src={renameToSlideRight} className={styles.contentImage} style={{ width: '320px' }} />
                    </p>
                    <p><StepLabel step="Finally" />
                        You have just improved your code. Click <GreenFlagButton /> to test whether your program works the same like before.
                    </p>
                </div>
            ),
            onlyVisibleToGroup: 'automated',
            showCodeWizard: true,
            expected: [["procedures_definition", "control_repeat", "motion_changexby"],
            ["event_whenbroadcastreceived", "procedures_call", "control_repeat", "motion_changeyby", "control_repeat", "procedures_call", "motion_changeyby"]],
            customCheck: slideRightCheck,
            // projectId: 345796768 //test
        },
        {
            id: 'manual-refactor-slide-right',
            title: (<p className={styles.contentTitle}>Extract a slide right custom block manually</p>),
            content: (
                <div>
                    <div>
                        <p>
                            You will learn how to extract "slide right" custom block from the program parts that perform "slide right". The left picture shows the highlighted parts that we will extract to improve the code and the right shows the final improved code.
                        </p>
                        <BeforeAfter before={identifySlideRight} after={replacedWithCustomBlock} w1='140px' w2='250px' />
                    </div>
                    <p><StepLabel step="Step 1" /><b>Create a custom block and name it "slide right"</b><br />
                        <img src={createSlideRight} className={styles.contentImage} style={{ width: '320px' }} />
                    </p>
                    <p><StepLabel step="Step 2" /><b>Provide the definition for the custom block</b><br />
                        Use slide right program part as the custom block's definition by copying the part and putting it under <b>define "slide right"</b> block.
                        <img src={provideDefinition} className={styles.contentImage} style={{ width: '300px' }} />
                    </p>
                    <p><StepLabel step="Step 3" /><b>Replace the recurring parts with custom blocks</b><br />
                        Replace all the recurring parts with "slide right" custom block in the block palette under MyBlock.
                        <img src={replacedWithSlideRight} className={styles.contentImage} style={{ width: '380px' }} />
                    </p>
                    <p><StepLabel step="Finally" />
                        You have just improved your code. Click <GreenFlagButton /> to test whether your program works the same like before.
                    </p>
                </div>
            ),
            expected: [["procedures_definition", "control_repeat", "motion_changexby"],
            ["event_whenbroadcastreceived", "procedures_call", "control_repeat", "motion_changeyby", "control_repeat", "procedures_call", "motion_changeyby"]],
            customCheck: slideRightCheck,
            onlyVisibleToGroup: 'manual',
            // projectId: 341014499 //test
        },
        {
            id: 'refine-slide-right',
            title: (<p className={styles.contentTitle}>Let's refine the slide right</p>),
            content: (
                <div>
                    <div>
                        <p><StepLabel step="Adjustment 1" /><b>Make the slide even slower</b><br />
                            Let's <b>repeat</b> the <b>"change x by 10"</b> block <b>10</b> times (Note that it's still 10 x 10 = 100 steps).
                    </p>
                        <BeforeAfter before={refinedSlideRight0} after={refinedSlideRight1} w1='120px' w2='120px' />
                    </div>

                    <div>
                        <p><StepLabel step="Adjustment 2" /><b>Add a small pause</b><br />
                            Add a wait 0.1 sec before start moving.
                    </p>
                        <BeforeAfter before={refinedSlideRight1} after={refinedSlideRight2} w1='120px' w2='120px' />
                    </div>
                </div>
            ),
            customCheck: adjustedSlideRightCheck,
            // projectId: 345796768 //test
        },
        {
            id: 'manual-refactor-slide-up',
            title: (<p className={styles.contentTitle}>Extract a slide up custom block manually</p>),
            content: (
                <div>
                    <div>
                        <p>
                            You learned how to extract a "slide right" custom block using Code Wizard previously.
                            <b> In this card, you will learn how to extract "slide up" custom block manually. </b>
                            The left picture shows the highlighted parts that we will extract and the right shows the improved version after the extraction.
                        </p>
                        <BeforeAfter before={identifySlideUp} after={refactoredSlideUp} w1='140px' w2='180px' />
                    </div>
                    <p><StepLabel step="Step 1" /><b>Create a custom block and name it "slide up"</b><br />
                        <img src={createSlideUp} className={styles.contentImage} style={{ width: '380px' }} />
                    </p>
                    <p>
                        <img src={provideDefSlideUp} className={styles.contentImage} style={{ width: '220px', float: 'right' }} />
                        <StepLabel step="Step 2" /><b>Give a definition</b><br />
                        Use slide up program part as the custom block's definition by copying the part and putting it under <b>define "slide right"</b> block.
                    </p>
                    <p><StepLabel step="Step 3" /><b>Replace the recurring parts with custom blocks</b><br />
                        Replace all the recurring parts with "slide up" custom block in the block palette under MyBlock.
                        <img src={replacedWithSlideUp} className={styles.contentImage} style={{ width: '380px' }} />
                    </p>
                    <p><StepLabel step="Finally" />
                        You have just improved your code. Click <GreenFlagButton /> to test whether your program works the same like before.
                    </p>
                </div>
            ),
            expected: [["procedures_definition", "control_repeat", "motion_changeyby"],
            ["event_whenbroadcastreceived", "procedures_call", "procedures_call", "procedures_call", "procedures_call"]
            ],
            customCheck: slideUpCheck,
            onlyVisibleToGroup:'automated',
            // projectId: 345811773 //test
        },
        {
            id: 'automated-refactor-slide-up',
            title: (<p className={styles.contentTitle}>Extract a slide up custom block with Code Wizard</p>),
            content: (
                <div className={styles.contentContainer}>
                    <p>
                        You learned how to extract a "slide right" custom block manually. In this card, you will learn how to extract "slide up" using Code Wizard.
                    </p>
                    <BeforeAfter before={identifySlideUp} after={refactoredSlideUp} w1='140px' w2='180px' />
                    <p>
                        <StepLabel step="Step 1" /> <b>Toggle Code Wizard </b><br /> <img src={featureTogglingImg} className={styles.imgInline} style={{ width: '200px', padding: '0.5rem' }} /> <br />
                        When mouse over the hint icon, you should see the recurring parts being highlighted. There is one recurring part next to each other.
                        <img src={slideUpHint} className={styles.contentImage} style={{ width: '150px' }} />
                    </p>
                    <p style={{ paddingBottom: '1rem' }}>
                        <StepLabel step="Step 2" /> <b>Extract</b><br />
                        Click the hint icon <HintIcon /> to see its options.
                        With the correct part selected, click <img src={extractBlockButton} className={styles.imgInline} style={{ width: '2.5rem' }} />  to extract that part as a custom block. <br />
                        <img src={wizardRefactoredSlideUp} className={styles.contentImage} style={{ width: '320px' }} /><br />
                        You should see a new custom block's definition similar to ["DoSomething.."] get created and all the recurring parts now being replaced with the newly created custom block as shown on the left.
                    </p>
                    <p> <StepLabel step="Step 3" /> <b>Rename the extracted custom block to something more descriptive. </b>
                        Let's rename it to <b>"slide up"</b> <br />
                        <img src={renameToSlideUp} className={styles.contentImage} style={{ width: '320px' }} />
                    </p>
                    <p><StepLabel step="Finally" />
                        You have just improved your code. Click <GreenFlagButton /> to test whether your program works the same like before.
                    </p>
                </div>
            ),
            onlyVisibleToGroup: 'manual',
            showCodeWizard: true,
            expected: [["procedures_definition", "control_repeat", "motion_changeyby"],
            ["event_whenbroadcastreceived", "procedures_call", "procedures_call", "procedures_call", "procedures_call"]
            ],
            customCheck: slideUpCheck,
            // projectId: 345681254 //test
        },
        {
            id: 'refine-slide-up',
            title: (<p className={styles.contentTitle}>Let's refine the slide up</p>),
            content: (
                <div>
                    <p>
                        Let's adjust slide up movement to be consistent with the slide right one.
                    </p>
                    <div>
                        <p><StepLabel step="Adjustment 1" /><b>Make the slide even slower</b><br />
                            Let's <b>repeat</b> the <b>"change y by 10"</b> block <b>10</b> times.
                    </p>
                        <BeforeAfter before={refinedSlideUp0} after={refinedSlideUp1} w1='120px' w2='120px' />
                    </div>

                    <div>
                        <p><StepLabel step="Adjustment 2" /><b>Add a small pause</b><br />
                            Add a wait 0.1 sec before start moving.
                    </p>
                        <BeforeAfter before={refinedSlideUp1} after={refinedSlideUp2} w1='120px' w2='120px' />
                    </div>
                </div>
            ),
            customCheck: adjustedSlideUpCheck,
            // projectId: 345811773 //test
        },
        {
            id: 'copy-completion-code',
            completionCode: 'myblocks',
            recordCompletion: true
        }
    ]

}