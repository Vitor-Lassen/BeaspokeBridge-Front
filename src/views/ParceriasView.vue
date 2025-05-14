<template>
  <div class="max-content-width center pa-8">
    <div class="d-flex align-center center">
      <h1>Parcerias que transformam o aprendizado</h1>

      <v-img src="parceria.png" min-width="200"> </v-img>
    </div>
    <p>
      Acreditamos que a colaboração é essencial para oferecer aos nossos alunos experiências
      educacionais completas e de alta qualidade. Por isso, estabelecemos parcerias estratégicas com
      instituições e empresas que compartilham nossos valores de excelência, inovação e compromisso
      com a educação personalizada.
    </p>
  </div>
  <div class="bg-blue-v pa-8">
    <p>
      <b
        >Os parceiros da Bespoke Bridge são escolhidos com base em critérios rigorosos que asseguram
        que cada colaboração agregue valor à experiência dos nossos alunos.</b
      >
    </p>
  </div>
  <div class="max-content-width center">
    <div class="parcerias center">
      <h4 class="pa-4">Buscamos instituições com:</h4>

      <ul>
        <li>Reputação comprovada de excelência educacional.</li>
        <li>
          Valores alinhados com os nossos, como respeito pela diversidade e ensino personalizado.
        </li>
        <li>
          Compromisso com o desenvolvimento contínuo de metodologias e ferramentas de aprendizado.
        </li>
      </ul>
    </div>
    <p>
      Com essas parcerias, reforçamos nossa missão de construir pontes para o sucesso dos nossos
      alunos, oferecendo oportunidades educacionais transformadoras e preparando-os para um futuro
      globalizado.
    </p>
  </div>

  <div class="bg-dark d-flex align-center justify-center">
    <hr class="line flex-1-1" style="max-width: 200px" />
    <h2 class="pl-8 pr-8">
      Escolas<br />
      Parceiras
    </h2>
    <hr class="line flex-1-1" style="max-width: 200px" />
  </div>
  <div>
    <p>schools</p>
  </div>
</template>

<script setup lang="ts"></script>

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
