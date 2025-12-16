<template>
  <ds-container class="bg-dark fit-screen pb-6">
      <h2 class="mt-1">Tipos de aulas</h2>
      <p>
        Nosso foco é proporcionar aos clientes uma experiência de aprendizado genuína e eficaz. Com
        base nessa filosofia e na nossa expertise, priorizamos um ensino altamente personalizado.
        Por isso, optamos por oferecer, prioritariamente, os seguintes tipos de aula:
      </p>
      <div class="d-flex flex-wrap justify-space-around align-center center " >
            <baseIconCard
              style="min-height: 275px;"
              title="Aulas Individuais (One-on-One"
              image="/icones/one white.png"
              description="<b>Benefícios:</b> Atenção personalizada e individualizada, ritmo de aprendizado adaptado ao aluno, feedback imediato."/>
            <baseIconCard
            style="min-height: 275px;"
              title="Aulas em Duplas (Pair Lessons)"
              image="/icones/one white.png"
              description="<b>Benefícios:</b> Permite interação entre alunos, desenvolvimento de habilidades de colaboração, ainda permite atenção significativa do professor."/>
            <baseIconCard
              style="min-height: 275px;"
              title="Aulas em Grupos (Group Lessons)"
              image="/icones/one white.png"
              description="<b>Benefícios:</b> Maior interação social, desenvolvimento de habilidades de comunicação em grupo, mais dinâmico e variado, e permite o professor a dar um feedback mais individualizado aos alunos, pois o mesmo consegue perceber se os há áreas específicas para desenvolvimento linguístico em cada aluno."
              custom-font-size="14px"/>
            <baseIconCard v-if="props.isCompanyPage"
              style="min-height: 275px;"
              btn-name="Entre em contato conosco"
              description="Se a sua empresa preferir aulas em grupos maiores, podemos discutir essa possibilidade com nosso time pedagógico para personalizar a melhor solução de acordo com as necessidades da sua equipe."
              @click="$emit('click')"/>
            <baseIconCard v-else
              style="min-height: 275px;"
                title="Aulas para Empresas"
                image="/icones/Business.png"
                description="<b>Benefícios:</b> Aumento da eficiência na comunicação internacional, maior confiança em negociações, apresentações e atendimento ao cliente em inglês, além de promoverem o crescimento profissional dos colaboradores."/>
      </div>
  </ds-container>
</template>

<script setup lang="ts">
import baseIconCard from './baseIconCard.vue';

const props = defineProps<{
  isCompanyPage?: boolean
}>();

</script>

<style scoped>

</style>
