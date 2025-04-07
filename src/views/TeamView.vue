<template>
  <div class="pt-6 d-flex align-center center justify-space-around max-content-width">
    <h1>Nosso time</h1>
    <v-img src="TEAM.png" max-width="300"></v-img>
  </div>
  <div class="d-flex flex-column align-center pa-4 center max-content-width">

    <p class="md"> Na <b> Bespoke Bridge</b>, acreditamos que a excelência no ensino começa com um time altamente qualificado e comprometido com o sucesso dos nossos alunos.</p>

<div class="pt-6 d-flex align-center justify-space-around flex-wrap" style="width: 100%;">
  <TopicCard
      img="learners.png"
      title=""
      :max-width="500"
          :img-min-width="200"
      >
      <p style="text-align: justify;">Além disso, nossos professores estão em constante aperfeiçoamento. Participam de treinamentos mensais conduzidos por especialistas renomados no ensino de idiomas, mantendo-se atualizados com as mais recentes metodologias e ferramentas educacionais. Isso não apenas eleva o nível das nossas aulas, mas também torna nossos profissionais únicos no mercado.</p>
    </TopicCard>
    <TopicCard
      img="learners.png"
      title=""
      :max-width="500"
      :img-min-width="200"
      >
      <p style="text-align: justify;">Além disso, nossos professores estão em constante aperfeiçoamento. Participam de treinamentos mensais conduzidos por especialistas renomados no ensino de idiomas, mantendo-se atualizados com as mais recentes metodologias e ferramentas educacionais. Isso não apenas eleva o nível das nossas aulas, mas também torna nossos profissionais únicos no mercado.</p>
    </TopicCard>
  </div>
  <p class="ma-6 sm">Combinando experiência, formação de excelência e inovação, nosso time está pronto para ajudar você a alcançar seus objetivos com confiança e sucesso.</p>
  </div>
  <div class="bg-dark">
    <div class="center" style="max-width: 500px">
      <p style="text-align: center">
        <b
          ><i
            >"O professor é a ponte entre o conhecimento e o aluno."</i
          ></b
        >
      </p>
    </div>
  </div>
  <div class="pt-6 d-flex align-center justify-space-around">
    <h1>Conheça nosso time</h1>

    <div class="moldura basic-card pa-2" rounded border>
      <v-img src="./Fabi.png" aspect-ratio="16/9" min-width="150"></v-img>
    </div>

  </div>
</template>

<script setup lang="ts">

import TopicCard from '@/components/Generic/TopicCard.vue';
</script>

