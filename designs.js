// Select color input
const color = document.getElementById("colorPicker");
// Select size input
const canvas = document.getElementById("pixelCanvas");
const height = document.getElementById("inputHeight");
const width = document.getElementById("inputWeight");
const sizePicker = document.getElementById("sizePicker");

//Add event listener to the color picker
color.addEventListener("click", function(){});

//Add event listener to click of submit button
sizePicker.onsubmit = function(event){
    event.preventDefault();
    clearGrid();
    makeGrid();
};


// When size is submitted by the user, call makeGrid()

function makeGrid() {
	for (let r=0; r<height.value; r++){
        const row = canvas.insertRow(r);
        for (let c=0; c<width.value; c++){
            const cell = row.insertCell(c);
            cell.addEventListener("click", fillSquare);
        }
    }

}

function clearGrid(){
    while (canvas.firstChild){
         canvas.removeChild(canvas.firstChild);
    }
}

function fillSquare () {
    this.setAttribute("style", `background-color: ${color.value}`);
}