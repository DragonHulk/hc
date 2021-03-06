var app = {} ;

app.initChildren = function () {
    eip.initChildren();
};

app.initView = function () {
    esp.initView() ;
   // eip.initView() ;
    this.view = util.loadFile('/app/view/appPanel.html');

    document.getElementById('appContainer').innerHTML = this.view;
    document.getElementById('espContainer').innerHTML = esp.view;
   // document.getElementById('eipContainer').innerHTML = eip.view;
}

app.prePopulate = function () {};

app.listenEvents = function () {
    esp.listenEvents();
    //eip.listenEvents();
};

app.applyDefaults = function () {
    esp.applyDefaults();
}

app.setup = function () {
    app.initView();
    app.initChildren();
    app.prePopulate();
    app.listenEvents();
    app.applyDefaults();
}