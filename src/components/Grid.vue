<template>
    <div v-if="props.cells.length != 0" style="padding: 1rem;">
        <div class="tile-row" v-for="heightIndex in (height)" key="hIndex">
            <Tile
                v-for="widthIndex in (width)"
                @click="$emit('tile:click', props.cells[((heightIndex - 1) * width) + widthIndex - 1])"
                :alive="props.cells[((heightIndex - 1) * width) + widthIndex - 1].state"
            />
        </div>
    </div>
</template>

<script lang="ts" setup>
import Tile from "./Tile.vue"
import {computed } from "vue"
import Cell from "../model/Cell"
const props = defineProps<{
    cells: Cell[]
}>()


const width = computed(() => {
    if (props.cells && props.cells[props.cells.length - 1])
        return props.cells && props.cells[props.cells.length - 1].location.y + 1
    else return 0;
})
const height = computed(() => {
    if (props.cells && props.cells[props.cells.length - 1])
        return props.cells && props.cells[props.cells.length - 1].location.x + 1
    else return 0;
})


</script>

<style scoped>
.grid {
    display: flex;
    justify-content: center;
    width: 17rem;
    height: fit-content;
    flex-wrap: wrap;
    margin: auto;
}

.tile-row {
    display: flex;
    justify-content: center;
    width: 100%;
}
</style>