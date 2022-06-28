import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
// archivos creados
import HomeScreen from '../screens/HomeScreen'
import IniciarSesion from '../screens/iniciarSesion/IniciarSesion'
import RegistroUsuarios from '../screens/RegistroUsuarios/RegistroUsuarios'
import Home from '../screens/Home/Home'
import ShowModal from '../components/Modal'

const Stack = createNativeStackNavigator()

export default function Navegaciones () {
  return (
    <>
      <Stack.Navigator>
        <Stack.Screen
          name='HomeScreen' component={HomeScreen}
          options={hideHeader}
        />
        {/* <Stack.Screen name="UserScreen" component={UserScreen} options={optionsUserScreen} /> */}
        <Stack.Screen name='IniciarSesion' component={IniciarSesion} options={hideHeader} />
        <Stack.Screen name='RegistroUsuarios' component={RegistroUsuarios} options={hideHeader} />
        <Stack.Screen name='Home' component={Home} />
        <Stack.Screen name='App' component={ShowModal} />

      </Stack.Navigator>
    </>
  )
}

const hideHeader = () => (
  {
    headerShown: false
  }
)
// const optionsHomeScreen = ({ navigation }) => (
//   {
//     title: 'PATITA',
//     headerStyle: {
//       backgroundColor: '#FFF'
//     },
//     headerTitleStyle: {
//       color: '#000',
//       fontSize: 5,
//       fontWeight: 'bold'
//     },
//     headerTitleAlign: 'center',
//     headerBlurEffect: 'dark',
//     headerShown: false
//   }
// )
