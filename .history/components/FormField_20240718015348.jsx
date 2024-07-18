import { View, Text, StyleSheet} from 'react-native'
import React from 'react'

const FormField = ({title, value, placeholder, handleChangeText, otherStyles, ...props}) => {
  return (
    <View style={styles.otherStyles}>
      <Text style={styles.text}>{title}</Text>
      <View style={styles.input} className="w-ful;l h-16">

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
    width: '100%',
    height: '100',
    borderWidth: 2,
    boarderRadius: 15,
    borderColor: "#FFFFFF",
    backgroundColor: '#f3f4f6',
    paddingRight: 345,
    paddingTop: 30,
  }
})

export default FormField