import { useState, useEffect } from 'react';
import { useRouter } from 'expo-router';
import { Auth } from 'aws-amplify';

const RootLayout = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    const checkAuth = async () => {
      try {
        await Auth.currentAuthenticatedUser();
        setIsAuthenticated(true);
      } catch {
        setIsAuthenticated(false);
      } finally {
        setLoading(false);
      }
    };
    checkAuth();
  }, []);

  useEffect(() => {
    if (!loading) {
      if (isAuthenticated) {
        router.push('/protected/tabs/home');
      } else {
        router.push('/auth/sign-in');
      }
    }
  }, [loading, isAuthenticated, router]);

  if (loading) return null; // Or a loading spinner

  return null; // This component doesn't need to render anything itself
};

export default RootLayout;