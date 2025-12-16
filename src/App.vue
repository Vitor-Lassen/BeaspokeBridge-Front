<script setup lang="ts">
import { RouterView } from 'vue-router'
import DefaultHeader from './components/header/DefaultHeader.vue'
import DefaultFooter from './components/footer/DefaultFooter.vue'
</script>

<template>
  <v-content>
    <!-- <v-banner
      class="my-1 flex-1-0"
      color="secondary"
      icon="mdi-calendar-badge"
      lines="one"
      sticky
    >
      <v-banner-text>
        <b>{{ $t('schedule') }}</b>
      </v-banner-text>
    </v-banner> -->
    <header class="d-flex flex-wrap">

      <DefaultHeader class="flex-1-1-100"  />
    </header>
    <RouterView/>
    <a href="https://api.whatsapp.com/send/?phone=551136581821&text=Ol%C3%A1%21+Gostaria+de+saber+mais+sobre...&type=phone_number&app_absent=0"><v-btn class="whatsapp-button hover" icon="mdi-whatsapp" size="x-large" color="green"></v-btn></a>
    <DefaultFooter />
  </v-content>
</template>

<style scoped>
.whatsapp-button {
  position: fixed;
  bottom: 50px;
  right: 50px;
  z-index: 1000;
}
</style>
