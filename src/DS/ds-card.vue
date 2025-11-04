<template>
 <div class="adults-card hover  " :class="border?'base-card-border':'' " @click="() => props.pathTo? $router.push(props.pathTo): null" >
  <img v-if="props.img" class="ma-2 img" aspect-ratio="16/9" :src="props.img"/>
  <div class="d-flex  justify-space-between align-center" :class="btnPosition == 'bottom'? 'flex-column': ''" style="width: 100%;;">
    <div >
      <p class="sm"><b>{{ props.title }}</b></p>
      <p v-html="props.subtitle"></p>
      <slot/>
    </div>
    <v-btn v-if="props.btnName" :style="btnPosition == 'bottom' ? {width: '100%'} :{}" color="secondary" :to="props.pathTo">{{ props.btnName }}</v-btn>
  </div>
 </div>
</template>

<script setup lang="ts">
import { defineProps } from 'vue'

const props = defineProps<{
  title: string
  subtitle?: string
  img?: string,
  btnName?: string,
  pathTo?:string
  btnPosition?: 'right' | 'bottom'
  border?: boolean

}>()
</script>

<style lang="scss" scoped>
.base-card-border {
  border-radius: 15px;
  border: 1px;
  border-color:$blue-logo;
  border-style:groove;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.215);
  background-color: white;
}

.adults-card {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  text-align: center;
  padding: 1rem;
  border-radius: 8px;
}

.adults-card .img{
  width: 100%;
  height: auto;
  border-radius: 15px;
}

</style>
