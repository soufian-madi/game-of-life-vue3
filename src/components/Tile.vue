<template>
    <div :class="tileClass">
    </div>
</template>


<script lang="ts" setup>
    import {ref} from "vue";

    let tileClass: string=  "living-cell"

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
   background-color: rgb(120, 207, 181);
}
.dead-cell{
    background-color: rgb(144, 179, 169);
    
}
:hover{  
    background-color: rgb(144, 179, 169);
}

</style>