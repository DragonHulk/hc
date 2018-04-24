var eip = {};

eip.initChildren = function () {
   
}

eip.initView = function () {
    ipListPanel.initView();
    resultPanel.initView();
    this.view = util.loadFile('/app/view/entityInfo.html');
    document.getElementById('eipContainer').innerHTML = this.view;
    document.getElementById('entityInfo').innerHTML = ipListPanel.view;
    document.getElementById('resultInfo').innerHTML = resultPanel.view;
}

eip.listenEvents = function () {
    ipListPanel.listenEvents();
    resultPanel.listenEvents();
}
eip.applyDefaults = function () {
    ipListPanel.applyDefaults();
}
eip.setup = function () {
    eip.initView();
    eip.listenEvents();
    eip.applyDefaults();
}


