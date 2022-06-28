import React from 'react'
import { View, StyleSheet, StatusBar } from 'react-native'

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FF0',
    padding: 20,
    flex: 1,
    alignItems: 'center'
  }
})

const Layout = ({ children }) => {
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor='#f00' />
      {children}
    </View>
  )
}

export default Layout
