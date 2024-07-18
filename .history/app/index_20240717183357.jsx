import { StatusBar } from 'expo-status-bar';
import { Linking, TouchableOpacity, Image, ScrollView, View, StyleSheet, Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import CustomButton from '../components/CustomButton';

const logoIcon = require('../assets/icons/logo.png');

const handleLogin = () => {
  Linking.openURL("https://github.com/ZaneDerrod/Codel")
}
const handleSignIn = () => {
  Linking.openURL("https://github.com/ZaneDerrod/Codel")
}

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
            <CustomButton title="Sign In" onPress={handleSignIn}/>
            <CustomButton 
            title="Sign In with Google" 
            onPress={handleSignIn} 
            style={styles.customButtonStyle}
            textStyle={styles.customButtonTextStyle}  
            />
            
            <Text style={styles.loginQuestion}>Already have a account? </Text>
            <TouchableOpacity onPress={handleLogin}>
              <Text style={styles.login}>Login</Text>
            </TouchableOpacity>
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
    marginTop: 5,
    color: 'white',
  },
  login:{
    color: '#21B6A8',
    
  },
  customButtonStyle: {
    backgroundColor: 'rgba(255, 0, 0, 0.5)', 
    paddingHorizontal: 90,     
    borderRadius: 20,          
  },
  customButtonTextStyle: {
    color: '#FF0000', 
  },
  
});