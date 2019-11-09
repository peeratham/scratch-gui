
import React from 'react';
import styles from './deck-content-styles.css';

import originalVsGoal from './custom-block-deck/original-vs-goal.png';
import copyPasteOnly from './custom-block-deck/copy-paste-only.gif';
import expectedMods from './custom-block-deck/expected-modifications.png';




//QI
import modifyBrightness from './custom-block-deck/modify-brightness-effect.png';
import modifyRepeat from './custom-block-deck/modify-repeat.png';

import abstractExtractCustomBlock from './custom-block-deck/abstract-extract-custom-block.png';

import modifyChangeXBy from './custom-block-deck/modify-change-x-by.png';

import expectedImprovement from './custom-block-deck/expected-improvement.png';
import highlightedPart from './custom-block-deck/highlighted-to-extract.png';
import beforeAfter from './custom-block-deck/before-after.png';

import tipsIcon from './custom-block-deck/tips-icon.png';

import featureTogglingImg from './custom-block-deck/feature-toggle.png';


import {
    Label, ColoredLabel, PracticeLabel, StepLabel, QuizLabel, TipsLabel,
    ConceptLabel, GreenFlagButton, StopButton, CheckButtonImg, BeforeAfter, ScrollableContainer
} from './card-components';

export const part2 = {

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
}