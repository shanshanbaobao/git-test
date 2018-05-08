
function scheck(){
    var oSphone=document.getElementById('sphone').value;
    var reg1=/^1[34578]\d{9}$/
    if(!(reg1.test(oSphone))){
        alert("手机号码有误，请重填");
        return false;
    }
}
var oSub=document.getElementById('sub');
oSub.onclick=scheck;
