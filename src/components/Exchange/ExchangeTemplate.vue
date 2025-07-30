<template>
  <page-header
    :title="props.ex.title"
    :subtitle="props.ex.subtitle"
    :imagem="props.ex.img"
    :btn="props.ex.btn"
  />
  <ds-container>
    <div>
      <h1 v-html="props.ex.resumeTitle" />
      <div class="exchange-float-img">
        <v-img
          :src="props.ex.resumeImg"
          min-width="200"
          max-width="300"
          aspect-ratio="16/9"
          class="ma-4"
        />
      </div>
      <p class="sm" v-html="props.ex.resumeDescription"/>
    </div>
  </ds-container>
  <ds-container class="bg-ublue">
    <h2 class="pt-8" v-html="props.ex.pqTitile" />
    <div class="d-flex align-center justify-center">
      <div class="d-flex flex-column align-center justify-space-between">
        <exchange-card
          v-for="item in props.ex.pqs"
          v-bind:key="item.title"
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
    <h1>
      <v-btn color="secondary"> {{ props.ex.pqBtn }}</v-btn>
    </h1>
  </ds-container>
  <div class="bg-dark d-flex flex-column align-center pt-8">
    <div  style="max-width: 1000px">
      <div class="d-flex align-center justify-space-between">
        <h1 >{{ ex.aboutTitle }}</h1>
        <v-img :src="ex.aboutImg" max-width="400" max-height="150" cover  class="ma-2" />
      </div>
      <div class="base-card restore d-flex flex-wrap justify-space-around flex-cont">
        <item-utils
          v-for="item in ex.aboutItems"
          :key="item.title"
          :title="item.title"
          :description="item.subtitle"
          :image="item.img"
        />
      </div>
      <p v-if="ex.aboutObs" v-html="ex.aboutObs" class="xs"/>
      <h1>
        <v-btn class="mt-10 mb-10" color="secondary"> {{ props.ex.aboutBtn }}</v-btn>
      </h1>
    </div>
  </div>

  <v-parallax :src="props.ex.img" class="d-flex align-center pt-6 pb-6">
    <div class="d-flex flex-column align-center">
      <div class="info-uteis-card base-card" style="max-width: 1000px">
        <div class="d-flex align-center justify-center pl-6 pr-6">
          <hr class="line flex-1-1" />

          <h1 class="pl-4 pr-4">{{ props.ex.utilsTitle }}</h1>
          <hr class="line-pont flex-1-1" />
        </div>
        <div class="d-flex flex-wrap justify-space-around flex-cont mb-12">
          <item-utils
            v-for="item in ex.utilsItems"
            :key="item.title"
            :title="item.title"
            :description="item.subtitle"
            :image="item.img"
          />
        </div>
      </div>
    </div>
  </v-parallax>

  <school-list :bridge="props.bridge" :isi="props.isi" :belst="props.belst" :atc="props.atc" />
</template>

<script setup lang="ts">
import ExchangeCard from './ExchangeCard.vue'
import ItemUtils from './ItemUtils.vue'
import PageHeader from '../Generic/PageHeader.vue'
import schoolList from '../school/schoolList.vue'
import type { ExchangeTemplateModel } from '@/Models/ExchangeTemplates'
import { defineProps } from 'vue'

const props = defineProps<{
  ex: ExchangeTemplateModel
  bridge?: boolean
  isi?: boolean
  belst?: boolean
  atc?: boolean
}>()
</script>

<style scoped>
.pallalax {
  width: 100vw;
  position: relative;
  left: calc(-50vw + 50%);
  height: 100%;
  background-image: url('/map.png');
  background-size: cover;
  background-position: center;
  background-attachment: fixed;
  background-repeat: no-repeat;
}

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
  .exchange-float-img {
    float: right;
    align-self: center;
  }
}
@media (max-width: 960px) {
  .exchange-float-img {
    display: flex;
    align-self: center;
    justify-content: center;
  }
  .fotos-composicao {
    display: none;
  }
  .head-title {
    width: 100%;
  }
  .flex-cont {
    display: flex;
    flex-direction: column;
    align-items: start;
  }
}

p {
  text-align: justify;
}

.info-uteis-card {
  opacity: 90%;
}
</style>
