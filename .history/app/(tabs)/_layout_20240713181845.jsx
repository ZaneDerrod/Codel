import { View, Text } from 'react-native'
import { Tabs, Redirect} from 'expo-router';
import { Stack } from 'expo-router/stack';

const TabsLayout = () => {
  return (
    <>
        <Stack>
      <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
    </Stack>
    </>
  )
}

export default TabsLayout