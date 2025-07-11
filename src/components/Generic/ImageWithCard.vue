<template>
  <div class="d-flex align-center flex-wrap justify-center  hover" :class="props.revert ? 'flex-row-reverse' : ''" @click="router.push(props.link);" >
    <v-img :src="props.img" aspect-ratio="16/9" max-width="350" min-width="250" max-height="250" class="ma-8"></v-img>
    <div class="base-card ma-6" style="max-width: 700px">
      <p class="xs" v-html="props.description"></p>
      <v-btn  class="ma-2 iwc-btn" color="secondary" @click="router.push(props.link);"> Saiba +</v-btn>
    </div>

  </div>
</template>

<script setup lang="ts">
import { defineProps } from 'vue'
import { useRouter } from 'vue-router';

const router = useRouter();

const props = defineProps<{
  img: string,
  description: string,
  link: string
  revert?: boolean
}>();

</script>

<style scoped>
.iwc-btn {
    float: right;
    align-self: center;
}
</style>
