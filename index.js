
var button = document.getElementById("subscribe")
var input = document.getElementById("emailinput")
var msg = document.getElementById("msgerror")
var box1 = document.getElementById("box1")
var box2 = document.getElementById("box2")
var confirm = document.getElementById("confirm")
var display = document.getElementById("emaildisplay")

function errormessage() {
    if (input.value.indexOf('@') === -1 || input.value.indexOf('.com') === -1) {
        input.style.border = "2px solid hsl(4, 100%, 67%)";
        input.style.backgroundColor = "lightpink";
        msg.style.display = "block";
    } else {
        // Reset styles if conditions are met
        input.style.border = "";
        input.style.backgroundColor = "";
        msg.style.display = "none";
        success();
        var useremail = input.value;
        display.innerHTML = "A confirmation email has been sent to <strong>" + useremail + "</strong>. Please open it and click the button inside to confirm your subscription.";
    }
}

function active(){
    if (input.value.trim() === "") {
        button.style.backgroundColor = "";
        button.style.background = "";
    } 
    else {
        button.style.background = "linear-gradient(to right, tomato, orange)";
    }
}

function success(){
    box1.style.display = "none"
    box2.style.display = "flex"
}

function back(){
    box1.style.display = "flex"
    box2.style.display = "none"
}


button.addEventListener("click",errormessage)
input.addEventListener("input", active)
confirm.addEventListener("click",back)

