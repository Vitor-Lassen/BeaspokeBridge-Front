<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import DefaultHeader from './components/header/DefaultHeader.vue';
import DefaultFooter from './components/footer/DefaultFooter.vue';
</script>

<template>
  <header class="d-flex flex-wrap ">
    <v-banner
    class="my-1 flex-1-0"
    color="secondary"
    icon="mdi-calendar-badge"
    lines="one"
    sticky
    >
    <v-banner-text>
      <b>{{ $t('schedule') }}</b>
    </v-banner-text>
  </v-banner>

  <DefaultHeader class="flex-1-1-100"/>



  </header>
  <v-content>
    <RouterView/>

  </v-content>
  <v-btn  class="whatsapp-button" icon="mdi-whatsapp" color="green" ></v-btn>
  <DefaultFooter/>
</template>

<style scoped>

.whatsapp-button {
  position: fixed;
  bottom: 20px;
  right: 20px;
  z-index: 1000;
}
</style>
