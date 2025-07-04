<template>
<ds-container>
  <div class="d-flex align-center " >
  <hr class="line flex-grow-1">
  <h1 class="mt-0">Inglês Personalizado </h1>
  <hr class="line-pont flex-grow-1">
  </div>
  <div class="d-flex">
    <v-img src="personalized.png" width="200"></v-img>
    <div>
    <p class="md">Todas as nossas <b class="tc-b">aulas</b>, exceto o treinamento para professores e cursos infantis em grupos, são <b class="tc-r"> personalizadas</b> de acordo com as necessidades do aluno.</p>
    <p class="md">Você escolhe a frequência, os dias e horários, e nosso curso é montado para atender aos seus objetivos*.</p>
  </div>
</div>
<p class="md mt-6" style="text-align: center;">Explore nossos serviços abaixo e encontre o curso ideal para você.</p>
<p class="xs mt-8" style="text-align: end;">*Sujeito à disponibilidade do professor</p>
</ds-container>

<ds-quote phase="O conhecimento de línguas é a porta para a sabedoria." actor="Roger Bacon"></ds-quote>

<ds-container >
  <h1>Para Adultos</h1>
  <div class="d-flex flex-wrap align-start justify-space-around">
  <adults-card v-for="course in forAdults" :key="course.title"
          :title="course.title"
          :subtitle="course.subtitle"
          :img="course.img"
          :path-to="course.pathTo"
          :btn-name="course.btnName" />
  </div>
</ds-container>

<ClassTypes/>
</template>

<script setup lang="ts">
import ClassTypes from '@/components/classTypes.vue';
import AdultsCard from '@/components/courses/AdultsCard.vue';
const forAdults = [{
  title: 'Inglês Geral',
  subtitle: 'General English',
  img: 'General English.png',
  btnName: 'Saiba +',
  pathTo: '/for-adults#general-english'
},
{
  title: 'Inglês p/ Negócios',
  subtitle: 'Business English',
  img: 'Business English.png',
  btnName: 'Saiba +',
  pathTo: '/for-adults#business-english'
},
{
  title: 'Exames',
  subtitle: 'Exam preparation',
  img: 'Preparatorios.png',
  btnName: 'Saiba +',
  pathTo: '/for-adults#business-english'
},
{
  title: 'E. S. P.',
  subtitle: 'English for Specific Purposes',
  img: 'ESP.png',
  btnName: 'Saiba +',
  pathTo: '/for-adults#business-english'
},
{
  title: 'Inglês p/ Viagens',
  subtitle: 'English for Travel',
  img: 'Travel.png',
  btnName: 'Saiba +',
  pathTo: '/for-adults#business-english'
},
{
  title: 'Edu for Teachers',
  subtitle: 'Education for Teachers',
  img: 'Teachers.png',
  btnName: 'Saiba +',
  pathTo: '/for-adults#business-english'
}]
</script>
