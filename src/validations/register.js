import * as yup from 'yup'

export const registerValidation = yup.object().shape({
  email: yup.string()
    .email()
    .required('El email es requerido'),
  password: yup.string()
    .min(5, 'Muy corto!!')
    .max(1000, 'Excelente')
    .required('La contraseña es requerida'),
  nombre: yup.string()
    .required('El nombre es requerido'),
  apellido_p: yup.string()
    .required('El Apellido es requerido'),
  apellido_m: yup.string()
    .required('El Apellido es requerido'),
  usuario: yup.string()
    .required('El Usuario es requerido'),
  contrasennia: yup.string()
    .required('El password es requerido'),
  num_telefono: yup.string()
    .required('El Num. telefono es requerido'),
  edad: yup.number()
    .required('Edad requrida')
})
