<template>
  <ds-container >
    <div class="d-flex align-center center">
      <div>
        <h1 class="ml-12 mb-16 mt-16" style="text-align: start">Inglês Corporativo</h1>
        <p>
          O inglês é, hoje, a <b>língua universal dos negócios</b>. Em um mundo corporativo cada vez
          mais globalizado, a proficiência no idioma não é apenas um diferencial, mas
          <b>uma necessidade</b> estratégica para empresas que desejam crescer e se destacar no
          mercado
        </p>
      </div>
      <v-img src="icones/Business.png" min-width="250"> </v-img>
    </div>

    <p>
      Investir na <b>qualificação profissional</b> de seus colaboradores gera <b>retorno direto</b>,
      pois equipes bem preparadas são mais produtivas, confiantes e alinhadas aos objetivos
      estratégicos da empresa. Saber inglês faz parte dessa qualificação e pode ser o fator decisivo
      para o sucesso em um ambiente corporativo competitivo e inovador.
    </p>

    <h2 class="mt-16 ml-12 mb-16" style="text-align: start">Estude do Escritório ou de Casa</h2>

    <p>
      Na <b class="text-color-blue-logo"> Bespoke Bridge</b>, oferecemos aulas
      <b class="text-color-secondary">100% online</b>, que permitem que seus funcionários aprendam
      de qualquer lugar, estejam eles trabalhando no escritório ou em casa. Essa flexibilidade é
      ideal para empresas que buscam integrar a aprendizagem contínua no ritmo diário de trabalho,
      sem comprometer a produtividade.
    </p>
    <p style="text-align: start"><b>Oferecemos:</b></p>
    <ul class="base-list pl-12 pb-12">
      <li>
        <b>Cursos Personalizados:</b> Adaptamos o conteúdo das aulas às necessidades específicas da
        sua empresa, seja para comunicação geral, inglês técnico ou áreas específicas como negócios
        e direito.
      </li>
      <li>
        <b>Flexibilidade de Horários:</b> Entendemos a dinâmica corporativa e oferecemos horários
        flexíveis para que seus funcionários possam conciliar o aprendizado com suas
        responsabilidades profissionais.
      </li>
      <li>
        <b>Instrutores Qualificados:</b> Nossa equipe é composta por profissionais certificados,
        garantindo ensino de alta qualidade e eficácia.
      </li>
    </ul>
  </ds-container>

    <ds-quote
      phase="Apenas 5% da população brasileira possui algum conhecimento do idioma inglês, e
                somente 1% é de fato fluente na língua."
      actor="Conselho Britânico"
    />
 <ds-container >
    <div class="center pa-8 max-content-width">
      <div class="d-flex justify-space-around align-center center">
        <h2>Resultados mensuráveis</h2>

        <v-img src="/Tracktest transparente.png" max-width="350"> </v-img>
      </div>
      <p style="text-align: start"><b>Como funciona?</b></p>
      <ul class="base-list pl-12">
        <li>
          <b>Avaliação Inicial:</b> Identificamos o nível atual de cada colaborador no início do
          programa, fornecendo uma base confiável para acompanhar a evolução.
        </li>
        <li>
          <b>Acompanhamento Trimestral: </b> A cada 3 meses, os colaboradores realizam novos testes
          para medir o progresso. Isso permite ajustes nos planos de ensino e garante que os
          objetivos sejam alcançados.
        </li>
        <li>
          <b>Resultados Detalhados: </b> O relatório do TrackTest oferece insights claros sobre as
          competências linguísticas dos colaboradores, como compreensão escrita, auditiva e
          gramática.
        </li>
      </ul>
    </div>
 </ds-container>

    <classTypes />
  <ds-container>
    <h2 class="mt-16 mb-12">Por que escolher a Bespoke Bridge?</h2>
    <div class="base-card card-pq-escolher pa-8 ">
      <h3>Análise de Necessidades Detalhada e Objetivos Mensuráveis</h3>
      <p>
        Acreditamos que cada aluno é único e, para garantir que nossos programas sejam eficazes,
        realizamos uma análise de necessidades detalhada para entender os objetivos de cada
        colaborador ou grupo. Com base nesse diagnóstico, traçamos um plano de ensino personalizado,
        alinhado às necessidades da empresa e ao contexto de cada aluno. Além disso, definimos
        objetivos mensuráveis para garantir que o progresso seja visível e alinhado às expectativas
        da empresa. Esses objetivos são revistos a cada 3 meses, permitindo ajustes e refinamentos
        constantes ao longo do processo de aprendizagem. Para comprovar o progresso, realizamos uma
        testagem oficial por meio da plataforma TrackTest, que segue o Quadro Comum Europeu de
        Referência para Línguas (CEFR), proporcionando resultados objetivos e verificáveis que
        demonstram o avanço real no domínio do idioma.
      </p>
    </div>
  </ds-container>
</template>

<script setup lang="ts">
import classTypes from '@/components/classTypes.vue'
</script>

<style scoped lang="scss">
@use '@/styles/variables' as *;

.card-pq-escolher {
  background-color: aqua;
}
</style>
