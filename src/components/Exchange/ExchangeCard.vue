<template>
  <v-card class="ma-4" max-width="700px" rounded="xl">
    <v-card-title> <b>{{props.title}}</b> </v-card-title>
    <v-card-text>{{ props.description }}</v-card-text>
    <v-img
      :src="props.image"
      aspect-ratio="16/9"
      max-height="200"
      cover
      rounded
      class="ma-4 show-photo-card"
    />
  </v-card>
</template>
<script setup lang="ts">
import { defineProps } from 'vue'

const props = defineProps<{
  title: string
  description: string
  image: string
}>()
</script>


<style scoped>
.show-photo-card{
  display: none;
}
@media (max-width: 960px) {
  .show-photo-card{
  display:grid;

  }
}
</style>
