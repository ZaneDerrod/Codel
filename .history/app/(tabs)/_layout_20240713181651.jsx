import React from 'react';
import { NavigationContainer } from 'react-navigation/native';
import { createBottomTabNavigator } from 'react-navigation/bottom-tabs';
import { createMaterialTopTabNavigator } from 'react-navigation/material-top-tabs';
import HomeScreen from '../home';
import ChallengeScreen from '../challenge';
import CommunityForumScreen from '../communityforum';
import LeaderboardScreen from '../leaderboard';
import ProfileScreen from '../profile';
import SettingsScreen from '../settings';

const TopTabs = createMaterialTopTabNavigator();
const BottomTabs = createBottomTabNavigator();

const TopTabsNavigator = () => (
  <TopTabs.Navigator>
    <TopTabs.Screen name="Home" component={HomeScreen} />
    <TopTabs.Screen name="Challenge" component={ChallengeScreen} />
    <TopTabs.Screen name="CommunityForum" component={CommunityForumScreen} />
    <TopTabs.Screen name="Leaderboard" component={LeaderboardScreen} />
  </TopTabs.Navigator>
);

const BottomTabsNavigator = () => (
  <BottomTabs.Navigator>
    <BottomTabs.Screen name="Tabs" component={TopTabsNavigator} options={{ title: 'Tabs' }} />
    <BottomTabs.Screen name="Profile" component={ProfileScreen} />
    <BottomTabs.Screen name="Settings" component={SettingsScreen} />
  </BottomTabs.Navigator>
);

export default function Layout() {
  return (
    <NavigationContainer>
      <BottomTabsNavigator />
    </NavigationContainer>
  );
}