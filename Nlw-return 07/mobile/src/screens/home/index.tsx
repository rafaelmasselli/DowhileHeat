import React from 'react'
import { View, Text, KeyboardAvoidingView, Platform } from 'react-native'

import { Header } from '../../components/Header'
import { MessageList } from '../../components/MessageList'
import { SendMessageForm } from '../../components/SendMessageForm'
import { SignBox } from '../../components/SignBox'
import { useAuth } from '../../hooks/Auth'

import { styles } from './styles'

export function Home() {
  const { user } = useAuth()

  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
    >
      <View style={styles.container}>
        <Header />
        <MessageList />
        {user ? <SendMessageForm /> : <SignBox />}
      </View>
    </KeyboardAvoidingView>
  )
}
