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
     padding: 4,
     width: '100%',
     height: '16',
     border: 2,
  }
})

export default FormField