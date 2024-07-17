import { TouchableOpacity, Text } from 'react-native'
import React from 'react'
import { styled } from 'nativewind';


const StyledTouchableOpacity = styled(TouchableOpacity);
const StyledText = styled(Text);

const CustomButton = () => {
  return (
    <StyledTouchableOpacity className=" rounded-xl min-h-[62px] justify-center items-center">
      <StyledText className="text-white">Sign In</StyledText>
    </StyledTouchableOpacity>
  )
}

export default CustomButton;    