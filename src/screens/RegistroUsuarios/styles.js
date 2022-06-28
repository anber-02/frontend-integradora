import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
  form: {
    flex: 1,
    marginVertical: 5,
    paddingHorizontal: 20,
    width: '90%',
    alignSelf: 'center'
    // backgroundColor: '#0FF'
  },
  input: {
    width: '90%',
    backgroundColor: '#FFF',
    fontSize: 16,
    marginBottom: 15,
    marginTop: 5,
    borderWidth: 1,
    borderColor: '#10ac84',
    height: 35,
    color: '#000',
    padding: 5,
    borderRadius: 3
  },
  buttonContainer: {
    flex: 1,
    flexWrap: 'wrap',
    marginTop: 8,
    alignSelf: 'center'
  },
  buttonRegister: {
    flex: 1,
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 20
  },
  buttonText: {
    color: '#FFF',
    textAlign: 'center',
    fontSize: 20,
    fontWeight: 'bold'
  },
  labelText: {
    marginTop: 10
  }
})
