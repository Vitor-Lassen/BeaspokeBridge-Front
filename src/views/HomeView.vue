<script setup lang="ts">
import ContactUs from '@/components/ContactUs.vue'
import ExchangeCarrosel from '@/components/Exchange/ExchangeCarrosel.vue';

</script>

<template>
  <main>
    <ds-container bg-img="/map.png">
    <div class=" d-flex justify-space-between  mobile">
      <div class="" style="background-color: white; border-radius: 16px">
        <ContactUs/>
      </div>

      <div class=" d-flex flex-column align-center justify-start ">
        <h2   v-html="$t('home.welcome.title')"  />
        <p  v-html="$t('home.welcome.description')"></p>
        <p><i  v-html="$t('home.welcome.mission')"> </i></p>
      </div>
    </div>
    </ds-container>

    <div class="bg-blue-h pa-6 d-flex flex-column align-center align-content-center">
      <h1 class="mt-8 pb-6" v-html="$t('home.custom-learning.title')" />
      <div class="d-flex mobile-reverse justify-center">
        <div class="pa-6" style="width: 400px; text-align: center">
          <h2 class="pb-6" v-html="$t('home.custom-learning.subtitle')"></h2>
          <p v-html="$t('home.custom-learning.description')" />
          <v-btn class="ma-2 mt-12" color="secondary"
            >{{ $t('home.custom-learning.btn-learn-more') }}
          </v-btn>
        </div>

        <v-img src="Woman-with-border.png" width="400" aspect-ratio="16/9" class="ma-10" />
      </div>
    </div>

    <ds-container>
      <h1 class="mt-10 mb-6 hover" @click="() => $router.push('/courses')" v-html="$t('home.courses.title')"></h1>
      <p  class="pl-12 pr-12" v-html="$t('home.courses.description')"></p>
      <div class="d-flex flex-wrap justify-space-between align-start">
        <ds-card
          img="kid.png"
          :title="$t('home.courses.for-kids.title')"
          :subtitle="$t('home.courses.for-kids.description')"
          :btn-name="$t('home.courses.for-kids.btn-learn-more')"
          path-to="/for-kids"
          style="width: 350px;"
          btn-position="bottom"
        />
        <ds-card
          img="woman.png"
          :title="$t('home.courses.for-adults.title')"
          :subtitle="$t('home.courses.for-adults.description')"
          :btn-name="$t('home.courses.for-adults.btn-learn-more')"
          path-to="/for-adults"
          style="width: 350px;"
          btn-position="bottom"
        />
        <ds-card
          img="teacher.png"
          :title="$t('home.courses.for-teachers.title')"
          :subtitle="$t('home.courses.for-teachers.description')"
          :btn-name="$t('home.courses.for-teachers.btn-learn-more')"
          path-to="/for-teachers"
          style="width: 350px;"
          btn-position="bottom"
        />
      </div>
    </ds-container>
    <ds-container>
      <h1>Intercâmbios e vivências <span class="tc-r">internacionais</span> </h1>
      <p class="sm"> Explore o mundo com <b>segurança</b> e <b>suporte total</b> com nossos <b>intercâmbios</b> estudantis <b>culturais</b>.</p>


    </ds-container>
    <ExchangeCarrosel home />
  </main>
</template>

<style scoped>
p{
  text-align: center;
}


</style>
