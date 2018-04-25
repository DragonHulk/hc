var fileInfoPanel = {}

fileInfoPanel.initView = function () {
    this.view = util.loadFile('app/view/fileInfo.html');
    document.getElementById('fileDetail').innerHTML = this.view;
}

fileInfoPanel.listenEvents = function () {
    
}

fileInfoPanel.applyDefaults = function () {
    //path problem mocking it for now
    var file = util.readFile('../../dev/10.141.13.250/API_FP/results/curls/op1.log');
    var fileList = document.querySelector('#fileDisplayZone');
        fileList.insertAdjacentHTML('beforeend', file);
}

fileInfoPanel.setup = function () {
    fileInfoPanel.initView();
    fileInfoPanel.listenEvents();
    fileInfoPanel.applyDefaults();
}