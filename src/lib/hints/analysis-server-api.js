const localService = 'http://localhost:8080';
const remoteService = 'https://quality-tutor-engine.appspot.com';

/**
 * 
 * @param {*} projectId 
 * @param {*} analysisType (duplicate_code, duplicate_sprite, all)
 * @param {*} xml 
 */
const sendAnalysisReq = function ({projectId, analysisType, xml, serviceEndpoint}) {
    let url = serviceEndpoint;
    url = url+'/analyze';
    // url = localServerAvailable ? localService : remoteService;
    return fetch(url, {
        method: "POST",
        mode: "cors",
        cache: "no-cache",
        headers: {
            "Content-Type": "text/xml",
            "id": projectId,
            "type": analysisType
        },
        body: xml,
    }).then(res => res.json());
}

const sendRefactoringAnalysisReq = function({projectId, type, xml, params, serviceEndpoint}){
    let url = serviceEndpoint;
    url = url + '/transform';
    return fetch(url, {
        method: "POST",
        mode: "cors",
        cache: "no-cache",
        headers: {
            "Content-Type": "text/xml",
            "id": projectId,
            "type": type,
            "params": params
        },
        body: xml,
    }).then(res => res.json());
}

const getProgramXml = function (vm) {
    let targets = "";
    for (let i = 0; i < vm.runtime.targets.length; i++) {
        const currTarget = vm.runtime.targets[i];
        const variableMap = currTarget.variables;
        const variables = Object.keys(variableMap).map(k => variableMap[k]);
        const xmlString = `<${currTarget.isStage ? "stage " : "sprite "} 
                name="${currTarget.getName()}" x="${currTarget.x}" y="${currTarget.y}"
                size="${currTarget.size}" direction="${currTarget.direction}" visible="${currTarget.visible}">
                <xml>
                    <costumes>${currTarget.getCostumes().map(c => '<costume name="' + c.name + '"/>').join('')}</costumes>
                    <sounds>${currTarget.getSounds().map(s => '<sound name="' + s.name + '"/>').join('')}</sounds>
                    <variables>${variables.map(v => v.toXML()).join()}</variables>${currTarget.blocks.toXML()}
                </xml>
                </${currTarget.isStage ? "stage" : "sprite"}>`;

        targets += xmlString;
    }
    var str = `<program>${targets}</program>`;
    str = str.replace(/\s+/g, ' '); // Keep only one space character
    str = str.replace(/>\s*/g, '>');  // Remove space after >
    str = str.replace(/\s*</g, '<');  // Remove space before <

    return str;
}

export {
    sendAnalysisReq,
    getProgramXml,
    sendRefactoringAnalysisReq
}