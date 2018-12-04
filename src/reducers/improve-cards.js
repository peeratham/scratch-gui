import analytics from '../lib/analytics';

import decks from '../lib/libraries/improve-decks/index.jsx';

const CLOSE_IMPROVE_CARDS = 'scratch-gui/improve-cards/CLOSE_CARDS';
const VIEW_IMPROVE_CARDS = 'scratch-gui/improve-cards/VIEW_CARDS';
const ACTIVATE_IMPROVE_DECK = 'scratch-gui/improve-cards/ACTIVATE_DECK';
const NEXT_IMPROVE_STEP = 'scratch-gui/improve-cards/NEXT_STEP';
const PREV_IMPROVE_STEP = 'scratch-gui/improve-cards/PREV_STEP';
const DRAG_IMPROVE_CARD = 'scratch-gui/improve-cards/DRAG_CARD';
const START_IMPROVE_DRAG = 'scratch-gui/improve-cards/START_DRAG';
const END_IMPROVE_DRAG = 'scratch-gui/improve-cards/END_DRAG';

const initialState = {
    visible: false,
    content: decks,
    activeDeckId: null,
    step: 0,
    x: 0,
    y: 0,
    dragging: false
};

const reducer = function (state, action) {
    if (typeof state === 'undefined') state = initialState;
    switch (action.type) {
    case CLOSE_IMPROVE_CARDS:
        return Object.assign({}, state, {
            visible: false
        });
    case VIEW_IMPROVE_CARDS:
        return Object.assign({}, state, {
            visible: true
        });
    case ACTIVATE_IMPROVE_DECK:
        return Object.assign({}, state, {
            activeDeckId: action.activeDeckId,
            step: 0,
            visible: true
        });
    case NEXT_IMPROVE_STEP:
        if (state.activeDeckId !== null) {
            analytics.event({
                category: 'how-to',
                action: 'next step',
                label: `${state.activeDeckId} - ${state.step}`
            });
            return Object.assign({}, state, {
                step: state.step + 1
            });
        }
        return state;
    case PREV_IMPROVE_STEP:
        if (state.activeDeckId !== null) {
            if (state.step > 0) {
                return Object.assign({}, state, {
                    step: state.step - 1
                });
            }
        }
        return state;
    case DRAG_IMPROVE_CARD:
        return Object.assign({}, state, {
            x: action.x,
            y: action.y
        });
    case START_IMPROVE_DRAG:
        return Object.assign({}, state, {
            dragging: true
        });
    case END_IMPROVE_DRAG:
        return Object.assign({}, state, {
            dragging: false
        });
    default:
        return state;
    }
};

const activateDeck = function (activeDeckId) {
    return {
        type: ACTIVATE_IMPROVE_DECK,
        activeDeckId
    };
};

const viewCards = function () {
    return {type: VIEW_IMPROVE_CARDS};
};

const closeCards = function () {
    return {type: CLOSE_IMPROVE_CARDS};
};

const nextStep = function () {
    return {type: NEXT_IMPROVE_STEP};
};

const prevStep = function () {
    return {type: PREV_IMPROVE_STEP};
};

const dragCard = function (x, y) {
    return {type: DRAG_IMPROVE_CARD, x, y};
};

const startDrag = function () {
    return {type: START_IMPROVE_DRAG};
};

const endDrag = function () {
    return {type: END_IMPROVE_DRAG};
};

export {
    reducer as default,
    initialState as improveCardsInitialState,
    activateDeck,
    viewCards,
    closeCards,
    nextStep,
    prevStep,
    dragCard,
    startDrag,
    endDrag
};
