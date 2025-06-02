<template>
  <div class="d-flex align-center flex-column" :class="props.color ? 'bg-bblue pl-12 pl-12' : ''">
    <div class="max-content-width">
      <div
        class="d-flex align-center justify-space-between"
        :class="props.reverse ? 'flex-row-reverse' : ''"
        style="width: 100%"
      >
        <v-img
          :src="props.image"
          min-width="50"
          max-width="150"
          aspect-ratio="16/9"
          v-if="props.image"
        />
        <div class="pa-6">
          <h1>{{ props.title }}</h1>
          <h4>{{ props.subtitle }}</h4>
        </div>
        <hr class="line-pont" style="width: 250px" />
      </div>
      <p class="mb-8">{{ props.firstText }}</p>

      <ul class="base-list ma-4">
        <li v-for="item in props.itemList" :key="item.key" class="mt-4">
          <strong>{{ item.key }}:</strong> {{ item.value }}
        </li>
      </ul>
      <p class="mt-8">{{ props.secondText }}</p>
      <v-btn width="350px" class="ma-2 mt-12 mb-16 ao-btn" color="secondary" :to="props.pathTo">
        {{ props.btnName }}
      </v-btn>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { KeyValueModel } from '@/Models/keyValueModel'
import { defineProps } from 'vue'

const props = defineProps<{
  title: string
  subtitle: string
  firstText: string
  secondText: string
  itemList: KeyValueModel[]
  image?: string
  btnName: string
  pathTo: string
  reverse?: boolean
  color?: boolean
}>()
</script>

<style scoped lang="scss">
p {
  text-align: justify;
}
.ao-btn {
  left: 50%;
}
</style>
