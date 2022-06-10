import React from 'react'
import {
  useFonts,
  Roboto_400Regular,
  Roboto_700Bold
} from '@expo-google-fonts/roboto'
import { StatusBar } from 'expo-status-bar'
import AppLoading from 'expo-app-loading'

import { Home } from './src/screens/home'

export default function App() {
  const [fontsLoading] = useFonts({ Roboto_400Regular, Roboto_700Bold })

  if (!fontsLoading) {
    return <AppLoading />
  }

  return (
    <>
      <StatusBar style="light" />
      <Home />
    </>
  )
}
