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
    var wid=window.screen.width;
    var dash=document.getElementsByClassName("dashboard")[0];
    var html=document.getElementsByTagName("html")[0]; 
    // console.log() 
    if(window.getComputedStyle(dash,null).getPropertyValue("display")==="flex"){
        dash.style.height="auto";
        dash.style.width="auto";
    }
    else{
        var menu=document.getElementsByClassName("menu-btn")[0];
        dash.style.width=html.offsetWidth+"px";
        menu.style.width=dash.style.width;
        dash.style.height=menu.offsetHeight+"px";
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

