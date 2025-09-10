<template>
<div id="bs-container" :class="props.bgImg && !props.imgFixed ? 'ds-paralax':'ds-fixed' " :style=" props.bgImg? { backgroundImage: 'url('+props.bgImg +')'}: ''" >
  <div id="bs-container-content" >
    <slot />

  </div>
</div>
</template>

<script setup lang="ts">
import { defineProps } from 'vue';

const props = defineProps<{
  bgImg?: string;
  imgFixed?: boolean
}>();
</script>

<style>
#bs-container {
  width: 100%;

}
#bs-container-content {
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 10px 20px ; /* Example padding */
  display: flex;
  flex-direction: column;
}

.ds-fixed{

  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}


.ds-paralax{

  background-size: cover;
  background-position: center;
  background-attachment: fixed;
  background-repeat: no-repeat;
}

p{
  text-align: justify;

}
</style>
