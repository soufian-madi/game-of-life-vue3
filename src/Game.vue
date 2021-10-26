<template>
  <Grid :cells="allCells"  @tile:click="handelTileClick"/> 
  <button @click="transition">NEXT</button>
</template>

<script setup lang="ts">
  import { reactive, onMounted } from "vue";

  import Grid from "./components/Grid.vue";
  import Cell from "./model/Cell"
  import Coordinate from "./model/Coordinate";

  let allCells: Cell[] = reactive([])
  const width: number= 8;
  const height: number = 8;

    // transitions all cell to the next generation
  function transition(){
      let newGeneration: Cell[] = [];
      allCells.forEach(cell => newGeneration.push(generateTranitionCell(cell)));
      allCells.splice(0,allCells.length);
      newGeneration.forEach(cell => allCells.push(cell));
      console.log(newGeneration);
  }
  function generateTranitionCell(cell: Cell): Cell {
      const livingNeigbours = getNumberOfLivingNeighbours(cell);
        if (cell.state){
           if(livingNeigbours== 3 || livingNeigbours ==2){
            return {...cell,state: true};
          }
        }else if (livingNeigbours == 3){ 
          return {...cell,state: true};
        }
        return {...cell,state: false};
  }
    
    function handelTileClick(cell: Cell){
      cell.state=!cell.state
      console.log("tile at (x: %i   y: %i) is now %s",cell.location.x, cell.location.y, cell.state?"living": "dead");
      
    }

  function getCellAtCoord(coord: Coordinate): Cell{
    const x= coord.x;
    const y=coord.y;

    const index = x*height+y;
    return allCells[index];
  }

  function getNumberOfLivingNeighbours(cell: Cell): number{
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
    return neighbours.filter(neigh => neigh.state).length;

  }

   onMounted(()=> {
      for(let x=0; x<width;x++){
          for (let y=0; y<height; y++){
              allCells.push({location: {x:x,y:y}, state: false});
          }
      }
  });

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
