<script setup lang="ts">
import CoursesCard from '@/components/CoursesCard.vue';
</script>

<template>
  <main>
    <div class="backgroud-blue pa-6 d-flex flex-column align-center align-content-center">
      <h1 class="mt-8 pb-6">{{ $t('home.start.title') }}</h1>
      <div class="d-flex flex-wrap justify-center">
        <div class="pa-6" style="width: 400px; text-align: center">
          <h2 class="pb-6" v-html="$t('home.start.subtitle')"></h2>
          <p v-html="$t('home.start.description')" />
          <v-btn class="ma-2 mt-12" color="secondary">{{$t('home.start.btn-learn-more')}} </v-btn>
        </div>

        <v-img
          src="../src/assets/Woman-with-border.png"
          width="400"
          aspect-ratio="16/9"
          cover
        />
      </div>
    </div>

<div>
  <h1 class=" mt-10 mb-6 " v-html="$t('home.courses.title')"></h1>
    <p v-html="$t('home.courses.description')"> </p>
    <div class="d-flex flex-wrap justify-center align-center ">
      <CoursesCard
        src="../src/assets/kid.png"
        :title="$t('home.courses.for-kids.title')"
        :description="$t('home.courses.for-kids.description')"
        :btn-name="$t('home.courses.for-kids.btn-learn-more')"
      />
      <CoursesCard
        src="../src/assets/woman.png"
        :title="$t('home.courses.for-adults.title')"
        :description="$t('home.courses.for-adults.description')"
        :btn-name="$t('home.courses.for-adults.btn-learn-more')"
      />
      <CoursesCard
        src="../src/assets/teacher.png"
        :title="$t('home.courses.for-teachers.title')"
        :description="$t('home.courses.for-teachers.description')"
        :btn-name="$t('home.courses.for-teachers.btn-learn-more')"
      />

    </div>
  </div>

  </main>
</template>

<style scoped>

</style>
