import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity, ImageBackground } from 'react-native'
// importaciones de expo
import Constants from 'expo-constants'
import { StatusBar } from 'expo-status-bar'

// ARCHIVOS MIOS CREADOS
const img = require('../../assets/shinobbu.png')
// import Layout from "../../components/Layout";

const HomeScreen = ({ navigation }) => {
  return (
    <>
      <StatusBar backgroundColor='#7005fa' />
      <View style={styles.container}>
        <Text style={styles.textTitle}>Encuentra tu veterinaria mas cercana</Text>
        <View style={{ width: '95%', height: '70%', overflow: 'scroll' }}>
          <ImageBackground style={styles.image} source={img}>
            <Text style={{ color: 'white' }}>search your veterinari</Text>
          </ImageBackground>
        </View>
        <View>
          <TouchableOpacity
            style={styles.bottonIniciarSesion} onPress={() => {
            // navigation.navigate('App')
              navigation.navigate('IniciarSesion')
            }}
          >
            <Text style={styles.bottonText}>Iniciar Sesion</Text>
          </TouchableOpacity>
        </View>
        <View>
          <Text style={styles.textSmall}>Tener una cuenta te permite reportar perritos desaparecidos asi como poder ver reportes de otros usuarios</Text>
        </View>
      </View>
    </>
  )
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'space-evenly',
    flex: 1,
    padding: 10,
    backgroundColor: '#FFF',
    marginTop: Constants.statusBarHeight
  },
  image: {
    width: '100%',
    height: '100%',
    borderRadius: 8,
    borderColor: '#00f5f0',
    borderWidth: 3,
    resizeMode: 'contain'
  },
  bottonIniciarSesion: {
    borderRadius: 20,
    padding: 10,
    marginVertical: 20,
    alignSelf: 'center',
    backgroundColor: 'purple'
  },
  bottonText: {
    textAlign: 'center',
    color: '#FFF',
    fontWeight: 'bold'
  },
  textSmall: {
    fontSize: 11
  },
  textTitle: {
    textAlign: 'center',
    fontStyle: 'italic'
  }
})

export default HomeScreen
