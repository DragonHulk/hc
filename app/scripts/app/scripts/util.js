var util = {};
util.path;

util.loadFile = function  (url) {

    //return util.handleRequest(url);
    return handleReadFile(url);
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
    var fileNames = [];
    // $.get('http://127.0.0.1:8887/dev/', (data) => 
    // {

    //     $(data).find("td > a").each(function(){
    //         //if(openFile($(this).attr("href"))){
    //             fileNames.push($(this).attr("href"));
    //         //}           
    //      });

    //     console.log(fileNames);
    //    // var listing = parseDirectoryListing(data);
    //    //$('body').append(JSON.stringify(listing));
    // });

    $.ajax({
		type: "GET",
		async: false,
        url: '/dev/',
        success: function(data){
            $(data).find("td > a").each(function(){
                fileNames.push($(this).attr("href"));
            });
        }
	});
    // $($.parseHTML(response.responseText)).find("td > a").each(function(){
    //     //if(openFile($(this).attr("href"))){
    //         fileNames.push($(this).attr("href"));
    //     //}           
    // });
    return fileNames;
}

function parseDirectoryListing (text) 
{
    var docs = text
                 .match(/href="([\w]+)/g) // pull out the hrefs
                 .map((x) => x.replace('href="', '')); // clean up
    console.log(docs);
    return docs;
}   

util.readFile = function (path) {
    var file = handleReadFile(path)
    return file;
}

function handleReadFile (path) {
  var response =  jQuery.ajax({
        url: path,
        async: false
    });
    return response.responseText;
}

util.getAllFiles = function (path) {

}

util.getFileByFormat = function (path,extn) {

}

util.getAllKeys = function (data) {
    var key = [];
    var textByLine = [];
    var textByColon = [];

    textByLine = data.split("\n");
    for (var i = 0 ; i < textByLine.length ; i++) {
            textByColon.push(textByLine[i].split(/:(.+)/));
            key.push(textByColon[i][0]);
        }
    return key;
}

util.getAllValues = function (data) {

    var value = [];
    var textByLine = [];
    var textByColon = [];

    textByLine = data.split("\n");
    for (var i = 0 ; i < textByLine.length ; i++) {
        textByColon.push(textByLine[i].split(/:(.+)/));
        value.push(textByColon[i][1]);
    }
    return value;
}

util.getPath = function () {
    return  util.path;
}

util.setPath = function (criteria,ip,folder,property,file) {
    switch (criteria) {
    case 'ip'       : path = ip + '/';
                      break;
    case 'folder'   : path = ip + '/' +folder + '/results/';
                      break;
    case 'property' : path = ip + '/' + folder + '/results/' + property;
                      break;
    case 'file'     : path = ip + '/' + folder + '/results/' + property + '/' + file;
                      break;
    }
    util.path = path;
    
}
