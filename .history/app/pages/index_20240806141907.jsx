import { StatusBar } from 'expo-status-bar';
import { Linking, TouchableOpacity, Image, ScrollView, View, StyleSheet, Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import CustomButton from '../../components/CustomButton';
import { Redirect, router } from 'expo-router';
import { signInWithRedirect } from "aws-amplify/auth"


const logoIcon = require('../../assets/icons/logo.png');

export default function HomeScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollViewContent}>
        <View style={styles.innerContainer}>
          <View style={styles.content}>
            <Image
              source={logoIcon}
              style={styles.logo}
              resizeMode="contain"
            />
            <Text style={styles.title}>
              Show off your skills with daily coding problems using{' '}
              <Text style={styles.highlight}>Codel</Text>
            </Text>
            <CustomButton 
            title="Continue With Email"
            style={styles.signUpButton} 
            onPress={() => router.push('/pages/(auth)/sign-in')}
            />
            <CustomButton 
            title="Sign In with Google"  
            style={styles.customButtonGoogleStyle}
            textStyle={styles.customButtonTextStyle}  
            onPress={() => signInWithRedirect({ provider: "Google" })}
            />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#231F20', // Custom primary color
    flex: 1,
  },
  scrollViewContent: {
    flexGrow: 1,
  },
  innerContainer: {
    width: '100%',
    alignItems: 'center',
    height: '100%',
    paddingHorizontal: 16,
  },
  content: {
    marginTop: 0,
    alignItems: 'center',
  },
  logo: {
    width: 500,
    height: 400,
    marginTop: 0,
    marginBottom: 0,
  },
  title: {
    fontSize: 24,
    color: '#FFFFFF',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  highlight: {
    color: '#21B6A8', // Example secondary color
  },
  loginQuestion :{
    marginTop: 20,
    color: 'white',
  },
  login:{
    color: '#21B6A8',
    
  },
  signUpButton:{
    width: 350
  },
  customButtonGoogleStyle: {
    marginTop: 20,
    backgroundColor: 'rgba(255, 0, 0, 0.1)', 
    paddingHorizontal: 112,     
    borderRadius: 20, 
             
  },
  customButtonTextStyle: {
    color: '#FF0000', 
  },
  
});