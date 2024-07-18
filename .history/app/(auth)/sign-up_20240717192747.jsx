import { SafeAreaView, View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { ScrollView } from 'react-native-gesture-handler'
const SignUp = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        
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
  }  
});


export default SignUp