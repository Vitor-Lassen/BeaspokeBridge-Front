<template>
 <div class="adults-card hover" @click="() => $router.push(props.pathTo)" style="width: 350px;" >
  <img class="ma-2 img" aspect-ratio="16/9" :src="props.img"/>
  <div class="d-flex  justify-space-between align-center" :class="btnPosition == 'bottom'? 'flex-column': ''" style="width: 100%;;">
    <div >
      <p class="sm"><b>{{ props.title }}</b></p>
      <p >{{ props.subtitle }}</p>
    </div>
    <v-btn :style="btnPosition == 'bottom' ? {width: '100%'} :{}" color="secondary" :to="props.pathTo">{{ props.btnName }}</v-btn>
  </div>
 </div>
</template>

<script setup lang="ts">
import { defineProps } from 'vue'

const props = defineProps<{
  title: string
  subtitle: string
  img: string,
  btnName: string,
  pathTo:string
  btnPosition?: 'right' | 'bottom'
}>()
</script>

<style scoped>

.adults-card {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 1rem;
  background-color: var(--v-theme-secondary);
  border-radius: 8px;
}

.adults-card .img{
 width: 300px;
  height: auto;
  border-radius: 15px;
}

</style>
