<template>
 <DsContainer class="bg-dark">

      <p style="text-align: center; font-size: 21px;">
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


const props = defineProps<{
  phase: string;
  actor?: string;
}>();
</script>

<style lang="scss" scoped>

p{
  padding: 8px 0;
  margin: 0;
}

</style>
