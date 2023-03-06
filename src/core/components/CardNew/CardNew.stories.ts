import UiCardNew from './CardNew.vue';

export default {
  title: 'Ui/CardNew',
  component: UiCardNew,
  argTypes: {}
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { UiCardNew },
  setup() {
    return { args };
  },
  data() {
    return {};
  },
  template: '<ui-card-new v-bind="args"/>'
});

export const Default = Template.bind({});
Default.args = {};

Default.parameters = {
  docs: {
    source: {
      code: `<ui-card-new />`,
      language: 'vue',
      type: 'auto'
    }
  }
};
