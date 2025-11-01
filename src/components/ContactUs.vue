<template>
  <v-form class="pa-4">
    <h4 v-html="$t('contact-us.coach')"></h4>
    <v-text-field v-model="name" :label="$t('contact-us.form.name')" required></v-text-field>
    <v-text-field v-model="name" :label="$t('contact-us.form.phone')" required></v-text-field>
    <v-text-field v-model="name" :label="$t('contact-us.form.email')" required></v-text-field>
    <v-textarea v-model="name" :label="$t('contact-us.form.service')" rows="3" required></v-textarea>
   <div class="d-flex flex-column align-center">

     <v-btn color="secondary" @click="sendEmail" > {{$t('contact-us.form.btn-send')}} </v-btn>
  </div>
    <p class="notice" v-html="$t('contact-us.privacy-notice')"/>
  </v-form>
</template>

<script setup lang="ts">
import {ref} from 'vue'

const name = ref("")

const sendEmail = () => {
  fetch('api/send-email.php', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    email: 'usuario@exemplo.com',
    subject: 'Contato do site',
    message: 'Olá! Gostaria de mais informações.'
  })
})
.then(response => response.json())
.then(data => {
  if (data.success) {
    alert('E-mail enviado com sucesso!');
  } else {
    alert('Erro ao enviar e-mail: ' + data.message);
  }
})
.catch(error => {
  console.error('Erro na requisição:', error);
});
}

</script>

<style scoped lang="scss">


</style>
