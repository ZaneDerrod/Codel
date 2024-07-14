import { View, Text, Image } from 'react-native'
import { Tabs, Redirect} from 'expo-router';

//import { icons } from '../../components';
const homeIcon = require('../../assets/icons/home.png');
const communityIcon = require('../../assets/icons/community2.png');
//const homeIcon = require('../../assets/icons/home.png');
//const homeIcon = require('../../assets/icons/home.png');


const TabIcon = ({ icon, color, name, focused}) => {
  return(
    <View>
      <Image
        source={icon}
        resizeMode="contain"
        tintColor={color}
        className="w-6 h-6"
        style={{ width: size, height: size }} 
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
                  headerShown: false,
                  tabBarIcon:({ color, focused }) => (
                    <TabIcon
                      icon={homeIcon}
                      color={color}
                      name="Home"
                      focused={focused}
                      size={30}
                    />
                  )
                }}
                
            />
            <Tabs.Screen
                name="communityforum"
                options={{
                  title: 'Community',
                  headerShown: false,
                  tabBarIcon:({ color, focused }) => (
                    <TabIcon
                      icon={communityIcon}
                      color={color}
                      name="Community"
                      focused={focused}
                      size={30}
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