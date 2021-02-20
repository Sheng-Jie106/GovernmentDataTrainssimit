function getForm(file, id){
    var req=new XMLHttpRequest();
    req.open("get","./Application/"+file+".html");
    req.onload=function(){
        document.getElementById(id).innerHTML=this.responseText;
    }
    req.send();
}

function IfChecked(obj){
    var id=obj.getAttribute("data-url")
    if(obj.checked === true)
        getForm(obj.id,id)
    else
        document.getElementById(id).innerHTML=""
}

function submitCheck(form){
    var checkboxes = document.querySelectorAll('input[type="checkbox"]:checked');
    if(checkboxes.length>=1){
        return true;
    }
    else{
        alert("請選擇欲申請項目");
        return false;
    }
}