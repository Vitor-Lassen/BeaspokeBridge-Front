<template>
  <v-footer color="primary">
    <div class="d-flex flex-column flex-1-1 mt-6">
      <div class="d-flex flex-row justify-space-between" style="flex: none">
        <div class="align-self-center ma-4">
          <v-img :width="170" aspect-ratio="16/9" cover src="../src/assets/logo.png"></v-img>
          <h3>Ingles e intercambio</h3>
        </div>
        <div>
          <h4>Acesso Rapido</h4>

          <ul>
            <li><a href="">Fale Conosco</a></li>
            <li><a href="">intercambio</a></li>
            <li><a href="">intercambio</a></li>
            <li><a href="">intercambio</a></li>
            <li><a href="">intercambio</a></li>
          </ul>
        </div>

        <div>
          <h4>Transparencia</h4>

          <ul>
            <li><a href="">Fale Conosco</a></li>
            <li><a href="">intercambio</a></li>
            <li><a href="">intercambio</a></li>
          </ul>
        </div>
        <div>
          <h4>SIGA-NOS NAS REDES</h4>
          <MidiasSociais :size="50" />
        </div>
      </div>
      <div>  <p class="copyright"> © Bespoke Bridge {{ new Date().getFullYear() }}. Todos os direitos reservados</p> </div>
    </div>
  </v-footer>
</template>

<style scoped>
a {
  color: white;
  text-decoration: none;
}
li {
  margin-bottom: 1rem;
}
.copyright {
  font-size: 12px;
}
ul {
  list-style-type: none;
}
h4 {
  font-size: 18px;
  margin-bottom: 2rem;
}
</style>

<script setup lang="ts">
import MidiasSociais from '../MidiasSociais.vue'
</script>
