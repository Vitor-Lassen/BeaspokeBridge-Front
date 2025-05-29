<template>
  <div class="d-flex align-center justify-center max-content-width pt-6 pb-6" :class="props.revert ? 'flex-row-reverse' : ''">
    <v-img :src="props.img" min-width="250" class="ma-8"></v-img>
    <div class="base-card" style="width: 100%">
      <p v-html="props.description"></p>
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
