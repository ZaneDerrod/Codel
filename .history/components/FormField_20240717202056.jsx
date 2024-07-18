import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

const FormField = (title, value, placeholder, handleChangeText, otherStyles, ...props) => {
  return (
    <View style={styles.otherStyles}>
      <Text style={styles.text}>FormField</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    marginTop: 2,
    alignContent: 'left'
  },
  text: {
    color: 'white',
    fontFamily: 'Gill Sans, sans-serif'
  }
})

export default FormField