import React from 'react';
import {  AmplifyTheme, withAuthenticator, useAuthenticator } from '@aws-amplify/ui-react-native';
import { Slot } from 'expo-router';
import { StyleSheet } from 'react-native';
import { Amplify } from 'aws-amplify';

import awsconfig from '../../../src/aws-exports';
Amplify.configure(awsconfig);

function ProtectedLayout() {
  return <Slot />;
}

export default withAuthenticator(ProtectedLayout)
/*
{
  signUpConfig: {
    hiddenDefaults: [], // Show all default fields, including phone number
  },
  formFields: {
    signUp: {
    },
    signIn: {
    },
  },
  theme: {
    ...AmplifyTheme,
  },
});
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