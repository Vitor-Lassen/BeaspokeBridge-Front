<template>
 <ds-container>
  <div class="d-flex  align-center justify-space-between mobile ">
    <div class="d-flex align-center justify-center mobile">
      <h1 class="mb-0 mt-0">{{props.title}} <span style="font-size: large;">by &nbsp;</span> </h1><h1 class="theBridge mt-0 mb-0">The Bridge </h1>
    </div>

    <img :src="imgSrc" style="max-width: 200px;"/>
  </div>
  <div class="ma-4">
    <slot></slot>
  </div>
  <post-base v-for="(post, index) in props.posts" :key="index" :post="post"/>
   </ds-container>
</template>

<script setup lang="ts">
import PostBase from './PostBase.vue';
import type { PostsTemplate } from '@/Models/PostsTemplate';
import { defineProps } from 'vue';

const props = defineProps<{
  title: string,
  imgSrc: string
  posts: Array<PostsTemplate>
}>()
</script>
