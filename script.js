const gridTableContainer = document.querySelector(".grid-table");
const resetButton = document.querySelector(".reset-button");
const setButton = document.querySelector(".set-button");



let size = 16
let gridContent = document.createElement("div");
let gridContentsArray = [];

for(let i = 0; i < size*size; i++) {
	gridContentsArray[i] = document.createElement("div");
	gridContentsArray[i].setAttribute("class", "table-contents");
	gridTableContainer.appendChild(gridContentsArray[i]);
}

function changeColor(e) {
	if(e.target.className == "table-contents"){
		e.target.className = "table-contents-changed";
	}
	else {
		e.target.className = "table-contents";
	}
}

function reset(e) {
	while (gridTableContainer.firstChild) {
		gridTableContainer.removeChild(gridTableContainer.firstChild);
	}
	for(let i = 0; i < size*size; i++) {
		gridContentsArray[i].setAttribute("class", "table-contents");
		gridTableContainer.appendChild(gridContentsArray[i]);
		gridTableContainer.lastChild.removeAttribute("style");
	}
}

function set(e) {
	while (gridTableContainer.firstChild) {
		gridTableContainer.removeChild(gridTableContainer.firstChild);
	}
	
	size = prompt("Choose a new size for the box");
	gridTableContainer.style.gridTemplateRows = "repeat(size, auto)";
	gridTableContainer.style.gridTemplateColumns = "repeat(size, auto)";
	
	for(let i = 0; i < size*size; i++) {
		gridContentsArray[i].setAttribute("class", "table-contents");
		gridTableContainer.appendChild(gridContentsArray[i]);
	}	
}


function clickChangeColor(e) {
    let r = Math.floor(Math.random() * 250);
    let g = Math.floor(Math.random() * 250);
    let b = Math.floor(Math.random() * 250);
    e.target.style.backgroundColor = "rgb(" + [r,g,b].join() + ")";
}

gridTableContainer.addEventListener("mouseover", clickChangeColor);
//gridTableContainer.addEventListener("click", clickChangeColor);
//gridTableContainer.addEventListener("mouseover", changeColor);
resetButton.addEventListener("click" , reset);
setButton.addEventListener("click", set);

