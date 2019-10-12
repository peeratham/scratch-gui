import {connect} from 'react-redux';

import {
    activateDeck,
    closeCards,
    shrinkExpandCards,
    nextStep,
    prevStep,
    dragCard,
    startDrag,
    endDrag,
    completeStep
} from '../reducers/custom-cards';

// import {
//     openTipsLibrary
// } from '../reducers/modals';

import CustomCardsComponent from '../components/custom-cards/custom-cards.jsx';

const mapStateToProps = (state, ownProps) => ({
    visible: true,
    content: state.scratchGui.customCards.content,
    activeDeckId: ownProps.activeDeckId || state.scratchGui.customCards.activeDeckId,
    step: state.scratchGui.customCards.step,
    expanded: state.scratchGui.customCards.expanded,
    x: state.scratchGui.customCards.x,
    y: state.scratchGui.customCards.y,
    isRtl: state.locales.isRtl,
    locale: state.locales.locale,
    dragging: state.scratchGui.customCards.dragging,
    stepCompleted: state.scratchGui.customCards.stepCompleted,
    completed: state.scratchGui.customCards.completed,
    vm: state.scratchGui.vm,
    isStarted: state.scratchGui.vmStatus.started,
});

const mapDispatchToProps = dispatch => ({
    onActivateDeckFactory: id => () => dispatch(activateDeck(id)),
    onShowAll: () => {
        dispatch(openTipsLibrary());
        dispatch(closeCards());
    },
    onCloseCards: () => dispatch(closeCards()),
    onShrinkExpandCards: () => dispatch(shrinkExpandCards()),
    onNextStep: () => dispatch(nextStep()),
    onPrevStep: () => dispatch(prevStep()),
    onDrag: (e_, data) => dispatch(dragCard(data.x, data.y)),
    onStartDrag: () => dispatch(startDrag()),
    onEndDrag: () => dispatch(endDrag()),
    onCompleteStep: (id) => dispatch(completeStep(id))
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(CustomCardsComponent);
