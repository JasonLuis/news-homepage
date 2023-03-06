<template>
  <q-card class="card-new q-pa-none">
    <q-card-section>
      <div class="title text-h6">New</div>
    </q-card-section>

    <q-card-section class="row justify-center">
      <div class="info-news">
        <div>
          <div class="info-title">Hydrogen Vs Electric Cars</div>
          <div class="info-description">
            Will hydrogen-fueled cars ever catch up to EVs?
          </div>
        </div>
        <q-separator />
        <div class="q-mt-xl">
          <div class="info-title">The Downsides of AI Artistry</div>
          <div class="info-description">
            What are the possible adverse effects of on-demand AI image
            generation?
          </div>
        </div>
        <q-separator />
        <div class="q-mt-xl">
          <div class="info-title">Is VC Funding Drying Up?</div>
          <div class="info-description">
            Private funding by VC firms is down 50% YOY. We take a look at what
            that means.
          </div>
        </div>
      </div>
    </q-card-section>
  </q-card>
</template>

<script setup lang="ts"></script>

<style scoped lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Hanken+Grotesk:wght@500;700&family=Heebo:wght@400;700&family=Inter:wght@400;500;600;700;800;900&display=swap');
.card-new {
  background-color: #00001a;
  border-radius: 0%;
  width: 350px;
  height: 511px;
  font-family: 'Inter';
  font-style: normal;
  &:deep(.q-card__section:nth-child(1)) {
    padding-top: 32px;
    padding-left: 24px;
  }

  &:deep(.info-news) {
    width: 302px;
    height: 374px;
  }
}

.q-mt-xl {
  margin-top: 31px;
}

.q-separator {
  background: #5e607a;
  margin-top: 29px;
}

.title {
  font-weight: 700;
  font-size: 40px;
  line-height: 40px;
  color: #e9aa52;
}

.info-title {
  font-weight: 800;
  font-size: 20px;
  line-height: 24px;
  color: #fffdfa;
}

.info-description {
  font-weight: 400;
  font-size: 15px;
  line-height: 26px;
  color: #c5c6ce;
  margin-top: 8px;
}

@media (max-width: $breakpoint-sm) {
  .card-new {
    width: 343px;
    height: 489px;
    &:deep(.q-card__section:nth-child(1)) {
      padding-top: 24px;
      padding-left: 21px;
    }
  }

  .title {
    font-size: 32px;
    line-height: 32px;
  }
}
</style>
