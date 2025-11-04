<template>
  <ds-container >
    <div class="d-flex align-center center mobile">
      <h1>Parcerias que transformam o aprendizado</h1>

      <v-img src="parceria.png" min-width="200"> </v-img>
    </div>
    <p>
      Acreditamos que a colaboração é essencial para oferecer aos nossos alunos experiências
      educacionais completas e de alta qualidade. Por isso, estabelecemos parcerias estratégicas com
      instituições e empresas que compartilham nossos valores de excelência, inovação e compromisso
      com a educação personalizada.
    </p>
  </ds-container>
  <ds-container class="bg-blue-v ">
    <p class="max-content-width center pa-8">
      <b>Os parceiros da Bespoke Bridge são escolhidos com base em critérios rigorosos que asseguram
        que cada colaboração agregue valor à experiência dos nossos alunos.</b
      >
    </p>
  </ds-container>

  <ds-container>
      <h4 class="pa-4">Buscamos instituições com:</h4>

      <ul class="base-list">
        <li>Reputação comprovada de excelência educacional.</li>
        <li>
          Valores alinhados com os nossos, como respeito pela diversidade e ensino personalizado.
        </li>
        <li>
          Compromisso com o desenvolvimento contínuo de metodologias e ferramentas de aprendizado.
        </li>
      </ul>

    <p>
      Com essas parcerias, reforçamos nossa missão de construir pontes para o sucesso dos nossos
      alunos, oferecendo oportunidades educacionais transformadoras e preparando-os para um futuro
      globalizado.
    </p>
  </ds-container>
  <div class="bg-dark d-flex align-center justify-center">
    <hr class="line flex-1-1" style="max-width: 200px" />
    <h2 class="pl-8 pr-8 mt-6 mb-6">Escolas Parceiras</h2>
    <hr class="line flex-1-1" style="max-width: 200px" />
  </div>
  <school-list isi bridge belst atc />

  <div class="bg-dark d-flex align-center justify-center">
    <hr class="line-pont flex-1-1" style="max-width: 200px" />
    <h2 class="pl-8 pr-8 mt-6 mb-6">Empresas Parceiras</h2>
    <hr class="line-pont flex-1-1" style="max-width: 200px" />
  </div>
  <div class="bg-bblue d-flex flex-column align-center justify-center">
    <image-with-card
      img="/Tracktest transparente.png"
      description="Na <b class='tc-b'>Bespoke Bridge</b>, acreditamos que o primeiro passo para um aprendizado eficaz é compreender o ponto de partida de cada aluno. Por isso, firmamos parceria com o <B>Tracktest</b>, uma plataforma internacionalmente reconhecida pela precisão na avaliação de proficiência em inglês. Fundado em 2012, o Tracktest é um Centro de Avaliação de Inglês Online que mede as habilidades de inglês de falantes não nativos. Utilizando a escala do Quadro Europeu Comum de Referência para Línguas (CEFR), oferece uma alternativa moderna aos testes tradicionais, proporcionando avaliações acessíveis e precisas."
      link="/tracktest"
      revert
    />
    <image-with-card
      img="/isic.png"
      description="A <b class='tc-b'>Bespoke Bridge</b> tem o compromisso de democratizar o acesso ao ensino de inglês de qualidade, com foco na personalização e no desenvolvimento real dos alunos. Em alinhamento com esse propósito, firmamos uma parceria com o <b>DNE (Documento Nacional do Estudante)</b> e o <b>ISIC (International Student Identity Card)</b> — iniciativas reconhecidas nacional e internacionalmente por incentivarem o acesso à educação, cultura e oportunidades de crescimento.<br>Essa colaboração tem como objetivo oferecer condições especiais para estudantes e professores que buscam aprimorar suas habilidades no inglês, seja para viagens, carreira ou desenvolvimento pessoal."
      link="/dne"
      revert
    />
  </div>
</template>

<script setup lang="ts">
import schoolList from '@/components/school/schoolList.vue'
import ImageWithCard from '@/components/Generic/ImageWithCard.vue'
</script>
<style scoped>
.parcerias {
  max-width: 800px;
  position: static;
  margin: 20px;
}

.parcerias h4 {
  text-align: justify;
}
.parcerias ul {
  list-style-type: square;
  list-style-position: inside;
}
.parcerias ul li {
  text-align: justify;
}
</style>
