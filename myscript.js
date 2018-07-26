//document.write("<script src=\"http://api.simile-widgets.org/timeline/2.3.1/timeline-api.js?bundle=true\" type=\"text/javascript\"></script>");

var container=document.createElement("div");
container.id="timeline-container";
document.body.appendChild(container);

alert("aaa");

var tl;
var bandInfos = [
    Timeline.createBandInfo({
        width:          "70%",
        intervalUnit:   Timeline.DateTime.MONTH,
        intervalPixels: 100
    }),
    Timeline.createBandInfo({
        width:          "30%",
        intervalUnit:   Timeline.DateTime.YEAR,
        intervalPixels: 200
    })
];
bandInfos[1].syncWith = 0;
bandInfos[1].highlight = true;

var timeline=document.createElement("div");
timeline.id="timeline-widget";
timeline.style="height: 150px; border: 1px solid #aaa"
container.appendChild(timeline);
tl = Timeline.create(document.getElementById("timeline-widget"), bandInfos);
alert("aaa");







function onLoad() {
    var bandInfos = [
        Timeline.createBandInfo({
            width:          "70%",
            intervalUnit:   Timeline.DateTime.MONTH,
            intervalPixels: 100
        }),
        Timeline.createBandInfo({
            width:          "30%",
            intervalUnit:   Timeline.DateTime.YEAR,
            intervalPixels: 200
        })
    ];
    bandInfos[1].syncWith = 0;
    bandInfos[1].highlight = true;

    tl = Timeline.create(document.getElementById("timeline-widget"), bandInfos);
}

var resizeTimerID = null;
function onResize() {
    if (resizeTimerID == null) {
        resizeTimerID = window.setTimeout(function() {
            resizeTimerID = null;
            tl.layout();
        }, 500);
    }
}