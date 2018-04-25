var ipListPanel = {};
var subFolders = [];

ipListPanel.initView = function (){
    this.view = util.loadFile('/app/view/ipList.html');
}

ipListPanel.listenEvents = function (){
    em.listen('EnvSelected',ipListPanel.setPath);

    document.querySelector('#ipList').addEventListener('click', function  (e) {
        var selectedip = e.target.innerHTML;
        ipListPanel.onSelectIp(selectedip);
    });
}

ipListPanel.setPath = function (selectedPath){
    subFolders = ["10.141.13.250"];
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

ipListPanel.onSelectIp = function (ip) {
    resultPanel.ipSelected(ip);
}