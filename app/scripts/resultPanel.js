var resultPanel = {};

resultPanel.initView = function () {
    this.view = util.loadFile('/app/view/result.html');
    document.getElementById('#resultInfo').innerHTML = this.view;
}