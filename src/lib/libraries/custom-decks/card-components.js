import React from 'react';
import styles from './deck-content-styles.css';

import greenFlagButton from './intro/greenflag.png';
import stopButton from './intro/stop.png';
import checkButton from './intro/check-button-2.png';
import blackArrowRight from './study-tasks/arrow.gif';
import hintIcon from './slide/hint-icon.svg';
export const Label = ({ text }) => <span className={styles.cardType}>{text}</span>;
export const ColoredLabel = ({ text, color }) => <span className={styles.cardType} style={{ backgroundColor: color }}>{text}</span>;
export const PracticeLabel = () => <ColoredLabel text="Practice" color="#21a39d" />;
export const StepLabel = ({ step }) => <ColoredLabel text={step} color="#21a39d" />;
export const QuizLabel = () => <Label text="Quiz" />;
export const TipsLabel = () => <ColoredLabel text="Tips" color="#63B3ED" />;
export const ConceptLabel = () => <Label text="Concept" />;

export const GreenFlagButton = () => <img src={greenFlagButton} className={styles.smallInlinePic} />;
export const StopButton = () => <img src={stopButton} className={styles.smallInlinePic} />;
export const CheckButtonImg = () => <img src={checkButton} className={styles.checkButton} />;
export const BeforeAfter = ({ before, after, w1, w2 }) => <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center' }}>
    <div style={{display: 'flex', flexDirection:'column', justifyContent:'center'}}><img src={before} style={{ width: w1||'180px' }} /></div>
    <div style={{display: 'flex', flexDirection:'column', justifyContent:'center'}}><img src={blackArrowRight} style={{ height: '30px', alignSelf: 'center', padding: '0.3rem' }} /></div>
    <div style={{display: 'flex', flexDirection:'column', justifyContent:'center'}}><img src={after} style={{ width: w2||'180px' }} /></div>
</div>

export const HintIcon = ()=> <img src={hintIcon} className={styles.imgInline} style={{ width: '30px' }} />

export class ScrollableContainer extends React.Component {
    constructor(props) {
        super(props);
        this.myRef = this.refs.div;//React.createRef();
    }
    render() {
        const { height } = this.props;
        return <div className={styles.scrollable} style={{ height: height, float: 'left' }} ref={elem => this.myRef = elem}>
            {this.props.children}
        </div>;
    }
}