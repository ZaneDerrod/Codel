import { Slot } from 'expo-router';
import { getCurrentUser, AuthUser } from 'aws-amplify/auth';
import { useEffect, useState } from 'react';

export default function PagesLayout(){
    const [user, setUser] = useState<AuthUser>('');
    const fetchUser = async () => {
        const res = await getCurrentUser();
        setUser(res);
    };

    useEffect(() => {
        fetchUser();
    }, []);
    console.log(user);
    return <Slot />
}