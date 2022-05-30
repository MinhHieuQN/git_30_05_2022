function Check(){
    var key= document.getElementById("key").value;
    if(key==""){
        alert("Lỗi");
        document.getElementById("key").focus();
    }
}
function Registry(){
var pwd=document.getElementById("pwd").value;
var confirmpwd=document.getElementById("confirmpwd").value;
var name=document.getElementById("name").value;
var acc=document.getElementById("acc").value;
if(pwd!=confirmpwd)
    alert("Xác minh mật khẩu không đúng");
else 
    alert("Xin chào " + name + ". Tài khoản " + acc + " của bạn đã được tạo");
}