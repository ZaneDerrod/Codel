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
    borderWidth: 2,
    borderColor: '#f87171', // Red color
    width: '100%',
    padding: 16, // Padding of 4 in Tailwind translates to 16px
    borderRadius: 8, // Add a border radius for rounded corners
    backgroundColor: '#f3f4f6', // Light gray background color
    color: '#FFFFFF', // Text color (white)
  }
})

export default FormField