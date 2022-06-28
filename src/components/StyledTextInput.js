import React from 'react'
import { StyleSheet, TextInput } from 'react-native'

const styles = StyleSheet.create({
  textInput: {
    borderRadius: 2,
    fontSize: 16,
    fontWeight: '500',
    marginVertical: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    color: '#000',
    paddingVertical: 5,
    paddingHorizontal: 10
    // alignSelf: 'center'
  },
  error: {
    borderColor: 'red'
  }
})

export default function StyledTextInput ({ style = {}, error, ...props }) {
  // console.log(...props)
  const inputStyle = [
    styles.textInput,
    style,
    error && styles.error
  ]
  return <TextInput style={inputStyle} {...props} />
}
