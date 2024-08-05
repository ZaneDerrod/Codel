import {useState } from 'react';
import { Image,ScrollView, StyleSheet, Text, View, TextInput } from 'react-native';
import { Redirect, router } from 'expo-router';
import CustomButton from '../../components/CustomButton';
const logoIcon = require('../../assets/icons/logo.png');
const SignIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const onSignInPressed = () => {
    console.warn('Sign In: ', email)
  }
  return (
    <View style = {styles.container}>
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
        style={styles.input}/>
        <CustomButton title="Sign In" style={styles.signInButton} onPress={() => router.push('/home')}/>
        </ScrollView>
    </View>
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
    width: 350
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
/*
import { Image, ScrollView, SafeAreaView, View, Text, StyleSheet } from 'react-native'
import React, {useState} from 'react'
import { Redirect, router } from 'expo-router';
import FormField from '../../components/FormField';
import CustomButton from '../../components/CustomButton';

const logoIcon = require('../../assets/icons/logo.png');

const SignIn = () => {

  const [form, setForm] = useState({
    email: '',
    password: ''
  })
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
            <Text style={styles.text}>Log In to Codel</Text>

            <FormField
              title="Email"
              value={form.email}
              handleChangeText={(e) => setForm({ ...form,
                email: e
              })}
              style={styles.formField}
              keyboardType="email-address"
            />
            <FormField
              title="Password"
              value={form.password}
              handleChangeText={(e) => setForm({ ...form,
                password: e
              })}
              style={styles.formField}
              keyboardType="password-address"
            />

            <CustomButton title="Log In" onPress={() => router.push('/home')}/>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: '#231F20', // Custom primary color
    flex: 1,
  },
  scrollViewContent: {
    flexGrow: 1,
  },
  logo: {
    width: 500,
    height: 400,
    marginTop: 0,
    marginBottom: 0,
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
  formField: {
    marginTop: 7,
  },
  text: {
    color: '#FFFFFF',
    fontFamily: "Poppins-Medium",
    fontSize: '24',
  }
});
export default SignIn
*/