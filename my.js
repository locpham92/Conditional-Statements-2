function noBtn() {
    let noBtn = document.getElementById("no-btn");
    noBtn.document.addEventListener("mouseover", mouseover)
    function mouseover(){
        noBtn.style.top = Math.random()*500+"px";
        noBtn.style.left = Math.random()*500+"px";
    }
}
function hoverNoButton() {
    let btnNo = document.getElementById("no-btn");
    btnNo.style.top = Math.random()*500+"px";
    btnNo.style.left = Math.random()*500+"px";
}
function yesBtn() {
   alert("You are right")
}