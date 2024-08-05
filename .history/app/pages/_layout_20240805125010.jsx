import { Slot } from 'expo-router';
import { getCurrentUser, AuthUser } from 'aws-amplify/auth';

export default function PagesLayout(){
    const [user, setUser] = useState<AuthUser>('');
    const fetchUser = async () => {
        const res = await getCurrentUser();
        setUser(res);
    };
    return <Slot />
}