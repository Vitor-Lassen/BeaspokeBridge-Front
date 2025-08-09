<template>
 <ds-container class="partnerships" >

    <p class="mt-12" v-html="props.firstText"></p>
    <div class="d-flex align-center justify-space-around" >
      <v-img class="ma-6"  src="Logos BB/Logo.png" max-height="150"></v-img>
      <v-img src="plus.png" max-width="75"></v-img>
      <v-img class="ma-6" :src="props.src" :max-height="props.maxHeight"></v-img>
    </div>
    <p v-html="props.secondText"/>
    <v-btn class="ma-16 center"  color="secondary" @click="openLink(props.btnLink)" >{{props.btnText}}</v-btn>

    <slot />

    <v-btn class="ma-16" color="secondary" @click="openLink(props.btnLink)" >{{props.btnText}}</v-btn>

 </ds-container>
</template>

<script setup lang="ts">
import { defineProps } from 'vue';

const props = defineProps<{
  firstText: string;
  secondText: string;
  src: string;
  maxHeight?: string;
  btnText: string;
  btnLink: string;
}>();


function openLink(link:string) {
  window.open(link, '_blank');
}
</script>

<style>
.partnerships h4{
 text-align: left;
 margin-top: 16px;
}
</style>
