var logList = {};
logList.result = [];
logList.subFolders = [];
var record;

logList.initView = function () {
    this.view = util.loadFile('app/view/logList.html');
    document.getElementById('table').innerHTML = this.view;
}

logList.listenEvents = function () {
    document.querySelector('#resultBody').addEventListener('click', function  (e) {
        record = e.target.parentElement.children[0].innerHTML;
        util.setPath('folder',ipPath,record);
        console.log(util.getPath());
        folderListPanel.setup();
    });
}

logList.applyDefaults = function () {
    var keys = [];
    keys = util.getAllKeys(logList.result[1]);
    var tableHeader = document.querySelector('#rowHeader');
    keys.forEach(function (key){
        tableHeader.insertAdjacentHTML('beforeend', logList.prepareHeader(key));
    });
    for(var i = 0 ; i < logList.result.length ; i++ ){
        var values = util.getAllValues(logList.result[i]);
        var tableData = document.querySelector('#resultBody');
        var rowDataFile = util.loadFile('app/view/logRow.html').replace('rowData', 'rowData' + i);
        tableData.insertAdjacentHTML('beforeend', rowDataFile);
        var rowData = document.querySelector('#rowData' + i);
        rowData.insertAdjacentHTML('beforeend', logList.prepareFolderName(logList.subFolders[i]));
        values.forEach(function (value){
            if(value != undefined){
                rowData.insertAdjacentHTML('beforeend', logList.prepareData(value));
            }
        });
    }
}

logList.prepareHeader = function (key) {
    return util.loadFile('app/view/logHeader.html')
    .replace('key', key);
}

logList.prepareFolderName = function (name) {
    return util.loadFile('app/view/logFolderName.html')
    .replace('FolderName', name);
}

logList.prepareData = function (value){
    return util.loadFile('app/view/logData.html')
    .replace('value', value);
}


logList.prePopulate = function () {
    logList.result = resultPanel.result;
    logList.subFolders = resultPanel.subFolder;
}

logList.setup = function () {
    logList.initView();
    logList.listenEvents();
    logList.prePopulate();
    logList.applyDefaults();
}