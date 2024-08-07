import { StatusBar } from 'expo-status-bar';
import { Text, View} from 'react-native';
import { Link } from 'expo-router';

export default function HomeScreen() {
  return (
    <View className="flex-1 items-center justify-center bg-white">
        <Text>Codele</Text>
        <StatusBar style = "auto"/>
        <Link href="/profile" style={{color:'blue'}}>Go to Profile</Link>
    </View>
  );
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor: '#fff',
    alignItems: 'center',
    marginTop: 50,
  }
});
