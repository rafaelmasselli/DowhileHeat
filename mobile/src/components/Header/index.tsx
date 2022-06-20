import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import { useAuth } from '../../hooks/Auth'

import { UserPhoto } from '../UserPhoto'

import LogoSvg from '../../assets/logo.svg'
import { styles } from './styles'

export function Header() {
  const { user, signOut } = useAuth()
  return (
    <View style={styles.container}>
      <LogoSvg />
      <View style={styles.LogoutButton}>
        <TouchableOpacity>
          {user && (
            <Text style={styles.logoutText} onPress={signOut}>
              Sair
            </Text>
          )}
        </TouchableOpacity>
        <UserPhoto imageUri={user?.avatar_url} />
      </View>
    </View>
  )
}
