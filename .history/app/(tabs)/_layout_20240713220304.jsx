import { View, Text } from 'react-native'
import { Tabs, Redirect} from 'expo-router';
import HomeScreen from '../tabs/home';
import ChallengeScreen from '../tabs/challenge';
import CommunityForumScreen from '../tabs/communityforum';
import LeaderboardScreen from '../tabs/leaderboard';
import ProfileScreen from '../tabs/profile';
import SettingsScreen from '../tabs/settings';

const TabsLayout = () => {
  return (
    <>
        <Tabs>
        <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Challenge" component={ChallengeScreen} />
      <Tab.Screen name="Community Forum" component={CommunityForumScreen} />
      <Tab.Screen name="Leaderboard" component={LeaderboardScreen} />
      <Tab.Screen name="Profile" component={ProfileScreen} />
      <Tab.Screen name="Settings" component={SettingsScreen} />
        </Tabs>
    </>
  )
}

export default TabsLayout