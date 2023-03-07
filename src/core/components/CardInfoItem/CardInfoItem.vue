<template>
  <q-card class="no-shadow no-border-radius q-pa-none">
    <q-card-section horizontal>
      <q-img :src="getImage" />
      <q-card-section class="q-pa-none">
        <div class="card-info__number">{{ props.itemNumber }}</div>
        <div class="card-info__title">{{ props.title }}</div>
        <div class="card-info__description">
          {{ props.description }}
        </div>
      </q-card-section>
    </q-card-section>
  </q-card>
</template>

<script setup lang="ts">
import { computed } from 'vue';

const props = defineProps<{
  itemNumber: string;
  title: string;
  description: string;
  img: string;
}>();

const getImage = computed(
  () => new URL(`../../assets/images/${props.img}`, import.meta.url).href
);
</script>

<style scoped lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Hanken+Grotesk:wght@500;700&family=Heebo:wght@400;700&family=Inter:wght@400;500;600;700;800;900&display=swap');
.q-card {
  width: 350px;
  height: 130px;
  font-family: 'Inter';
  font-style: normal;
  &:hover {
    .card-info__title {
      color: #f15d51;
      cursor: pointer;
    }
  }
}

.q-img {
  max-width: 100px;
  height: 130px;
}

.card-info__number {
  font-weight: 700;
  font-size: 32px;
  line-height: 32px;
  color: #c5c6ce;
  margin-left: 24px;
}

.card-info__title {
  font-weight: 800;
  font-size: 18px;
  line-height: 24px;
  color: #00001a;
  margin-top: 12px;
  margin-left: 24px;
}

.card-info__description {
  font-weight: 400;
  font-size: 15px;
  line-height: 26px;
  color: #5e607a;
  margin-top: 11px;
  margin-left: 24px;
}

@media (max-width: $breakpoint-sm) {
  .q-card {
    width: 343px;
  }
}
</style>
