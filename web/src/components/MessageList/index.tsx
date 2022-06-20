import React, { useEffect, useState } from 'react'
import styles from './styles.module.scss'
import LogoImg from '../../assets/logo.svg'
import { api } from '../../lib/api'
import { io } from 'socket.io-client'

type Message = {
  id: string
  text: string
  user: {
    name: string
    avatar_url: string
  }
}

const messagesQueue: Message[] = []

const socket = io('http://localhost:3333')
socket.on('new_message', (newMessage: Message) => {
  messagesQueue.push(newMessage)
})

export function MessageList() {
  const [messages, setMessages] = useState<Message[]>([])

  useEffect(() => {
    setInterval(() => {
      if (messagesQueue.length > 0) {
        setMessages(prevState =>
          [messagesQueue[0], prevState[0], prevState[1]].filter(Boolean)
        )

        messagesQueue.shift()
      }
    }, 1000)
  }, [])

  useEffect(() => {
    api.get<Message[]>('messages/last3').then(response => {
      setMessages(response.data)
    })
  }, [])
  return (
    <div className={styles.messageListWrapper}>
      <img src={LogoImg} alt="Dowhile2021" />
      <ul className={styles.messageList}>
        {messages.map(res => {
          return (
            <li key={res.id} className={styles.message}>
              <p className={styles.messageContent}>{res.text}</p>
              <div className={styles.messageUser}>
                <div className={styles.UserImage}>
                  <img src={res.user.avatar_url} alt={res.user.name} />
                </div>
                <span>{res.user.name}</span>
              </div>
            </li>
          )
        })}
      </ul>
    </div>
  )
}
