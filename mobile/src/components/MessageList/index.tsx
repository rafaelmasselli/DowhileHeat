import React, { useState, useEffect } from 'react'
import { ScrollView } from 'react-native'
import { io } from 'socket.io-client'

import { styles } from './styles'

import { MESSAGES_EXAMPLE } from '../../utils'
import { Message, MessageProps } from '../Message'
import { api } from '../../services/api'

let MessagesQueue: MessageProps[] = MESSAGES_EXAMPLE

const socket = io(String(api.defaults.baseURL))
socket.on('new_message', newMessage => {
  MessagesQueue.push(newMessage)
})

export function MessageList() {
  const [currentMessages, setCurrentMessages] = useState<MessageProps[]>([])

  useEffect(() => {
    async function fetchMessages() {
      const messagesResponse = await api.get<MessageProps[]>('/messages/last3')
      setCurrentMessages(messagesResponse.data)
    }

    fetchMessages()
  }, [])

  useEffect(() => {
    const timer = setInterval(() => {
      if (MessagesQueue.length > 0) {
        setCurrentMessages(prevState => [
          MessagesQueue[0],
          prevState[0],
          prevState[1]
        ])
        MessagesQueue.shift()
      }
    }, 3000)

    return () => clearInterval(timer)
  }, [])

  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={styles.content}
      keyboardShouldPersistTaps="never"
    >
      {currentMessages.map(message => (
        <Message key={message.id} data={message} />
      ))}
    </ScrollView>
  )
}
