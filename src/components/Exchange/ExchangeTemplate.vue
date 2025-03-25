<template>
  <page-header
    :title="props.ex.title"
    :subtitle="props.ex.subtitle"
    :imagem="props.ex.img"
    :btn="props.ex.btn"/>


  <div class="pa-6 pt-12 center" style="max-width: 1000px;">
    <div class="img">
      <v-img :src="props.ex.resumeImg" min-width="200" max-width="300" aspect-ratio="16/9" class="ma-4" />
    </div>
    <h1 v-html=" props.ex.resumeTitle " />
    <p class="sm" v-html="props.ex.resumeDescription"/>
  </div>

  <div class="backgroud-ultrasoftblue pa-6" >
    <div class="center" style="max-width:  1100px;">
    <h2 class="pt-8" v-html=" props.ex.pqTitile" />
    <div class="d-flex align-center justify-center pa-6 pr-8">
      <div class="d-flex flex-column align-center justify-space-between">
        <exchange-card v-for="item in props.ex.pqs" v-bind:key="item.title"
          :title="item.title"
          :description="item.subtitle"
          :image="item.img"
        />
      </div>
      <div class="fotos-composicao">
        <img :src="props.ex.pqs[0].img" class="vertical" />
        <div class="fotos-horizontais">
          <img :src="props.ex.pqs[1].img" class="horizontal" />
          <img :src="props.ex.pqs[2].img" class="horizontal" />
        </div>
      </div>
    </div>
    <h1><v-btn color="secondary"> {{props.ex.pqBtn}}</v-btn></h1>
  </div>
  </div>
  <div class="bg-dark d-flex flex-column align-center">
    <div class=" ma-6" style="max-width: 1000px">
        <div class=" d-flex align-center justify-space-between">

          <h1 class="pa-4">{{ex.aboutTitle}}</h1>
          <v-img :src="ex.aboutImg" max-width="350" class="ma-2" />
        </div>
        <div class="base-card restore d-flex flex-wrap justify-space-around  flex-cont">
          <item-utils v-for="item in ex.aboutItems" :key="item.title" :title="item.title" :description="item.subtitle" :image="item.img" />
        </div>
        <h1><v-btn class="mt-10 mb-10" color="secondary"> {{props.ex.aboutBtn}}</v-btn></h1>
      </div>
  </div>

  <v-parallax :src="props.ex.img" class="d-flex align-center">
    <div class="d-flex flex-column align-center">
      <div class="info-uteis-card  base-card" style="max-width: 1000px">
        <div class="d-flex align-center justify-center pt-4 pl-6 pr-6">
          <hr class="line flex-1-1" />

          <h1 class="pt-4 pl-4 pr-4">{{ props.ex.utilsTitle }}</h1>
          <hr class="line-pont flex-1-1" />
        </div>
        <div class="d-flex flex-wrap justify-space-around flex-cont">
          <item-utils v-for="item in ex.utilsItems" :key="item.title" :title="item.title" :description="item.subtitle" :image="item.img" />
        </div>
      </div>
    </div>
  </v-parallax>
</template>

<script setup lang="ts">
import ExchangeCard from './ExchangeCard.vue'
import ItemUtils from './ItemUtils.vue'
import PageHeader from '../Generic/PageHeader.vue';

import type { ExchangeTemplateModel } from '@/Models/ExchangeTemplates';
import { defineProps } from 'vue';

const props = defineProps<{
  ex:ExchangeTemplateModel
}>();

</script>

<style scoped>
.horizontal,
.vertical {
  border-radius: 16px;
}
.vertical {
  width: 39%;
  height: 100%;
  object-fit: cover;
}
.fotos-horizontais {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;

  width: 60%;
}

.horizontal {
  width: 100%;
  height: 49%;
  object-fit: cover;
}
.fotos-composicao {
  width: 100%;
  height: 500px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}



@media (min-width: 960px) {
  .img {
    float: right;
    align-self: center;
  }
}
@media (max-width: 960px) {
  .img {
    display: flex;
    justify-content: center;
  }
  .fotos-composicao {
    display: none;
  }
  .head-title {
    width: 100%;
  }
  .flex-cont{
    display: flex;
    flex-direction: column;
    align-items: start;

  }
}

p {
  text-align: justify;
}

.info-uteis-card
 {
  opacity: 90%;
}

</style>
