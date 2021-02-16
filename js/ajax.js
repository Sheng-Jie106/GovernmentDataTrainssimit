function ajax(file, id){
    var req=new XMLHttpRequest();
    req.open("get","./Application/"+file+".html");
    req.onload=function(){
        document.getElementById(id).innerHTML=this.responseText;
    }
    req.send();
}

function check(obj){
    var id=obj.getAttribute("data-url")
    if(obj.checked === true)
        ajax(obj.name,id)
    else
        document.getElementById(id).innerHTML=""
}