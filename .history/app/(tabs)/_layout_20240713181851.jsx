import { View, Text } from 'react-native'
import { Tabs, Redirect} from 'expo-router';
import { Stack } from 'expo-router/stack';

const TabsLayout = () => {
  return (
    <>
        <Tabs>
            <Tabs.Screen
                name="home"
            />
        </Tabs>
    </>
  )
}

export default TabsLayout