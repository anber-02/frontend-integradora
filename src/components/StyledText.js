import React from 'react'
import { Text, StyleSheet } from 'react-native'
// archivos creados
import theme from '../theme'

const styles = StyleSheet.create({
  text: {
    color: theme.colors.textPrimary,
    fontSize: theme.fontSizes.body,
    fontFamily: theme.fonts.main,
    fontWeight: theme.fontWeights.normal
  },
  colorsPrimary: {
    color: theme.colors.primary
  },
  colorsSecundary: {
    color: theme.colors.textSecondary
  },
  bold: {
    fontWeight: theme.fontWeights.bold
  },
  subheading: {
    fontSize: theme.fontSizes.subheading
  },
  aling: {
    textAlign: 'center'
  },
  white: {
    color: theme.colors.white
  }
})

// children es el texto
export default function StyledText ({ aling, children, color, fontSize, fontWeight, style, ...restOfProps }) {
  const textStyles = [
    styles.text, // estilo base
    color === 'primary' && styles.colorsPrimary,
    color === 'secundary' && styles.colorsSecundary,
    fontSize === 'subheading' && styles.subheading,
    fontWeight === 'bold' && styles.bold,
    aling === 'center' && styles.aling,
    style
  ]

  return (
    <Text style={textStyles} {...restOfProps}>
      {/* children es el texto por defecto con los estilos base */}
      {children}
    </Text>
  )
}
