<template>
<div class="d-flex pa-4">
  <v-img :src="props.img" width="50"></v-img>
  <p v-html="props.p" style="text-align: justify;"></p>
</div>
</template>

<script setup lang="ts">
import { defineProps } from 'vue';

const props = defineProps<{
  p:string,
  img:string
}>()
</script>


