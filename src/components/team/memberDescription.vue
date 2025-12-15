<template>
    <div class="description mb-12 pb-12" :class=" props.reverse ? 'flex-row-reverse' : ''">
      <div class="mr-4">
        <slot></slot>
      </div>

      <div class="moldura pa-3 d-flex flex-column align-center" style="width: 380px;">
        <v-img :src="props.img" aspect-ratio="16/9" width="100%" style="border-radius: 12px;"></v-img>
        <h3>{{props.name}}</h3>
        <p style="font-size: 13px;"><i>{{props.description}}</i></p>
        <b><a :href="'mailto:'+email">{{ props.email }}</a></b>
        <div class="d-flex pt-4 justify-space-around" style="width: 100%;">
          <a v-if="props.linkedin" :href="props.linkedin"><v-icon size="30">mdi-linkedin</v-icon></a>
          <a v-if="props.facebook" :href="props.facebook"><v-icon size="30">mdi-facebook</v-icon></a>
          <a v-if="props.instagram" :href="props.instagram"><v-icon size="30">mdi-instagram</v-icon></a>
          <a v-if="props.tiktok" :href="props.tiktok"><v-icon size="30">mdi-tiktok</v-icon></a>
        </div>
      </div>
    </div>
</template>

<script setup lang="ts">



const props = defineProps({
  name: String,
  description: String,
  email: String,
  img: String,
  linkedin: String,
  facebook: String,
  instagram: String,
  tiktok: String,
  reverse: {
    type: Boolean,
    default: false
  }
})


</script>

<style lang="scss" >

@use '@/styles/variables' as * ;
.description p{
  text-align: justify;

}



.description{
  display: flex ;
  align-items: center;

}

@media(max-width: $max-mobile-width){
  .description{
    flex-direction: column-reverse!important;
    justify-items: center;
    align-items: center;
  }

}
</style>
