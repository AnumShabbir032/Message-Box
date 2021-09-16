let passBtn = document.getElementById("passBtn");
passBtn.addEventListener("click", function ( ) {
    let textInput = document.getElementById("textInput").value;
    let passMe = document.getElementById("passMe");
    passMe.innerHTML =  textInput;
})

setTimeout(function () {
var passMe = document.getElementById("passMe");
passMe.parentNode.removeChild(passMe);
}, 10000);