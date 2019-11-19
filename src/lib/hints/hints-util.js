import ScratchBlocks from 'scratch-blocks';
import { DUPLICATE_CODE_SMELL_HINT_TYPE, SHAREABLE_CODE_HINT_TYPE, CONTEXT_MENU_REFACTOR, CONTEXT_MENU_INFO, CONTEXT_MENU_CODE_SHARE, RENAMABLE_CUSTOM_BLOCK, CONTEXT_MENU_RENAME_BLOCK, DUPLICATE_CONSTANT_HINT_TYPE, BROAD_SCOPE_VAR_HINT_TYPE, DUPLICATE_SPRITE_HINT_TYPE } from './constants';

const REMOVE_LAST = "REMOVE_LAST";
const MOVE_UP = "MOVE_UP";
const MOVE_DOWN = "MOVE_DOWN";
const ADD_TO_LAST = "ADD_TO_LAST";

const computeSpriteHintLocationStyles = ({ hint, vm }) => {

    const currentSpriteName = vm.editingTarget.getName();
    let changes;
    if(hint.spriteNames.includes(currentSpriteName)){
        const allSpriteSelectors = document.querySelectorAll("div[class^='sprite-selector_sprite-wrapper']");
        const currentSpriteSelectorDom = [].slice.call(allSpriteSelectors).find(dom => dom.querySelector("div[class^='sprite-selector-item_sprite-name']").textContent === currentSpriteName)
        const {x,y,width,height} = currentSpriteSelectorDom.getBoundingClientRect();
        const computedTop = y-height+10;
        const computedLeft = x+width-20;
        changes = {
            styles: {
                position: 'absolute',
                top: computedTop + 'px',
                left: computedLeft + 'px',
                visibility: 'visible',
                zIndex: 100
            }
        }
    }else{
        changes = {
            styles: {
                position: 'absolute',
                top: computedTop + 'px',
                left: computedLeft + 'px',
                visibility: 'hidden',
                zIndex: 100
            }
        }
    }
    
    return changes;
}

/**
 *  Use blockId specified in hint item as the location target for positioning hint icon
 * @param {*} hint 
 * @param {*} workspace 
 */
const computeHintLocationStyles = function ({ hint, workspace, vm }) {
    if (hint.type === DUPLICATE_SPRITE_HINT_TYPE) {
        return computeSpriteHintLocationStyles({ hint, vm });
    }
    let block
    if (hint.blockId) {
        block = workspace.getBlockById(hint.blockId);
    } else if (hint.varId) {
        block = workspace.getFlyout().getWorkspace().getBlockById(hint.varId);//actually it's also block id
    }
    if (!block) return;
    const blockSvg = block.getSvgRoot();
    const blockWidth = block.svgPath_.getBBox().width;
    const hintOffset = 10;
    const computeTop = (blockSvg, workspace) => blockSvg.getBoundingClientRect().y - workspace.svgBackground_.getBoundingClientRect().top;
    const computeLeft = (blockSvg, workspace) => {
        return blockSvg.getBoundingClientRect().x - workspace.svgBackground_.getBoundingClientRect().left + (blockWidth + hintOffset) * workspace.scale;
    }

    const computedTop = computeTop(blockSvg, workspace);

    let defaultVisibility = 'visible';
    let overridingVisibility;
    if (hint.type === 'duplicate-constant') {
        defaultVisibility = 'hidden'; //only show when the active field is part of a detected smell
    }
    if (hint.type === 'broad_scope_var') {
        if (computedTop < 0) {
            overridingVisibility = 'hidden';
        } else {
            overridingVisibility = 'visible';
        }
    }


    const changes = {
        styles: {
            position: 'absolute',
            top: computedTop + 'px',
            left: computeLeft(blockSvg, workspace) + 'px',
            visibility: overridingVisibility || (hint.styles ? hint.styles.visibility : defaultVisibility),
            zIndex: 100
        }
    };
    return changes;
};

const analysisInfoToHints = function (analysisInfo) {
    if (analysisInfo.error||analysisInfo['records']===undefined) return [];
    const hints = [];
    for (let recordKey of Object.keys(analysisInfo['records'])) {
        let record = analysisInfo['records'][recordKey];
        let { type, smellId, target, fragments } = record.smell;
        if (!record.refactoring.metadata.success) continue;
        if (type === DUPLICATE_CODE_SMELL_HINT_TYPE) {
            let f = fragments[0]; //use first fragment
            let anchorBlockId = f.stmtIds[0]; //and first block of each fragment clone to place hint


            const hintMenuItems = buildHintContextMenu(DUPLICATE_CODE_SMELL_HINT_TYPE);
            const hint = {
                type: DUPLICATE_CODE_SMELL_HINT_TYPE,
                hintId: smellId,
                blockId: anchorBlockId,
                hintMenuItems
            };
            hints.push(hint);
        }

        if (type === 'DuplicateConstant') {
            const hint = {
                type: DUPLICATE_CONSTANT_HINT_TYPE,
                hintId: smellId,
                blockId: record.smell.valueIds[0],
                valueIds: record.smell.valueIds,
                "hintMenuItems": buildHintContextMenu(DUPLICATE_CONSTANT_HINT_TYPE)
            };
            hints.push(hint);
        }

        if (type === 'BroadScopeVar') {
            const hint = {
                type: BROAD_SCOPE_VAR_HINT_TYPE,
                hintId: smellId,
                varId: record.smell.varId
            };
            hints.push(hint);
        }

        if (type === DUPLICATE_SPRITE_HINT_TYPE) {
            const hint = {
                type: DUPLICATE_SPRITE_HINT_TYPE,
                hintId: smellId,
                spriteNames: record.smell.sprites.map(s=>s.spriteName)
            };
            hints.push(hint);
        }
    }
    return hints;
}


const buildHintContextMenu = (type) => {
    switch (type) {
        case DUPLICATE_CODE_SMELL_HINT_TYPE:
            return [
                {
                    item_name: 'Help me create the custom block',
                    itemAction: CONTEXT_MENU_REFACTOR
                }
                // {
                //     item_name: 'Learn more',
                //     itemAction: CONTEXT_MENU_INFO
                // }
            ];
        case SHAREABLE_CODE_HINT_TYPE:
            return [
                {
                    item_name: 'Share this custom block',
                    itemAction: CONTEXT_MENU_CODE_SHARE
                }
            ]
        case RENAMABLE_CUSTOM_BLOCK:
            return [
                {
                    item_name: 'Rename this custom block',
                    itemAction: CONTEXT_MENU_RENAME_BLOCK
                }
            ]
        case DUPLICATE_CONSTANT_HINT_TYPE:
            return [
                {
                    item_name: 'Help me create a constant variable',
                    itemAction: CONTEXT_MENU_REFACTOR
                }
            ];
    }
};

const highlightDuplicateBlocks = function (hintId, state, workspace, analysisInfo, selection) {
    if (!state) {
        workspace.removeHighlightBox();
        return;
    }
    const record = analysisInfo['records'][hintId];
    if (record.smell.type === DUPLICATE_CODE_SMELL_HINT_TYPE) {
        const fragments = record.smell['fragments'];
        for (let fNo in fragments) {
            const blockFragments = fragments[fNo].stmtIds;
            workspace.drawHighlightBox(blockFragments[0], blockFragments[blockFragments.length - 1]);
        }
    }
};

const updateHighlighting = function (workspace, fragments) {
    workspace.removeHighlightBox();
    for (let fNo in fragments) {
        const blockFragments = fragments[fNo].stmtIds;
        workspace.drawHighlightBox(blockFragments[0], blockFragments[blockFragments.length - 1]);
    }
}

const getProcedureEntry = function (block) {
    const dom = ScratchBlocks.Xml.blockToDom(block);
    const xmlStr = ScratchBlocks.Xml.domToText(dom);
    const innerBlock = block.getInput('custom_block').connection.targetBlock();
    const comment = block.getCommentText();
    return {
        procCode: innerBlock.getProcCode(),
        xml: formatXmlString(xmlStr),
        comment
    }
}

const formatXmlString = function (xmlStr) {
    let str = xmlStr;
    str = str.replace(/\s+/g, ' '); // Keep only one space character
    str = str.replace(/>\s*/g, '>');  // Remove space after >
    str = str.replace(/\s*</g, '<');  // Remove space before <
    str = str.replace(/"/g, "'"); //replace double quote with single quote
    return str;
}

const generateShareableCodeHints = function (workspace, hintState) {
    const blocksDb = Object.values(workspace.blockDB_);
    const procedureDefs = blocksDb.filter(b => !b.isShadow_ && b.type === 'procedures_definition');

    const shareableCodeHints = procedureDefs.map(b => {
        let oldHint = hintState.hints.find(h => b.id === h.blockId);
        if (oldHint) return oldHint;
        let blockId = b.id;
        let hintId = "custom_block" + Math.round(Math.random(1, 2) * 100000); //hintId is also block id;

        const hintMenuItems = buildHintContextMenu(SHAREABLE_CODE_HINT_TYPE);
        return { type: SHAREABLE_CODE_HINT_TYPE, hintId, blockId, hintMenuItems };
    });

    return shareableCodeHints;
}

const generateRenamableCodeHints = function (workspace, hintState) {
    const blocksDb = Object.values(workspace.blockDB_);
    const procedureDefs = blocksDb.filter(b => !b.isShadow_ && b.type === 'procedures_definition');

    const renamableCodeHints = procedureDefs
        .filter(b => {
            return b.getInput('custom_block').connection.targetBlock().getProcCode().startsWith("DoSomething");
        })
        .map(b => {
            let oldHint = hintState.hints.find(h => b.id === h.blockId);
            if (oldHint) return oldHint;
            let blockId = b.id;
            let hintId = "custom_block" + Math.round(Math.random(1, 2) * 100000); //hintId is also block id;

            const hintMenuItems = buildHintContextMenu(RENAMABLE_CUSTOM_BLOCK);
            return { type: RENAMABLE_CUSTOM_BLOCK, hintId, blockId, hintMenuItems };
        });

    return renamableCodeHints;
}

export {
    getProcedureEntry, formatXmlString, buildHintContextMenu,
    highlightDuplicateBlocks, computeHintLocationStyles, analysisInfoToHints,
    generateShareableCodeHints, generateRenamableCodeHints,
    updateHighlighting,
    REMOVE_LAST, ADD_TO_LAST, MOVE_UP, MOVE_DOWN

};