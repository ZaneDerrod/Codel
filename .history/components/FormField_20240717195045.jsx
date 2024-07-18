import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

const FormField = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>FormField</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    marginTop: 2
  },
  text: {
    color: 'white',
    fontFamily: 'Gill Sans, sans-serif'
  }
})

export default FormField