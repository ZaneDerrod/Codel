import { View, Text, Image } from 'react-native'
import { Tabs, Redirect} from 'expo-router';

//import { icons } from '../../components';
const homeIcon = require('../../assets/icons/home.png');
const communityIcon = require('../../assets/icons/community2.png');
const leaderboardIcon = require('../../assets/icons/leaderboard.png');
const profileIcon = require('../../assets/icons/profile.png');


const TabIcon = ({ icon, color, name, focused, size}) => {
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
        <Tabs
          screenOptions={{
            tabBarShowLabel: true,
            tabBarActiveTintColor: '#21B6A8',
            tabBarStyle: {
              backgroundColor: '#0A0A0A',
              borderTopWidth: 1,
              borderTopColor: '#232533',
              height: 84,

            }
          }}
        >
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
                      size={35}
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
                      size={50}
                    />
                  )
                }}
                
            />
            <Tabs.Screen
                name="leaderboard"
                
                options={{
                  title: 'LeaderBoard',
                  headerShown: false,
                  tabBarIcon:({ color, focused }) => (
                    <TabIcon
                      icon={leaderboardIcon}
                      color={color}
                      name="LeaderBoard"
                      focused={focused}
                      size={30}
                    />
                  )
                }}
            />
            <Tabs.Screen
                name="profile"
                
                options={{
                  title: 'Profile',
                  headerShown: false,
                  tabBarIcon:({ color, focused }) => (
                    <TabIcon
                      icon={profileIcon}
                      color={color}
                      name="Profile"
                      focused={focused}
                      size={35}
                    />
                  )
                }}
                
            />
        </Tabs>
    </>
  )
}

export default TabsLayout