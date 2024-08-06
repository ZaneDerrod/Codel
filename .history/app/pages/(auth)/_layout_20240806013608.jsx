import React from 'react';
import { withAuthenticator, useAuthenticator } from '@aws-amplify/ui-react-native';
import { Slot } from 'expo-router';
import { StyleSheet } from 'react-native';

function ProtectedLayout() {
  return <Slot />;
}

// Customize the Amplify Authenticator styles
const customTheme = StyleSheet.create({
  container: {
    backgroundColor: '#f5f5f5', // Background color for the Authenticator
    padding: 20,
  },
  sectionHeader: {
    backgroundColor: '#3b5998', // Header color
    color: '#fff', // Header text color
    padding: 10,
    fontSize: 18,
  },
  button: {
    backgroundColor: '#1e90ff', // Button color
    borderColor: '#1e90ff', // Button border color
  },
  buttonText: {
    color: '#fff', // Button text color
    fontSize: 16,
  },
  input: {
    borderBottomColor: '#1e90ff', // Input underline color
    color: '#000', // Input text color
  },
  inputLabel: {
    color: '#1e90ff', // Input label color
  },
  linkUnderlay: {
    color: '#1e90ff', // Link color
  },
});

export default withAuthenticator(ProtectedLayout, {
  signUpConfig: {
    hiddenDefaults: ['phone_number'], // Example of hiding phone number field
  },
  theme: {
    
    ...customTheme, // Apply custom styles
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