<template>
 <ds-container bg-img="squarts.png">
<div class=" d-flex  align-center justify-space-between mobile-reverse">
  <h1>{{props.item.title}}</h1>

  <v-img src="Logos BB/BB Kids.png" class="ma-2" width="300" max-width="300"/>

</div>

  <p  v-html="props.item.description"/>
  <v-btn class="text-none ma-6" color="secondary" max-width="450"> Estou interessado neste curso</v-btn>
 </ds-container>

 <ds-container >
  <div class="d-flex justify-space-around flex-wrap itens">
    <div style="width: 200px;" >
      <h3>Duração</h3>
      <p class="center" v-html="props.item.duration"></p>
    </div>
    <div style="width: 200px;" >
      <h3>Frequência</h3>
      <p class="center" v-html="props.item.schedule"> </p>
    </div>
    <div style="width: 200px;" class="d-flex flex-column align-center" >
      <h3>Formato</h3>
      <p class="center">Online em grupo</p>
      <v-img src="meet-ico.svg" width="50" class="ma-2"></v-img>
    </div>
    <div style="width: 200px;" >
      <h3>N° de alunos</h3>
      <p class="center"> de 4 a 6<br>por grupo</p>
    </div>
    <div style="width: 200px;" class="d-flex flex-column align-center justify-start" >
      <h3>Nível</h3>
      <v-img :src="props.item.levelImg" style="margin-top: 0;" width="150"></v-img>
    </div>
  </div>


  <h2 class="align-self-start">Sobre o Curso</h2>
    <slot name="sobre"/>

  <hr class="line-pont align-self-center ma-8" style="width: 40vw;">

  <h3>O que seu filho(a) ganha com o curso? </h3>
  <ul class="base-list mt-4 align-self-center">
    <li v-for="item in props.item.gains" :key="item">{{ item }}</li>
  </ul>
    <v-btn class="text-none ma-6" color="secondary" width="450" style="align-self: center;"> Estou interessado neste curso</v-btn>
 </ds-container>

</template>

<script setup lang="ts">
import { defineProps } from 'vue';
import type { KidsCourseDescription } from '@/Models/KidsCourseDescription';
const props = defineProps<{
  item: KidsCourseDescription
}>()

</script>
<style scoped lang="scss">

p.center {
  text-align: center;
}

div.itens div{
  margin-top: 30px;
}
</style>
