const container = document.getElementById("container")

function makeGrid(size) {
    container.style.gridTemplateColumns = "repeat(" + size + ", 1fr)";
    for(let i = 0; i < (size * size); i++){
    let div = document.createElement("div");
    div.addEventListener('mousedown', changeColorClick)
    div.addEventListener('mouseover', changeColor)
    document.getElementById("container").appendChild(div).className = "grid-item";
    }
}

makeGrid(16)

function changeSize() {
    let input = prompt("What size? (max 64)")
    while(true) {
        if (/[a-zA-Z]/g.test(input) == false && input < 65 && input > 0) {
            container.replaceChildren();
            makeGrid(input);
            return;
        } else {
        input = prompt("That's not a option. Try again!")
        }
    }
}

var mouseDown = 0;
document.body.onmousedown = function() { 
mouseDown++;
}
document.body.onmouseup = function() {
mouseDown--;
}

function changeColor(i) {
    if(mouseDown > 0){
        i.target.style.backgroundColor = "red"
    }
}

function changeColorClick(i) {
    i.target.style.backgroundColor = "red"
}