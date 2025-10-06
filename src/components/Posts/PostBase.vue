<template>
  <ds-card border class="mb-8 pl-8 pr-8" @click="goTo( props.post.to)">

    <div class="d-flex ">
      <v-img :src="props.post.imgSrc" width="200"></v-img>
      <div class="d-flex flex-column">
        <div class="d-flex align-center justify-space-between">
          <h2>{{ props.post.title }}</h2>
          <v-btn color="secondary" size="large">Read More</v-btn>
        </div>
        <p > {{ props.post.description }}<span class="pb-continue">  continued </span></p>
      </div>
    </div>

  </ds-card>
</template>

<script setup lang="ts">
import { defineProps } from 'vue';
import type { PostsTemplate } from '@/Models/PostsTemplate';

const props = defineProps<{
  post: PostsTemplate

}>()

const goTo = (url: string) => {
  window.open(url, '_blank');
}
</script>

<style scoped>
.pb-continue{
  font-weight: bold;
  cursor: pointer;
}
.pb-continue:hover{
  text-decoration: underline;
  font-size-adjust: .6;
}
</style>
