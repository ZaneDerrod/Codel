import { Image, ScrollView, SafeAreaView, View, Text, StyleSheet } from 'react-native'
import React, {useState} from 'react'
import FormField from '../../components/FormField';

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
    alignItems: 'left',
    height: '100%',
    paddingHorizontal: 16,
  },
  content: {
    marginTop: 0,
    alignItems: 'left'
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