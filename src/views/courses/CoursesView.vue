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
  <ds-card v-for="course in forAdults" :key="course.title"
          :title="course.title"
          :subtitle="course.subtitle"
          :img="course.img"
          :path-to="course.pathTo"
          :btn-name="course.btnName"
          style="width: 350px;"/>
  </div>
</ds-container>

<ClassTypes/>

<ds-container>
<div class="d-flex  aling-center flex-wrap justify-space-between mobile-reverse">
  <h1>Para Crianças</h1>
  <v-img src="BB Kids.png" width="300" max-width="300"></v-img>
</div>
<p>

  Na <b class="tc-b">Bespoke Bridge</b>, acreditamos que o aprendizado infantil deve ser tanto eficaz quanto envolvente. Por isso, nossos cursos para crianças utilizam a metodologia <b>CLIL (Content and Language Integrated Learning)</b>, que combina o ensino do inglês com conteúdos de Ciências Sociais e Naturais. Essa abordagem inovadora não apenas ensina o idioma, mas também estimula a curiosidade e o pensamento crítico, oferecendo uma experiência de aprendizado mais completa e significativa.
</p>

<p>
  Para garantir que cada criança receba o suporte ideal, as turmas são cuidadosamente organizadas com base em <b class="tc-r">faixas etárias</b> e <b class="tc-b">habilidades cognitivas</b>. Isso permite que o conteúdo e as atividades sejam adaptados ao nível de desenvolvimento de cada aluno, criando um ambiente onde eles se sintam desafiados e motivados.
</p>
<v-btn  class="ma-8" style="min-width: 200px; align-self: center;" color="secondary" @click="$router.push('/for-kids')">Saiba +</v-btn>

</ds-container>

<ds-container class="bg-ublue">

 <p class="sm pl-12 pr-12 pt-12" style="font-weight: 500;">Também oferecemos aulas em grupos maiores (de até 8 alunos) por meio de nossa escola parceira na Eslováquia, a <span class="theBridge">The Bridge</span>, que inspirou a criação da <b class="tc-b">Bespoke Bridge</b>.</p>

 <div class="d-flex pb-12">
   <div class="pa-12">
     <p class="sm" style="font-weight: 500;" >Esses cursos são focados em inglês geral, e oferecem uma <b class="tc-b">experiência</b> <b class="tc-r">imersiva</b> no idioma, já que os grupos são compostos por alunos de diferentes nacionalidades.</p>
     <p class="sm" style="font-weight: 500; text-align: center; "><i>É uma oportunidade única de praticar o inglês em um<br><b class="tc-b">ambiente</b> <b class="tc-r">internacional</b></i>.<br><br>Clique no logo ao lado e conheça a The Bridge!</p>
    </div>
    <v-img class="hover" src="TheBridge-Equals.png" width="300" min-width="300" @click="$router.push('/parcerias')">  </v-img>
  </div>

</ds-container>

</template>

<script setup lang="ts">
import ClassTypes from '@/components/classTypes.vue';
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
  pathTo: '/for-adults#exam'
},
{
  title: 'E. S. P.',
  subtitle: 'English for Specific Purposes',
  img: 'ESP.png',
  btnName: 'Saiba +',
  pathTo: '/for-adults#esp'
},
{
  title: 'Inglês p/ Viagens',
  subtitle: 'English for Travel',
  img: 'Travel2.png',
  btnName: 'Saiba +',
  pathTo: '/for-adults#travel'
},
{
  title: 'Edu for Teachers',
  subtitle: 'Education for Teachers',
  img: 'Teachers.png',
  btnName: 'Saiba +',
  pathTo: '/for-adults#english-teachers'
}]
</script>
