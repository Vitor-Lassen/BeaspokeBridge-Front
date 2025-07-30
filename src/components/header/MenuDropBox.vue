<template>
  <v-menu width="100%">
        <template v-slot:activator="{ props }">
          <v-btn class="flex-grow-1"
          flat
            v-bind="props"
          >
            <P>{{ custom.title }}</P>
          </v-btn>
        </template>
        <v-sheet class="pa-2">
              <slot></slot>
        </v-sheet>
      </v-menu>
</template>

<script setup lang="ts">
import { defineProps } from 'vue';

const custom = defineProps<{
  title: string;
}>();
</script>

<style scoped>

</style>
