import { ScrollView, SafeAreaView, View, Text, StyleSheet } from 'react-native'
import React from 'react'
import FormField from '../../components/FormField';

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
            <Text>Log In to Codel</Text>

            <FormField
              title="Email"
              value={form.email}
              handleChangeText={(e) => setForm({ ...form,
                email: e
              })}
              style={styles.formField}
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
  innerContainer: {
    width: '100%',
    alignItems: 'center',
    height: '100%',
    paddingHorizontal: 16,
  },
  content: {
    marginTop: 0,
    alignItems: 'center'
  },  
  formField: {
    marginTop: 7
  }
});
export default SignIn