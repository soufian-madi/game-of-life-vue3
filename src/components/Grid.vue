<template>
    <div class="grid">   
            <Tile v-for="cell in cells" @click="tileClick(cell.location)"/>
    </div>   
</template>

<script lang="ts" setup>
    import Tile from "./Tile.vue"
    import Coordinate from "../model/Coordinate"
    import {onMounted, ref, reactive} from "vue"
    import Cell from "../model/Cell"
    
    const props = defineProps<{
        cells: Cell[]
    }>()
    let tiles:Coordinate[] =reactive([]);
    let counter=ref(0);
    
    onMounted(()=> {
        for(let x=0; x<8;x++){
            for (let y=0; y<8; y++){
                tiles.push({x:x,y:y})
    
            }
        }
    });
    
    function tileClick(coord: Coordinate): void {
        console.log("X: %i  y: %i",coord.x, coord.y );
    }
    
       
</script>

<style scoped>
.grid{
    display: flex;
    justify-content: center;
    width: 17rem;
    height: fit-content;
    flex-wrap: wrap;
    margin: auto;
}
</style>