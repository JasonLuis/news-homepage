<template>
  <q-header class="bg-white row justify-center q-pa-none">
    <q-toolbar class="bg-white text-black no-shadow q-pa-none">
      <q-img :src="logo" />
      <q-space />
      <template v-if="!$q.screen.lt.sm">
        <q-btn-toggle
          :model-value="props.modelValue"
          toggle-color="dark-page"
          flat
          no-caps
          :options="props.options"
          @update:model-value="$emit('update:model-value', $event)"
        />
      </template>
      <template v-else>
        <q-btn
          flat
          round
          dense
          icon="menu"
          class="q-mr-sm btn-menu"
          size="1.8em"
          @click="showDrawer()"
        />
        <q-drawer
          v-model="drawerRight"
          side="right"
          show-if-above
          bordered
          :width="sizeWindow"
          class="bg-white q-pl-md"
        >
          <div class="row justify-end">
            <q-btn flat icon="close" size="2em" @click="closeDrawer()" />
          </div>

          <q-list class="q-mt-xl">
            <q-item
              v-for="item in options"
              :key="item.value"
              v-ripple
              clickable
            >
              <q-item-section>
                {{ item.label }}
              </q-item-section>
            </q-item>
          </q-list>
        </q-drawer>
      </template>
    </q-toolbar>
  </q-header>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue';

interface Props {
  modelValue?: string;
  options: Array<{
    label: string;
    value: string;
  }>;
}

const drawerRight = ref<boolean>(true);

defineEmits(['update:model-value']);
const props = defineProps<Props>();

const logo = new URL(`../../assets/images/logo.svg`, import.meta.url).href;

function showDrawer() {
  drawerRight.value = true;
}

function closeDrawer() {
  drawerRight.value = false;
}

const sizeWindow = computed(() => {
  return window.screen.width * 0.68;
});
</script>

<style scoped lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Hanken+Grotesk:wght@500;700&family=Heebo:wght@400;700&family=Inter:wght@400;500;600;700;800;900&display=swap');

.q-header {
  margin-top: 15px;
  position: relative;
}
.q-img {
  width: 65px;
  height: 40px;
}

.q-btn-toggle {
  font-family: 'Inter';
  font-style: normal;
  font-weight: 400;
  font-size: 15px;
  line-height: 26px;
  color: #5e607a;

  &:deep(.q-btn) {
    &:hover {
      color: #f15d51;
    }
  }
}

.q-toolbar {
  max-width: 1110px;
}

@media (max-width: $breakpoint-sm) {
  .q-img {
    width: 45px;
    height: 28px;
  }
  .q-icon {
    width: 40px;
    height: 17px;
  }
  .q-item__section {
    font-family: 'Inter';
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 24px;
    color: #00001a;
  }
}
</style>
