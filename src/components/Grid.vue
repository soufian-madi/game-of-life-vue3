<template>
    <div class="grid">   
            <Tile v-for="cell in cells" @click="$emit('tile:click',cell)" :state="cell.state"/>
    </div>   
</template>

<script lang="ts" setup>
    import Tile from "./Tile.vue"
    import {onMounted, ref, reactive} from "vue"
    import Cell from "../model/Cell"
    
    const props = defineProps<{
        cells: Cell[]
    }>()
    
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