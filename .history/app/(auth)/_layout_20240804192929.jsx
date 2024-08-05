import { signIn } from 'aws-amplify/auth';  // <== use this directly
import React from 'react';
import {View,Button} from 'react-native';

function App() {
  const handleSignIn = async () => {
    try {
      const result = await signIn({
        username,
        password
      })
    } catch (error) {
      console.log(error)
    }
  }
  return (
        <View style={styles.container}>
        	<Button onPress={handleSignIn} title="SignIn" />
        </View>
  );
}
/*
import { View, Text } froqm 'react-native'
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

export default withAuthenticator(AuthLayout);
*/