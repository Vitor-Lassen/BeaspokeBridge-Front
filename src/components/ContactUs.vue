<template>
  <v-form class="pa-4">
    <h4 v-html="$t('contact-us.coach')"></h4>
    <v-text-field v-model="form.name" :label="$t('contact-us.form.name')" required></v-text-field>
    <v-text-field v-model="form.phone" :label="$t('contact-us.form.phone')" required></v-text-field>
    <v-text-field v-model="form.email" :label="$t('contact-us.form.email')" required></v-text-field>
    <v-radio-group v-if="props.showCourses" v-model="form.course">
      <p>Está interessado em qual curso? </p>
      <v-radio label="Inglês Geral" value="Inglês Geral"/>
      <v-radio label="Inglês para Negócios" value="Inglês para Negócios"/>
      <v-radio label="Preparatório para Exames"  value="Preparatório para Exames"/>
      <v-radio label="E.S.P. Inglês para propósitos específicos" value="E.S.P. Inglês para propósitos específicos"/>
      <v-radio label="Educations for teachers" value="Educations for teachers"/>
      <v-radio label="BB Kids" value="BB Kids"/>
      <v-radio label="Inglês em empresas" value="Inglês em empresas" />

    </v-radio-group>
    <v-radio-group v-if="props.showDestinations" v-model="form.destination">
      <p>Está interessado em ir para onde? </p>
      <v-radio label="Eslováquia" value="Eslováquia" />
      <v-radio label="Irlanda" value="Irlanda"/>
      <v-radio label="Malta e Gozo"  value="Malta e Gozo"/>
    </v-radio-group>
    <v-textarea v-model="form.message" :label="$t('contact-us.form.service')" rows="3" required></v-textarea>
   <div class="d-flex flex-column align-center">

     <v-btn color="secondary" @click="sendEmail" > {{$t('contact-us.form.btn-send')}} </v-btn>
  </div>
    <p class="notice" v-html="$t('contact-us.privacy-notice')"/>
  </v-form>
</template>

<script setup lang="ts">
import { defineProps, reactive} from 'vue'

const props = defineProps({
  showCourses: {
    type: Boolean,
    default: false
  },
  showDestinations: {
    type: Boolean,
    default: false
  }
})

const form = reactive({
  name:'',
  email:'',
  phone:'',
  course:'',
  destination:'',
  message:''
})

const subject = `<html><body>
  <h2>Solicitação de contato do site</h2>
  <p><strong>Nome:</strong> ${form.name}</p>
  <p><strong>Email:</strong> ${form.email}</p>
  <p><strong>Telefone:</strong> ${form.phone}</p>
  ${form.course ? `<p><strong>Curso:</strong> ${form.course}</p>` : ''}
  ${form.destination ? `<p><strong>Destino:</strong> ${form.destination}</p>` : ''}
  <p><strong>Mensagem:</strong></p>
  <p>${form.message}</p>
</body></html>`;



const sendEmail = () => {
  fetch('api/send-email.php', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    subject:  form.name + 'Solicitação de contato do site',
    message:  subject
  })
})
.then(response => response.json())
.then(data => {
  if (data.success) {
    alert('Contato enviado com sucesso! Em breve entraremos em contato.');
  } else {
    alert('Erro ao enviar e-mail, por favor tente nos contactar diretamente pelo e-mail, ou whatsapp.');
  }
})
.catch(error => {
  console.error('Erro na requisição:', error);
});
}

</script>

<style scoped lang="scss">


</style>
