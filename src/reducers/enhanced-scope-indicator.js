const SHOW_VAR_SCOPE = "scratch-gui/enhance/SHOW_VAR_SCOPE";
const initialState = {
    varScopes : []
};
const reducer = function (state, action) {
    if (typeof state === 'undefined') state = initialState;
    switch (action.type) {
    case SHOW_VAR_SCOPE:
        return Object.assign({}, state, {
            varScopes: action.varScopes
        });
    default:
        return state;
    }
};

const showVarScope = varScopes => ({
    type: SHOW_VAR_SCOPE,
    varScopes: varScopes
});

const handleVarScopeEvent = function(e){
    console.log(`todo: dispatch action for highlight ${JSON.stringify(e.newValue)}`); 
}

export {
    reducer as default,
    initialState as scopeIndicatorInitialState,
    showVarScope,
    handleVarScopeEvent
};