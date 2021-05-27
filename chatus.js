addname=document.getElementById("user_name").value ;
function login(){
localStorage.setItem("addname",addname);
window.location="chatus_room.html";
}