<template>
    <div class="d-flex align-center justify-space-around">
        <v-img class="ma-6" src="Logos BB/Logo.png" max-height="150"></v-img>
        <v-img src="plus.png" max-width="75"></v-img>
        <v-img class="ma-6" :src="props.src" :max-height="props.maxHeight"></v-img>
    </div>
</template>

<script setup lang="ts">
import { defineProps } from 'vue';


const props = defineProps<{
  src: string;
  maxHeight?: string;
}>();
</script>
