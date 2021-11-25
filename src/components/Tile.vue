<template>
    <div :class="tileClass"></div>
</template>

<script lang="ts" setup>
import { ref, watch, computed } from "vue";

const props = defineProps<{
    state: boolean
}>()
const tileClass = computed(() => props.state ? "living-cell " : "dead-cell")

</script>

<style scoped>
div[class*="cell"] {
    width: 1.9rem;
    height: 1.9rem;
    min-width: 1.9rem;
    border: gray solid 1px;
    margin: 0;
    border-radius: 3px;
}
.living-cell {
    background-color: rgb(75, 202, 113);
    transition: all 150ms ease-out;
    animation: life-bounce 0.15s;
    transform: scale(1);
}
.dead-cell {
    background-color: rgb(209, 231, 224);
    transition: all 150ms ease-out;
    animation: death-bounce 0.15s;
    transform: scale(1);
}

@keyframes life-bounce {
    0% {
        transform: scale(0);
        opacity: 1;
    }
    66% {
        transform: scale(1.1);
    }
    100% {
        transform: scale(1);
    }
}

@keyframes death-bounce {
    0% {
        transform: scale(1);
        opacity: 1;
    }
    66% {
        transform: scale(0.75);
    }
    100% {
        transform: scale(1);
    }
}
</style>