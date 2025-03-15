<template>
  <div class="item">
    <v-img :src="props.image" width="100" max-width="100" aspect-ratio="4/3" />
    <div class="item-description">
      <h3>{{ props.title }}</h3>
      <p v-html="props.description" style="max-width: 250px;"></p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { defineProps } from 'vue'

const props = defineProps<{
  title: string
  description: string
  image: string
}>()
</script>

<style scoped>
.item{
  padding-top: 25px;
  display: flex;
  margin: 20px;
  flex: 1 1 clac(33,33% -40px);
}

.item-description {
  display: flex;
  flex-direction: column;
  align-items: start;
}
p {
  text-align: start;
  padding: 0;
}
</style>
