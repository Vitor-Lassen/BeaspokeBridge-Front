<script setup lang="ts">
import { RouterView } from 'vue-router'
import DefaultHeader from './components/header/DefaultHeader.vue'
import DefaultFooter from './components/footer/DefaultFooter.vue'
</script>

<template>
  <v-content>
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
    <header class="d-flex flex-wrap">

      <DefaultHeader class="flex-1-1-100"  />
    </header>

    <v-lazy :options="{ threshold: 0.5 }" transition="scroll-y-reverse-transition">
            <RouterView/>
    </v-lazy>
    <a href="https://wa.me/5511973385008?text=Olá!%20Bem-vindo%20(Welcome)!%0A%0AComo%20posso%20ajudá-lo?"><v-btn class="whatsapp-button" icon="mdi-whatsapp" size="x-large" color="green"></v-btn></a>
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
