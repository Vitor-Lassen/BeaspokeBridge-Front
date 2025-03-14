<template>
  <div class="head-img d-flex align-center justify-right">
    <div class="head-title d-flex flex-column justify-center align-start align-items-left">
      <h1 class="ml-12">Exchange Template</h1>
      <p class="ml-12 subtitle">subtitle</p>
      <v-btn class="align-self-end mr-12" color="secondary">Saiba + </v-btn>
    </div>
  </div>

  <div class="pa-6 pt-12">
    <div class="img">
      <v-img src="kid.png" min-width="200" max-width="300" aspect-ratio="16/9" class="ma-4" />
    </div>
    <h1>Lorem ipsum dolor sit amet.</h1>
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora, maiores. Nulla officiis eum
      possimus eligendi rerum qui sequi itaque dignissimos quam. Ab, animi neque nemo tempora est
      quo a eius aspernatur quibusdam provident, aliquid eos recusandae corrupti magni vitae, qui
      ullam perferendis. Natus modi nisi distinctio provident id dicta cupiditate nostrum fugit?
      Sequi atque saepe, laboriosam accusantium dolorem sunt? Modi quis sunt molestias delectus
      perferendis blanditiis iste natus libero omnis et! Praesentium aliquam ratione delectus
      deserunt cum voluptatem blanditiis voluptas?Lorem ipsum dolor sit amet, consectetur
      adipisicing elit. Sit officiis, sequi iste, odit hic alias est odio ut aspernatur nemo nostrum
      maiores. Excepturi, labore. Deleniti sed iusto veniam ratione atque, consectetur totam
      perspiciatis soluta nihil quis unde iure tempore quisquam necessitatibus autem similique
      reiciendis. Voluptates voluptatem blanditiis inventore voluptas tenetur architecto quisquam
      quis, vitae doloribus. Rerum aperiam sunt sed vitae minus voluptatum ex ipsam earum excepturi!
      Illum non dolorum magni fugiat eveniet voluptates, atque maxime voluptatum porro, quisquam,
      nobis nesciunt odit numquam corrupti aspernatur earum perferendis. Expedita voluptate impedit
      sit sapiente ex optio. At, sequi quod ipsum soluta sunt nam asperiores, delectus voluptates
      impedit modi accusantium! Temporibus veniam, aperiam similique nisi, quam perspiciatis minus
      incidunt error commodi odit voluptas ducimus!
    </p>
  </div>

  <div class="backgroud-ultrasoftblue">
    <h1 class="pt-12">Lorem ipsum dolor sit amet.</h1>
    <div class="d-flex align-center justify-center pa-6 pr-8" >
      <div class="d-flex flex-column align-center justify-space-between">
        <v-card class="ma-4" max-width="700px" rounded>
          <v-card-title> Lorem ipsum dolor sit amet. </v-card-title>
          <v-card-text
            >Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sint nostrum vero saepe
            explicabo rem ipsa quas aperiam perspiciatis natus sapiente?</v-card-text
          >
          <v-img src="Irland-1.png" aspect-ratio="16/9"  max-height="200" cover  rounded class="ma-4 show-photo-card" />
        </v-card>
        <v-card class="ma-4" max-width="700px" >
          <v-card-title> Lorem ipsum dolor sit amet. </v-card-title>
          <v-card-text
            >Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sint nostrum vero saepe
            explicabo rem ipsa quas aperiam perspiciatis natus sapiente?</v-card-text
          >
          <v-img src="Irland-2.png" aspect-ratio="16/9"  max-height="200" cover  rounded class="ma-4 show-photo-card" />
        </v-card>
        <v-card class="ma-4" max-width="700px" rounded>
          <v-card-title> Lorem ipsum dolor sit amet. </v-card-title>
          <v-card-text
            >Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sint nostrum vero saepe
            explicabo rem ipsa quas aperiam perspiciatis natus sapiente?</v-card-text
          >
          <v-img src="Irland-3.png" aspect-ratio="16/9"  max-height="200" cover rounded class="ma-4 show-photo-card" />
        </v-card>
      </div>
      <div class=" fotos-composicao">
        <img src="../../public/Irland-3.png" class=" vertical " />
        <div class="fotos-horizontais" >
          <img src="../../public/Irland-1.png" class=" horizontal" />
          <img src="../../public/Irland-2.png" class=" horizontal" />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
// Add your component's data properties, methods, and lifecycle hooks here
// For example:
import { ref, computed, onMounted } from 'vue'

const dataProperty = ref(null) // Example data property

const computedProperty = computed(() => {
  // Example computed property logic
  return dataProperty.value
})

onMounted(() => {
  // Lifecycle hook logic when the component is mounted
})
</script>

<style scoped>
.head-img {
  width: 100%;
  height: 400px;
  background-image: url('/Irlanda-landing-page.png');
  background-size: cover;
  background-position: center;
  background-attachment: fixed;
  background-repeat: no-repeat;
}


 .horizontal, .vertical{
  border-radius: 16px;
}
.vertical{
width: 39%;
height: 100%;
object-fit: cover;
}

.fotos-horizontais{
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;

  width: 60%;
}

.horizontal{
  width: 100%;
  height: 49%;
  object-fit: cover;
}
.fotos-composicao {
  width: 100%;
  height: 500px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.show-photo-card{
  display: none;
}

@media (min-width: 800px) {
  .img {
    float: right;
    align-self: center;
  }
}
@media (max-width: 800px) {
  .img {
    display: flex;
    justify-content: center;
  }

  .fotos-composicao{
    display: none;
  }
  .show-photo-card{
  display:grid;
}
}

p {
  text-align: justify;
}
.head-title {
  background-color: white;
  height: 200px;
  width: 45%;
  opacity: 75%;
  border-radius: 0 32px 32px 0;
}

.subtitle {
  font-size: 28px;
}
</style>
