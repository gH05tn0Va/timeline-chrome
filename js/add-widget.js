var container=document.createElement("div");
container.id="timeline-container";
document.body.appendChild(container);

var timeline=document.createElement("iframe");
timeline.id="timeline-iframe";
timeline.src=chrome.extension.getURL("html/timeline.html");
container.appendChild(timeline);

if (document.body == null) {
    try {
        document.write("<script src='" + url + "' type='text/javascript'></script>");
    } catch (e) {
        createScriptElement();
    }
}