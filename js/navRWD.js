// dashboard 
window.onload=function(){
    var html=document.getElementsByTagName("html")[0];
    html.style.zoom="75%";
    dashboard();
    // alert(html.style.zoom+" "+window.screen.width)
}
window.onresize=function(){
    dashboard();
}
function dashboard(){
    var wid=window.innerWidth;
    var dash=document.getElementsByClassName("dashboard")[0];
    // console.log(window.innerWidth)
    var html=document.getElementsByTagName("html")[0];
    if(wid<=576){
        var menu=document.getElementsByClassName("menu-btn")[0];
        dash.style.width=html.offsetWidth+"px";
        menu.style.width=dash.style.width;
        dash.style.height=menu.offsetHeight+"px";
    }
    else{
        dash.style.height="auto";
        dash.style.width="auto";
    }
}
function menu(obj){
    var status=obj.getAttribute("data-status");
    var dash=document.getElementsByClassName("dashboard")[0];
    var menu=document.getElementsByClassName("menu-btn")[0];
    var arrow=document.getElementById("arrow");
    if(status==="close"){
        var dashChil=dash.children;
        dash.style.height=menu.offsetHeight*dashChil.length+"px";
        arrow.style.transform="rotate(180deg)";
        obj.setAttribute("data-status","open")
    }
    else{
        dash.style.height=menu.offsetHeight+"px";
        arrow.style.transform="rotate(0deg)";
        obj.setAttribute("data-status","close")
    }
}

