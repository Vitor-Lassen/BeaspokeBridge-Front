<template>
  <div>
    <div class="d-flex align-center flex-md-row flex-column " style="height: fit-content;">
      <div  class="pl-6">
      <v-img
        :width="170"
        aspect-ratio="16/9"
        cover
        src="../src/assets/logo.png"
      ></v-img>
    </div>
      <MenuDropBox :title="$t('header.about')">
              <P>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta eligendi beatae non aspernatur. Voluptatem dolores deserunt error consectetur in inventore veritatis id dolor ipsa, ullam maiores reiciendis laborum quod accusamus.</P>
      </MenuDropBox>
      <MenuDropBox :title="$t('header.english')">
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iste laboriosam, ratione, eum explicabo suscipit saepe inventore nisi modi odit, neque hic! Minima exercitationem magnam dolorum neque unde pariatur assumenda commodi.</p>
      </MenuDropBox>
      <MenuDropBox :title="$t('header.exchange.title')">
        <ExchangeMenu
          :contry="$t('header.exchange.Slovakia.contry')"
          :description="$t('header.exchange.Slovakia.description')"
          :button-text="$t('header.exchange.button')"
          src="../src/assets/Flag_of_Slovakia.svg"/>
        <ExchangeMenu
          :contry="$t('header.exchange.Ireland.contry')"
          :description="$t('header.exchange.Ireland.description')"
          :button-text="$t('header.exchange.button')"
          reverse
          src="../src/assets/Flag_of_Ireland.svg"/>
        <ExchangeMenu
          :contry="$t('header.exchange.MaltaGozo.contry')"
          :description="$t('header.exchange.MaltaGozo.description')"
          :button-text="$t('header.exchange.button')"
          src="../src/assets/Flag_of_Slovakia.svg"/>

      </MenuDropBox>
      <MenuDropBox title="PARCERIAS">
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iste laboriosam, ratione, eum explicabo suscipit saepe inventore nisi modi odit, neque hic! Minima exercitationem magnam dolorum neque unde pariatur assumenda commodi.</p>
      </MenuDropBox>

      <v-btn class="mr-6"  flat border rounded>Fale Conosco</v-btn>
    </div>
    <div  class="d-flex justify-space-between"  style="background-color:#00274D">
      <div class="d-flex flex-row">
        <p class="ma-2 pa-2 ml-6" style="color: white;">BB Blog</p>
        <p class="ma-2 pa-2" style="color: white;">Teste seu nivel</p>
      </div>
      <div>
        <MidiasSociais :size="40"/>

     </div>
    </div>
  </div>

</template>

<script  setup lang="ts">
import MenuDropBox from './MenuDropBox.vue';
import ExchangeMenu from './ExchangeMenu.vue';
import MidiasSociais from '../MidiasSociais.vue';
</script>

<style scoped>

</style>
