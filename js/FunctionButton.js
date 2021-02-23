function getUrl(){
    navigator.clipboard.writeText(location.href)
    window.Clipboard = (function(window, document, navigator) {
        var textArea,
            copy;
    
        function isOS() {
            return navigator.userAgent.match(/ipad|iphone/i);
        }
    
        function createTextArea(text) {
            textArea = document.createElement('textArea');
            textArea.value = text;
            document.body.appendChild(textArea);
        }
    
        function selectText() {
            var range,
                selection;
    
            if (isOS()) {
                range = document.createRange();
                range.selectNodeContents(textArea);
                selection = window.getSelection();
                selection.removeAllRanges();
                selection.addRange(range);
                textArea.setSelectionRange(0, 999999);
            } else {
                textArea.select();
            }
        }
    
        function copyToClipboard() {        
            document.execCommand('copy');
            document.body.removeChild(textArea);
        }
    
        copy = function(text) {
            createTextArea(text);
            selectText();
            copyToClipboard();
        };
    
        return {
            copy: copy
        };
    })(window, document, navigator);
    
    Clipboard.copy(location.href);
    alert("已複製網址 : \n"+location.href);
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
        dashboard();
    }
}

// 當縱滾輪出現時，置頂按鍵出現
function toTop(){
    var aside=document.getElementsByTagName("aside")[0];
    aside.style.display="block";
}
