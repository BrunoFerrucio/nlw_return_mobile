import 'react-native-gesture-handler'

import { Inter_400Regular, Inter_500Medium, useFonts } from '@expo-google-fonts/inter';
import AppLoading from 'expo-app-loading';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import { Widget } from "./src/components/Widget";

export default function App() {
  let [fontsLoaded] = useFonts({
    Inter_400Regular,
    Inter_500Medium,
  })

  if (!fontsLoaded) {
    return <AppLoading />
  }

  return (
    <View style={styles.container}>
      <StatusBar
        style="auto"
        backgroundColor='transparent'
        translucent
      />
      <Widget />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
