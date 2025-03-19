<template>
  <ExchangeTemplate :ex="model"/>
</template>

<script setup lang="ts">
import ExchangeTemplate from '@/components/Exchange/ExchangeTemplate.vue';
import { useI18n } from 'vue-i18n';
import { computed } from 'vue';
import type { ExchangeTemplateModel, BaseModel } from '@/Models/ExchangeTemplates';

const{ t}= useI18n();



const baseModel: BaseModel[] =[
  {
    title: computed( () => t('exchange.eslovaquia.pq.0.title')).value,
    subtitle: computed( () => t('exchange.eslovaquia.pq.0.subtitle')).value,
    img: "/public/eslovaquia/bratislava 3.png"
  },
  {
    title: computed( () => t('exchange.eslovaquia.pq.1.title')).value,
    subtitle: computed( () => t('exchange.eslovaquia.pq.1.subtitle')).value,
    img: "/public/eslovaquia/Bojnice.png"
  },
  {
    title: computed( () => t('exchange.eslovaquia.pq.2.title')).value,
    subtitle: computed( () => t('exchange.eslovaquia.pq.2.subtitle')).value,
    img: "/public/eslovaquia/Strbske Pleso.png"
  }
]

const aboutItems: BaseModel[] =[
  {
    title: computed( () => t('exchange.eslovaquia.about-items.0.title')).value,
    subtitle: computed( () => t('exchange.eslovaquia.about-items.0.subtitle')).value,
    img: "./level.png"
  },
  {
    title: computed( () => t('exchange.eslovaquia.about-items.1.title')).value,
    subtitle: computed( () => t('exchange.eslovaquia.about-items.1.subtitle')).value,
    img: "./tempo.png"
  },
  {
    title: computed( () => t('exchange.eslovaquia.about-items.2.title')).value,
    subtitle: computed( () => t('exchange.eslovaquia.about-items.2.subtitle')).value,
    img: "./tempo.png"
  },
  {
    title: computed( () => t('exchange.eslovaquia.about-items.3.title')).value,
    subtitle: computed( () => t('exchange.eslovaquia.about-items.3.subtitle')).value,
    img: "./idade.png"
  },
  {
    title: computed( () => t('exchange.eslovaquia.about-items.4.title')).value,
    subtitle: computed( () => t('exchange.eslovaquia.about-items.4.subtitle')).value,
    img: "./acomodacao.png"
  }
]

const utilsItems: BaseModel [] =[
  {
    title: computed( () => t('exchange.eslovaquia.utils-items.0.title')).value,
    subtitle: computed( () => t('exchange.eslovaquia.utils-items.0.subtitle')).value,
    img: "./currency.png"
  },
  {
    title: computed( () => t('exchange.eslovaquia.utils-items.1.title')).value,
    subtitle: computed( () => t('exchange.eslovaquia.utils-items.1.subtitle')).value,
    img: "./temperature.png"
  },
  {
    title: computed( () => t('exchange.eslovaquia.utils-items.2.title')).value,
    subtitle: computed( () => t('exchange.eslovaquia.utils-items.2.subtitle')).value,
    img: "./time.png"
  },
  {
    title: computed( () => t('exchange.eslovaquia.utils-items.3.title')).value,
    subtitle: computed( () => t('exchange.eslovaquia.utils-items.3.subtitle')).value,
    img: "./visa.png"
  },
  {
    title: computed( () => t('exchange.eslovaquia.utils-items.4.title')).value,
    subtitle: computed( () => t('exchange.eslovaquia.utils-items.4.subtitle')).value,
    img: "./population.png"
  },
  {
    title: computed( () => t('exchange.eslovaquia.utils-items.5.title')).value,
    subtitle: computed( () => t('exchange.eslovaquia.utils-items.5.subtitle')).value,
    img: "./language.png"
  },
]

const model :ExchangeTemplateModel = {
  title: computed( () => t('exchange.eslovaquia.title')).value ,
  subtitle:computed( () => t('exchange.eslovaquia.subtitle')).value,
  btn:computed( () => t('default.btn-see-more')).value,
  img:"./Eslovaquia/Eslovaquia landing page.png",
  resumeTitle:computed( () => t('exchange.eslovaquia.resume-title')).value,
  resumeDescription: computed( () => t('exchange.eslovaquia.resume-description')).value,
  resumeImg:"./Eslovaquia/brat-castle.png",
  pqTitile:computed( () => t('exchange.eslovaquia.pq-title')).value,
  pqs: baseModel,
  pqBtn:computed( () => t('exchange.eslovaquia.pq-btn')).value,
  aboutTitle: computed( () => t('exchange.eslovaquia.about-title')).value,
  aboutBtn:computed( () => t('exchange.eslovaquia.about-btn')).value,
  aboutItems: aboutItems,
  aboutImg:"./eslovaquia/bratislava outline.png",
  utilsTitle: computed( () => t('exchange.eslovaquia.utils-title')).value,
  utilsItems:utilsItems

}



</script>
