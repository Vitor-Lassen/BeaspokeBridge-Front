<template>
  <ExchangeTemplate :ex="model" belst />
</template>

<script setup lang="ts">
import ExchangeTemplate from '@/components/Exchange/ExchangeTemplate.vue'
import { useI18n } from 'vue-i18n'
import { computed } from 'vue'
import type { ExchangeTemplateModel, BaseModel } from '@/Models/ExchangeTemplates'

const { t } = useI18n()

const baseModel: BaseModel[] = [
  {
    title: computed(() => t('exchange.malta.pq.0.title')).value,
    subtitle: computed(() => t('exchange.malta.pq.0.subtitle')).value,
    img: '/Malta/malta 1.png',
  },
  {
    title: computed(() => t('exchange.malta.pq.1.title')).value,
    subtitle: computed(() => t('exchange.malta.pq.1.subtitle')).value,
    img: '/Malta/malta 2.png',
  },
  {
    title: computed(() => t('exchange.malta.pq.2.title')).value,
    subtitle: computed(() => t('exchange.malta.pq.2.subtitle')).value,
    img: '/Malta/malta 3.png',
  },
]

const aboutItems: BaseModel[] = [
  {
    title: computed(() => t('exchange.malta.about-items.0.title')).value,
    subtitle: computed(() => t('exchange.malta.about-items.0.subtitle')).value,
    img: 'level.png',
  },
  {
    title: computed(() => t('exchange.malta.about-items.1.title')).value,
    subtitle: computed(() => t('exchange.malta.about-items.1.subtitle')).value,
    img: 'tempo.png',
  },
  {
    title: computed(() => t('exchange.malta.about-items.2.title')).value,
    subtitle: computed(() => t('exchange.malta.about-items.2.subtitle')).value,
    img: 'tempo.png',
  },
  {
    title: computed(() => t('exchange.malta.about-items.3.title')).value,
    subtitle: computed(() => t('exchange.malta.about-items.3.subtitle')).value,
    img: 'idade.png',
  },
  {
    title: computed(() => t('exchange.malta.about-items.4.title')).value,
    subtitle: computed(() => t('exchange.malta.about-items.4.subtitle')).value,
    img: 'acomodacao.png',
  },
]

const utilsItems: BaseModel[] = [
  {
    title: computed(() => t('exchange.malta.utils-items.0.title')).value,
    subtitle: computed(() => t('exchange.malta.utils-items.0.subtitle')).value,
    img: 'currency.png',
  },
  {
    title: computed(() => t('exchange.malta.utils-items.1.title')).value,
    subtitle: computed(() => t('exchange.malta.utils-items.1.subtitle')).value,
    img: 'temperature.png',
  },
  {
    title: computed(() => t('exchange.malta.utils-items.2.title')).value,
    subtitle: computed(() => t('exchange.malta.utils-items.2.subtitle')).value,
    img: 'time.png',
  },
  {
    title: computed(() => t('exchange.malta.utils-items.3.title')).value,
    subtitle: computed(() => t('exchange.malta.utils-items.3.subtitle')).value,
    img: 'visaIco.png',
  },
  {
    title: computed(() => t('exchange.malta.utils-items.4.title')).value,
    subtitle: computed(() => t('exchange.malta.utils-items.4.subtitle')).value,
    img: 'populationIco.png',
  },
  {
    title: computed(() => t('exchange.malta.utils-items.5.title')).value,
    subtitle: computed(() => t('exchange.malta.utils-items.5.subtitle')).value,
    img: 'language.png',
  },
]

const model: ExchangeTemplateModel = {
  title: computed(() => t('exchange.malta.title')).value,
  subtitle: computed(() => t('exchange.malta.subtitle')).value,
  btn: computed(() => t('default.btn-see-more')).value,
  img: './Malta/Malta landing page.png',
  resumeTitle: computed(() => t('exchange.malta.resume-title')).value,
  resumeDescription: computed(() => t('exchange.malta.resume-description')).value,
  resumeImg: './Malta/malta.png',
  pqTitile: computed(() => t('exchange.malta.pq-title')).value,
  pqs: baseModel,
  pqBtn: computed(() => t('exchange.malta.pq-btn')).value,
  aboutTitle: computed(() => t('exchange.malta.about-title')).value,
  aboutBtn: computed(() => t('exchange.malta.about-btn')).value,
  aboutItems: aboutItems,
  aboutObs: computed(() => t('exchange.malta.about-obs')).value,
  aboutImg: './Malta/malta-outline.png',
  utilsTitle: computed(() => t('exchange.malta.utils-title')).value,
  utilsItems: utilsItems,
}
</script>
