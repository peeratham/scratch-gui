import { connect } from 'react-redux';
import InstructionHint from './instruction-hint-ui.jsx';
import { viewInstructionHint } from '../../../reducers/custom-cards.js';

const mapStateToProps = state =>({
    projectId: state.scratchGui.projectState.projectId,
    viewedInstructionHints: state.scratchGui.customCards.viewedInstructionHints
});

const mapDispatchToProps = dispatch => ({
    onViewInstructionHint: id => dispatch(viewInstructionHint(id)) 
});

export default connect(
    mapStateToProps, 
    mapDispatchToProps
)(InstructionHint);

