import UiGroupCardInfo from './GroupCardInfo.vue';

export default {
  title: 'Ui/GroupCardInfo',
  component: UiGroupCardInfo,
  argTypes: {}
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { UiGroupCardInfo },
  setup() {
    return { args };
  },
  data() {
    return {};
  },
  template: '<ui-group-card-info v-bind="args"/>'
});

export const Default = Template.bind({});

Default.args = {};

Default.parameters = {
  docs: {
    source: {
      code: `<ui-group-card-info />`,
      language: 'vue',
      type: 'auto'
    }
  }
};
