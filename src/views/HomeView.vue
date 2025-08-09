<script setup lang="ts">
import ContactUs from '@/components/ContactUs.vue'
import ExchangeCarrosel from '@/components/Exchange/ExchangeCarrosel.vue';
import depoimentCard from '@/components/depoimentCard.vue';
import {trackTestLink} from '../config/externalLinks';

function openTrackTest() {
  window.open(trackTestLink, '_blank');
}

</script>

<template>
  <main>
    <ds-container bg-img="/map.png">
      <div class=" d-flex justify-space-between  mobile">
        <div class="" style="background-color: white; border-radius: 16px">
          <ContactUs />
        </div>

        <div class=" d-flex flex-column align-center justify-start ">
          <h2 v-html="$t('home.welcome.title')" />
          <p v-html="$t('home.welcome.description')"></p>
          <p><i v-html="$t('home.welcome.mission')"> </i></p>
        </div>
      </div>
    </ds-container>

    <div class="bg-blue-h pa-6 d-flex flex-column align-center align-content-center">
      <h1 class="mt-8 pb-6" v-html="$t('home.custom-learning.title')" />
      <div class="d-flex mobile-reverse justify-center">
        <div class="pa-6" style="width: 400px; text-align: center">
          <h2 class="pb-6" v-html="$t('home.custom-learning.subtitle')"></h2>
          <p v-html="$t('home.custom-learning.description')" />
          <v-btn class="ma-2 mt-12" color="secondary">{{ $t('home.custom-learning.btn-learn-more') }}
          </v-btn>
        </div>

        <v-img src="Woman-with-border.png" width="400" aspect-ratio="16/9" class="ma-10" />
      </div>
    </div>

    <ds-container>
      <h1 class="mt-10 mb-6 hover" @click="() => $router.push('/courses')" v-html="$t('home.courses.title')"></h1>
      <p class="pl-12 pr-12" v-html="$t('home.courses.description')"></p>
      <div class="d-flex flex-wrap justify-space-between align-start">
        <ds-card img="kid.png" :title="$t('home.courses.for-kids.title')"
          :subtitle="$t('home.courses.for-kids.description')" :btn-name="$t('home.courses.for-kids.btn-learn-more')"
          path-to="/for-kids" style="width: 350px;" btn-position="bottom" />
        <ds-card img="woman.png" :title="$t('home.courses.for-adults.title')"
          :subtitle="$t('home.courses.for-adults.description')" :btn-name="$t('home.courses.for-adults.btn-learn-more')"
          path-to="/for-adults" style="width: 350px;" btn-position="bottom" />
        <ds-card img="teacher.png" :title="$t('home.courses.for-teachers.title')"
          :subtitle="$t('home.courses.for-teachers.description')"
          :btn-name="$t('home.courses.for-teachers.btn-learn-more')" path-to="/for-teachers" style="width: 350px;"
          btn-position="bottom" />
      </div>
    </ds-container>
    <ds-container class="bg-ublue">
      <h1>O que dizem nossos alunos</h1>
      <depoimentCard img="Mirka.png" name="Mirka Darasova" course="Inglês Geral">
        Tenho tido uma excelente experiência aprendendo inglês na Bespoke Bridge. O professor é sempre atencioso, me
        ajudando a manter a motivação. As aulas são bem estruturadas e adaptadas para atender às minhas necessidades
        atuais.
      </depoimentCard>

      <depoimentCard img="woman copy.png" name="Zora A." course="Inglês p/ Apresent.">
        Minha empresa me deu 12 aulas para aprender inglês e melhorar minhas apresentações de produtos. Escolhi a BB e
        cerca de 10 aulas depois, meu chefe ficou impressionado com minha confiança e nível de inglês em uma
        apresentação e decidiu estender minhas aulas por três vezes mais! Fiquei super feliz e satisfeita com os
        resultados que alcancei.
      </depoimentCard>
    </ds-container>

    <ds-container class="bg-dark bg-track-teste"> ">
      <div class="d-flex mobile ">

        <div class="d-flex flex-column align-center">
          <h1>Teste seu <span class="tc-r"> nível</span> de inglês!</h1>
          <p style="text-align: start;">Na <b>Bespoke Bridge</b>, apostamos em qualidade. Por isto, usamos o
            <b>Tracktest</b>, uma empresa Europeia que utiliza o Quadro Europeu Comum de Referência para Línguas (CEFR)
            para medir o nível de inglês de nossos clientes.
            <br />Faça gratuitamente uma versão do nosso teste e saiba seu nível agora!
          </p>
          <v-btn color="secondary" @Click="openTrackTest">Teste seu nível agora</v-btn>
        </div>
        <v-img class="ma-2" src="Tracktest_vertical.png" width="300" ></v-img>
      </div>
    </ds-container>

        <ds-container>
      <h1>Intercâmbios e vivências <span class="tc-r">internacionais</span> </h1>
      <p class="sm"> Explore o mundo com <b>segurança</b> e <b>suporte total</b> com nossos <b>intercâmbios</b>
        estudantis <b>culturais</b>.</p>
      <ExchangeCarrosel home />
    </ds-container>
  </main>
</template>

<style scoped>
p {
  text-align: center;
}
</style>
