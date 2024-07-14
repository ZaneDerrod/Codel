import { View, Text } from 'react-native'
import { Tabs, Redirect} from 'expo-router';

const TabsLayout = () => {
  return (
    <>
        <Tabs>
            <Tabs.Screen
                name="challeneg"
            />
        </Tabs>
    </>
  )
}

export default TabsLayout