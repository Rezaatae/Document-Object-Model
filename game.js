var cellOne = document.querySelector("#one");
var cells = document.querySelectorAll("td");
var button1 = document.querySelector("#b")

button1.addEventListener("click", clearBoard);

function clearBoard(){
    for(var i=0; i<cells.length;i++){
        cells[i].textContent = ""
    }
}

function changeMarker(){
        if(this.textContent === ""){
            this.textContent = "X"
        }else if(this.textContent === "X"){
            this.textContent = "O";
        }else{
            this.textContent = ""
        }
    }


for(var i=0; i<cells.length;i++){
    cells[i].addEventListener("click", changeMarker)
}