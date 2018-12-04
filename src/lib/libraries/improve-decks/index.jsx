import React from 'react';
import {FormattedMessage} from 'react-intl';
import libraryIntro from './images/lib-getting-started.jpg';
import stepMove from './images/intro1.gif';
import stepMoveSayHello from './images/intro2.gif';


export default {
    'intro-move-sayhello': {
        name: (
            <FormattedMessage
                defaultMessage="Hello World"
                description="Name for the 'Getting Started' how-to"
                id="gui.howtos.intro-move-sayhello-hat.name"
            />
        ),
        tags: ['help', 'stuck', 'how', 'can', 'say'],
        img: libraryIntro,
        steps: [{
            video: 'intro-move-sayhello'
        }, {
            title: (
                <FormattedMessage
                    defaultMessage="Add a move block"
                    description="Step name for 'Add a move block' step"
                    id="tips"
                />
            ),
            image: stepMove
        }, {
            title: (
                <FormattedMessage
                    defaultMessage="Click the green flag to start"
                    description="Step name for 'Add A Say Block' step"
                    id="gui.howtos.add-a-move-block.step_stepMoveSayHello"
                />
            ),
            image: stepMoveSayHello
        }, {
            deckIds: [
             
            ]
        }
        ],
        urlId: 'getStarted'
    }
}