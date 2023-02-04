import { Story, Meta } from '@storybook/angular/types-6-0';
import Button from './button.component';

export default {
  title: 'Components/Button',
  component: Button,
  args: {
    label: "Button"
  }
} as Meta;

const Template: Story<Button> = (args: Button) => ({
  props: args,
});

export const Primary = Template.bind({})

export const Secondary = Template.bind({})
Secondary.args = {
	type: "secondary"
}

export const Tertiary = Template.bind({})
Tertiary.args = {
	type: "tertiary"
}
