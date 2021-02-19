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
                html[0].style.zoom="65%";
                break;
            case "n":
                html[0].style.zoom="75%";
                break;
            case "l":
                html[0].style.zoom="90%";
                break;
        }
    }
}

// 當縱滾輪出現時，置頂按鍵出現
function toTop(){
    var aside=document.getElementsByTagName("aside")[0];
        aside.style.display="block";
}
