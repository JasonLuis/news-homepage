import UiCardInfoItem from './CardInfoItem.vue';

export default {
  title: 'Ui/CardInfoItem',
  component: UiCardInfoItem,
  argTypes: {
    itemNumber: {
      control: { type: 'text' }
    },
    title: {
      control: { type: 'text' }
    },
    description: {
      control: { type: 'text' }
    },
    img: {
      control: { type: 'text' }
    }
  }
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { UiCardInfoItem },
  setup() {
    return { args };
  },
  data() {
    return {};
  },
  template: '<ui-card-info-item v-bind="args"/>'
});

export const Default = Template.bind({});

Default.args = {
  itemNumber: '01',
  title: 'Reviving Retro PCs',
  description: 'What happens when old PCs are given modern upgrades?',
  img: 'image-retro-pcs.jpg'
};
Default.parameters = {
  docs: {
    source: {
      code: `<ui-card-info-item />`,
      language: 'vue',
      type: 'auto'
    }
  }
};
