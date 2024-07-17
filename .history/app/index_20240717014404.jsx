import { StatusBar } from 'expo-status-bar';
import { Image, ScrollView, View } from 'react-native';
import { Link } from 'expo-router';
import { styled } from 'nativewind';
import { SafeAreaView } from 'react-native-safe-area-context';
import CustomButton from '../components/CustomButton';

const logoIcon = require('../assets/icons/logo.png');

const StyledSafeAreaView = styled(SafeAreaView);
const StyledScrollView = styled(ScrollView);
const StyledView = styled(View);
const StyledText = styled(Text);
const StyledLink = styled(Link);

export default function HomeScreen() {
  return (
    <StyledSafeAreaView className="bg-primary h-full">
      <StyledScrollView contentContainerStyle={{ flexGrow: 1 }} className="flex-1">
        <StyledView className="w-full items-center h-full px-4">
          <StyledView className="relative mt-0 items-center">
            <Image
              source={logoIcon}
              className="w-[150px] h-[50px] mt-0 mb-0"
              resizeMode="contain"
            />
            <StyledText className="text-3xl text-white font-bold text-center">
              Show off your skills with daily coding problems using{' '}
              <StyledText className="text-secondary-200">Codel</StyledText>
            </StyledText>
            <CustomButton />
          </StyledView>
        </StyledView>
      </StyledScrollView>
    </StyledSafeAreaView>
  );
}