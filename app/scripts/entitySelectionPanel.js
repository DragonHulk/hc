var esp = {} ;
var envList = ["DEV","UAT","IQA","QA"];

esp.initView = function () {
    this.view = util.loadFile('/app/view/entitySelectionList.html');
}

esp.prepareEntity = function (env) {
    return util.loadFile('/app/view/entity.html')
        .replace('Env',env)
}

esp.applyDefaults = function  () {
    var tabs = document.querySelector("#envList");
    envList.forEach(function  (env) {
        tabs.insertAdjacentHTML('beforeend', esp.prepareEntity(env));
    });   
}

esp.listenEvents = function () {
    var dummy = document.querySelector('#envList');
    dummy.addEventListener('click', function  (e) {
        var selectedEnv = e.target.innerHTML;
        esp.onSelectEnv(selectedEnv);
    });
}

esp.onSelectEnv = function (env) {
    var path;
    switch(env){
        case "DEV" : path = "../../dev";
                     break; 
        case "UAT" : path = "../../uat";
                     break; 
        case "IQA" : path = "../../iqa";
                     break; 
        case "QA" : path = "../../qa";
                     break; 
        default : console.errror("path not selected");                    
    }
    em.fire('EnvSelected',path);
}