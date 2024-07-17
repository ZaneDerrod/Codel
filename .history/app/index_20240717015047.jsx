import { StatusBar } from 'expo-status-bar';
import { Image, ScrollView, View, StyleSheet, Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import CustomButton from '../components/CustomButton';

const logoIcon = require('../assets/icons/logo.png');

export default function HomeScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollViewContent}>
        <View style={styles.innerContainer}>
          <View style={styles.content}>
            <Image
              source={logoIcon}
              style={styles.logo}
              resizeMode="contain"
            />
            <Text style={styles.title}>
              Show off your skills with daily coding problems using{' '}
              <Text style={styles.highlight}>Codel</Text>
            </Text>
            <CustomButton />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#231F20', // Custom primary color
    flex: 1,
  },
  scrollViewContent: {
    flexGrow: 1,
  },
  innerContainer: {
    width: '100%',
    alignItems: 'center',
    height: '100%',
    paddingHorizontal: 16,
  },
  content: {
    marginTop: 0,
    alignItems: 'center',
  },
  logo: {
    width: 150,
    height: 50,
    marginTop: 0,
    marginBottom: 0,
  },
  title: {
    fontSize: 24,
    color: '#FFFFFF',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  highlight: {
    color: '#FFD700', // Example secondary color
  },
});