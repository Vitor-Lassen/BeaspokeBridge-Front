<template>
  <div class="pt-6 d-flex align-center justify-space-around">
    <h1>Nosso time</h1>
    <v-img src="TEAM.png" max-width="300"></v-img>
  </div>
  <div class="d-flex flex-column align-center pa-4">

    <p class="md"> Na <b> Bespoke Bridge</b>, acreditamos que a excelência no ensino começa com um time altamente qualificado e comprometido com o sucesso dos nossos alunos.</p>
</div>
<div class="pt-6 d-flex align-center justify-space-around flex-wrap">
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
</template>

<script setup lang="ts">

import TopicCard from '@/components/Generic/TopicCard.vue';
</script>

