<template>
  <ds-container :class="props.color ? 'bg-bblue ' : ''">

      <div
        class="d-flex align-center justify-space-between"
        :class="props.reverse ? 'flex-row-reverse' : ''"
      >
        <v-img
          :src="props.image"
          min-width="50"
          max-width="150"
          aspect-ratio="16/9"
          v-if="props.image"
        />
        <div>
          <h1 class="mb-1">{{ props.title }}</h1>
          <h4>{{ props.subtitle }}</h4>
        </div>
        <hr class="line-pont" style=" min-width: 200px;"  />
      </div>
      <p >{{ props.firstText }}</p>

      <ul class="base-list">
        <li v-for="item in props.itemList" :key="item.key" class="mt-4">
          <strong>{{ item.key }}:</strong> {{ item.value }}
        </li>
      </ul>
      <p >{{ props.secondText }}</p>
      <v-btn width="350px" class=" ma-6" color="secondary" :to="props.pathTo">
        {{ props.btnName }}
      </v-btn>

  </ds-container>
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


