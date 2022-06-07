import 'react-native-gesture-handler'
import { StatusBar } from 'expo-status-bar'
import { View } from 'react-native'
import AppLoading from 'expo-app-loading'

import {
  useFonts,
  Inter_400Regular,
  Inter_500Medium
} from '@expo-google-fonts/inter'

import Widget from './src/components/Widget'
import { theme } from './src/themes'

export default function App() {
  const [fontsLoader] = useFonts({
    Inter_400Regular,
    Inter_500Medium
  })

  if (!fontsLoader) {
    return <AppLoading />
  }

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: theme.colors.background
      }}
    >
      <StatusBar style="auto" backgroundColor="transparent" translucent />
      <Widget />
    </View>
  )
}
