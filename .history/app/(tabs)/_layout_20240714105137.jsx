import { View, Text, Image } from 'react-native'
import { Tabs, Redirect} from 'expo-router';

import { icons } from '../../assets';


const TabIcon = ({ icon, color, name, focused}) => {
  return(
    <View>
      <Image
        source={icon}
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
                }}
                  /*
                
                  headerShown: false,
                  tabBarIcon:({ color, focused }) => (
                    <TabIcon
                      icon={icons.home}
                      color={color}
                      name="Home"
                      focused={focused}
                    />
                  )
                }}
                */
            />
            <Tabs.Screen
                name="communityforum"
                
                options={{
                  title: 'Community',
                  headerShown: false,
                  tabBarIcon:({ color, focused }) => (
                    <TabIcon
                      icon={icons.home}
                      color={color}
                      name="Home"
                      focused={focused}
                    />
                  )
                }}
                
            />
            <Tabs.Screen
                name="leaderboard"
                
                options={{
                  title: 'LeaderBoard',
                }}
                  /*
                
                  headerShown: false,
                  tabBarIcon:({ color, focused }) => (
                    <TabIcon
                      icon={icons.home}
                      color={color}
                      name="Home"
                      focused={focused}
                    />
                  )
                }}
                */
            />
            <Tabs.Screen
                name="profile"
                
                options={{
                  title: 'Profile',
                }}
                  /*
                
                  headerShown: false,
                  tabBarIcon:({ color, focused }) => (
                    <TabIcon
                      icon={icons.home}
                      color={color}
                      name="Home"
                      focused={focused}
                    />
                  )
                }}
                */
            />
        </Tabs>
    </>
  )
}

export default TabsLayout