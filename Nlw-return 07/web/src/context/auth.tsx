import { createContext, ReactNode, useEffect, useState } from 'react'
import { api } from '../lib/api'

type User = {
  id: string
  name: string
  login: string
  avatar_url: string
}

type AuthContextData = {
  user: User | null
  signInUrl: string
  signOut: () => void;
}

export const AuthContext = createContext({} as AuthContextData)

type AuthProvider = {
  children: ReactNode
}
type AuthResponse = {
  token: string
  user: {
    id: string
    name: string
    avatar_url: string
    login: string
  }
}
export function AuthProvider(props: AuthProvider) {
  const [user, setUser] = useState<User | null>(null)

  const signInUrl = `https://github.com/login/oauth/authorize?scope_user&client_id=a94db1a83f03803ee22c`

  async function signIn(GithubCode: string) {
    const response = await api.post<AuthResponse>('authenticate', {
      code: GithubCode
    })

    const { token, user } = response.data

    localStorage.setItem('@dowhile:token', token)

    api.defaults.headers.common.authorization = `Bearer ${token}`

    setUser(user)
  }

  function signOut() {
    setUser(null)
    localStorage.removeItem('@dowhile:token')
  }

  useEffect(() => {
    const token = localStorage.getItem('@dowhile:token')

    if (token) {
      api.defaults.headers.common.authorization = `Bearer ${token}`
      api.get<User>('/profile').then(res => {
        setUser(res.data)
      })
    }
  }, [])

  useEffect(() => {
    const url = window.location.href
    const hastGithubCode = url.includes('?code=')
    if (hastGithubCode) {
      const [urlWithout, GitHubCode] = url.split('?code=')

      window.history.pushState({}, ``, urlWithout)

      signIn(GitHubCode)
    }
  }, [])

  return (
    <AuthContext.Provider value={{ signInUrl, user, signOut }}>
      {props.children}
    </AuthContext.Provider>
  )
}
