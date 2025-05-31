<template>
  <div class="bg-dark">
    <div class="max-content-width center">
      <h2 class="pa-6 pt-16">Tipos de aulas</h2>
      <p>
        Nosso foco é proporcionar aos clientes uma experiência de aprendizado genuína e eficaz. Com
        base nessa filosofia e na nossa expertise, priorizamos um ensino altamente personalizado.
        Por isso, optamos por oferecer, prioritariamente, os seguintes tipos de aula:
      </p>
      <div class="d-flex flex-wrap justify-space-around align-center center pa-6" >
            <baseIconCard
              title="Aulas Individuais (One-on-One"
              image="/icones/one white.png"
              description="<b>Benefícios:</b> Atenção personalizada e individualizada, ritmo de aprendizado adaptado ao aluno, feedback imediato."/>
            <baseIconCard
              title="Aulas em Duplas (Pair Lessons)"
              image="/icones/one white.png"
              description="<b>Benefícios:</b> Permite interação entre alunos, desenvolvimento de habilidades de colaboração, ainda permite atenção significativa do professor."/>
            <baseIconCard
              title="Aulas em Grupos (Group Lessons)"
              image="/icones/one white.png"
              description="<b>Benefícios:</b> Maior interação social, desenvolvimento de habilidades de comunicação em grupo, mais dinâmico e variado, e permite o professor a dar um feedback mais individualizado aos alunos, pois o mesmo consegue perceber se os há áreas específicas para desenvolvimento linguístico em cada aluno."/>
            <baseIconCard
              btn-name="Entre em comtato conosco"
              description="Se a sua empresa preferir aulas em grupos maiores, podemos discutir essa possibilidade com nosso time pedagógico para personalizar a melhor solução de acordo com as necessidades da sua equipe."/>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import baseIconCard from './baseIconCard.vue';
</script>

<style scoped>
h2,h3,p {
  text-align: justify !important;
}
</style>
