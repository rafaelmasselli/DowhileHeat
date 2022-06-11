import React from 'react'
import { View } from 'react-native'
import { COLORS } from '../../themes'
import { Button } from '../Button'
import { useAuth } from '../../hooks/Auth'

import { styles } from './styles'

export function SignBox() {
  const { signIn, isSigningIn } = useAuth()

  return (
    <View style={styles.container}>
      <Button
        title="ENTRAR COM O GIT HUB"
        color={COLORS.BLACK_PRIMARY}
        backgroundColor={COLORS.YELLOW}
        icon="github"
        onPress={signIn}
        isLoading={isSigningIn}
      />
    </View>
  )
}
