import React from 'react'
import {
  useFonts,
  Roboto_400Regular,
  Roboto_700Bold
} from '@expo-google-fonts/roboto'
import { StatusBar } from 'expo-status-bar'
import AppLoading from 'expo-app-loading'
import { AuthProvider } from './src/hooks/Auth'

import { LogBox } from "react-native";

LogBox.ignoreLogs(["EventEmitter.removeListener"]);

import { Home } from './src/screens/home'

export default function App() {
  const [fontsLoading] = useFonts({ Roboto_400Regular, Roboto_700Bold })

  if (!fontsLoading) {
    return <AppLoading />
  }

  return (
    <AuthProvider>
      <StatusBar style="light" translucent backgroundColor="transparent" />
      <Home />
    </AuthProvider>
  )
}
