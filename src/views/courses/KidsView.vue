<template>
<ds-container >

    <div class="d-flex align-center justify-center flex-wrap ">
      <v-img src="Logos BB/BB Kids.png" :min-width="300" :max-width="450" ></v-img>
      <h1>Muito além do inglês</h1>
    </div>
    <p>
      <v-img class="float-img" src="kids.png" min-width="250" ></v-img>Na <b class="tc-b">BB</b> <b class="tc-r">Kids</b>, acreditamos que
      aprender inglês pode ser uma experiência divertida, enriquecedora e transformadora para
      crianças. Oferecemos cursos de inglês para crianças que utilizam a metodologia CLIL (Content
      and Language Integrated Learning), um método inovador que <b>ensina o idioma de forma integrada a
      conteúdos de Ciências Naturais e Sociais.</b> Isso significa que as crianças não apenas aprendem
      inglês, mas também expandem seu conhecimento sobre o mundo ao estudar tópicos fascinantes
      usando o idioma.

      <br /><br />

      As aulas são ministradas por professores experientes, treinados regularmente para garantir a
      melhor aplicação do método CLIL, proporcionando uma experiência educacional dinâmica e de alta
      qualidade. Utilizamos materiais exclusivos da renomada <b><i>Oxford University Press</i></b>, cuidadosamente
      escolhidos para atender às necessidades e ao nível de cada grupo de alunos.
      <br /><br />
      Com a BB Kids, seu filho não apenas aprenderá inglês, mas desenvolverá habilidades para pensar
      e se expressar de forma confiante, tudo de maneira lúdica e interativa.
    </p>
  </ds-container>
  <ds-quote phase="Uma língua coloca-te no corredor para a vida. Duas línguas abrem todas as portas pelo caminho." actor="Frank Smith"/>


  <ds-container class="bg-bblue-v">
    <div class="max-content-width d-flex  justify-space-around">
      <kidsCard
        title="Inglês para Crianças (7-8 anos)"
        subtitle="Para quem é o curso?"
        description="Este curso é destinado a crianças de 7 e 8 anos que estão nos estágios iniciais do aprendizado de inglês e procuram uma abordagem mais divertida e prática para complementar o ensino escolar. O foco está no desenvolvimento completo das habilidades de leitura, escrita, fala e compreensão auditiva."/>
      <kidsCard
        title="Inglês para Crianças (9-10 anos)"
        subtitle="Para quem é o curso?"
        description="Este curso é voltado para crianças de 9 a 10 anos que já têm uma noção básica de inglês adquirida na escola, mas gostariam de dedicar mais tempo ao aprendizado do idioma e explorar novas abordagens além das que conhecem da sala de aula. O curso foca no desenvolvimento equilibrado de todas as habilidades linguísticas."
        style="margin-top: 180px;" />
    </div>
    <div class="max-content-width d-flex justify-space-around">
      <kidsCard
        title="Inglês para Crianças (11-12 anos)"
        subtitle="Para quem é o curso?"
        description="Este curso é destinado a alunos de 11 e 12 anos que não estão satisfeitos com o inglês aprendido na escola e gostariam de aprimorar suas habilidades de uma maneira diferente. A proposta é desenvolver todas as competências linguísticas e adquirir habilidades adicionais que os ajudarão ao longo dos anos de escolaridade."
        style="margin-top: -180px;"/>
      <kidsCard
        title="Inglês para Crianças (13-14 anos)"
        subtitle="Para quem é o curso?"
        description="Este curso é voltado para jovens que, ao final do ensino fundamental, não estão satisfeitos com o inglês aprendido na escola e desejam dedicar mais tempo ao idioma. O foco é desenvolver todas as habilidades linguísticas de forma equilibrada, além de proporcionar o aprendizado de novos conhecimentos sobre si mesmos e o mundo ao seu redor."/>
      </div>
    </ds-container>




</template>

<script setup lang="ts">
import kidsCard from '@/components/courses/kidsCard.vue';
</script>

<style scoped>
.float-img {
  float: right;
}

</style>
