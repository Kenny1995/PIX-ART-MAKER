$(function() {
  $("#sizePicker").submit(e => {
    e.preventDefault();
    const gridHeight = $("#inputHeight").val();
    const gridWidth = $("#inputWeight").val();

    //this will reset the grid input after the creation of the grid
    $("#inputHeight").val(1);
    $("#inputWeight").val(1);

    makeGrid(gridHeight, gridWidth); //calling the makeGrid()
  });

  //creates the grid using the input value in gridHeight and gridWidth
  const makeGrid = (gridHeight, gridWidth) => {
    $("tr").remove();

    for (let row = 1; row <= gridHeight; row++) {
      $("#pixelCanvas").append("<tr></tr>");
      for (let column = 1; column <= gridWidth; column++) {
        $("tr")
          .filter(":last")
          .append("<td></td>");
      }
    }
    assignColor();
  };

  //addColor to the cell when clicked
  const assignColor = () => {
    $("td").click(function() {
      const color = $("#colorPicker").val();
      if ($(this).attr("style")) {
        //checks if the attribute: 'style' exists in td.
        $(this).removeAttr("style"); //deletes attribute: 'style'
      } else {
        $(this).attr("style", "background-color: " + color); //adds 'style' attribute
      }
    });
  };

  //To delete entire grid.
  $("#deleteGrid").click(() => {
    $("#pixelCanvas")
      .find("tr")
      .remove();
  });

  //To remove colors from the grid when clicked.
  $("#removeColor").click(() => {
    $("td").removeAttr("style");
  });
});

// INITIAL JS DOM CODE WRITTEN BY ME BEFORE TAKING A CRASH COURSE ON JQUERY WHICH GAVE RISE TO MY CODE ABOVE and it is working perfectly well, just had to write the above to adhere to instruction of using a Jquery to manuplate the DOM.

/*// Select color input
const color = document.getElementById("colorPicker");
// Select size input
const canvas = document.getElementById("pixelCanvas");
const height = document.getElementById("inputHeight");
const width = document.getElementById("inputWeight");
const sizePicker = document.getElementById("sizePicker");
const clear = document.getElementById("clear");

//Add event listener to the color picker
color.addEventListener("click", function(){});

//Add event listener to click of submit button
sizePicker.onsubmit = function(event){
    event.preventDefault();
    clearGrid();
    makeGrid();
};

clear.addEventListener ("click", function clearGrid(){
    while (canvas.firstChild){
         canvas.removeChild(canvas.firstChild);
    }
})

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
}*/
