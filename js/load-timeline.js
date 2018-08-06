var tl;
var resizeTimerID = null;

var data = [
    {
        'wiki-url': "http://simile.mit.edu/shelf/",
        'wiki-section': "Simile JFK Timeline",
        'dateTimeFormat': 'Gregorian',
        'events': [
            {
                'start': "Mon Aug 6 2018 12:30:00 GMT-0600",
                'title': "'Bay of Pigs' Invasion",
                'durationEvent': false // Notes: not "false". And no trailing comma.
            }
        ]
    },
    {
        'wiki-url': "http://simile.mit.edu/shelf/",
        'wiki-section': "Simile JFK Timeline",
        'dateTimeFormat': 'Gregorian',
        'events': [
            {
                'start': "Mon Aug 6 2018 13:30:00 GMT-0600",
                'title': "'Bay of Pigs' Invasion",
                'durationEvent': false // Notes: not "false". And no trailing comma.
            }
        ]
    },
];

var bd = document.createElement("body");
bd.onload=function onLoad() {
    var all_events = new Timeline.DefaultEventSource();
    var events = [];
    for(var i=0; i<2; i++)
        events.push(new Timeline.DefaultEventSource());
    var bandInfos = [
        Timeline.createBandInfo({
            eventSource:    events[0],
            width:          "10%",
            intervalUnit:   Timeline.DateTime.HOUR,
            intervalPixels: 400
        }),
        Timeline.createBandInfo({
            eventSource:    events[1],
            width:          "50%",
            intervalUnit:   Timeline.DateTime.HOUR,
            intervalPixels: 400
        }),
        Timeline.createBandInfo({
            overview:       true,
            eventSource:    events[0],
            width:          "100%",
            intervalUnit:   Timeline.DateTime.DAY,
            intervalPixels: 400
        })
    ];
    bandInfos[1].syncWith = 0;
    bandInfos[2].syncWith = 1;
    bandInfos[2].highlight = true;

    tl = Timeline.create(document.getElementById("my-timeline"), bandInfos);

    //Timeline.loadXML("../data/sample-data.xml", function(xml, url) { events[0].loadXML(xml, url); });
    //Timeline.loadJSON("../data/sample-data.js?"+ (new Date().getTime()), function(json, url) { events[0].loadJSON(json, url); console.log(json,url);});
    events[0].loadJSON(data[0], "");
    events[1].loadJSON(data[1], "");

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