import UiBaseHeader from './BaseHeader.vue';

export default {
  title: 'Ui/BaseHeader',
  component: UiBaseHeader,
  argTypes: {
    options: {
      control: {
        type: 'array'
      },
      description: 'Props for toolbar item.'
    },
    modelValue: {
      control: 'text',
      description: 'Default props for the functioning of v-model'
    }
  }
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { UiBaseHeader },
  setup() {
    return { args };
  },
  data() {
    return {
      model: ''
    };
  },
  template: '<ui-base-header v-bind="args" v-model="model"/>'
});

export const Default = Template.bind({});

Default.args = {
  options: [
    {
      label: 'Home',
      value: 'home'
    },
    {
      label: 'New',
      value: 'new'
    },
    {
      label: 'Popular',
      value: 'popular'
    },
    {
      label: 'Trending',
      value: 'trending'
    },
    {
      label: 'Categories',
      value: 'categories'
    }
  ]
};

Default.parameters = {
  docs: {
    source: {
      code: `<ui-base-header
      options="[
        {
          label: 'Home',
          value: 'home'
        },
        {
          label: 'New',
          value: 'new'
        },
        {
          label: 'Popular',
          value: 'popular'
        },
        {
          label: 'Trending',
          value: 'trending'
        },
        {
          label: 'Categories',
          value: 'categories'
        }
      ]"
      />`,
      language: 'vue',
      type: 'auto'
    }
  }
};
