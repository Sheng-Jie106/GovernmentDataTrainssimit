window.onload=()=>{
    var FSC=document.getElementById("FontSizeChange");
    var act=FSC.getElementsByClassName("active");
    SizeChange(act[0]);
}
function getUrl(){
    navigator.clipboard.writeText(location.href)
}
function SizeChange(obj){
    if(obj.className==="active"){}
    else{
        var FSC=document.getElementById("FontSizeChange");
        var act=FSC.getElementsByClassName("active");
        var html=document.getElementsByTagName("html");
        act[0].className=" "
        obj.className="active";
        switch(act[0].getAttribute("data-PageSize")){
            case "m":
                html[0].style.zoom="75%";
                break;
            case "n":
                html[0].style.zoom="100%";
                break;
            case "l":
                html[0].style.zoom="125%";
                break;
        }
    }
}