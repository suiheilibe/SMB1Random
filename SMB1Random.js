const NUM_WORLD = 8;
const NUM_AREA  = 4;

const container = document.querySelector("div.container");
//console.log(container);

// create view
const mainGrid = document.createElement("div");
mainGrid.className = "main-grid";
container.appendChild(mainGrid);

const stageGrid = document.createElement("div");
stageGrid.className = "stage-grid";
mainGrid.appendChild(stageGrid);

for (let i = 1; i <= NUM_WORLD; i++) {
  for (let j = 1; j <= NUM_AREA; j++) {
    let stage = document.createElement("div");
    stage.className = "stage";
    stage.textContent = `${i}-${j}`;
    stageGrid.appendChild(stage);
  } 
}