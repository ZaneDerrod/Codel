import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';
import { Link } from 'expo-router';
import { styled } from 'nativewind';
const StyledView = styled(View);
const StyledText = styled(Text);
const StyledLink = styled(Link);


export default function HomeScreen() {
  return (
    <StyledView className="flex-1 items-center justify-center bg-white">
        <StyledText className='text-3xl font-pblack'>Codel</StyledText>
        <StatusBar style = "auto"/>
        <StyledLink href="/(tabs)" style={{color:'blue'}}>Go to Home</StyledLink>
    </StyledView>
  );
}