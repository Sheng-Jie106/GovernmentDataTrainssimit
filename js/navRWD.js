// dashboard 
window.onload=function(){
    var html=document.getElementsByTagName("html")[0];
    html.style.zoom="75%";
    dashboard();
    // html.addEventListener("overflow",()=>{
    //     var aside=document.getElementsByTagName("aside")[0];
    //     if(aside.getAttribute("data-status")==="none"){
    //         aside.style.display="block";
    //         aside.setAttribute("data-status","display");
    //     }
    //     else{
    //         aside.style.display="display";
    //         aside.setAttribute("data-status","block");
    //     }
        
    // },false)
}
window.onresize=function(){
    dashboard();
}
function dashboard(){
    var wid=window.screen.width;
    var dash=document.getElementsByClassName("dashboard")[0];
    var html=document.getElementsByTagName("html")[0];
    if(wid<576){
        var menu=document.getElementsByClassName("menu-btn")[0];
        dash.style.width=html.offsetWidth+"px";
        menu.style.width=dash.style.width;
        dash.style.height=menu.offsetHeight+"px";
        // console.log(dash.offsetHeight)
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
    var home=document.getElementById("indexHome");
    if(status==="close"){
        dash.style.height=menu.offsetHeight*7+"px";
        arrow.style.transform="rotate(180deg)";
        obj.setAttribute("data-status","open")
    }
    else{
        dash.style.height=menu.offsetHeight+"px";
        arrow.style.transform="rotate(0deg)";
        obj.setAttribute("data-status","close")
    }
}

