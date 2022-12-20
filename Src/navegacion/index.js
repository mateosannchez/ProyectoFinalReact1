import React, {useState} from 'react'
import AuthNavegacion from './AuthNavegacion'
import BotonTavNav from './BotonTabNav'
import { NavigationContainer } from '@react-navigation/native'
import { useSelector } from 'react-redux'

export default () => {
  const userId = useSelector((state) => state.auth.userId)

  return(
    <NavigationContainer>
        {userId ? <BotonTavNav/> : <AuthNavegacion/>}
    </NavigationContainer>
  )
}
