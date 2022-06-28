// importaciones de expo
import Constants from 'expo-constants'
import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFF',
    flex: 1,
    marginTop: Constants.statusBarHeight
  },
  buttonRegister: {
    borderRadius: 8,
    marginBottom: 3,
    width: '50%'

  },
  buttonLogin: {
    fontWeight: 'bold',
    fontStyle: 'italic',
    textAlign: 'center',
    borderRadius: 8
  },
  labelText: {
    textAlign: 'center',
    color: 'red'
  },
  form: {
    margin: 12,
    width: '85%',
    alignSelf: 'center'
  }

})
