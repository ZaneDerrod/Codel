import { View, Text } from 'react-native'
import { Tabs, Redirect} from 'expo-router';
import { Profile } from '/profile';


const TabsLayout = () => {
  return (
    <>
        <Tabs>
            <Tabs.Screen
                name="home"
            />
            <Tabs.Screen
                name="profile" 
            />
        </Tabs>
    </>
  )
}

export default TabsLayout