<template>
   <v-icon icon="mdi-linkedin" :size="prop.size" class="ma-2" style="color: white;"/>
        <v-icon icon="mdi-instagram" :size="prop.size" class="ma-2" style="color: white;"/>
        <v-icon icon="mdi-facebook" :size="prop.size" class="ma-2 mr-8" style="color: white;"/>
</template>
<script setup lang="ts">
import { defineProps } from 'vue';


const prop = defineProps<{
  size: number
}>();
</script>
