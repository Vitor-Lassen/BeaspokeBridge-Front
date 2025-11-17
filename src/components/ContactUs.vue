<template>
  <v-form class="pa-4" v-model="formRef">
    <h4 v-html="$t('contact-us.coach')"></h4>

    <v-text-field
      v-model="form.name"
      :label="companyForm? 'Nome da empresa': $t('contact-us.form.name')"
      :rules="nameRules"
    ></v-text-field>
    <v-text-field
      v-if="props.companyForm"
      v-model="form.pessoalContato"
      label="Pessoa de contato"
      :rules="nameRulesForCompany"
    ></v-text-field>

    <v-text-field
      v-if="props.companyForm"
      v-model="form.role"
      label="Cargo na Empresa"
      :rules="nameRulesForCompany"
    ></v-text-field>

    <v-mask-input
      mask="(##) #####-####"
      v-model="form.phone"
      :label="$t('contact-us.form.phone')"
      :rules="phoneRules"
      type="tel"
      maxlength="15"
      @input="form.phone = $event ? $event.replace(/\D/g,'').replace(/^(\d{2})(\d)/,'($1) $2').replace(/(\d{5})(\d{4})$/,'$1-$2').replace(/(\d{4})(\d{4})$/,'$1-$2') : ''"
    />

    <v-text-field
      v-model="form.email"
      :label="props.companyForm? 'Email coorporativo': $t('contact-us.form.email')"
      :rules="emailRules"
    ></v-text-field>

     <v-number-input
      v-if="props.companyForm"
      v-model="form.numberOfEmployees"
      label="Número de colaboradores interessados "
      :min="1"
      hidden

    />

    <v-text-field
      v-if="props.companyForm"
      v-model="form.objective"
      label="Objetivo principal"
      :rules="nameRulesForCompany"
    ></v-text-field>

    <v-text-field
      v-if="props.companyForm"
      v-model="form.schedule"
      label="Prefernecia de horario para as aulas"
      :rules="nameRulesForCompany"
    ></v-text-field>
    <v-radio-group v-if="props.showCourses" v-model="form.course">
      <p>Está interessado em qual curso? </p>
      <v-radio label="Inglês Geral" value="Inglês Geral"/>
      <v-radio label="Inglês para Negócios" value="Inglês para Negócios"/>
      <v-radio label="Preparatório para Exames"  value="Preparatório para Exames"/>
      <v-radio label="E.S.P. Inglês para propósitos específicos" value="E.S.P. Inglês para propósitos específicos"/>
      <v-radio label="Inglês para viagens" value="Inglês para viagens"/>
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

    <v-textarea v-model="form.message" :label="props.companyForm? 'Comentários adicionais': $t('contact-us.form.service')" rows="3" required></v-textarea>

    <div class="d-flex flex-column align-center">
      <v-btn color="secondary" @click="onSubmit"> {{$t('contact-us.form.btn-send')}} </v-btn>
    </div>

    <p class="notice" v-html="$t('contact-us.privacy-notice')"></p>
  </v-form>
</template>

<script setup lang="ts">
import { defineProps, reactive, onMounted, ref, computed,  } from 'vue'

const props = defineProps({
  showCourses: {
    type: Boolean,
    default: false
  },
  showDestinations: {
    type: Boolean,
    default: false
  },
  d:String,
  c:String,
  m:String,
  companyForm: {
    type: Boolean,
    default: false
  }
})

const formRef = ref<boolean| null>(false)

onMounted(() => {
  if (props.d) {
    form.destination = props.d
  }
  if (props.c) {
    form.course = props.c
  }
  if (props.m) {
    form.message = props.m
  }
});

const form = reactive({
  name:'',
  pessoalContato:'',
  email:'',
  role: '',
  numberOfEmployees: 1,
  objective:'',
  schedule:'',
  phone:'',
  course:'',
  destination:'',
  message:''
})

// Validação
const nameRules = [
  (v: string) => !!v || 'Nome é obrigatório'
]
// Validação
const nameRulesForCompany = [
  (v: string) => props.companyForm? !!v || 'campo obrigatório' : true
]

const emailRules = [
  (v: string) => !!v || 'Email é obrigatório',
  (v: string) => {
    if (!v) return true
    // simples regex de email
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    return re.test(v) || 'Email inválido'
  }
]

const phoneRules = [
  (v: string) => !!v || 'Telefone é obrigatório',
  (v: string) => {
    if (!v) return true
    const digits = v.replace(/\D/g,'')
    return (digits.length >= 10 && digits.length <= 11) || 'Telefone inválido'
  }
]

// montar corpo do email dinamicamente
const subject = computed(() => `<html><body>
  <h2>Solicitação de contato do site</h2>
  <p><strong>Nome:</strong> ${form.name}</p>
  <p><strong>Email:</strong> ${form.email}</p>
  <p><strong>Telefone:</strong> ${form.phone}</p>
  ${form.course ? `<p><strong>Curso:</strong> ${form.course}</p>` : ''}
  ${form.destination ? `<p><strong>Destino:</strong> ${form.destination}</p>` : ''}
  <p><strong>Mensagem:</strong></p>
  <p>${form.message}</p>
</body></html>`);

const sendEmail = () => {
  fetch('api/send-email.php', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      subject:  form.name + ' - Solicitação de contato do site',
      message:  subject.value
    })
  })
  .then(response => response.json())
  .then(data => {
    if (data.success) {
      alert('Contato enviado com sucesso! Em breve entraremos em contato.');
      form.name = ''
      form.email = ''
      form.phone = ''
      form.course = ''
      form.destination = ''
      form.message = ''
      formRef.value = null
    } else {
      alert('Erro ao enviar e-mail, por favor tente nos contactar diretamente pelo e-mail, ou whatsapp.');
    }
  })
  .catch(error => {
    console.error('Erro na requisição:', error);
  });
}

const onSubmit = () => {
  // valida todos os campos do form Vuetify
  console.log('Form valid:')
  console.log(formRef.value)

  if (formRef.value) {
    sendEmail()
  }
}
</script>

<style scoped lang="scss">
</style>
