import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

const FormField = ({title, value, placeholder, handleChangeText, otherStyles, ...props}) => {
  return (
    <View style={styles.otherStyles}>
      <Text style={styles.text}>{title}</Text>
      <View style={styles.input}>

      </View>
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
  },
  input: {
    padding: 16,
     width: '500',
     height: '100',
     borderWidth: 2,
     borderColor: "#FFFFFF",
     backgroundColor: '#f3f4f6',
  }
})

export default FormField