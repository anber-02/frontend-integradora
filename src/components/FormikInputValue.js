import React from 'react'
import { StyleSheet } from 'react-native'
import { useField } from 'formik'

import StyledTextInput from '../components/StyledTextInput'
import StyledText from './StyledText'

export default function FormikInputValue ({ name, ...props }) {
  const [field, meta, helpers] = useField(name)
  const { placeholder1 } = props
  // console.log(meta, "vamos a ver la meta")
  // console.log(field, "vamos a ver la field")
  // console.log(helpers, "vamos a ver la helpers")
  return (
    <>
      <StyledText>{placeholder1}</StyledText>
      <StyledTextInput
        error={meta.error}
        value={field.value}
        onChangeText={value => helpers.setValue(value)}
        {...props}
      />
      {meta.error && <StyledText style={styles.error}>{meta.error}</StyledText>}
    </>
  )
}

const styles = StyleSheet.create({
  error: {
    color: 'red',
    fontSize: 12,
    marginBottom: 10,
    marginTop: -10
  }
})
