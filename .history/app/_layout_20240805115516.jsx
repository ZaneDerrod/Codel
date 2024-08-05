import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Slot, Stack } from 'expo-router';
import { useFonts } from 'expo-font';
import { useState, useEffect } from 'react';
import * as SplashScreen from 'expo-splash-screen';
import { ThemeProvider } from '@aws-amplify/ui-react-native';
import { getCurrentUser } from 'aws-amplify/auth';

import { Amplify } from 'aws-amplify';
import amplifyconfig from './../src/amplifyconfiguration.json';
Amplify.configure(amplifyconfig);
const theme = {
  tokens: {
    colors: {
      font: {
        primary: 'black'
      }
    }
  }
}

const RootLayout = () => {
  const [fontsLoaded, error] = useFonts({
    "Poppins-Black": require("../assets/fonts/Poppins-Black.ttf"),
    "Poppins-Bold": require("../assets/fonts/Poppins-Bold.ttf"),
    "Poppins-ExtraBold": require("../assets/fonts/Poppins-ExtraBold.ttf"),
    "Poppins-ExtraLight": require("../assets/fonts/Poppins-ExtraLight.ttf"),
    "Poppins-Light": require("../assets/fonts/Poppins-Light.ttf"),
    "Poppins-Medium": require("../assets/fonts/Poppins-Medium.ttf"),
    "Poppins-Regular": require("../assets/fonts/Poppins-Regular.ttf"),
    "Poppins-SemiBold": require("../assets/fonts/Poppins-SemiBold.ttf"),
    "Poppins-Thin": require("../assets/fonts/Poppins-Thin.ttf"),
  });
  
  useEffect(() => {
    if (error) throw error;
  
    if (fontsLoaded) {
      SplashScreen.hideAsync();
    }
  }, [fontsLoaded, error]);
  
  if (!fontsLoaded && !error) {
    return null;
  }

  const [user, setUser] = useState<import('aws-amplify/auth').AuthUser>('');
  const fetchUser = async () => {
    const res = await getCurrentUser();
    setUser(res);
  };
  useEffect(() =>{
    fetchUser();
  }, []);
  console.log(user);
  return (
    <ThemeProvider theme={theme}>
      <Stack>
        <Stack.Screen name="index" 
        options={{headerShown:false}} 
        />
        <Slot/>
      </Stack>
    </ThemeProvider>
  )
} 

export default RootLayout;