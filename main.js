
let ball = document.getElementById("circle");

function moveCircle(){
    ball.style.WebkitAnimation = "mymove 4s 2"; 
}

ball.addEventListener("webkitAnimationStart", start);
ball.addEventListener("webkitAnimationIteration", repeat);
ball.addEventListener("webkitAnimationEnd", end);


function start(){
    this.innerHTML = "We are on the move"
    this.style.backgroundColor = "orangered";
}

function repeat(){
    this.innerHTML = "Still going";
    this.style.backgroundColor = "yellow";
}

function end (){
    this.innerHTML = "We are finish";
    this.style.backgroundColor = "red";
}