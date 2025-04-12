<template>
   <div class="ma-2 mr-6 description">
      <div class="pa-6 max-text-content-width ">
        <slot></slot>
      </div>

    <div class="moldura pa-4 d-flex flex-column align-center" style="width: 380px;">
      <v-img :src="props.img" aspect-ratio="16/9" width="100%" style="border-radius: 12px;"></v-img>
      <h2>{{props.name}}</h2>
      <p><i>{{props.description}}</i></p>
      <b><a :href="'mailto:'+email">{{ props.email }}</a></b>
      <div class="d-flex pt-6 justify-space-around" style="width: 100%;">
        <a v-if="props.linkedin" :href="props.linkedin"><v-icon size="30">mdi-linkedin</v-icon></a>
        <a v-if="props.facebook" :href="props.facebook"><v-icon size="30">mdi-facebook</v-icon></a>
        <a v-if="props.instagram" :href="props.instagram"><v-icon size="30">mdi-instagram</v-icon></a>
        <a v-if="props.tiktok" :href="props.tiktok"><v-icon size="30">mdi-tiktok</v-icon></a>
      </div>
    </div>
    </div>
</template>

<script setup lang="ts">
import { defineProps } from 'vue'


const props = defineProps({
  name: String,
  description: String,
  email: String,
  img: String,
  linkedin: String,
  facebook: String,
  instagram: String,
  tiktok: String,
})


</script>

<style lang="scss" >

@use '@/styles/variables' as * ;
.description p{
  text-align: justify;

}

.description{
  display: flex ;
}

@media(max-width: $max-mobile-width){
  .description{
    flex-direction: column-reverse;
    align-items: center;
    ;
  }

}
</style>
