<template>
  <div class="d-flex flex-column justify-center base-card restore ma-2 hover" style="max-width: 500px">
    <div class="d-flex align-center justify-space-around">
      <img v-if="props.image" :src="props.image" style="max-height: 120px" />

      <h3>{{props.title}}</h3>
    </div>
    <p class="ma-4" :class="props.image ? '':'mt-16 ' " v-html="props.description"/>


    <v-btn v-if="props.btnName" color="secondary" class="ma-4 mt-8" style="width: 92%;">{{ props.btnName }}</v-btn>
  </div>
</template>

<script setup lang="ts">
import { defineProps } from 'vue';
const props = defineProps<{
  title?: string,
  description: string,
  image?: string,
  btnName?: string,
  pathTo?: string
}>();

</script>

<style scoped>

p{
  text-align: justify;
  padding: 0 30px;
  font-size: 16px;
  line-height: 1.2;
}
</style>
