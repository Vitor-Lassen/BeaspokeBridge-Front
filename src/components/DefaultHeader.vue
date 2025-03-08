<template>
  <div>
    <div class="d-flex flex-wrap flex-lg-row  flex-sm-column">
      <div class="ma-2 pa-2">
      <v-img

      :width="170"
      aspect-ratio="16/9"
      cover
      src="../src/assets/logo.png"
      ></v-img>
    </div >
      <v-menu>
        <template v-slot:activator="{ props }">
          <v-btn class="flex-grow-1 pa-12"
          flat
            v-bind="props"
          >
            SOBRE A BB
          </v-btn>
        </template>
        <v-card>
            <v-card-title>
              <v-icon>mdi-home</v-icon>
              <span class="title">Home</span>
              <P>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta eligendi beatae non aspernatur. Voluptatem dolores deserunt error consectetur in inventore veritatis id dolor ipsa, ullam maiores reiciendis laborum quod accusamus.</P>
            </v-card-title>

          </v-card>

      </v-menu>
      <v-menu>
        <template v-slot:activator="{ props }">
          <v-btn class="flex-grow-1 pa-12"
          flat
            v-bind="props"
          >
            INGLÊS
          </v-btn>
        </template>
        <v-card>
            <v-card-title>
              <v-icon>mdi-home</v-icon>
              <span class="title">Home</span>
              <P>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta eligendi beatae non aspernatur. Voluptatem dolores deserunt error consectetur in inventore veritatis id dolor ipsa, ullam maiores reiciendis laborum quod accusamus.</P>
            </v-card-title>

          </v-card>

      </v-menu>
      <P class="flex-grow-1 ma-8 pa-2">INTERCÂMBIO</P>
      <P class="flex-grow-1 ma-8 pa-2">PARCERIAS</P>
      <v-btn class="ma-8 pa-2" flat border rounded>Fale Conosco</v-btn>
    </div>
    <div  class="d-flex justify-space-between"  style="background-color:#00274D">
      <p class="ma-2 pa-2" style="color: white;">SOBRE A BB</p>
      <p class="ma-2 pa-2" style="color: white;">SOBRE A BB</p>
      <p class="ma-2 pa-2" style="color: white;">SOBRE A BB</p>
      <p class="ma-2 pa-2" style="color: white;">SOBRE A BB</p>
    </div>
  </div>
</template>

<script  setup lang="ts">

</script>

<style scoped>

</style>
