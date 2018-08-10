var tl;
var resizeTimerID = null;

var bd = document.createElement("body");
bd.onload=function onLoad() {
    var all_events = new Timeline.DefaultEventSource();
    var events = [];
    for(var i=0; i<2; i++)
        events.push(new Timeline.DefaultEventSource());
    var bandInfos = [
        Timeline.createBandInfo({
            eventSource:    events[0],
            width:          "150px",
            intervalUnit:   Timeline.DateTime.HOUR,
            intervalPixels: 400
        }),
        Timeline.createBandInfo({
            overview:       true,
            eventSource:    events[0],
            width:          "50px",
            intervalUnit:   Timeline.DateTime.DAY,
            intervalPixels: 400
        })
    ];
    bandInfos[1].syncWith = 0;
    bandInfos[1].highlight = true;

    tl = Timeline.create(document.getElementById("my-timeline"), bandInfos);

    chrome.extension.sendMessage({cmd: "request_data"}, function (response) {
        events[0].loadJSON(response[0], "");
    });
    //Timeline.loadXML("../data/sample-data.xml", function(xml, url) { events[0].loadXML(xml, url); });
    //Timeline.loadJSON("../data/sample-data.js?"+ (new Date().getTime()), function(json, url) { events[0].loadJSON(json, url); console.log(json,url);});

};

bd.onresize=function onResize() {
    if (resizeTimerID == null) {
        resizeTimerID = window.setTimeout(function() {
            resizeTimerID = null;
            tl.layout();
        }, 500);
    }
};

// container.appendChild(timeline);
// src="../timeline_2.3.0/timeline_ajax/simile-ajax-api.js?bundle=true"