import React, { useState, useEffect } from 'react';
import { Slot, Stack } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { ThemeProvider } from '@aws-amplify/ui-react-native';
import { Amplify, Auth } from 'aws-amplify';
import { useFonts } from 'expo-font';
import amplifyconfig from './../src/amplifyconfiguration.json';

// Configure Amplify
Amplify.configure(amplifyconfig);

// Define the theme
const theme = {
  tokens: {
    colors: {
      font: {
        primary: 'black',
      },
    },
  },
};

const RootLayout = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [loading, setLoading] = useState(true);

  // Load custom fonts
  const [fontsLoaded, fontsError] = useFonts({
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
    const prepare = async () => {
      try {
        // Keep the splash screen visible while we fetch resources
        await SplashScreen.preventAutoHideAsync();

        // Attempt to get the current authenticated user
        await Auth.currentAuthenticatedUser();
        setIsAuthenticated(true);
      } catch {
        setIsAuthenticated(false);
      } finally {
        setLoading(false);
      }
    };

    prepare();
  }, []);

  useEffect(() => {
    if (!loading && fontsLoaded) {
      // Hide the splash screen once everything is loaded
      SplashScreen.hideAsync();
    }
  }, [loading, fontsLoaded]);

  if (loading || !fontsLoaded) {
    return null; // Alternatively, show a loading spinner or splash screen
  }

  return (
    <ThemeProvider theme={theme}>
      <Stack>
        {isAuthenticated ? (
          // Render authenticated screens
          <>
            <Stack.Screen name="protected/tabs/home" component={Home} />
            <Stack.Screen name="protected/tabs/communityforum" component={CommunityForum} />
            <Stack.Screen name="protected/tabs/leaderboard" component={Leaderboard} />
            <Stack.Screen name="protected/tabs/profile" component={Profile} />
            <Stack.Screen name="protected/search/[query]" component={SearchResults} />
          </>
        ) : (
          // Render non-authenticated screens
          <>
            <Stack.Screen name="auth/sign-in" component={SignIn} />
            <Stack.Screen name="auth/sign-up" component={SignUp} />
            <Stack.Screen name="auth/verification" component={Verification} />
          </>
        )}
        <Slot />
      </Stack>
    </ThemeProvider>
  );
};

export default RootLayout;