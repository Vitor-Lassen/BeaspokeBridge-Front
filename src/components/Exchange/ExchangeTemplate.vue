<template>
  <v-parallax  src="./Irlanda-landing-page.png" height="400" class="head-img d-flex align-center justify-right">
    <div class="head-title d-flex flex-column justify-center align-start align-items-left">
      <h1 class="ml-12">Exchange Template</h1>
      <p class="ml-12 subtitle">subtitle</p>
      <v-btn class="align-self-end mr-12" color="secondary">Saiba + </v-btn>
    </div>
  </v-parallax>

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

  <div class="backgroud-ultrasoftblue pa-6">
    <h1 class="pt-8">Lorem ipsum dolor sit amet.</h1>
    <div class="d-flex align-center justify-center pa-6 pr-8" >
      <div class="d-flex flex-column align-center justify-space-between">
        <exchange-card
          title="Lorem ipsum dolor sit amet."
          description="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sint nostrum vero saepe
            explicabo rem ipsa quas aperiam perspiciatis natus sapiente?"
          image="Irland-1.png"/>
        <exchange-card
          title="Lorem ipsum dolor sit amet."
          description="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sint nostrum vero saepe
            explicabo rem ipsa quas aperiam perspiciatis natus sapiente?"
          image="Irland-2.png"/>
        <exchange-card
          title="Lorem ipsum dolor sit amet."
          description="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sint nostrum vero saepe
            explicabo rem ipsa quas aperiam perspiciatis natus sapiente?"
          image="Irland-3.png"/>

      </div>
      <div class=" fotos-composicao">
        <img src="/public/Irland-3.png" class=" vertical " />
        <div class="fotos-horizontais" >
          <img src="/public/Irland-1.png" class=" horizontal" />
          <img src="/public/Irland-2.png" class=" horizontal" />
        </div>
      </div>
    </div>
    <h1><v-btn color="secondary"> QUero estudar na irland</v-btn></h1>
  </div>
  <v-parallax  src="./Irlanda-landing-page.png"  class=" d-flex align-center">
    <div class=" d-flex  flex-column align-center">
      <div class="info-uteis" style="max-width: 900px;">
        <div class="d-flex align-center justify-center pa-4" >
            <hr class="line flex-1-1">

        <h1 class="pa-4">Informações úteis</h1>
        <hr class="line-pont flex-1-1">
        </div>
        <div class=" d-flex flex-wrap justify-space-around">
    <item-utils
      title="Moeda"
      description="Euro"
      image="./currency.png"/>

    <item-utils
      title="Temperatura"
      description="40 graus <br> minima de 6 graus"
      image="./temperature.png"
      />
    <item-utils
      title="Moeda"
      description="Euro"
      image="./currency.png"
      />
    <item-utils
      title="Moeda"
      description="Euro"
      image="./currency.png"
      />
    <item-utils
      title="Moeda"
      description="Euro"
      image="./currency.png"
      />
    <item-utils
      title="Moeda"
      description="Euro"
      image="./currency.png"
      />
    </div>
  </div>
    </div>
  </v-parallax>
</template>

<script setup lang="ts">
import ExchangeCard from './ExchangeCard.vue';
import ItemUtils from './ItemUtils.vue';
</script>

<style scoped>

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

@media (min-width: 960px) {
  .img {
    float: right;
    align-self: center;
  }
  .head-title {
    width: 45%;
    border-radius: 0 32px 32px 0;
  }

}
@media (max-width: 960px) {
  .img {
    display: flex;
    justify-content: center;
  }

  .fotos-composicao{
    display: none;
  }
 .head-title {
    width: 100%;
  }
}

p {
  text-align: justify;
}
.head-title {
  background-color: white;
  height: 200px;
  opacity: 75%;
}

.info-uteis {
  background-color: white;
  border-radius: 16px;
  opacity: 75%;
}

.subtitle {
  font-size: 28px;
}
</style>
