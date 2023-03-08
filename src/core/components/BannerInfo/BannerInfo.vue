<template>
  <q-card class="no-shadow no-border-radius">
    <q-img :src="img" />
    <q-card-section class="row q-pa-none">
      <div class="col-lg-6">
        <p class="banner-title">The Bright Future of Web 3.0?</p>
      </div>
      <div class="col-lg-6">
        <div class="banner-description">
          We dive into the next evolution of the web that claims to put the
          power of the platforms back into the hands of the people. But is it
          really fulfilling its promise?
        </div>
        <UiBaseButton />
      </div>
    </q-card-section>
  </q-card>
</template>

<script setup lang="ts">
import UiBaseButton from '../BaseButton/BaseButton.vue';

const img = new URL(
  `../../assets/images/image-web-3-desktop.jpg`,
  import.meta.url
).href;
</script>

<style scoped lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Hanken+Grotesk:wght@500;700&family=Heebo:wght@400;700&family=Inter:wght@400;500;600;700;800;900&display=swap');
.q-card {
  width: 730px;
  height: 511px;
  &:deep(.q-img) {
    max-width: 730px;
    max-height: 300px;
  }
}

.banner-title {
  font-family: 'Inter';
  font-style: normal;
  font-weight: 800;
  font-size: 56px;
  line-height: 56px;
  color: #00001a;
  margin-top: 28px;
}

.banner-description {
  font-family: 'Inter';
  font-style: normal;
  font-weight: 400;
  font-size: 15px;
  line-height: 26px;
  color: #5e607a;
  margin-top: 30px;
}

.q-btn {
  margin-top: 29px;
}

@media (max-width: $breakpoint-sm) {
  .q-card {
    width: 343px;
    height: 638px;
    &:deep(.q-img) {
      max-width: 375px;
      max-height: 300px;
    }
  }

  .banner-title {
    font-size: 40px;
    line-height: 40px;
  }

  .banner-description {
    margin-top: 16px;
  }

  .q-btn {
    margin-top: 24px;
  }
}
</style>
