<template>
  <Grid v-bind:cells="allCells" @tile:click="handelTileClick" />
  <div class="buttons-container">
    <button @click="transition">NEXT</button>
    <button @click="play">PLAY</button>
    <button @click="stop">Stop</button>
  </div>
  <div class="slider-container">
    <p style="margin: 0px; padding-right: 2rem;">delay (ms):</p>
    <el-slider
      class="slider"
      :min="100"
      :max="1000"
      show-tooltip
      v-model="sliderValue"
      show-input
    ></el-slider>
  </div>
</template>

<script setup lang="ts">
import { reactive, onMounted, ref, watch } from "vue";
import Grid from "./components/Grid.vue";
import Cell from "./model/Cell"

let allCells: Cell[][] = reactive([]);
const width: number = 50;
const height: number = 30;
let intervalId: number;
let sliderValue = ref(500);


//transition every given timeinterval automatically
function play() {
  clearInterval(intervalId);
  intervalId = setInterval(() => transition(), sliderValue.value)
}
function stop() {
  clearInterval(intervalId);
}

// transitions all cell to the next generation
function transition() {
  let newCellGeneration: Cell[][] = [];
  allCells.forEach(cellRow => {
    newCellGeneration[cellRow[0].location.x] =[];
    cellRow.forEach(cell => newCellGeneration[cell.location.x].push(generateTranitionCell(cell)))
    });
 Object.assign(allCells, newCellGeneration);

}
function generateTranitionCell(cell: Cell): Cell {
  const livingNeigbours = getNumberOfLivingNeighbours(cell);
  if (cell.state) {
    if (livingNeigbours == 3 || livingNeigbours == 2) {
      return { ...cell, state: true };
    }
  } else if (livingNeigbours == 3) {
    return { ...cell, state: true };
  }
  return { ...cell, state: false };
}

function handelTileClick(cell: Cell) {
  cell.state = !cell.state
  console.log("tile at (x: %i   y: %i) is now %s", cell.location.x, cell.location.y, cell.state ? "living" : "dead");

}

function getNumberOfLivingNeighbours(cell: Cell): number {
  const x = cell.location.x;
  const y = cell.location.y;
  let neighbours: Cell[] = [];
  const hasUpper = x > 0
  const hasLower = x < height - 1;
  const hasLeft = y > 0
  const hasRigt = y < width - 1;

  if (hasUpper) {
    neighbours.push(allCells[x-1][y]);
    if (hasLeft) //upper left neighbour
      neighbours.push(allCells[x-1][y-1]);
  }
  if (hasLower) {
    neighbours.push(allCells[x+1][y]);
    if (hasRigt) //lower right neighbour
      neighbours.push(allCells[x+1][y+1]);
  }

  if (hasLeft) {
    neighbours.push(allCells[x][y-1]);
    if (hasLower) // lower left neighbour
      neighbours.push(allCells[x+1][y-1]);
  }

  if (hasRigt) {
    neighbours.push(allCells[x][y+1]);
    if (hasUpper) { // upper right neighbour
      neighbours.push(allCells[x-1][y+1]);
    }
  }
  return neighbours.filter(neighbour => neighbour.state).length;

}

watch(sliderValue, () => {
  clearInterval(intervalId);
  intervalId = setInterval(() => transition(), sliderValue.value)
})


onMounted(() => {
  for (let x = 0; x < height; x++) {
    allCells[x] = [];
    for (let y = 0; y < width; y++) {
      allCells[x].push({ location: { x: x, y: y }, state: false });
    }
  }
});

</script>

<style scoped>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

button {
  padding: 0.3rem;
  margin: 1rem;
  border-radius: 5px;
  font-family: Impact, Haettenschweiler, "Arial Narrow Bold", sans-serif;
  width: 10rem;
  height: 4rem;
  font-size: x-large;
}

.buttons-container {
  display: flex;
  justify-content: center;
}

.slider-container {
  font-size: xx-large;
  display: flex;
  justify-content: center;
  align-items: center;
}
.slider {
  width: 50%;
  height: 15px;
  margin-bottom: 1rem;
}
</style>
<style>
.el-slider__button-wrapper {
  display: flex;
  align-items: center;
}
</style>
