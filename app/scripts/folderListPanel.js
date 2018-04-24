var folderListPanel = {} ;
var path;

folderListPanel.initView = function () {
    this.view =  util.loadFile('app/view/folderList.html') ;
    fileListPanel.initView ();
    fileInfoPanel.initView ();
    document.getElementById('properties').innerHTML = this.view;
    document.getElementById('fileList').innerHTML = fileListPanel.view;
    document.getElementById('fileDetail').innerHTML = fileInfoPanel.view;
}

folderListPanel.listenEvents = function () {
    document.querySelector('#logProperties').addEventListener('click', function  (e) {
        var selectedPropertyFolder = e.target.innerHTML ;
        path = path +'/'+ selectedPropertyFolder ;
    });
}

folderListPanel.prePopulate  = function () {
    path = logList.path ;
}

folderListPanel.setup = function () {
    folderListPanel.initView () ;
    folderListPanel.listenEvents () ;
    folderListPanel.prePopulate ();
}
