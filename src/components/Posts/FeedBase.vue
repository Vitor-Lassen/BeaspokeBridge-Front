<template>
 <ds-container>
  <div class="d-flex  align-center justify-space-between ">
    <h1>{{props.title}} <span style="font-size: large;">by</span> <span class="theBridge"> The Bridge</span></h1>
    <v-img :src="imgSrc" max-height="200"></v-img>
  </div>
  <div class="ma-6">
    <slot></slot>
  </div>
   </ds-container>
</template>

<script setup lang="ts">

import { defineProps } from 'vue';

const props = defineProps<{
  title: string,
  imgSrc: string
}>()
</script>
