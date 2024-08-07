import { StatusBar } from 'expo-status-bar';
import { ScrollView, Text, View } from 'react-native';
import { Link } from 'expo-router';
import { styled } from 'nativewind';
import { SafeAreaView } from 'react-native-safe-area-context';

const StyledView = styled(View);
const StyledText = styled(Text);
const StyledLink = styled(Link);


export default function HomeScreen() {
  return (
    <SafeAreaView className="bg-primary h-full" >
      <ScrollView contentContainerStyle={{ height:'100%'}}>
        <View className="w-full justify-center items-center h-full px-4">
          <View className="relative mt-5">
            <Text className="text-3xl text-white font-bold text-center">
             Codel
            </Text>
            <Text>
              Show off your skills with daily coding problems
            </Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}