<template>
 <div class="pa-6"  :style="{maxWidth:prop.maxWidth+'px'}">
  <div class="d-flex align-center justify-center">
  <h2>{{ prop.title }}</h2>
  <img  :src="prop.img" :style="{minWidth:prop.imgMinWidth+'px'}" alt="">
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
  imgMinWidth?:number
}>()

</script>

<style scoped >

img{
  max-width: 100px;
}



</style>
