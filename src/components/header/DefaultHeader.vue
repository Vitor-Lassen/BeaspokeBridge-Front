<template>
  <div>
    <div class="d-flex align-center flex-md-row flex-column " style="height: fit-content;">
      <div  class="pl-2">
      <v-img
        :width="170"
        aspect-ratio="16/9"
        cover
        src="../src/assets/logo.png"
      ></v-img>
    </div>
      <MenuDropBox title="SOBRE A BB">
              <P>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta eligendi beatae non aspernatur. Voluptatem dolores deserunt error consectetur in inventore veritatis id dolor ipsa, ullam maiores reiciendis laborum quod accusamus.</P>
      </MenuDropBox>
      <MenuDropBox title="INGLÊS">
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iste laboriosam, ratione, eum explicabo suscipit saepe inventore nisi modi odit, neque hic! Minima exercitationem magnam dolorum neque unde pariatur assumenda commodi.</p>
      </MenuDropBox>
      <MenuDropBox title="INTERCÂMBIO">
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iste laboriosam, ratione, eum explicabo suscipit saepe inventore nisi modi odit, neque hic! Minima exercitationem magnam dolorum neque unde pariatur assumenda commodi.</p>
      </MenuDropBox>
      <MenuDropBox title="PARCERIAS">
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iste laboriosam, ratione, eum explicabo suscipit saepe inventore nisi modi odit, neque hic! Minima exercitationem magnam dolorum neque unde pariatur assumenda commodi.</p>
      </MenuDropBox>

      <v-btn class="mr-4"  flat border rounded>Fale Conosco</v-btn>
    </div>
    <div  class="d-flex justify-space-between"  style="background-color:#00274D">
      <div class="d-flex flex-row">
        <p class="ma-2 pa-2" style="color: white;">BB Blog</p>
        <p class="ma-2 pa-2" style="color: white;">Teste seu nivel</p>
      </div>
      <div>
        <v-icon icon="mdi-linkedin" size="40" class="ma-2" style="color: white;"/>
        <v-icon icon="mdi-instagram" size="40" class="ma-2" style="color: white;"/>
        <v-icon icon="mdi-facebook" size="40" class="ma-2 mr-8" style="color: white;"/>
     </div>
    </div>
  </div>

</template>

<script  setup lang="ts">
import MenuDropBox from './MenuDropBox.vue';
</script>

<style scoped>

</style>
