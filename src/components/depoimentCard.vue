<template>
  <div class="d-flex align-center mobile-reverse mb-12">
    <div class="d-flex flex-column justify-space-between" >
      <v-img :src="props.img" width="150" style="margin-top: -55px;"/>
      <p class="remove"><b>{{ props.name }}</b></p>
      <p class="remove"><i>{{ props.course }}</i></p>
    </div>
    <div class="d-flex flex-column justify-sapce-between">
      <p><i>"<slot/>"</i></p>
      <v-img src="Stars.png" height="150px" style="margin-top: -55px;"></v-img>
    </div>
  </div>
</template>

<script setup lang="ts">

import { defineProps } from 'vue';

const props = defineProps({

  img: String,
  name: String,
  course: String

})

</script>

<style scoped>
.remove{
  margin: 0;
  padding: 0;
  text-align: center;
}
</style>
