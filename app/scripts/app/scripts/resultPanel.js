var resultPanel = {};
var ipPath;
resultPanel.subFolder = [];
resultPanel.result = [];

resultPanel.initView = function () {
    this.view = util.loadFile('/app/view/result.html');
}

resultPanel.listenEvents = function () {
    em.listen('ipSelected',resultPanel.ipSelected)
}

resultPanel.applyDefaults = function () {

}

resultPanel.PrePopulate = function () {

}

resultPanel.ipSelected = function (ip) {
    var path = ' ';
    path = esp.path + '/' + ip ;
    ipPath = path ;
    util.setPath('ip',ipPath);
    //resultPanel.subFolder = util.getSubFolders(path);
    //mockdata
    resultPanel.subFolder = ["API_FP","API_MobFac","API_PoTool"];
    for(var i = 0 ; i < resultPanel.subFolder.length ; i++){
        resultPanel.result[i] = util.readFile(path + '/' + resultPanel.subFolder[i] + '/results/results.log');
    }
    //console.log(util.getPath());
    logList.setup();
}
