import React from 'react';
import ReactDOM from 'react-dom';
import { compose } from 'redux';

import AppStateHOC from '../lib/app-state-hoc.jsx';
import GUI from '../containers/gui.jsx';
import HashParserHOC from '../lib/hash-parser-hoc.jsx';
import TitledHOC from '../lib/titled-hoc.jsx';
import log from '../lib/log.js';

const onClickLogo = () => {
    window.location = 'https://scratch.mit.edu';
};

const handleTelemetryModalCancel = () => {
    log('User canceled telemetry modal');
};

const handleTelemetryModalOptIn = () => {
    log('User opted into telemetry');
};

const handleTelemetryModalOptOut = () => {
    log('User opted out of telemetry');
};

/*
 * Render the GUI playground. This is a separate function because importing anything
 * that instantiates the VM causes unsupported browsers to crash
 * {object} appTarget - the DOM element to render to
 */
export default appTarget => {
    GUI.setAppElement(appTarget);

    // note that redux's 'compose' function is just being used as a general utility to make
    // the hierarchy of HOC constructor calls clearer here; it has nothing to do with redux's
    // ability to compose reducers.
    const WrappedGui = compose(
        AppStateHOC,
        HashParserHOC,
        TitledHOC
    )(GUI);

    // TODO a hack for testing the backpack, allow backpack host to be set by url param
    const backpackHostMatches = window.location.href.match(/[?&]backpack_host=([^&]*)&?/);
    const backpackHost = backpackHostMatches ? backpackHostMatches[1] : null;

    const scratchDesktopMatches = window.location.href.match(/[?&]isScratchDesktop=([^&]+)/);
    let simulateScratchDesktop;
    if (scratchDesktopMatches) {
        try {
            // parse 'true' into `true`, 'false' into `false`, etc.
            simulateScratchDesktop = JSON.parse(scratchDesktopMatches[1]);
        } catch {
            // it's not JSON so just use the string
            // note that a typo like "falsy" will be treated as true
            simulateScratchDesktop = scratchDesktopMatches[1];
        }
    }

    if (process.env.NODE_ENV === 'production' && typeof window === 'object') {
        // Warn before navigating away
        window.onbeforeunload = () => true;
    }

    ReactDOM.render(
        // important: this is checking whether `simulateScratchDesktop` is truthy, not just defined!
        simulateScratchDesktop ?
            <WrappedGui
                isScratchDesktop
                showTelemetryModal
                canSave={false}
                onTelemetryModalCancel={handleTelemetryModalCancel}
                onTelemetryModalOptIn={handleTelemetryModalOptIn}
                onTelemetryModalOptOut={handleTelemetryModalOptOut}
            /> :
            <WrappedGui
                backpackVisible
                showComingSoon
                // showPreviewInfo
                backpackHost={backpackHost}
                canSave={false}
                onClickLogo={onClickLogo}
                // customGuiState
                showCustomMenuBar={true}
                userStudyMode={true}
                hintMode={true}    //to set from user study site
                showTutorial={false}
                showCustomGuiDevPanel={false}
                procedureShareToggleVisible={true}
                tutorialDevMode={false}
                showQualityHint={false}
                showSurveyCallBack={(origin) => { console.log(`open the modal survey! origin: ${origin}`) }}
                //////////////////////
                qualityHintToggleVisible={true} //  to set user study site (true: hnrf, false: rfg)
                ////////////////////
                qisServiceEndpoint={
                    // 'https://quality-tutor-engine.appspot.com'
                    'http://localhost:8080'
                }
                customCardsVisible={true}
                customDeckId={
                    // 'scratch-basics'
                    // 'color-shade-generator'
                    'particle-radiator'
                }
                projectId={
                    // scratch-basics
                    // "326026661"
                    // color-shade-generator 
                    // "326637227"
                    // garden
                    // 338515653
                    // particle-radiator (328143397)
                    338507065
                    //test-custom-selection // duplicated code populated
                    // 329224756
                    //test reduce var scope
                    // 330600515
                    // test extract parent sprite
                    // 331488059
                    // 331812747
                    // test extract constant
                    // 326142227
                    // empty
                    // 330600515
                }
            />,
        appTarget);
};
