<template>
  <q-layout view="hHh lpR fFf">
    <UiBaseHeader :options="options" :model-value="model" />
    <q-page-container class="row justify-center">
      <div class="main">
        <router-view />
      </div>
    </q-page-container>
  </q-layout>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import UiBaseHeader from '../components/BaseHeader/BaseHeader.vue';

const options = [
  {
    label: 'Home',
    value: 'home'
  },
  {
    label: 'New',
    value: 'new'
  },
  {
    label: 'Popular',
    value: 'popular'
  },
  {
    label: 'Trending',
    value: 'trending'
  },
  {
    label: 'Categories',
    value: 'categories'
  }
];

const model = ref<string>('');
</script>

<style scoped lang="scss">
.main {
  width: 1110px;
  @media (max-width: $breakpoint-sm) {
    width: 375px;
  }
}

@media (max-width: $breakpoint-sm) {
  .q-header {
    padding-left: 5%;
  }
}
</style>
