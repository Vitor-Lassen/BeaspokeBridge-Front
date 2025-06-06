<template>
  <div class="center">


    <a href="https://www.linkedin.com/company/bespokebridge"><v-icon icon="mdi-linkedin" :size="prop.size" class="ma-1" style="color: white;"/></a>
    <a href="https://www.instagram.com/bespokebridge"><v-icon icon="mdi-instagram" :size="prop.size" class="ma-1" style="color: white;"/></a>
    <a href="https://www.facebook.com/bespokebridge.co"><v-icon icon="mdi-facebook" :size="prop.size" class="ma-1 mr-8" style="color: white;"/></a>
    </div>
</template>
<script setup lang="ts">
import { defineProps } from 'vue';


const prop = defineProps<{
  size: number
}>();
</script>
