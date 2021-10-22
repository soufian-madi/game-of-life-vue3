<script setup lang="ts">
import { reactive, onMounted } from "vue";

import Grid from "./components/Grid.vue";
import Cell from "./model/Cell"

  let allCells: Cell[] = reactive([])

  onMounted(()=> {
    for(let x=0; x<8;x++){
        for (let y=0; y<8; y++){
            allCells.push({location: {x:x,y:y}, state: true})
        }
    }
});
</script>

<template>
  <Grid/> 

 
</template>

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
