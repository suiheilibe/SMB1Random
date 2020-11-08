const NUM_WORLD = 8;
const NUM_AREA  = 4;
const COLOR_STAGE = 0xcc0000ff;

const container = document.querySelector("div.container");
//console.log(container);

// create view
const mainGrid = document.createElement("div");
mainGrid.className = "main-grid";
container.appendChild(mainGrid);

const stageGrid = document.createElement("div");
stageGrid.className = "stage-grid";
mainGrid.appendChild(stageGrid);

const stages = [];

for (let i = 1; i <= NUM_WORLD; i++) {
  for (let j = 1; j <= NUM_AREA; j++) {
    let stageElement = document.createElement("div");
    stageElement.className = "stage";
    stageElement.textContent = `${i}-${j}`;
    stageGrid.appendChild(stageElement);
    const stage = {
      element: stageElement,
      color: COLOR_STAGE,
      weight: 1
    };
    stages.push(stage);
  } 
}

function updateAlpha(stage, alpha) {
  const e = stage.element;
  const curColor = stage.color;
  const color = curColor - (curColor & 0xff) + Math.floor(0xff * alpha);
  e.style.backgroundColor = '#' + color.toString(16);
}

updateAlpha(stages[1], 1.0);