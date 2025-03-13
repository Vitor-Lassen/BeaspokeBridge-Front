<template>
  <v-card class="mx-auto ma-4" variant="elevated" max-width="300">
    <v-img
      max-width="300"
      :src="props.src"
      aspect-ratio="16/9"
      cover
      rounded
      class="ma-2"
    ></v-img>

    <v-card-title> {{ props.title }}</v-card-title>

    <v-card-text> {{ props.description }} </v-card-text>
    <div class="pa-2">
      <v-btn class="w-100" color="secondary" :text="props.btnName" @click="router.push(pathTo)"></v-btn>
    </div>
  </v-card>
</template>

<script setup lang="ts">
import { defineProps } from 'vue'
import { useRouter } from 'vue-router';

const router = useRouter();

const props = defineProps<{
  src: string
  title: string
  description: string
  btnName: string
  pathTo: string
}>()
</script>
