import { Slot } from 'expo-router';
import { getCurrentUser, AuthUser } from 'aws-amplify/auth';
import { useEffect, useState } from 'react';
import { Slot, Stack } from 'expo-router';

export default function PagesLayout(){
    /*
    const [user, setUser] = useState();
    const fetchUser = async () => {
        const res = await getCurrentUser();
        setUser(res);
    };

    useEffect(() => {
        fetchUser();
    }, []);
    console.log(user);
    */
    return(
      <Stack>
        <Stack.Screen name="index" 
        options={{headerShown:false}} 
        />
      </Stack>
    )
}