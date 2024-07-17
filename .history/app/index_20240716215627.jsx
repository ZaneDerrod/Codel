import { StatusBar } from 'expo-status-bar';
import { Image, ScrollView, Text, View } from 'react-native';
import { Link } from 'expo-router';
import { styled } from 'nativewind';
import { SafeAreaView } from 'react-native-safe-area-context';
import CustomButton from'../components/CustomButton';

const logoIcon = require('../assets/icons/logo.png');

const StyledView = styled(View);
const StyledText = styled(Text);
const StyledLink = styled(Link);


export default function HomeScreen() {
  return (
    <SafeAreaView className="bg-primary h-full" >
      <ScrollView contentContainerStyle={{ flexGrow:1}} className="flex-1">
        <View className="w-full justify-center items-center h-full px-4">
          <View className="relative mt-0 items-center">
            <Image 
              source={logoIcon}
              className="w-[300px] h-[100px] mt-0 mb-0 " 
              resizeMode="contain"
                          
            />
            <Text className="text-3xl custom-teal font-bold text-center">
              Show off your skills with daily coding problems
            </Text>

            <CustomButton />

          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}