import { View, Text } from 'react-native'
import { Tabs, Redirect} from 'expo-router';

const TabsLayout = () => {
  return (
    <>
        <Tabs>
            <Tabs.Screen
                name="(tabs)"
            />
        </Tabs>
    </>
  )
}

export default TabsLayout