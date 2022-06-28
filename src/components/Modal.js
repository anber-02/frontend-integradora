import React, { useState } from 'react'
import { Modal, Text, Pressable, View, Button, Image, TouchableWithoutFeedback } from 'react-native'

export default function ShowModal () {
  const [view, setView] = useState(false)
  return (
    <View>
      <Pressable onPress={() => setView(true)}>
        <Text>show</Text>
      </Pressable>
      <Button title='hola' />
      <Modal
        animationType='slide'
        onDismiss={() => console.log('Close')}
        onShow={() => console.log('show')}
        transparent
        visible={view}
      >
        <View
          style={{
            flex: 1,
            backgroundColor: 'rgba(1,1,1,.5)',
            justifyContent: 'center',
            alignItems: 'center'
          }}
        >
          <View
            style={{
              height: '80%',
              width: '90%',
              backgroundColor: '#FFF'
            }}
          >
            <View
              style={{
                height: 45,
                width: '100%',
                flexDirection: 'row',
                justifyContent: 'flex-end',
                alignItems: 'center'
              }}
            >
              <TouchableWithoutFeedback onPress={() => { setView(false) }}>
                <Image source={require('../../assets/shinobbu.png')} style={{ width: 50, height: 50 }} />
              </TouchableWithoutFeedback>
            </View>
          </View>
        </View>
      </Modal>
    </View>
  )
}
