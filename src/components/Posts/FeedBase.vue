<template>
 <ds-container>
  <div class="d-flex  align-center justify-space-between ">
    <h1>{{props.title}} <span style="font-size: large;">by</span> <span class="theBridge"> The Bridge</span></h1>
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
