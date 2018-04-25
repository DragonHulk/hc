var fileListPanel = {} ;
fileListPanel.path = '' ;

fileListPanel.initView = function () {
    this.view = util.loadFile('app/view/fileList.html') ;
    document.getElementById('fileList').innerHTML = fileListPanel.view ;
}

fileListPanel.ListenEvents = function () {
    
    document.querySelector('#fileList').addEventListener('click', function  (e) {
        var tempPath  = folderListPanel.path;
        var selectedPropertyFolder = e.target.innerHTML ;
        tempPath = tempPath +'/'+ selectedPropertyFolder ;
        console.log(tempPath);
        fileInfoPanel.setup();
    });
}

fileListPanel.applyDefaults = function () {
    //var files = util.getAllFiles(fileListPanel.path);
    var files = ['op1.log','op2.log']
    var fileList = document.querySelector('#fileNameList');
    files.forEach(function  (file) {
        fileList.insertAdjacentHTML('beforeend', fileListPanel.preparefile(file));
    });
}

fileListPanel.preparefile = function (file) {
    return util.loadFile('app/view/fileName.html')
        .replace('%file', file);
}

fileListPanel.prePopulate = function () {
    fileListPanel.path = folderListPanel.path;
}

fileListPanel.setup = function () {
    fileListPanel.initView();
    fileListPanel.applyDefaults();
    fileListPanel.prePopulate();
    fileListPanel.ListenEvents();
}