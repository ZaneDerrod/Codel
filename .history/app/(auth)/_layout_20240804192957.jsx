import { withAuthenticator,useAuthenticator} from '@aws-amplify/ui-react-native';
import {Slot} from 'expo-router';

function ProtectedLayout(){
  return <Slot/>
}
export default withAuthenticator(ProtectedLayout);

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