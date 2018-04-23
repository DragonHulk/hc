var ipListPanel = {};
var subFolders = [];
subFolders = ["10.141.13.250"];

ipListPanel.initView = function (){
    this.view = util.loadFile('/app/view/ipList.html');
    document.getElementById('#entityInfo').innerHTML = this.view;
}

ipListPanel.listenEvents = function (){
    em.listen('EnvSelected',ipListPanel.setPath);
}

ipListPanel.setPath = function (selectedPath){
    //subFolders = util.getSubFolders(selectedPath);//dono mocking for now
}

ipListPanel.prepareFolder = function (folder){
    return util.loadFile('/app/view/folderName.html')
        .replace('ip',folder)
}

ipListPanel.applyDefaults = function () {
    var tabs = document.querySelector("#ipList");
    subFolders.forEach(function  (folder) {
        tabs.insertAdjacentHTML('beforeend', ipListPanel.prepareFolder(folder));
    });  
}