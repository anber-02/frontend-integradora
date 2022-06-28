import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
// import 'react-native-gesture-handler'
import Navegaciones from './src/navigations/BottomTab'

const App = () => {
  return (
    <NavigationContainer>
      <Navegaciones />
    </NavigationContainer>
  )
}

export default App
