<template>
 <div class="pa-6"  :style="{maxWidth:prop.maxWidth+'px'}">
  <div class="d-flex align-center justify-center">
  <h2>{{ prop.title }}</h2>
  <img class="ml-12" :src="prop.img" alt="">
  </div>
  <slot></slot>
 </div>
</template>

<script setup lang="ts">
import { defineProps } from 'vue';

const prop = defineProps<{
  title: string,
  img: string,
  maxWidth:number,
}>()

</script>

<style scoped >

img{
  max-width: 100px;
}



</style>
