<template>
  <v-menu>
        <template v-slot:activator="{ props }">
          <v-btn class="flex-grow-1 pa-12"
          flat
            v-bind="props"
          >
            {{ custom.title }}
          </v-btn>
        </template>
        <v-card>
            <v-card-item>
              <slot></slot>
            </v-card-item>
          </v-card>
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
