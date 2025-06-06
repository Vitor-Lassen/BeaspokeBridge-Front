<template>
<div id="bs-container" >
  <div id="bs-container-content" >
    <slot />

  </div>
</div>
</template>

<script setup lang="ts">
// import { defineProps } from 'vue';

// const props = defineProps<{

// }>();
</script>

<style>
#bs-container {
  width: 100%;

}
#bs-container-content {
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 10px 50px ; /* Example padding */
  display: flex;
  flex-direction: column;
  

}

p{
  text-align: justify;

}
</style>
