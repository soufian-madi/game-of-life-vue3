<template>
    <div :class="tileClass">
    </div>
</template>


<script lang="ts" setup>
    import {ref, watch, computed} from "vue";

    
    const props = defineProps<{
        state:boolean
    }>()

    const tileClass=  computed(() =>props.state? "living-cell": "dead-cell")

</script>

<style scoped>

div[class$="cell"] {
 width: 2rem;
    height:  2rem;
    border: gray solid 1px;
    margin: 0;  
    border-radius: 3px;
}
.living-cell{
   background-color: rgb(209, 231, 224);
   transition: all 150ms ease-out;  
}
.dead-cell{
    background-color: rgb(75, 202, 113);
    transition: all 150ms ease-out;
    
}

</style>