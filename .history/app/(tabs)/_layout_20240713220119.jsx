import { View, Text } from 'react-native'
import { Tabs, Redirect} from 'expo-router';
import Settings from './settings';

const TabsLayout = () => {
  return (
    <>
        <Tabs>
            <Tabs.Screen
                name="home"
            />
            <Tabs.Screen
                name="challenge"
            />
            <Tabs.Screen name="settings" component={Settings} />
        </Tabs>
    </>
  )
}

export default TabsLayout