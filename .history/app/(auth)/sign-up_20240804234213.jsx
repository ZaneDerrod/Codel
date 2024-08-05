import { Image, ScrollView, SafeAreaView, View, Text, StyleSheet } from 'react-native'
import React, {useState} from 'react'
import { Redirect, router } from 'expo-router';
import FormField from '../../components/FormField';
import CustomButton from '../../components/CustomButton';

const logoIcon = require('../../assets/icons/logo.png');

const SignUp = () => {

  const [form, setForm] = useState({
    email: '',
    password: '',
    phoneNumber: ''
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
            <Text style={styles.text}>Create an Account</Text>

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
            <FormField
              title="Phone Number"
              value={form.password}
              handleChangeText={(e) => setForm({ ...form,
                password: e
              })}
              style={styles.formField}
              keyboardType="password-address"
            />

            <CustomButton title="Sign Up" onPress={() => router.push('protected/(tabs)/home')}/>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: '#231F20', // Custom primary color
  },
  scrollViewContent: {
    flexGrow: 1,
  },
  logo: {
    width: 400,
    height: 300,
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
    alignItems: 'center'
  }
});
export default SignUp