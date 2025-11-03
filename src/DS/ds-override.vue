<template>
<v-dialog max-width="1300px" >
  <template v-slot:activator="{ props: activatorProps }">
    <v-btn  class="pa-2 align-self-end" color="secondary" v-bind="activatorProps"> {{props.btnTitle}}</v-btn>
  </template>

  <template v-slot:default="{ isActive }">
    <v-card >
      <slot />

        <v-btn
          class="ma-4 align-self-end"
          text="Fechar"
          @click="isActive.value = false"
        ></v-btn>

    </v-card>
  </template>
</v-dialog>


</template>

<script setup lang="ts">

import { defineProps } from 'vue';

const props = defineProps<{
  btnTitle: string
}>()


</script>


