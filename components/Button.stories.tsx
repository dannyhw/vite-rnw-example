import { Meta, StoryObj } from '@storybook/react';
import { Button } from './Button';
import { View } from 'react-native';

const meta: Meta<typeof Button> = {
  component: Button,
  decorators: [
    (Story) => (
      <View className="flex-1 items-start">
        <Story />
      </View>
    ),
  ],
};

export default meta;

type Story = StoryObj<typeof Button>;

export const Primary: Story = {};
