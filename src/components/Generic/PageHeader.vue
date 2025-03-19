<template>
    <v-parallax
    :src="props.imagem"
    height="400"
    class="head-img d-flex align-center justify-right"
  >
    <div class="head-title d-flex flex-column justify-center align-start align-items-left">
      <h1 class="ml-12">{{ props.title }}</h1>
      <p class="ml-12 subtitle">{{props.subtitle}}</p>
      <v-btn v-if="props.btn !== undefined" class="align-self-end mr-12" color="secondary">{{props.btn}} </v-btn>
    </div>
  </v-parallax>
</template>

<script setup lang="ts">
import { defineProps } from 'vue';


const props = defineProps<{
  title: string,
  subtitle: string,
  imagem: string,
  btn?: string,
}>();

</script>

<style scoped>

.head-title {
  background-color: white;
  height: 200px;
  opacity: 90%;
}

.subtitle {
  font-size: 28px;
}
@media (min-width: 960px) {

  .head-title {
    width: 45%;
    border-radius: 0 32px 32px 0;
  }
}
</style>
