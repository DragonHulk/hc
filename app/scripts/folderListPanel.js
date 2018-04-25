var folderListPanel = {} ;
folderListPanel.path;

folderListPanel.initView = function () {
    this.view =  util.loadFile('app/view/folderList.html') ;
    document.getElementById('properties').innerHTML = this.view;
}

folderListPanel.listenEvents = function () {
    
    document.querySelector('#propertyName').addEventListener('click', function  (e) {
        var path = '';
        var selectedPropertyFolder = e.target.innerHTML ;
        path = folderListPanel.path +'/'+ selectedPropertyFolder ;
        folderListPanel.path = path;
        fileListPanel.setup();
    });
}

folderListPanel.prePopulate  = function () {
   folderListPanel.path = logList.path ;
}

folderListPanel.setup = function () {
    folderListPanel.initView () ;
    folderListPanel.listenEvents () ;
    folderListPanel.prePopulate ();
}
