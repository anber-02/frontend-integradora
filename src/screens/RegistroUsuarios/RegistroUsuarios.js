import React from 'react'
import { SafeAreaView, ScrollView, Text, View, TouchableOpacity, Alert } from 'react-native'
import { Formik } from 'formik'
import { LinearGradient } from 'expo-linear-gradient'
// import exo
import Constants from 'expo-constants'
// Archivos creados
import createUser from '../../hooks/useCreateUsers'
import FormikInputValue from '../../components/FormikInputValue'
import { styles } from './styles'
import { registerValidation } from '../../validations/register'
import StyledText from '../../components/StyledText'

export default function RegistroUsuarios ({ navigation }) {
  const initialValues = {
    nombre: '',
    apellido_p: '',
    apellido_m: '',
    email: '',
    usuario: '',
    contrasennia: '',
    num_telefono: '',
    edad: ''
  }

  return (
    <SafeAreaView style={{ backgroundColor: '#FFF', marginTop: Constants.statusBarHeight, flex: 1 }}>
      <ScrollView>
        <StyledText color='primary' aling='center' style={{ fontSize: 35, marginTop: 5 }}>Registro de usuario</StyledText>
        <Formik
          initialValues={initialValues}
          validationSchema={registerValidation}
          onSubmit={values => {
            // console.log(values, 'on submit')
          }}
        >
          {({ handleChange, errors, touched, handleBlur, handleSubmit, values, dirty, isValid }) => {
            return (
              <View style={styles.form}>
                <FormikInputValue
                  placeholder1='Nombre(s)'
                  name='nombre'
                  error={touched.nombre && errors.nombre}
                  onblur={handleBlur}
                />
                <FormikInputValue
                  placeholder1='Primer Apellido'
                  name='apellido_p'
                />
                <FormikInputValue
                  placeholder1='Segundo Apellido'
                  name='apellido_m'
                />
                <FormikInputValue
                  placeholder1='Correo Electronico'
                  name='email'
                />
                <FormikInputValue
                  placeholder1='Usuario'
                  name='usuario'
                />
                <FormikInputValue
                  secureTextEntry
                  placeholder1='Contrasenia'
                  name='contrasennia'
                />
                <FormikInputValue
                  placeholder1='Num. Telefono'
                  name='num_telefono'
                />
                <FormikInputValue
                  keyboardType='numeric'
                  placeholder1='Edad'
                  name='edad'
                />
                <StyledText>Los campos marcados con * son obligatorios</StyledText>
                <TouchableOpacity
                  // disabled={!(isValid && dirty)}
                  onPress={() => {
                    createUser(values)
                    Alert.alert('Excelente', 'Registro realizado con exito!!!', [
                      { text: 'OK', onPress: () => navigation.navigate('HomeScreen') }
                    ])
                    handleSubmit()
                  }}
                  style={styles.buttonContainer}
                >
                  <LinearGradient
                    colors={['#59C173', '#a17fe0', '#5D26C1']}
                    style={styles.buttonRegister}
                  >
                    <Text style={styles.buttonText}>Registarse</Text>
                  </LinearGradient>
                </TouchableOpacity>
              </View>

            )
          }}
        </Formik>
      </ScrollView>
    </SafeAreaView>
  )
}
