<template>
  <v-form class="pa-4">
    <h4 v-html="$t('contact-us.coach')"></h4>
    <v-text-field v-model="name" :label="$t('contact-us.form.name')" required></v-text-field>
    <v-text-field v-model="name" :label="$t('contact-us.form.phone')" required></v-text-field>
    <v-text-field v-model="name" :label="$t('contact-us.form.email')" required></v-text-field>
    <v-textarea v-model="name" :label="$t('contact-us.form.service')" rows="3" required></v-textarea>
    <v-btn color="secondary" > {{$t('contact-us.form.btn-send')}} </v-btn>
    <p class="notice" v-html="$t('contact-us.privacy-notice')"/>
  </v-form>
</template>

<script setup lang="ts">
import {ref} from 'vue'

const name = ref("")


</script>

<style scoped lang="scss">


</style>
