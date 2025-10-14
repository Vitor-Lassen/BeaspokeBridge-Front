<template>
  <PageHeader
    :imagem="props.img"
    :title="props.title"
    :sub-img="props.subImg"
     />
</template>

<script setup lang="ts">
import PageHeader from '../Generic/PageHeader.vue';
import { defineProps } from 'vue';

const props = defineProps<{
  title: string,
  subImg?: string,
  img: string
}>()
</script>
