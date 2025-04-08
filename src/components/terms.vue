<template>
  <div class="pt-6 d-flex flex-column align-center center justify-space-around bg-blue-v">
    <div class="d-flex align-center">
      <v-img class="ma-4" src="icones/logo three.png" width="75"></v-img>
      <h1>{{ props.title }}</h1>
    </div>

      <div class="pa-8 " style=" max-width: 800px">
        <ol>
          <li v-for="item in props.items" :key="item.title">
            <b>{{ item.title }}</b>
            <p v-html="item.description"></p>
          </li>
        </ol>
        <p>Documento emitido em: {{props.date}}</p>
      </div>
    </div>

</template>

<script setup lang="ts">
import { defineProps } from 'vue'
import type { PrivacyModel } from '@/Models/PrivacyModel'

const props = defineProps({
  title: {
    type: String,
    default: 'Politica de privacidade',
  },
  items: {
    type: Array as () => PrivacyModel[],
  },
  date: String
})
</script>

<style >
p,
li {
  text-align: justify;
}
li{
  margin-left: 30px;
}

</style>
