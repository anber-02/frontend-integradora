import * as yup from 'yup'

export const loginValidation = yup.object().shape({
  email: yup
    .string()
    .email()
    .required('El email es requerido'),
  password: yup
    .string()
    .min(5, 'Muy corto!!')
    .max(1000, 'Excelente')
    .required('La contraseña es requerida')
})
