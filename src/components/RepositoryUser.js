import React from 'react'
import { View, StyleSheet, Image } from 'react-native'
import StyledText from './StyledText'
const img = require('../../assets/shinobbu.png')
// idperro             | int          | NO   | PRI | NULL    | auto_increment |
// | color               | varchar(45)  | NO   |     | NULL    |                |
// | tamannio            | varchar(45)  | NO   |     | NULL    |                |
// | raza                | varchar(45)  | YES  |     | NULL    |                |
// | senias_particulares | varchar(200) | NO   |     | NULL    |                |
// | usuarios_idusuarios

export default function RespositoryUser (props) {
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={img} />
      <StyledText color='primary' fontWeight='bold'>{props.color}</StyledText>
      <StyledText fontWeight='bold'>{props.tamannio}</StyledText>
      <StyledText>{props.raza}</StyledText>
      <StyledText>{props.senias_particulares}</StyledText>
      <StyledText>{props.apellido_m}</StyledText>
      <StyledText>{props.email}</StyledText>
      <StyledText>{props.num_telefono}</StyledText>
      <StyledText>{props.edad}</StyledText>
      <StyledText>{props.usuario}</StyledText>
      <StyledText>{props.idusuario}</StyledText>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    paddingBottom: 5,
    paddingTop: 5
  },
  image: {
    width: 48,
    height: 48,
    borderRadius: 4
  }
})
