import bindAll from 'lodash.bindall';
import { DUPLICATE_CODE_SMELL_HINT_TYPE, DUPLICATE_CONSTANT_HINT_TYPE, SHAREABLE_CODE_HINT_TYPE, RENAMABLE_CUSTOM_BLOCK, BROAD_SCOPE_VAR_HINT_TYPE, DUPLICATE_SPRITE_HINT_TYPE } from './hints/constants';
import { putAllHints, putHintMap, setUpdateStatus, updateHint } from '../reducers/hints-state';
import { sendAnalysisReq, getProgramXml } from './hints/analysis-server-api';
import { computeHintLocationStyles, analysisInfoToHints, generateShareableCodeHints, generateRenamableCodeHints } from './hints/hints-util';
import { applyTransformation } from './hints/transform-api';
import debounce from 'lodash.debounce';
import ScratchBlocks from 'scratch-blocks';

import { addBlocksToWorkspace, testBlocks, getTestHints } from './hints/hint-test-workspace-setup';

// workaround to show smaller duplicate sequence (hard code)
const isWorkAround = false;
const workAroundResp =
// no set color (parameterless)
// {"records":{"ca61aede6a336b43":{"id":"ca61aede6a336b43","smell":{"type":"duplicate_code","smellId":"ca61aede6a336b43","target":"Square","fragments":[{"stmtIds":["(4O$sHR,g!3GAhtHeAO;"]},{"stmtIds":["I!Z5HML1,Md5m=%De:ci"]}],"metadata":{"group_size":2,"instance_size":4,"_id":"ca61aede6a336b43"}},"refactoring":{"smellId":"ca61aede6a336b43","actions":[{"type":"BlockCreateAction","blockId":null,"info":null,"targetName":null,"block_xml":"<xml><block type='procedures_definition' id='2f'><value name='custom_block'><shadow type='procedures_prototype' id='YWGvP'><mutation proccode='DoSomething38' argumentids='[]' warp='false'/></shadow></value><next><block type='control_repeat' id='ki'><value name='TIMES'><shadow type='math_whole_number' id='cO'><field name='NUM'>9</field></shadow></value><statement name='SUBSTACK'><block type='motion_changexby' id='fp'><value name='DX'><shadow type='math_number' id='Gt'><field name='NUM'>20</field></shadow></value><next><block type='looks_changeeffectby' id='aF'><field name='EFFECT'>BRIGHTNESS</field><value name='CHANGE'><shadow type='math_number' id='gX'><field name='NUM'>9</field></shadow></value><next><block type='control_create_clone_of' id='dO'><value name='CLONE_OPTION'><shadow type='control_create_clone_of_menu' id='V4'><field name='CLONE_OPTION'>_myself_</field></shadow></value></block></next></block></next></block></statement></block></next></block></xml>"},{"type":"BlockCreateAction","blockId":"DoSomething38_Call1","info":"procedures_call","targetName":null,"block_xml":"<xml><block type='procedures_call' id='DoSomething38_Call1'><mutation proccode='DoSomething38' argumentids='[]' warp='null'/></block></xml>"},{"type":"ReplaceSeqAction","target_blocks":["(4O$sHR,g!3GAhtHeAO;"],"replace_with":"DoSomething38_Call1"},{"type":"BlockCreateAction","blockId":"DoSomething38_Call2","info":"procedures_call","targetName":null,"block_xml":"<xml><block type='procedures_call' id='DoSomething38_Call2'><mutation proccode='DoSomething38' argumentids='[]' warp='null'/></block></xml>"},{"type":"ReplaceSeqAction","target_blocks":["I!Z5HML1,Md5m=%De:ci"],"replace_with":"DoSomething38_Call2"}],"metadata":{"success":true,"_id":"ca61aede6a336b43","num_params":0}}}},"projectId":"null"};
// with set color (1 parameter)
{
    //color shade generator
    326637227: { "records": { "079374d84f77b189": { "id": "079374d84f77b189", "smell": { "type": "duplicate_code", "smellId": "079374d84f77b189", "target": "Square", "fragments": [{ "stmtIds": ["rP0yU%a`)#0-H_[ydMCX", "(4O$sHR,g!3GAhtHeAO;"] }, { "stmtIds": [".|a#!A|:VfcF_]ABZC(t", "I!Z5HML1,Md5m=%De:ci"] }], "metadata": { "group_size": 2, "instance_size": 5, "_id": "079374d84f77b189" } }, "refactoring": { "smellId": "079374d84f77b189", "actions": [{ "type": "BlockCreateAction", "blockId": null, "info": null, "targetName": null, "block_xml": "<xml><block type='procedures_definition' id='Ux'><value name='custom_block'><shadow type='procedures_prototype' id='BPxJG'><mutation proccode='DoSomething28 %s' argumentids='[&quot;param0_ID&quot;]' argumentnames='[&quot;param0&quot;]' argumentdefaults='[&quot;&quot;]' warp='false'/><value name='param0_ID'><shadow type='argument_reporter_string_number' id='uUHc5Y'><field name='VALUE'>param0</field></shadow></value></shadow></value><next><block type='looks_seteffectto' id='4a'><field name='EFFECT'>COLOR</field><value name='VALUE'><shadow type='math_number' id='Jw'><field name='NUM'>35</field></shadow><block type='argument_reporter_string_number' id='S5'><field name='VALUE'>param0</field></block></value><next><block type='control_repeat' id='j6'><value name='TIMES'><shadow type='math_whole_number' id='tf'><field name='NUM'>9</field></shadow></value><statement name='SUBSTACK'><block type='motion_changexby' id='vO'><value name='DX'><shadow type='math_number' id='fn'><field name='NUM'>20</field></shadow></value><next><block type='looks_changeeffectby' id='Yz'><field name='EFFECT'>BRIGHTNESS</field><value name='CHANGE'><shadow type='math_number' id='cF'><field name='NUM'>9</field></shadow></value><next><block type='control_create_clone_of' id='ow'><value name='CLONE_OPTION'><shadow type='control_create_clone_of_menu' id='TI'><field name='CLONE_OPTION'>_myself_</field></shadow></value></block></next></block></next></block></statement></block></next></block></next></block></xml>" }, { "type": "BlockCreateAction", "blockId": "DoSomething28%s_Call1", "info": "procedures_call", "targetName": null, "block_xml": "<xml><block type='procedures_call' id='DoSomething28%s_Call1'><mutation proccode='DoSomething28 %s' argumentids='[&quot;param0_ID&quot;]' warp='null'/><value name='param0_ID'><shadow type='text' id='DoSomething28%s_Call1_param_0'><field name='TEXT'>35</field></shadow></value></block></xml>" }, { "type": "ReplaceSeqAction", "target_blocks": ["rP0yU%a`)#0-H_[ydMCX", "(4O$sHR,g!3GAhtHeAO;"], "replace_with": "DoSomething28%s_Call1" }, { "type": "BlockCreateAction", "blockId": "DoSomething28%s_Call2", "info": "procedures_call", "targetName": null, "block_xml": "<xml><block type='procedures_call' id='DoSomething28%s_Call2'><mutation proccode='DoSomething28 %s' argumentids='[&quot;param0_ID&quot;]' warp='null'/><value name='param0_ID'><shadow type='text' id='DoSomething28%s_Call2_param_0'><field name='TEXT'>85</field></shadow></value></block></xml>" }, { "type": "ReplaceSeqAction", "target_blocks": [".|a#!A|:VfcF_]ABZC(t", "I!Z5HML1,Md5m=%De:ci"], "replace_with": "DoSomething28%s_Call2" }], "metadata": { "success": true, "_id": "079374d84f77b189", "num_params": 1 } } } }, "projectId": "null" },
    //particle generator
    328143397: { "records": { "1020b66890e1ffb5": { "id": "1020b66890e1ffb5", "smell": { "type": "duplicate_code", "smellId": "1020b66890e1ffb5", "target": "particle", "fragments": [{ "stmtIds": ["As{l_wLC37GK((]6k8h7", "F(sS:?+I4h#h#~LyjX4H", "ECk5#lT+:)wk_|lGR!gE"] }, { "stmtIds": ["U:=`=o]GfyTJ6K;P(3Km", "Ezzb9-f6Lv5FT8BrBpRh", "~hFv:]4yy(Yqm?cw$K=="] }], "metadata": { "group_size": 3, "instance_size": 4, "_id": "1020b66890e1ffb5" } }, "refactoring": { "smellId": "1020b66890e1ffb5", "actions": [{ "type": "BlockCreateAction", "blockId": null, "info": null, "targetName": null, "block_xml": "<xml><block type='procedures_definition' id='o5'><value name='custom_block'><shadow type='procedures_prototype' id='cNotf'><mutation proccode='DoSomething59 %s' argumentids='[&quot;param0_ID&quot;]' argumentnames='[&quot;param0&quot;]' argumentdefaults='[&quot;&quot;]' warp='false'/><value name='param0_ID'><shadow type='argument_reporter_string_number' id='s7srMi'><field name='VALUE'>param0</field></shadow></value></shadow></value><next><block type='looks_seteffectto' id='cJ'><field name='EFFECT'>COLOR</field><value name='VALUE'><shadow type='math_number' id='El'><field name='NUM'>185</field></shadow><block type='argument_reporter_string_number' id='Mn'><field name='VALUE'>param0</field></block></value><next><block type='control_repeat' id='M1'><value name='TIMES'><shadow type='math_whole_number' id='Jj'><field name='NUM'>8</field></shadow></value><statement name='SUBSTACK'><block type='motion_movesteps' id='2q'><value name='STEPS'><shadow type='math_number' id='FX'><field name='NUM'>10</field></shadow></value></block></statement><next><block type='control_delete_this_clone' id='t2'/></next></block></next></block></next></block></xml>" }, { "type": "BlockCreateAction", "blockId": "DoSomething59%s_Call1", "info": "procedures_call", "targetName": null, "block_xml": "<xml><block type='procedures_call' id='DoSomething59%s_Call1'><mutation proccode='DoSomething59 %s' argumentids='[&quot;param0_ID&quot;]' warp='null'/><value name='param0_ID'><shadow type='text' id='DoSomething59%s_Call1_param_0'><field name='TEXT'>185</field></shadow></value></block></xml>" }, { "type": "ReplaceSeqAction", "target_blocks": ["As{l_wLC37GK((]6k8h7", "F(sS:?+I4h#h#~LyjX4H", "ECk5#lT+:)wk_|lGR!gE"], "replace_with": "DoSomething59%s_Call1" }, { "type": "BlockCreateAction", "blockId": "DoSomething59%s_Call2", "info": "procedures_call", "targetName": null, "block_xml": "<xml><block type='procedures_call' id='DoSomething59%s_Call2'><mutation proccode='DoSomething59 %s' argumentids='[&quot;param0_ID&quot;]' warp='null'/><value name='param0_ID'><shadow type='text' id='DoSomething59%s_Call2_param_0'><field name='TEXT'>80</field></shadow></value></block></xml>" }, { "type": "ReplaceSeqAction", "target_blocks": ["U:=`=o]GfyTJ6K;P(3Km", "Ezzb9-f6Lv5FT8BrBpRh", "~hFv:]4yy(Yqm?cw$K=="], "replace_with": "DoSomething59%s_Call2" }, { "type": "ReplaceSeqAction", "target_blocks": ["OE=T8GKfI0^*GyzsJX0h", "Q(9=PDPX)MHQ`paDTZ[X", ";~HYgB_MzOlE@CniOu;/"], "replace_with": "DoSomething59%s_Call3" }], "metadata": { "success": true, "_id": "1020b66890e1ffb5", "num_params": 1 } } } }, "projectId": "328143397" }
};
const addFunctionListener = (object, property, callback) => {
    const oldFn = object[property];
    object[property] = function () {
        const result = oldFn.apply(this, arguments);
        callback.call(this, result);
        return result;
    };
};

const isTesting = false;
const isProductionMode = false;

class HintManager {
    constructor(vm, workspace, dispatch, hintState, options) {
        this.hintState = hintState;
        this.vm = vm;
        this.workspace = workspace;
        this.flyoutWorkspace = workspace.getFlyout().getWorkspace();
        this.dispatch = dispatch;
        this.options = options;
        this.projectId = options ? options.projectId : '0';
        this.onUpdateTrackingCallBacks = [];
        this.updateTrackingCallBackMap = {};

        bindAll(this, [
            'blockListener',
            'onWorkspaceUpdate',
            'generateHints',
            'updateHintTracking'
        ]);
        this.attachVM();
        this.computeQualityHintsDebounced = debounce(this.computeQualityHints, 100);
    }

    getWorkspace(){
        return this.workspace;
    }


    setUpdateTrackingCallback(hintId, cb) {
        this.updateTrackingCallBackMap[hintId] = cb;
    }

    blockListener(e) {
        //if hintState.options showQualityHint
        if (!(['ui', 'endDrag'].includes(e.type))) { //recompute upon code changes
            if (this.hintState.options.showQualityHint) {
                this.generateHints(DUPLICATE_CODE_SMELL_HINT_TYPE);
                this.generateHints(RENAMABLE_CUSTOM_BLOCK);
                // setTimeout(() => {
                //     this.generateHints(DUPLICATE_CONSTANT_HINT_TYPE);
                // }, 1000);
            }
        }
        if (e.type === 'ui') {
            const gesture = this.workspace.getGesture(e);
            let targetHint = null;

            if (gesture && gesture.startField_) {
                const activeField = gesture.startField_;
                const shadowId = activeField.sourceBlock_.id;
                // todo: find any hints that its valueIds contains showdowId
                targetHint = this.hintState.hints.find(h => h.valueIds && h.valueIds.indexOf(shadowId) >= 0);

                if (e.newValue) {
                    if (targetHint) {
                        if (targetHint.hintId !== this.currentHintId) {
                            // a different hint so hide the previous one first
                            this.dispatch(updateHint(this.currentHintId, {
                                styles: Object.assign({}, targetHint.styles, { 'visibility': 'hidden' })
                            }));
                        }
                        this.currentHintId = targetHint.hintId; //keep track of currently shown hint
                        this.dispatch(updateHint(targetHint.hintId, {
                            blockId: shadowId,
                            styles: Object.assign({}, targetHint.styles, { 'visibility': 'visible' })
                        }));
                    }
                }
            }

            // click on empty space 
            if (e.newValue === null) {
                targetHint = this.hintState.hints.find(h => h.hintId === this.currentHintId);
                if (targetHint) {
                    this.dispatch(updateHint(targetHint.hintId, {
                        styles: Object.assign({}, targetHint.styles, { 'visibility': 'hidden' })
                    }));
                    this.currentHintId = null;
                }
            }
        }
    }

    calculateHintTracking(hints) {
        const trackedHints = hints.map(h =>
            Object.assign({}, h, computeHintLocationStyles({ hint: h, workspace: this.workspace, vm: this.vm })));
        return trackedHints;
    }

    updateHintState(hintState) {
        this.hintState = hintState;
    }

    updateOptions(options) {
        this.options = Object.assign({}, this.options, options);
    }

    getServiceEndpoint(){
        return this.options.serviceEndpoint;
    }

    getAnalysisInfo() {
        return this.analysisInfo;
    }

    computeQualityHints(hintType) {
        this.dispatch(setUpdateStatus({ isUpdating: true }));
        const _vm = this.vm;
        return Promise.resolve()
            .then(() => getProgramXml(_vm))
            .then(xml => sendAnalysisReq({projectId:this.projectId, analysisType:hintType, xml, serviceEndpoint: this.options.serviceEndpoint}))
            .then(json => {
                const analysisInfo = isWorkAround ? workAroundResp[this.projectId] : json;
                let combinedRecord = null;
                if (this.analysisInfo) {
                    //remove the old records of the requested type
                    let filtered = Object.entries(analysisInfo.records).filter(e => e[1].type !== hintType)
                    let filteredRecords = Object.fromEntries(filtered);
                    combinedRecord = Object.assign({}, filteredRecords, analysisInfo.records);
                } else {
                    combinedRecord = analysisInfo.records;
                }
                this.analysisInfo = analysisInfo ? { projectId: analysisInfo.projectId, records: combinedRecord } : null;
                return this.analysisInfo ? analysisInfoToHints(this.analysisInfo) : [];
            }).then(hints => {
                const trackedHints = this.calculateHintTracking(hints);
                this.dispatch(putAllHints(trackedHints, hintType));
                this.dispatch(setUpdateStatus({ isUpdating: false }));
            });
    }

    computeSharableCustomBlocks() {
        Promise.resolve()
            .then(() => generateShareableCodeHints(this.workspace, this.hintState))
            .then(hints => {
                const trackedHints = this.calculateHintTracking(hints);
                this.dispatch(putAllHints(trackedHints, SHAREABLE_CODE_HINT_TYPE));
            });
    }

    computeRenamableCustomBlocks() {
        Promise.resolve()
            .then(() => generateRenamableCodeHints(this.workspace, this.hintState))
            .then(hints => {
                const trackedHints = this.calculateHintTracking(hints);
                this.dispatch(putAllHints(trackedHints, RENAMABLE_CUSTOM_BLOCK));
            });
    }

    applyTransformation(hintId) {
        this.workspace.removeChangeListener(this.blockListener);
        const actionSeq = applyTransformation(hintId, this.vm, this.workspace, this.analysisInfo);
        //TODO: better position the introduced procedure
        //quick fix for tutorial mode:
        if (this.options.isTutorialMode || this.options.userStudyMode) {
            actionSeq.then(() => {
                this.workspace.cleanUp();
            });
        }
        this.workspace.addChangeListener(
            this.blockListener);
        return actionSeq;
    }

    generateHints(hintType) {
        if (hintType === DUPLICATE_CODE_SMELL_HINT_TYPE) {
            this.computeQualityHintsDebounced(hintType);
        } else if (hintType === SHAREABLE_CODE_HINT_TYPE) {
            this.computeSharableCustomBlocks();
        } else if (hintType === RENAMABLE_CUSTOM_BLOCK) {
            this.computeRenamableCustomBlocks();
        } else if (hintType === DUPLICATE_CONSTANT_HINT_TYPE) {
            this.computeQualityHintsDebounced(hintType); //merge with duplicate code
        } else if (hintType === BROAD_SCOPE_VAR_HINT_TYPE) {
            this.computeQualityHintsDebounced(hintType);
        } else if (hintType === DUPLICATE_SPRITE_HINT_TYPE) {
            this.computeQualityHintsDebounced(hintType);
        }
    }

    clearAll(hintType) {
        this.dispatch(putAllHints([], hintType));
    }

    clearHintMap(hintTypes) {
        const map = {};
        hintTypes.forEach(t => map[t] = []);

        this.dispatch(putHintMap(map));
    }

    updateHintTracking() {
        //when no need to reanalyze (but only update its location tracking)
        const { hints, blocksSharableHints, renamables, extract_const_hints, broad_scope_var_hints, extract_parent_sprite_hints } = this.hintState;
        this.dispatch(putHintMap(
            {
                hints: this.calculateHintTracking(hints),
                blocksSharableHints: this.calculateHintTracking(blocksSharableHints),
                renamables: this.calculateHintTracking(renamables),
                extract_const_hints: this.calculateHintTracking(extract_const_hints),
                broad_scope_var_hints: this.calculateHintTracking(broad_scope_var_hints),
                extract_parent_sprite_hints: this.calculateHintTracking(extract_parent_sprite_hints)
            }
        ));

        if (this.onUpdateTrackingCallBacks.length > 1) {
            console.warn("Should not have more than one at at time!", this.onUpdateTrackingCallBacks.length);
        }
        this.onUpdateTrackingCallBacks.forEach(cb => cb());
        Object.values(this.updateTrackingCallBackMap).forEach(cb => cb());
    }

    onWorkspaceUpdate() {
        if (isTesting && !this.alreadySetup) {
            // addBlocksToWorkspace(this.workspace, testBlocks.simpleDuplicate);
            // addBlocksToWorkspace(this.workspace, testBlocks.simpleDuplicate2);
            // addBlocksToWorkspace(this.workspace, testBlocks.simpleProcedure);
            // addBlocksToWorkspace(this.workspace, testBlocks.bug);

            // Duplicate Constant
            // addBlocksToWorkspace(this.workspace, testBlocks.simpleDuplicateConst0);
            // addBlocksToWorkspace(this.workspace, testBlocks.simpleDuplicateConst1);
            // addBlocksToWorkspace(this.workspace, testBlocks.simpleDuplicateConst2);

            this.workspace.cleanUp();
            this.alreadySetup = true;
        }
    }

    attachVM() {
        if (!this.vm) return;
        this.workspace.addChangeListener(this.blockListener);
        this.vm.addListener('workspaceUpdate', this.onWorkspaceUpdate);
        // this.props.vm.addListener('targetsUpdate', this.onTargetsUpdate);
        addFunctionListener(this.workspace, 'translate', debounce(() => this.updateHintTracking()));
        addFunctionListener(this.workspace, 'zoom', debounce(() => this.updateHintTracking()));
        addFunctionListener(ScratchBlocks.Gesture.prototype, 'updateDragDelta_', debounce(() => this.updateHintTracking()));

        // this.flyoutWorkspace.addChangeListener(e=>{
        //     console.log('flyout change',e.type);
        // })

        addFunctionListener(this.flyoutWorkspace, 'translate', debounce(() => this.updateHintTracking()));
    }

    detachVM() {
        this.vm.removeListener('workspaceUpdate', this.onWorkspaceUpdate);
        // this.props.vm.removeListener('targetsUpdate', this.onTargetsUpdate);
    }
}


export default HintManager;