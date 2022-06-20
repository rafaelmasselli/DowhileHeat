import React, { useContext, useEffect } from 'react'
import styles from './styles.module.scss'
import { VscGithubInverted } from 'react-icons/vsc'
import { api } from '../../lib/api'
import { AuthContext } from '../../context/auth'



export function LoginBox() {

const {signInUrl} = useContext(AuthContext);
 
  return (
    <div className={styles.LoginBoxWrapper}>
      <strong> Entre e compartilhe sua mensagem </strong>
      <a href={signInUrl} className={styles.signInWithGithub}>
        <VscGithubInverted size="24" />
        Entra com github
      </a>
    </div>
  )
}
