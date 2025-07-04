<template>
<ds-container >
    <div class="d-flex  align-center justify-center">
  <div>
    <h2 class="hover" @click="() => $router.push('/exchange')" >Intercâmbio para <span class="text-color-secondary" >alunos de inglês</span></h2>
    <p>Algumas das opções de países para os quais oferecemos intercâmbio estudantil são:</p>
  </div>
  <img src="/mundo.png" width="150"/>
  </div>
  <v-carousel hide-delimiters>
    <v-carousel-item
      class="hover"
      v-for="(item,i) in items"
      :key="i"
      :src="item.src"
      cover
      cycle
      @click="() => $router.push(item.to)"
    >
    <div class="d-flex  align-end" style="height: 100%">
      <div class="carousel-card center ">
          <h2>{{item.title}} </h2>
      </div>

    </div>
  </v-carousel-item>
  </v-carousel>
  </ds-container>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { useI18n } from 'vue-i18n';

const  {t} = useI18n();

const items = [
  { src: '/Ireland/Irlanda-landing-page.png',
    title: computed(() => t('exchange.ireland.title')).value,
    to: '/exchange-ireland'
  },
  { src: '/Eslovaquia/Eslovaquia landing page.png',
    title: computed(() => t('exchange.eslovaquia.title')).value,
    to: '/exchange-Eslovaquia'
  },
  { src: '/Malta/Malta landing page.png',
    title: computed(() => t('exchange.malta.title')).value,
    to: '/exchange-Malta-e-gozo'
   },

]
</script>

<style>
.carousel-card{

  background-color: #ffffffcc;
  width: 100%;
}
.carousel-card h2{
  margin: 0 15px ;
  margin-top: 6px;
}
</style>
