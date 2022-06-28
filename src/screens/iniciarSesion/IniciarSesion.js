import React from 'react'
import { View, Text, Button, SafeAreaView, ScrollView } from 'react-native'
// importaciones de formik
import { Formik } from 'formik'
// Archivos creados"
import { styles } from './styles'
import { loginValidation } from '../../validations/login'
import FormikInputValue from '../../components/FormikInputValue'
import Separador from '../../components/Separador'

const initialValues = {
  email: '',
  password: ''
}
export default function IniciarSesion ({ navigation }) {
  return (
    // handleChange, handleSubmit son funciones que ya vienen en Formik
    // validate
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <Formik
          validationSchema={loginValidation}
          initialValues={initialValues}
          onSubmit={values => {
            console.log(values, 'inicar sesion')
            navigation.navigate('Home')
          }}
        >
          {({ handleChange, handleSubmit, values }) => {
            return (
              <View style={styles.form}>
                <FormikInputValue
                  placeholder1='Email'
                  name='email'
                />

                <FormikInputValue
                  placeholder1='Password'
                  name='password'
                  secureTextEntry
                />

                <Button
                  onPress={handleSubmit}
                  title='Log in'
                  style={styles.buttonLogin}
                />
                <Separador name='OR' />
                <Text style={styles.labelText}>¿Sin Cuenta?</Text>
                <Button
                  onPress={() => navigation.navigate('RegistroUsuarios')}
                  title='Registrarse'
                  color='#e4f'
                />

              </View>
            )
          }}
        </Formik>
      </ScrollView>
    </SafeAreaView>
  )
}
