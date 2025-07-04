<template>
  <ds-container bg-img="/world-bg.jpg">

    <h1>Intercâmbios </h1>
    <p>Oferecemos programas de intercâmbio estudantil cultural que proporcionam uma rica experiência tanto linguística
      quanto cultural. Trabalhamos com <b>instituições parceiras credenciadas pela EAQUALS </b>(Avaliação e Acreditação
      da Qualidade em Serviços de Idiomas), garantindo aos nossos alunos um ensino de excelência, com os mais elevados
      padrões de qualidade educacional.</p>

    <p>Acreditamos no poder transformador da imersão, e <b>todos os nossos programas de intercâmbio</b>,
      independentemente de serem em países de língua inglesa ou não, <b>são cuidadosamente planejados</b> para oferecer
      uma experiência profunda e enriquecedora em inglês. Por meio desses programas, os alunos não apenas aprimoram suas
      habilidades linguísticas, mas também ampliam seu conhecimento cultural, tornando sua jornada de aprendizado mais
      envolvente, eficaz e inesquecível.</p>

    <div class="d-flex justify-space-between mobile">
      <div class="d-flex flex-column align-center pa-6 ">
        <ds-card  title="Para alunos de inglês" img="/Intercambio 2.png">
          <p>Transforme sua experiência de aprendizado com os intercâmbios oferecidos pela <b
              class='text-color-blue-logo'>Bespoke Bridge!</b></p>
          <p>Estude inglês em escolas de qualidade credenciadas pela <b> <a
                href="https://www.eaquals.org/about-eaquals/our-aims-and-mission/">EAQUALS</a> </b>, pratique o idioma
            no dia a dia e se imerja em novas culturas.</p>
          <p>Prepare-se para uma jornada educacional única e enriquecedora!</p>
        </ds-card>
        <v-btn color="secondary" class="mt-4">Saiba +</v-btn>
      </div>
    <div class="d-flex flex-column align-center pa-6">
      <ds-card  title="For English teachers" img="/Intercambio 2.png">
        <p>Enhance your teaching skills with <b
            class='text-color-blue-logo'>Bespoke Bridge’s</b> Teacher Education Exchange Programs (TEEP).</p>
        <p>Join expert-led courses in an EAQUALS-accredited school in Slovakia, and explore Central Europe while learning innovative ELT methods.</p>
        <p>A perfect blend of professional development and cultural exploration!</p>
      </ds-card>
      <v-btn color="secondary" class="mt-4">Learn More</v-btn>
      </div>
    </div>
  </ds-container>

  <ds-container >
    <div class="d-flex  align-center justify-center">
  <div>
    <h2>Intercâmbio para <span class="text-color-secondary" >alunos de inglês</span></h2>
    <p>Algumas das opções de países para os quais oferecemos intercâmbio estudantil são:</p>
  </div>
  <img src="/mundo.png" width="150"/>
  </div>
  <v-carousel hide-delimiters>
    <v-carousel-item
      v-for="(item,i) in items"
      :key="i"
      :src="item.src"
      cover
      @click="() => $router.push(item.to)"
    >
    <div class="d-flex  align-end" style="height: 100%">
      <div class="carousel-card center ">
          <h2>{{item.title}} </h2>
      </div>

    </div>
  </v-carousel-item>
  </v-carousel>
  </ds-container>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { useI18n } from 'vue-i18n';

const  {t} = useI18n();

const items = [
  { src: '/Ireland/Irlanda-landing-page.png',
    title: computed(() => t('exchange.ireland.title')).value,
    to: '/exchange-ireland'
  },
  { src: '/Eslovaquia/Eslovaquia landing page.png',
    title: computed(() => t('exchange.eslovaquia.title')).value,
    to: '/exchange-Eslovaquia'
  },
  { src: '/Malta/Malta landing page.png',
    title: computed(() => t('exchange.malta.title')).value,
    to: '/exchange-Malta-e-gozo'
   },

]
</script>

<style>
.carousel-card{

  background-color: #ffffffcc;
  width: 100%;
}
.carousel-card h2{
  margin: 0 15px ;
  margin-top: 6px;
}
</style>
