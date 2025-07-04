<template>
 <DsContainer class="bg-dark">

      <p class="md" style="text-align: center;">
        <b
          ><i
            >"{{ props.phase }}"</i
          ></b
        >
      </p>
      <p v-if="props.actor"  style="align-self: flex-end;">{{props.actor}}</p>

 </DsContainer>
</template>

<script setup lang="ts">
import DsContainer from './ds-container.vue';

import { defineProps } from 'vue';

const props = defineProps<{
  phase: string;
  actor?: string;
}>();
</script>

<style lang="scss" scoped>

p{
  padding: 0;
  margin: 0;
}

</style>
