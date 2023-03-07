<template>
  <div class="group-card row justify-between">
    <div class="col-lg-4 col-xs-12">
      <UiCardInfoItem
        item-number="01"
        img="image-retro-pcs.jpg"
        description="What happens when old PCs are given modern upgrades?"
        title="Reviving Retro PCs"
      />
    </div>
    <div class="col-lg-4 col-xs-12">
      <UiCardInfoItem
        item-number="02"
        img="image-top-laptops.jpg"
        description="Our best picks for various needs and budgets."
        title="Top 10 Laptops of 2022"
      />
    </div>
    <div class="col-lg-4 col-xs-12">
      <UiCardInfoItem
        item-number="03"
        img="image-gaming-growth.jpg"
        description="How the pandemic has sparked fresh opportunities."
        title="The Growth of Gaming"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import UiCardInfoItem from '../CardInfoItem/CardInfoItem.vue';
</script>

<style scoped lang="scss">
.group-card {
  max-width: 1110px;
}

@media (max-width: $breakpoint-sm) {
  .q-card {
    margin-top: 32px;
  }
}
</style>
