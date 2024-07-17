import { TouchableOpacity, Text } from 'react-native'
import React from 'react'

const CustomButton = () => {
  return (
    <TouchableOpacity className={'bg-secondary-100'}>
      <Text>Sign In</Text>
    </TouchableOpacity>
  )
}

export default CustomButton;    