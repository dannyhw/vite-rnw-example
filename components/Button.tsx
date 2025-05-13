import { Pressable, Text } from 'react-native';

export const Button = () => {
  return (
    <Pressable className="rounded-md bg-purple-700 p-4 text-white transition-all active:bg-purple-600">
      <Text className="text-white">Button</Text>
    </Pressable>
  );
};
