<template>
  <div class="head-img d-flex align-center justify-right">
    <div class="head-title d-flex flex-column justify-center align-start align-items-left">
      <h1 class="ml-12">Exchange Template</h1>
      <p class="ml-12 subtitle"> subtitle</p>
      <v-btn class="align-self-end mr-12" color="secondary">Saiba +  </v-btn>
    </div>
  </div>

  <div class="pa-6 pt-12" >

      <div class="img"><v-img  src="kid.png" min-width="200" max-width="300" aspect-ratio="16/9" class="ma-4" /></div>
      <h1>Lorem ipsum dolor sit amet.</h1>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora, maiores. Nulla officiis eum possimus eligendi rerum qui sequi itaque dignissimos quam. Ab, animi neque nemo tempora est quo a eius aspernatur quibusdam provident, aliquid eos recusandae corrupti magni vitae, qui ullam perferendis. Natus modi nisi distinctio provident id dicta cupiditate nostrum fugit? Sequi atque saepe, laboriosam accusantium dolorem sunt? Modi quis sunt molestias delectus perferendis blanditiis iste natus libero omnis et! Praesentium aliquam ratione delectus deserunt cum voluptatem blanditiis voluptas?Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sit officiis, sequi iste, odit hic alias est odio ut aspernatur nemo nostrum maiores. Excepturi, labore. Deleniti sed iusto veniam ratione atque, consectetur totam perspiciatis soluta nihil quis unde iure tempore quisquam necessitatibus autem similique reiciendis. Voluptates voluptatem blanditiis inventore voluptas tenetur architecto quisquam quis, vitae doloribus. Rerum aperiam sunt sed vitae minus voluptatum ex ipsam earum excepturi! Illum non dolorum magni fugiat eveniet voluptates, atque maxime voluptatum porro, quisquam, nobis nesciunt odit numquam corrupti aspernatur earum perferendis. Expedita voluptate impedit sit sapiente ex optio. At, sequi quod ipsum soluta sunt nam asperiores, delectus voluptates impedit modi accusantium! Temporibus veniam, aperiam similique nisi, quam perspiciatis minus incidunt error commodi odit voluptas ducimus!</p>
  </div>


</template>

<script setup lang="ts">
// Add your component's data properties, methods, and lifecycle hooks here
// For example:
import { ref, computed, onMounted } from 'vue';

const dataProperty = ref(null); // Example data property

const computedProperty = computed(() => {
  // Example computed property logic
  return dataProperty.value;
});

onMounted(() => {
  // Lifecycle hook logic when the component is mounted
});
</script>

<style scoped>
.head-img {
  width: 100%;
  height: 400px;
  background-image: url('/map.png');
  background-size: cover;
  background-position: center;
  background-attachment: fixed;
  background-repeat: no-repeat;
}
@media (min-width: 800px){

  .img{
    float: right;
    align-self: center;
  }
}
@media (max-width:800px){
  .img{
  display: flex;
  justify-content: center;
  }
}

p{
  text-align: justify;
}
.head-title{
  background-color: white;
  height: 200px;
  width: 45%;
  opacity: 75%;
  border-radius: 0 32px 32px 0;

}


.subtitle{
  font-size: 28px;
}
</style>
