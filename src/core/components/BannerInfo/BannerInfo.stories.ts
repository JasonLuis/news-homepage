import UiBannerInfo from './BannerInfo.vue';

export default {
  title: 'Ui/BannerInfo',
  component: UiBannerInfo,
  argTypes: {}
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { UiBannerInfo },
  setup() {
    return { args };
  },
  data() {
    return {};
  },
  template: '<ui-banner-info v-bind="args"/>'
});

export const Default = Template.bind({});

Default.args = {};
Default.parameters = {
  docs: {
    source: {
      code: `<ui-banner-info />`,
      language: 'vue',
      type: 'auto'
    }
  }
};
