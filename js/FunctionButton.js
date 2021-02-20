function getUrl(){
    navigator.clipboard.writeText(location.href)
}
function SizeChange(obj){
    if(obj.className==="active"){}
    else{
        var FSC=document.getElementById("FontSizeChange");
        var act=FSC.getElementsByClassName("active");
        var html=document.getElementsByTagName("html")[0];
        act[0].className=" "
        obj.className="active";
        var initZoom=parseInt(html.style.zoom); //取得原本的zoom比例 用於改變dashboard width
        switch(act[0].getAttribute("data-PageSize")){
            case "m":
                html.style.zoom="65%";
                break;
            case "n":
                html.style.zoom="75%";
                break;
            case "l":
                html.style.zoom="90%";
                break;
        }
        // var dash=document.getElementsByClassName("dashboard")[0];
        // var menu=document.getElementsByClassName("menu-btn")[0];
        // var currentZoom=parseInt(html.style.zoom); //取得改變後的zoom比例
        // dash.style.width=initZoom/currentZoom*dash.offsetWidth+"px"; //將dashboard寬度照zoom縮放比例改變
        // menu.style.width=dash.style.width;
    }
}

// 當縱滾輪出現時，置頂按鍵出現
function toTop(){
    var aside=document.getElementsByTagName("aside")[0];
    aside.style.display="block";
}
