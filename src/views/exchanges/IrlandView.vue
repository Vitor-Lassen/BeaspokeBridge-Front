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
    title: computed( () => t('exchange.ireland.pq.0.title')).value,
    subtitle: computed( () => t('exchange.ireland.pq.0.subtitle')).value,
    img: "/Ireland/Ireland-1.png"
  },
  {
    title: computed( () => t('exchange.ireland.pq.1.title')).value,
    subtitle: computed( () => t('exchange.ireland.pq.1.subtitle')).value,
    img: "/Ireland/Ireland-2.png"
  },
  {
    title: computed( () => t('exchange.ireland.pq.2.title')).value,
    subtitle: computed( () => t('exchange.ireland.pq.2.subtitle')).value,
    img: "/Ireland/Ireland-3.png"
  }
]

const aboutItems: BaseModel[] =[
  {
    title: computed( () => t('exchange.ireland.about-items.0.title')).value,
    subtitle: computed( () => t('exchange.ireland.about-items.0.subtitle')).value,
    img: "level.png"
  },
  {
    title: computed( () => t('exchange.ireland.about-items.1.title')).value,
    subtitle: computed( () => t('exchange.ireland.about-items.1.subtitle')).value,
    img: "tempo.png"
  },
  {
    title: computed( () => t('exchange.ireland.about-items.2.title')).value,
    subtitle: computed( () => t('exchange.ireland.about-items.2.subtitle')).value,
    img: "tempo.png"
  },
  {
    title: computed( () => t('exchange.ireland.about-items.3.title')).value,
    subtitle: computed( () => t('exchange.ireland.about-items.3.subtitle')).value,
    img: "idade.png"
  },
  {
    title: computed( () => t('exchange.ireland.about-items.4.title')).value,
    subtitle: computed( () => t('exchange.ireland.about-items.4.subtitle')).value,
    img: "acomodacao.png"
  }
]

const utilsItems: BaseModel [] =[
  {
    title: computed( () => t('exchange.ireland.utils-items.0.title')).value,
    subtitle: computed( () => t('exchange.ireland.utils-items.0.subtitle')).value,
    img: "currency.png"
  },
  {
    title: computed( () => t('exchange.ireland.utils-items.1.title')).value,
    subtitle: computed( () => t('exchange.ireland.utils-items.1.subtitle')).value,
    img: "temperature.png"
  },
  {
    title: computed( () => t('exchange.ireland.utils-items.2.title')).value,
    subtitle: computed( () => t('exchange.ireland.utils-items.2.subtitle')).value,
    img: "time.png"
  },
  {
    title: computed( () => t('exchange.ireland.utils-items.3.title')).value,
    subtitle: computed( () => t('exchange.ireland.utils-items.3.subtitle')).value,
    img: "visaIco.png"
  },
  {
    title: computed( () => t('exchange.ireland.utils-items.4.title')).value,
    subtitle: computed( () => t('exchange.ireland.utils-items.4.subtitle')).value,
    img: "populationIco.png"
  },
  {
    title: computed( () => t('exchange.ireland.utils-items.5.title')).value,
    subtitle: computed( () => t('exchange.ireland.utils-items.5.subtitle')).value,
    img: "language.png"
  },
]

const model :ExchangeTemplateModel = {
  title: computed( () => t('exchange.ireland.title')).value ,
  subtitle:computed( () => t('exchange.ireland.subtitle')).value,
  btn:computed( () => t('default.btn-see-more')).value,
  img:"./Ireland/Irlanda-landing-page.png",
  resumeTitle:computed( () => t('exchange.ireland.resume-title')).value,
  resumeDescription: computed( () => t('exchange.ireland.resume-description')).value,
  resumeImg:"harpa.png",
  pqTitile:computed( () => t('exchange.ireland.pq-title')).value,
  pqs: baseModel,
  pqBtn:computed( () => t('exchange.ireland.pq-btn')).value,
  aboutTitle: computed( () => t('exchange.ireland.about-title')).value,
  aboutBtn:computed( () => t('exchange.ireland.about-btn')).value,
  aboutItems: aboutItems,
  aboutImg:"./Ireland/dublin outline.png",
  utilsTitle: computed( () => t('exchange.ireland.utils-title')).value,
  utilsItems:utilsItems

}



</script>
