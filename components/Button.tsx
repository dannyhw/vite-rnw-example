import { Text, TouchableOpacity } from 'react-native';

export const Button = () => {
  return (
    <TouchableOpacity className="rounded-md bg-purple-700 p-4 text-white">
      <Text className="text-white">Button</Text>
    </TouchableOpacity>
  );
};
