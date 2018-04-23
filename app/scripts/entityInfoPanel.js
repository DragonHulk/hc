var eip = {};

eip.initView = function () {
    this.view = util.loadFile('/app/view/entityInfo.html');
    ipListPanel.initView();
    resultPanel.initView();
}

eip.listenEvents = function () {
    ipListPanel.listenEvents();
}
eip.applyDefaults = function () {
    ipListPanel.applyDefaults();
}


