<template>
  <v-footer class="bg-dark" color="primary">
    <div class="bg-dark d-flex flex-column flex-1-1 mt-6">
      <div class="d-flex  mobile justify-space-between" style="flex: none">
        <div class="align-self-center ma-4">
          <v-img class="ma-1"  :width="170" aspect-ratio="16/9" cover src="Logos BB/BB white.png"></v-img>
          <h3>Ingles e intercambio</h3>
        </div>
        <div class="ma-6">
          <h4>{{$t('footer.fast-access.title')}}</h4>

          <ul>
            <li @click="router.push('contact-us')"><a >{{$t('footer.fast-access.contact')}}</a></li>
            <li><a @click="router.push('courses')">{{$t('footer.fast-access.curses')}}</a></li>
            <li><a @click="router.push('exchange')">{{$t('footer.fast-access.exchange')}}</a></li>
            <li><a @click="router.push('/parcerias')">{{$t('footer.fast-access.partnerships')}}</a></li>
            <li><a @click="router.push('blog')">{{$t('footer.fast-access.blog')}}</a></li>
          </ul>
        </div>

        <div class="ma-6">
          <h4>{{$t('footer.transparency.title')}}</h4>

          <ul>
            <li><a @click="router.push('/terms-and-conditions')">{{$t('footer.transparency.terms')}}</a></li>
            <li><a @click="router.push('/privacy-policy')">{{$t('footer.transparency.privacy')}}</a></li>
            <li><a @click="router.push('/privacy-policy')">{{$t('footer.transparency.cookies')}}</a></li>

          </ul>
        </div>
        <div class="ma-6 d-flex flex-column align-center">
          <h4>{{$t('footer.follow-socials')}}</h4>
          <MidiasSociais :size="40" />
          <p class="mt-8">Usamos o</p>
          <img src="/google-workspace.png" style="width: 200px;">
        </div>
      </div>
      <div>  <p class="copyright">© Bespoke Bridge {{ new Date().getFullYear() }}. {{$t('footer.rights')}}</p> </div>
    </div>
  </v-footer>
</template>

<style scoped>

a,h4{
  text-align: left;
}
li {
  margin-bottom: 1rem;
  cursor: pointer;
}
.copyright {
  font-size: 12px;
  text-align: end;
}
ul {
  list-style-type: none;
}
h4 {
  font-size: 18px;
  margin-bottom: 2rem;
}
@media (max-width: 980px) {
  .mobile {
    flex-direction: column;
    align-items: center;
  }


}
</style>

<script setup lang="ts">
import MidiasSociais from '../MidiasSociais.vue'
import { useRouter } from 'vue-router';

const router = useRouter();

</script>
