<template>
    <div v-if="(props.cells.length != 0)" style="padding: 1rem;">
        <div class="tile-row" v-for="cellRow in props.cells" key="hIndex">
            <Tile
                v-for="cell in cellRow"
                @click="$emit('tile:click', cell)"
                :alive="cell.state"
            />
        </div>
    </div>
</template>

<script lang="ts" setup>
import Tile from "./Tile.vue"
import Cell from "../model/Cell"
const props = defineProps<{
    cells: Cell[][]
}>()

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