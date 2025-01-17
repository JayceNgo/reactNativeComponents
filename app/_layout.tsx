import { Stack } from 'expo-router';

export default function Layout() {
  return (
    <Stack>
      <Stack.Screen name="index" options={{headerShown:false}}/>
      <Stack.Screen name="bouncyCheckboxScreen" options={{headerShown:false}}/>
        <Stack.Screen name="bottomSheet" options={{headerShown:false}}/>
    </Stack>
  );
}
