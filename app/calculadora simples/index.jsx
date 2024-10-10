import React from 'react'
import { Text, View, StyleSheet, BackHandler, Button, TextInput } from 'react-native'


const PrimeiraPagina = function () {
  const [number1, setNumber1] = React.useState('');
  const [number2, setNumber2] = React.useState('');
  const [resultado, setResultado] = React.useState('');
  const somar = function () {
    if (number1 != '' && number2 != '')
      setResultado(parseFloat(number1) + parseFloat(number2))
    else
      setResultado('Digite os valores, por favor')
  }
  const subtrair = function () {
    if (number1 != '' && number2 != '')
      setResultado(number1 - number2)
    else
      setResultado('Digite os valores, por favor')
  }
  const dividir = function () {

    if (parseFloat(number2) === 0)
      setResultado('Não é possível fazer divisão por zero')
    else if (number1 != '' && number2 != '')
      setResultado(number1 / number2)
    else
      setResultado('Digite os valores, por favor')
  }
  const multiplicar = function () {
    if (number1 != '' && number2 != '')

      setResultado(number1 * number2)
    else
      setResultado('Digite os valores, por favor')
  }
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Calculadora</Text>
      <View style={styles.inputGroup}>
        <TextInput style={styles.input} keyboardType='numeric' placeholder='Valor 1' value={number1} onChangeText={setNumber1} />
        <TextInput style={styles.input}keyboardType='numeric' placeholder='Valor 2' value={number2} onChangeText={setNumber2} />
      </View>
      <View style={styles.buttonGroup}>
        <Button  onPress={somar} title='+' />
        <Button onPress={subtrair} title='-' />
        <Button onPress={dividir} title='/' />
        <Button onPress={multiplicar} title='*' />
      </View>
      <Text>{resultado}</Text>
    </View>
  )
};

const styles = StyleSheet.create({
  container:{
    display: 'flex',
    flexDirection:'column',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
    gap: 20,
  },
  inputGroup: {
    display: 'flex',
    flexDirection: 'row',
    alignItems:'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 40,
    textAlign: 'center',
  },
  buttonGroup:{
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '60%',
  },

  input:{
    backgroundColor: '#b5b5b5',
    margin: 10,
    height: 50,
    textAlign: 'center',
    borderRadius: 5,
    width: '30%',
  },


});

export default PrimeiraPagina;