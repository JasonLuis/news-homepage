<template>
  <div class="full-width">
    <div class="row justify-center">
      <div class="col-lg-8 col-sm-12">
        <UiBannerInfo />
      </div>
      <div class="col-lg-4 column items-center col-sm-12">
        <UiCardNew />
      </div>
    </div>

    <div class="group-card-info">
      <UiGroupCardInfo />
    </div>
  </div>
</template>

<script setup lang="ts">
import UiBannerInfo from '../core/components/BannerInfo/BannerInfo.vue';
import UiCardNew from '../core/components/CardNew/CardNew.vue';
import UiGroupCardInfo from '../core/components/GroupCardInfo/GroupCardInfo.vue';
</script>

<style scoped lang="scss">
.group-card-info {
  margin-top: 71px;
}
</style>
