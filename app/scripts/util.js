var util = {};

util.loadFile = function  (url) {

    return util.handleRequest(url);
};

util.readAll = function  (url) {

    return JSON.parse(util.handleRequest(url));
};

util.handleRequest = function  (url) {

    var xhrRequest = new XMLHttpRequest();
    var async = false;
    xhrRequest.open('GET', url, async);
    xhrRequest.send();

    if (xhrRequest.status === 200) {
        return xhrRequest.responseText;
    }
};

util.getSubFolders = function (path) {


}