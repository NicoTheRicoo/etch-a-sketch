document.addEventListener("DOMContentLoaded", function(){
    console.log("Dom Loaded")
});

let size = getSize();
const grid = document.getElementById("grid");
printGrid(grid, size);
const resetBtn = document.getElementById("resetBtn");
resetBtn.addEventListener("click", resetGrid);
const createBtn = document.getElementById("createBtn");
createBtn.addEventListener("click", changeSize);

function changeSize(){
    size = getSize();
    resetGrid();
    printGrid(grid, size);
}

function resetGrid(){
while(grid.firstChild){
    grid.removeChild(grid.firstChild);
}
printGrid(grid, size);
}

function changeColor(){
    this.style.backgroundColor = "black";
}

function printGrid(grid, size){
    grid.innerHTML = '';
//outer loop creates the flexbox row
    for(let i = 0; i < size; i++){
        let gridRow = document.createElement("div");
        gridRow.classList.add("gridRow");
        grid.appendChild(gridRow);
//inner loop fills each flexbox row with the number of cells
        for(let j = 0; j < size; j++){
            let gridCell = document.createElement("div");
            gridCell.style.width = `${600 / size}px`;
            gridCell.style.height = `${600 / size}px`;
            gridCell.classList.add("cell");
            gridRow.appendChild(gridCell);
//adding event listener so it can change colors
            gridCell.addEventListener("mouseover", changeColor);
        }
    }
}

function getSize(){
//gets the size from html input
    let sizeInput = document.getElementById("size");
    let size = parseInt(sizeInput.value);
//checks for proper sizes
    if(!size){
        size = 16;
    }
    if(size < 2 || size > 100){
        alert("Please enter a size between 2 and 100");
        size = 16;
    }
    return size;
}
