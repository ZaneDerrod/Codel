import { getCurrentUser, AuthUser } from 'aws-amplify/auth';
import { useEffect, useState } from 'react';
import { Stack } from 'expo-router';

export default function PagesLayout(){
    const [user, setUser] = useState();
    const fetchUser = async () => {
        const res = await getCurrentUser();
        setUser(res);
    };

    useEffect(() => {
        fetchUser();
    }, []);
    console.log(user);
    
    return(
      <Stack
        screenOptions={{
            headerStyle: { backgroundColor: "#231F20" }
        }}
      >
        <Stack.Screen name="index" 
        options={{
            headerShown:false,
            statusBarColor: '#231F20',
        }} 
        />
      </Stack>
    )
}