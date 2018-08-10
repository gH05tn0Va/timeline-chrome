let bd = document.createElement("body");

$(document).ready(function(){
    $("#b01").click(function(){
        htmlobj=$.ajax({url:"https://www.baidu.com/",async:false});
        alert("123");
        $("#myDiv").html(htmlobj.responseText);
    });
});