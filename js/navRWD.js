// dashboard 
window.onload=function(){
    var html=document.getElementsByTagName("html");
    html[0].style.zoom="75%";
    dashboard();
}
window.onresize=function(){
    dashboard();
}
function dashboard(wid){
    var wid=window.screen.width;
    var dash=document.getElementsByClassName("dashboard")[0];
    if(wid<576){
        var menu=document.getElementsByClassName("menu-btn")[0];
        menu.style.width=dash.offsetWidth+"px";
        dash.style.height=menu.offsetHeight+"px";
        // console.log(dash.offsetHeight)
    }
    else{
        dash.style.height="auto";
    }
}
function menu(obj){
    var status=obj.getAttribute("data-status");
    var dash=document.getElementsByClassName("dashboard")[0];
    var menu=document.getElementsByClassName("menu-btn")[0];
    var arrow=document.getElementById("arrow");
    if(status==="close"){
        dash.style.height=354+"px";
        arrow.style.transform="rotate(180deg)";
        obj.setAttribute("data-status","open")
    }
    else{
        dash.style.height=menu.offsetHeight+"px";
        arrow.style.transform="rotate(0deg)";
        obj.setAttribute("data-status","close")
    }
}