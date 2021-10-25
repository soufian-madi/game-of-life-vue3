<template>
  <Grid :cells="allCells"  @tile:click="handelTileClick"/> 
</template>

<script setup lang="ts">
  import { reactive, onMounted } from "vue";

  import Grid from "./components/Grid.vue";
  import Cell from "./model/Cell"
  import Coordinate from "./model/Coordinate";

  let allCells: Cell[] = reactive([])
  const width: number= 8;
  const height: number = 8;
  onMounted(()=> {
      for(let x=0; x<width;x++){
          for (let y=0; y<height; y++){
              allCells.push({location: {x:x,y:y}, state: true});
          }
      }
  });
    function handelTileClick(cell: Cell){
      cell.state=!cell.state
      console.log("x: %i   y: %i",cell.location.x, cell.location.y);
      console.log(getAllNeighbours(cell));
    }

  function getCellAtCoord(coord: Coordinate): Cell{
    const x= coord.x;
    const y=coord.y;

    const index = x*height+y;
    return allCells[index];
  }

  function getAllNeighbours(cell: Cell): Cell[]{
    const x= cell.location.x;
    const y= cell.location.y;
    let neighbours: Cell[] = [];
    const hasUpper =x > 0
    const hasLower =x < height-1;
    const hasLeft = y > 0
    const hasRigt = y < width-1;

    if(hasUpper){
        neighbours.push(getCellAtCoord({x:x-1,y:y}))
        if (hasLeft)
          neighbours.push(getCellAtCoord({x:x-1,y:y-1}))
    }
    
    if(hasLower){
      neighbours.push(getCellAtCoord({x:x+1,y:y}))
      if(hasRigt)
        neighbours.push(getCellAtCoord({x:x+1,y:y+1}))
    }
    
    if(hasLeft){
       neighbours.push(getCellAtCoord({x:x,y:y-1}))
       if (hasLower)
        neighbours.push(getCellAtCoord({x:x+1,y:y-1}))
    }
    
    if(hasRigt){
       neighbours.push(getCellAtCoord({x:x,y:y+1}))
        if(hasUpper){
           neighbours.push(getCellAtCoord({x:x-1,y:y+1}))
        }
    }

    return neighbours;


  }

</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
