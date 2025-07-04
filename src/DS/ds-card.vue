<template>
 <div class="base-card pa-6">
  <h2>{{ props.title }}</h2>
  <img class="base-card-img" v-if="props.img" :src="props.img" />
  <slot></slot>
 </div>
</template>

<script setup lang="ts">
import { defineProps } from 'vue';

const props = defineProps<{
  title: string
  img: string
}>();
</script>

<style lang="scss" scoped>
.base-card{
  border-radius: 15px;
  border: 4px;
  border-color:$blue-logo;
  border-style:groove;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.215);
  background-color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;

}
.base-card-img{

  max-width: 100%;
  height: auto;

}

</style>
