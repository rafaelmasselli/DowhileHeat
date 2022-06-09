import { useContext } from 'react'
import styles from './app.module.scss'
import { LoginBox } from './components/LoginBox'
import { MessageList } from './components/MessageList'
import { SendMessage } from './components/SendMenssageForm'
import { AuthContext } from './context/auth'

export function App() {
  const { user } = useContext(AuthContext)

  return (
    <main className={`${styles.contentWrapper} ${!!user ? styles.contentSigned: ''}` }>
      <MessageList />
      {!!user ? <SendMessage /> : <LoginBox />}
    </main>
  )
}
