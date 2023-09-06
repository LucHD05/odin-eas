function makeGrid(rows, collumns) {
    for(let i = 0; i < (rows * collumns); i++){
    let div = document.createElement('div');
    document.getElementById('grid').appendChild(div).className = "grid-item";
    }
}

makeGrid(16, 16)

const canvas = document.getElementById("grid");
const ctx = canvas.getContext("2d");

ctx.fillStyle = "#FF0000";
ctx.fillRect(0, 0, 150, 75);