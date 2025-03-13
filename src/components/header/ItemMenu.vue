<template>
  <div
    class="d-flex justify-center aling-center menu"
    :class="props.reverse ? 'flex-row-reverse' : 'flex-row'"
  >
    <v-img :src="props.src" aspect-ratio="16/9" max-width="200px" rounded></v-img>
    <div class="ma-4 d-flex flex-column align-center justify-center" style="max-width: 600px">
      <h3>{{ props.title }}</h3>
      <p>{{ props.description }}</p>

      <v-btn class="ma-2" color="secondary" :text="props.buttonText"></v-btn>
    </div>
  </div>
  <v-divider class="ma-2"></v-divider>
</template>

<script setup lang="ts">
import { defineProps } from 'vue'

const props = defineProps<{
  reverse?: boolean
  title: string
  description: string
  buttonText: string
  src: string
}>()
</script>


<style lang="scss" scoped>

p{
  font-size: 12px;
}


.menu:hover{
  background-color: aqua;
}
</style>
