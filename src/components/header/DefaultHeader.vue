<template>
  <div>
    <div class="d-flex align-center flex-md-row flex-column" style="height: fit-content">
      <div class="pl-6 cursor-pointer" v-on:click="router.push('/')">
        <v-img class="hover" :width="170" aspect-ratio="16/9" cover src="logo.png"></v-img>
      </div>
      <MenuDropBox :title="$t('header.about.title')">
        <ExchangeMenu
          :title="$t('header.about.us.title')"
          description=""
          button-text=""
          src=""
          pathto="/about"
        />
        <ExchangeMenu
          :title="$t('header.about.team.title')"
          description=""
          button-text=""
          src=""
          pathto="/team"
        />
      </MenuDropBox>
      <MenuDropBox :title="$t('header.english')">
        <ExchangeMenu
          :title="$t('home.courses.for-kids.title')"
          :description="$t('home.courses.for-kids.description')"
          :button-text="$t('home.courses.for-kids.btn-learn-more')"
          src="kid.png"
          pathto="/for-kids"
        />
        <ExchangeMenu
          :title="$t('home.courses.for-adults.title')"
          :description="$t('home.courses.for-adults.description')"
          :button-text="$t('home.courses.for-adults.btn-learn-more')"
          src="woman.png"
          pathto="/for-adults"
          reverse
        />
         <ExchangeMenu
          :title="$t('home.courses.for-company.title')"
          :description="$t('home.courses.for-company.description')"
          :button-text="$t('home.courses.for-company.btn-learn-more')"
          src="teacher.png"
          pathto="/for-company"
        />
        <ExchangeMenu
          :title="$t('home.courses.for-teachers.title')"
          :description="$t('home.courses.for-teachers.description')"
          :button-text="$t('home.courses.for-teachers.btn-learn-more')"
          src="teacher.png"
          pathto="/for-teachers"
          reverse
        />

      </MenuDropBox>
      <MenuDropBox :title="$t('header.exchange.title')">
       <ExchangeMenu
          :title="$t('header.exchange.Slovakia.contry')"
          :description="$t('header.exchange.Slovakia.description')"
          :button-text="$t('header.exchange.button')"
          src="Eslovaquia/Eslovaquia1.png"
          pathto="/exchange-Eslovaquia"
        />
        <ExchangeMenu
          :title="$t('header.exchange.Ireland.contry')"
          :description="$t('header.exchange.Ireland.description')"
          :button-text="$t('header.exchange.button')"
          reverse
          src="Ireland/Ireland-3.png"
          pathto="/exchange-Ireland"
        />
        <ExchangeMenu
          :title="$t('header.exchange.MaltaGozo.contry')"
          :description="$t('header.exchange.MaltaGozo.description')"
          :button-text="$t('header.exchange.button')"
          src="Malta/malta 1.png"
          pathto="/exchange-Malta-e-gozo"
        />
      </MenuDropBox>

      <v-btn
      class="flex-grow-1"
      flat
      @click="router.push('/parcerias')">
      <P>PARCERIAS</P>
      </v-btn>

      <v-btn
        class="mr-6 contact-us-btn"
        width="200px"
        height="50px"
        active-color="secondary"
        border
        rounded="lg"
        @click="router.push('/contact-us')"
        >Fale Conosco</v-btn
      >
    </div>
    <div class="d-flex bg-dark justify-space-between set-background-primary">
      <div class="d-flex flex-row">
        <p class="ma-2 pa-2 ml-6 hover">BB Blog</p>
        <p class="ma-2 pa-2 hover">Teste seu nivel</p>
      </div>
      <div>
        <MidiasSociais :size="40" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import MenuDropBox from './MenuDropBox.vue'
import ExchangeMenu from './ItemMenu.vue'
import MidiasSociais from '../MidiasSociais.vue'

import { useRouter } from 'vue-router'

const router = useRouter()
</script>

<style scoped lang="scss">
.set-background-primary {
  background-color: $primary;
}
.contact-us-btn:hover {
  color: $secondary;
}
</style>
