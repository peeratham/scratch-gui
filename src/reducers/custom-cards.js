import decks from '../lib/libraries/custom-decks/index.jsx';

const CLOSE_CARDS = 'scratch-gui/custom-cards/CLOSE_CARDS';
const SHRINK_EXPAND_CARDS = 'scratch-gui/custom-cards/SHRINK_EXPAND_CARDS';
const VIEW_CARDS = 'scratch-gui/custom-cards/VIEW_CARDS';
const ACTIVATE_DECK = 'scratch-gui/custom-cards/ACTIVATE_DECK';
const NEXT_STEP = 'scratch-gui/custom-cards/NEXT_STEP';
const PREV_STEP = 'scratch-gui/custom-cards/PREV_STEP';
const DRAG_CARD = 'scratch-gui/custom-cards/DRAG_CARD';
const START_DRAG = 'scratch-gui/custom-cards/START_DRAG';
const END_DRAG = 'scratch-gui/custom-cards/END_DRAG';
const COMPLETE_STEP = 'scratch-gui/custom-cards/COMPLETE_STEP';

const initialState = {
    visible: true, //default visibility
    content: decks,
    activeDeckId: 'scratch-basics',
    step: 0,
    x: 0,
    y: 0,
    expanded: true,
    dragging: false,
    stepCompleted: false,
    completed: []
};

const reducer = function (state, action) {
    if (typeof state === 'undefined') state = initialState;
    switch (action.type) {
    case CLOSE_CARDS:
        return Object.assign({}, state, {
            visible: false
        });
    case SHRINK_EXPAND_CARDS:
        return Object.assign({}, state, {
            expanded: !state.expanded
        });
    case VIEW_CARDS:
        return Object.assign({}, state, {
            visible: true
        });
    case ACTIVATE_DECK:
        return Object.assign({}, state, {
            activeDeckId: action.activeDeckId,
            step: 0,
            visible: true
        });
    case NEXT_STEP:
        if (state.activeDeckId !== null) {
            // analytics.event({
            //     category: 'how-to',
            //     action: 'next step',
            //     label: `${state.activeDeckId} - ${state.step}`
            // });
            return Object.assign({}, state, {
                step: state.step + 1,
                stepCompleted: false //completion reset for the new step
            });
        }
        return state;
    case PREV_STEP:
        if (state.activeDeckId !== null) {
            if (state.step > 0) {
                return Object.assign({}, state, {
                    step: state.step - 1
                });
            }
        }
        return state;
    case DRAG_CARD:
        return Object.assign({}, state, {
            x: action.x,
            y: action.y
        });
    case START_DRAG:
        return Object.assign({}, state, {
            dragging: true
        });
    case END_DRAG:
        return Object.assign({}, state, {
            dragging: false
        });
    case COMPLETE_STEP:
        return Object.assign({}, state, {
            stepCompleted: true,
            completed: Array.from(new Set(state.completed.concat(action.id||state.content[state.activeDeckId].steps[state.step].id)))
        });
    default:
        return state;
    }
};

const activateDeck = function (activeDeckId) {
    return {
        type: ACTIVATE_DECK,
        activeDeckId
    };
};

const viewCards = function () {
    return {type: VIEW_CARDS};
};

const closeCards = function () {
    return {type: CLOSE_CARDS};
};

const shrinkExpandCards = function () {
    return {type: SHRINK_EXPAND_CARDS};
};

const nextStep = function () {
    return {type: NEXT_STEP};
};

const prevStep = function () {
    return {type: PREV_STEP};
};

const dragCard = function (x, y) {
    return {type: DRAG_CARD, x, y};
};

const startDrag = function () {
    return {type: START_DRAG};
};

const endDrag = function () {
    return {type: END_DRAG};
};

const completeStep = function (id) {
    return {type: COMPLETE_STEP, id};
};

export {
    reducer as default,
    initialState as customCardsInitialState,
    activateDeck,
    viewCards,
    closeCards,
    shrinkExpandCards,
    nextStep,
    prevStep,
    dragCard,
    startDrag,
    endDrag,
    completeStep
};