<template>
  <div>
    <div class="d-flex align-center flex-md-row flex-column" style="height: fit-content">
      <div class="pl-6 cursor-pointer" v-on:click="router.push('/')">
        <v-img :width="170" aspect-ratio="16/9" cover src="../src/assets/logo.png"></v-img>
      </div>
      <MenuDropBox :title="$t('header.about')">
        <P
          >Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta eligendi beatae non
          aspernatur. Voluptatem dolores deserunt error consectetur in inventore veritatis id dolor
          ipsa, ullam maiores reiciendis laborum quod accusamus.</P
        >
      </MenuDropBox>
      <MenuDropBox :title="$t('header.english')">
        <ExchangeMenu
          :title="$t('home.courses.for-kids.title')"
          :description="$t('home.courses.for-kids.description')"
          :button-text="$t('home.courses.for-kids.btn-learn-more')"
          src="../src/assets/kid.png"
          pathto="/for-kids"
        />
        <ExchangeMenu
          :title="$t('home.courses.for-adults.title')"
          :description="$t('home.courses.for-adults.description')"
          :button-text="$t('home.courses.for-adults.btn-learn-more')"
          src="../src/assets/woman.png"
          pathto="/for-adults"
          reverse
        />
        <ExchangeMenu
          :title="$t('home.courses.for-teachers.title')"
          :description="$t('home.courses.for-teachers.description')"
          :button-text="$t('home.courses.for-teachers.btn-learn-more')"
          src="../src/assets/teacher.png"
          pathto="/for-teachers"
        />
      </MenuDropBox>
      <MenuDropBox :title="$t('header.exchange.title')">
        <ExchangeMenu
          :title="$t('header.exchange.Slovakia.contry')"
          :description="$t('header.exchange.Slovakia.description')"
          :button-text="$t('header.exchange.button')"
          src="../src/assets/Flag_of_Slovakia.svg"
        />
        <ExchangeMenu
          :title="$t('header.exchange.Ireland.contry')"
          :description="$t('header.exchange.Ireland.description')"
          :button-text="$t('header.exchange.button')"
          reverse
          src="../src/assets/Flag_of_Ireland.svg"
        />
        <ExchangeMenu
          :title="$t('header.exchange.MaltaGozo.contry')"
          :description="$t('header.exchange.MaltaGozo.description')"
          :button-text="$t('header.exchange.button')"
          src="../src/assets/Flag_of_Slovakia.svg"
        />
      </MenuDropBox>
      <MenuDropBox title="PARCERIAS">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iste laboriosam, ratione, eum
          explicabo suscipit saepe inventore nisi modi odit, neque hic! Minima exercitationem magnam
          dolorum neque unde pariatur assumenda commodi.
        </p>
      </MenuDropBox>

      <v-btn class="mr-6 contact-us-btn" width="200px" height="50px" color="primary" border @click="router.push('/contact-us')">Fale Conosco</v-btn>
    </div>
    <div class="d-flex bg-dark justify-space-between set-background-primary">
      <div class="d-flex flex-row">
        <p class="ma-2 pa-2 ml-6" >BB Blog</p>
        <p class="ma-2 pa-2" >Teste seu nivel</p>
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
.contact-us-btn:hover{
  color: $secondary;
}
</style>
