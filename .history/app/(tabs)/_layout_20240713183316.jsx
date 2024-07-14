import { View, Text } from 'react-native'
import { Tabs, Redirect} from 'expo-router';

const TabsLayout = () => {
  return (
    <>
        <Tabs>
            <Tabs.Screen name="home" />
            <Tabs.Screen name="challenge" />
            <Tabs.Screen name="communityforum" />
            <Tabs.Screen name="leaderboard" />
            <Tabs.Screen name="profile" options={{ tabBarPosition: 'bottom' }} />
            <Tabs.Screen name="settings" options={{ tabBarPosition: 'bottom' }} />
        </Tabs>
    </>
  )
}

export default TabsLayout