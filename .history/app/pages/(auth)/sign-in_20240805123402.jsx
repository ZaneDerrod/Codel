import {useState } from 'react';
import { Image,ScrollView, StyleSheet, Text, View, TextInput } from 'react-native';
import { Redirect, router } from 'expo-router';
import CustomButton from '../../../../components/CustomButton';
import { signIn } from 'aws-amplify/auth'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

const logoIcon = require('../../../assets/icons/logo.png');

const SignIn = () => {
  
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const onSignInPressed = async () => {
    setError('');
    try{
        const { isSignedIn } = await signIn({
          username: email,
          password,
        });
        if(isSignedIn){
          router.push('/protected/(tabs)/home');
        }
    } catch (e){
      setError(e.message);
    }
  }
  return (
    <KeyboardAwareScrollView
      style = {styles.container}
    >
        <ScrollView contentContainerStyle={styles.scrollViewContent}>
          <Image
              source={logoIcon}
              style={styles.logo}
              resizeMode="contain"
          />
      <Text style = {styles.title}>Sign In</Text>
        <TextInput 
        value={email}
        onChangeText={setEmail}
        placeholder="Email" 
        style={styles.input}/>
        <TextInput 
        value={password}
        onChangeText={setPassword}
        placeholder="Password" 
        style={styles.input}
        secureTextEntry
        />
        <CustomButton title="Sign In" style={styles.signInButton} 
        onPress={onSignInPressed}
        //onPress={() => router.push('/home')}
        />
        {error && <Text style={{color: 'red'}}>{error}</Text>}
        </ScrollView>
    </KeyboardAwareScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    padding: 15,
    backgroundColor: '#231F20',
    flex: 1
  },
  scrollViewContent: {
    flexGrow: 1,
  },
  title: {
    fontFamily: 'InterSemi',
    fontSize: 24,
    color: 'white'
  },
  input: {
    borderWidth: 1,
    borderColor: 'white',
    padding: 20,
    marginVertical: 10,
    backgroundColor: '#141414',
    borderRadius: 10,
    width: 350,
    color: 'white'
  },
  logo: {
    justifyContent: 'center',
    width: 350,
    height: 300,
    marginTop: 0,
    marginBottom: 0,
  },
  signInButton: {
    marginTop: 10,
    width: 350
  }
})

export default SignIn;