let container = document.createElement("div");
container.id="pulllog-container";
document.body.appendChild(container);

let option=document.createElement("div");
option.id="pulllog-option";
container.appendChild(option);

let main=document.createElement("div");
main.id="pulllog-main";
container.appendChild(main);

let btn_close=document.createElement("button");
btn_close.id = "pulllog-close-button";
btn_close.onclick = function(){
    let main = document.getElementById("pulllog-main");
    main.style.display = (main.style.display === "inline") ? "none" : "inline";
};
option.appendChild(btn_close);

container.appendChild(main);

let iframe=document.createElement("iframe");
iframe.id="timeline-iframe";
iframe.src=chrome.extension.getURL("html/timeline.html");
main.appendChild(iframe);

if (document.body == null) {
    try {
        document.write("<script src='" + url + "' type='text/javascript'></script>");
    } catch (e) {
        createScriptElement();
    }
}
