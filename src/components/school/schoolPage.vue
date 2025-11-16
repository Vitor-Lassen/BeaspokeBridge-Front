<template>
  <PageHeader :imagem="props.img" :title="props.title" :sub-img="props.logo" :sub-img-max-height="props.logoHeight" />
  <ds-container>
    <p class="mt-8" v-html="props.firstParagraph" />
    <BespokePlusPartner :src="props.logo" :max-height="logoHeight" />
    <p class="mb-8" v-html="props.secondParagraph" />
  </ds-container>

  <ds-container class="bg-dark">
    <div class="justify-center d-flex flex-wrap">

      <img class="ml-3 mb-4" style="width: 275px; height: 300px; object-fit: cover;" :src="image"
        v-for="image in props.galery" :key="image" />
    </div>
  </ds-container>
  <ds-container>
    <h1 style="margin-bottom: 0;">Cursos oferecidos</h1>
    <hr class="line" style="width: 60vw; align-self: center;" />
    <p v-html="props.coursesDescription" />

    <ul class="base-list">
      <li v-for="course in props.courses" :key="course.key"><b>{{ course.key }}</b><br>{{ course.value }}</li>
    </ul>
  </ds-container>

  <ds-container class="bg-bblue">
    <h1>Localização da <span class="tc-r"> {{ props.name }}</span></h1>
    <div class="d-flex justify-center mobile">
      <iframe class="ma-4" v-for="location in locations" :key="location" :src="location" height="450"
        style="border:0; width: 75vw;" allowfullscreen="true" loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"></iframe>

    </div>
    <h1>Quero estudar na <span class="tc-r"> {{ props.name }}</span>!</h1>
    <ContactUs :m="`Quero estudar na ${props.name}`" />
  </ds-container>
</template>

<script setup lang="ts">
import PageHeader from '../Generic/PageHeader.vue';
import BespokePlusPartner from '@/components/Generic/BespokePlusPartner.vue';
import { defineProps } from 'vue';
import type { KeyValueModel } from '@/Models/keyValueModel';
import ContactUs from '../ContactUs.vue';

const props = defineProps<{
  name: string,
  title: string,
  logo: string,
  logoHeight?: string,
  img: string,
  firstParagraph?: string,
  secondParagraph?: string,
  coursesDescription: string,
  courses: Array<KeyValueModel>,
  galery: Array<string>,
  locations: Array<string>
}>()


</script>
