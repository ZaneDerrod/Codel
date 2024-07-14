import { View, Text } from 'react-native'
import { Tabs, Redirect} from 'expo-router';
import { icons } from ../../constants

const TabIcon = ({ icon, color, name, focused}) => {
  return(
    <View>
      <Image

      />
    </View>
  )
}

const TabsLayout = () => {
  return (
    <>
        <Tabs>
            <Tabs.Screen
                name="home"
                options={{
                  title: 'Home',
                  headerShown:false,
                  tabBarIcon:({ color, focused }) => (
                    <TabIcon
                      icon={icons.home}
                    />
                  )
                }}
            />
        </Tabs>
    </>
  )
}

export default TabsLayout