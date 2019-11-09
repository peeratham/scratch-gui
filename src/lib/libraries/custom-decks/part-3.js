
import React from 'react';
import styles from './deck-content-styles.css';


// Intro
//study tasks
import programExplained3Particles from './study-tasks/original-program-explained-three-particles.png';
import threeParticleBefore from './study-tasks/3particle-before.gif';
import threeParticleAfter2 from './study-tasks/3particle-after2.gif';

import whenIStartAsCloneBlock from './study-tasks/when-i-start-as-clone.png';
import modificationTarget from './study-tasks/highlighted-modification-target-2.png';

import moveFurther from './study-tasks/move-further.gif';
import growBigger from './study-tasks/grow-bigger.gif';
import gradualFade from './study-tasks/gradual-fade.gif';
import addingSpin from './study-tasks/adding-spin.gif';
import colorEffect from './study-tasks/color-effect.gif';
import turnRightBlock from './study-tasks/turn-right.png';
import changeColorEffectBlock from './study-tasks/change-color-effect.png';


import changeSizeByImg from './study-tasks/change-size-by.png';
import changeGhostEffect from './study-tasks/change-ghost-effect.png';
import moveBlock from './study-tasks/move-block.png';
import saveFeature from './study-tasks/save-feature.png';
import referenceGuide from './study-tasks/reference-guide.png';
import changeRepeatInputHint from './study-tasks/change-repeat-input-hint.png';

import {
    Label, ColoredLabel, PracticeLabel, StepLabel, QuizLabel, TipsLabel,
    ConceptLabel, GreenFlagButton, StopButton, CheckButtonImg, BeforeAfter, ScrollableContainer
} from './card-components';

export const part3 = {
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