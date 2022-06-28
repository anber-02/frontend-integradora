import React from 'react'
import { View, Text } from 'react-native'

export default function Separador ({ name }) {
  return (
    <View style={{ flexDirection: 'row', alignItems: 'center', marginVertical: 40 }}>
      <View style={{ flex: 1, height: 1, backgroundColor: '#ccc' }} />
      <View>
        <Text style={{ width: 50, textAlign: 'center', color: '#bbb', fontSize: 18 }}>{name}</Text>
      </View>
      <View style={{ flex: 1, height: 1, backgroundColor: '#ccc' }} />
    </View>
  )
}
