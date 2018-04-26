var folderListPanel = {} ;
var property;
//folderListPanel.path;

folderListPanel.initView = function () {
    this.view =  util.loadFile('app/view/folderList.html') ;
    document.getElementById('properties').innerHTML = this.view;
}

folderListPanel.listenEvents = function () {
    document.querySelector('#propertyName').addEventListener('click', function  (e) {
        property = e.target.innerHTML ;
        util.setPath('property',ipPath,record,property);
        console.log(util.getPath());
        fileListPanel.setup();
    });
}

folderListPanel.prePopulate  = function () {
}

folderListPanel.setup = function () {
    folderListPanel.initView () ;
    folderListPanel.listenEvents () ;
    folderListPanel.prePopulate ();
}
