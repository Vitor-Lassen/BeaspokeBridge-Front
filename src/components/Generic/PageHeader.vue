<template>
    <v-parallax
    :src="props.imagem"
    height="450"

    class="head-img align-center justify-right ph-header"
  >
    <div class="head-title d-flex flex-column justify-center align-start align-items-left">
      <h1 class="ml-12 mb-1 mt-1">{{ props.title }}</h1>
      <p v-if="props.subtitle" class="ml-12 subtitle">{{props.subtitle}}</p>
      <img v-if="props.subImg" :src="props.subImg" class="ml-12 mb-1 mt-1" style="height: 150px; width: auto; align-self: center;" />
      <v-btn v-if="props.btn !== undefined" class="align-self-end mr-12" color="secondary">{{props.btn}} </v-btn>
    </div>
  </v-parallax>
  <div style="height: 450px;"></div>
</template>

<script setup lang="ts">
import { defineProps } from 'vue';


const props = defineProps<{
  title: string,
  subtitle?: string,
  subImg?: string,
  imagem: string,
  btn?: string,
}>();

</script>

<style scoped>

.ph-header {
  width: 100vw;
    position:absolute;
    left: calc(-50vw + 50%);
}
.head-title {
  background-color: white;
  height: 300px;
  opacity: 90%;
}

.subtitle {
  font-size: 28px;
  text-align: start;
}
@media (min-width: 960px) {

  .head-title {
    width: 45%;
    height: 250px;
    border-radius: 0 32px 32px 0;
  }
}


</style>
