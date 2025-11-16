<template>

  <ContactUs :show-courses="props.sc" :show-destinations="props.sd" :c="props.c" :d="props.d" :m="props.m"/>
</template>

<script setup lang="ts">
import ContactUs from '@/components/ContactUs.vue';
import { defineProps, onMounted} from 'vue';

const props = defineProps({
  sc: {
    type: Boolean,
    default: false
  },
  sd: {
    type: Boolean,
    default: false
  },
  d: String,
  c: String,
  m: String
});

onMounted(() => {

});


</script>
