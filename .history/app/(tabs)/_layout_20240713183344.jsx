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
        </Tabs>
    </>
  )
}

export default TabsLayout