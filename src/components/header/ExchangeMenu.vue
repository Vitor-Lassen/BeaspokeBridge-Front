<template>
        <div class="d-flex  justify-start " :class="props.reverse ? 'flex-row-reverse' : 'flex-row'">
          <v-img
            :src="props.src"
            aspect-ratio="16/9"
            max-width="200px"
            cover></v-img>
            <div class="ma-4 d-flex flex-column justify-space-between">

              <h3>{{props.contry}}</h3>
              <p>{{ props.description }}</p>
              <v-btn :text="props.buttonText " max-width="200px"></v-btn>
            </div>
          </div>
          <v-divider class="ma-2"></v-divider>

</template>

<script setup lang="ts">
import { defineProps } from 'vue';

const props = defineProps<{
  reverse?: boolean
  contry: string
  description: string
  buttonText: string
  src:string
}>();

</script>
