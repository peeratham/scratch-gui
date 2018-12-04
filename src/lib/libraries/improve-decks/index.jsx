import React from 'react';
import { FormattedMessage } from 'react-intl';
import libraryIntro from './images/lib-getting-started.jpg';
import stepMove from './images/intro1.gif';
import stepMoveSayHello from './images/intro2.gif';


export default {
    'duplicate-expr': {
        name: (
            <FormattedMessage
                defaultMessage="Reusable Repeats: Expressions"
                description="Name for the 'How to Reuse Data' how-to"
                id="gui.howtos.duplicate-expr.name"
            />
        ),
        tags: ['help', 'duplication', 'clone', 'how', 'can', 'expression'],
        img: libraryIntro,
        steps: [ {
            title: (
                <FormattedMessage
                    defaultMessage="You can reuse recurring block expressions using a variable!"
                    description=""
                    id="gui.howtos.duplicate-expr.overview"
                />
            ),
            image: stepMove
        },   {
            title: (
                <FormattedMessage
                    defaultMessage="Right click the light bulb icon and click on 'Reuse the value'"
                    description=""
                    id="gui.howtos.duplicate-expr.step_click-light-bulb"
                />
            ),
            image: stepMove
        },  {
            title: (
                <FormattedMessage
                    defaultMessage="Give a meaningful name for the variable,"
                    description=""
                    id="gui.howtos.duplicate-expr.step_provide-var-name"
                />
            ),
            image: stepMove
        },
        {
            title: (
                <FormattedMessage
                    defaultMessage="Nicely done! You have just removed duplicate expressions!"
                    description=""
                    id="gui.howtos.add-a-move-block.step_done"
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