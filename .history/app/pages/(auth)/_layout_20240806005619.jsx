
import { ThemeProvider, withAuthenticator,useAuthenticator} from '@aws-amplify/ui-react-native';
import {Slot} from 'expo-router';

const theme = {
  overrides: [
    {
      colorMode: 'dark',
      tokens: {
        colors: {
          font: {
            primary: '{colors.pink.100}',
            secondary: '{colors.pink.90}',
            tertiary: '{colors.pink.80}',
          },
          background: {
            primary: '{colors.purple.10}',
            secondary: '{colors.purple.20}',
            tertiary: '{colors.purple.40}',
          },
          border: {
            primary: '{colors.pink.60}',
            secondary: '{colors.pink.40}',
            tertiary: '{colors.pink.20}',
          },
        },
      },
    },
  ],
};

function ProtectedLayout(){
  return (
    // Note: color mode overrides are scoped to the ThemeProvider
    // if you use multiple providers
    <ThemeProvider theme={theme}>
      <Slot/>
    </ThemeProvider>
  );
}
export default withAuthenticator(ProtectedLayout);

/*
import { View, Text } from 'react-native'
import React from 'react'
import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { withAuthenticator,useAuthenticator} from '@aws-amplify/ui-react-native';

const AuthLayout = () => {
  return (
    <>
      <Stack>
        <Stack.Screen
          name="sign-in"
          options={{
            headerShown: false
          }}
        />
        <Stack.Screen
          name="sign-up"
          options={{
            headerShown: false
          }}
        />
      </Stack>

      <StatusBar backgroundColor="#161622" style='light'/>
    </>
  )
}

export default AuthLayout;
*/