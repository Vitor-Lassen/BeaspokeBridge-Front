<template>
  <div
    class="d-flex justify-center aling-center menu"
    :class="props.reverse ? 'flex-row-reverse' : 'flex-row'"
    @click="router.push(props.pathto)"
  >
    <v-img :src="props.src" aspect-ratio="16/9" max-width="150px" rounded></v-img>
    <div class="ma-4 d-flex flex-column align-center justify-center" style="max-width: 600px">
      <h3>{{ props.title }}</h3>
      <p>{{ props.description }}</p>
    </div>
  </div>
  <v-divider class="ma-2"></v-divider>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router';
import { defineProps } from 'vue'

const router = useRouter();


const props = defineProps<{
  reverse?: boolean
  title: string
  description: string
  buttonText: string
  src: string
  pathto:string
}>()
</script>


<style lang="scss" scoped>

p{
  font-size: 14px;
}


.menu:hover{
  background-color: $soft-blue;
}
</style>
