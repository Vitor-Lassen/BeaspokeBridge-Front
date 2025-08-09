<template>
  <div class="pa-4 pt-14 hover" style="max-width: 600px;">
    <div class="d-flex align-center">
      <v-img src="three colored.png" max-width="80"></v-img>
      <h3>{{props.title}}</h3>

    </div>
    <div class="d-flex flex-column kd-card pa-6">
      <h4 class="pb-4">{{ props.subtitle }}</h4>
      <p class="mb-2">{{ props.description }}</p>
      <v-btn  class="pa-2 align-self-end" color="secondary"> Saiba + </v-btn>
    </div>
  </div>

</template>

<script setup lang="ts">
import { defineProps } from 'vue';

const props = defineProps({
  title: String,
  description: String,
  subtitle: String
})
</script>

<style lang="scss" scoped>

.kd-card{
  background: white;
  border-radius: 12px;

}

h4, p{
  text-align: left ;
}
</style>
