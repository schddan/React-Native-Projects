import { useFonts } from 'expo-font';
import React from 'react'
import { Text, View, StyleSheet, BackHandler, Pressable, TextInput } from 'react-native'

const PrimeiraPagina = function () {
  const [number1, setNumber1] = React.useState('');
  const [operacao, setOperacao] = React.useState('');
  const [displayNumber, setDisplayNumber] = React.useState('');
  const [calculado, setCalculado] = React.useState(false)

  const [loaded, error] = useFonts({
    'SevenSeg': require('./../../assets/fonts/SevenSeg.ttf'),
  });

  //Operações
  const somar = function () {
    if (number1 != '')
      setDisplayNumber(parseFloat(number1) + parseFloat(displayNumber))

  }
  const subtrair = function () {
    if (number1 != '')
      setDisplayNumber(number1 - displayNumber)

  }
  const dividir = function () {
    if (parseFloat(displayNumber) === 0)
      setDisplayNumber('ERROR - DIV 0')
    else if (number1 != '')
      setDisplayNumber(number1 / displayNumber)

  }
  const multiplicar = function () {
    if (number1 != '')
      setDisplayNumber(number1 * displayNumber)

  }

  const calcular = function () {
    if (!calculado) {
      switch (operacao) {
        case 'soma':
          somar()
          break
        case 'subtracao':
          subtrair()
          break
        case 'multiplicacao':
          multiplicar()
          break
        case 'divisao':
          dividir()
          break
      }
    }
    setCalculado(true)
  }

  const concatenarDigito = function (digito) {
    if(calculado){
      setCalculado(false)
    }
    if (digito != '.') {
      setDisplayNumber(displayNumber + digito)
    } else if (!displayNumber.includes('.')) {
      setDisplayNumber(displayNumber + digito)
    }

  }

  const limpar = function () {
    setDisplayNumber('')
    setNumber1('')
    setCalculado(false)
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Calculadora</Text>
      <View style={styles.display}>
        <Text style={styles.text}>{displayNumber}</Text>
      </View>
      <View style={styles.buttonGroup}>
        <Pressable style={styles.button} onPress={() => concatenarDigito('9')}><Text>9</Text></Pressable>
        <Pressable style={styles.button} onPress={() => concatenarDigito('8')}><Text>8</Text></Pressable>
        <Pressable style={styles.button} onPress={() => concatenarDigito('7')}><Text>7</Text></Pressable>
        <Pressable style={styles.button} onPress={() => { setOperacao('soma'), setNumber1(displayNumber), setDisplayNumber('') }}><Text>+</Text></Pressable>
        <Pressable style={styles.button} onPress={() => concatenarDigito('6')}><Text>6</Text></Pressable>
        <Pressable style={styles.button} onPress={() => concatenarDigito('5')}><Text>5</Text></Pressable>
        <Pressable style={styles.button} onPress={() => concatenarDigito('4')}><Text>4</Text></Pressable>
        <Pressable style={styles.button} onPress={() => { setOperacao('subtracao'), setNumber1(displayNumber), setDisplayNumber('') }}><Text>-</Text></Pressable>
        <Pressable style={styles.button} onPress={() => concatenarDigito('3')}><Text>3</Text></Pressable>
        <Pressable style={styles.button} onPress={() => concatenarDigito('2')}><Text>2</Text></Pressable>
        <Pressable style={styles.button} onPress={() => concatenarDigito('1')}><Text>1</Text></Pressable>
        <Pressable style={styles.button} onPress={() => { setOperacao('multiplicacao'), setNumber1(displayNumber), setDisplayNumber('') }}><Text>*</Text></Pressable>
        <Pressable style={styles.button} onPress={() => calcular()}><Text>=</Text></Pressable>
        <Pressable style={styles.button} onPress={() => concatenarDigito('0')}><Text>0</Text></Pressable>
        <Pressable style={styles.button} onPress={() => concatenarDigito('.')}><Text>.</Text></Pressable>
        <Pressable style={styles.button} onPress={() => { setOperacao('divisao'), setNumber1(displayNumber), setDisplayNumber('') }}><Text>/</Text></Pressable>
        <Pressable style={styles.button} onPress={() => limpar()}><Text>C</Text></Pressable>
        <Pressable style={styles.button} onPress={() => setDisplayNumber('')}><Text>CE</Text></Pressable>

      </View>

    </View>
  )
};

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
    gap: 20,
  },
  display: {
    backgroundColor: '#b5b5b5',
    margin: 10,
    height: 50,
    textAlign: 'center',
    borderRadius: 5,
    width: '60%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'flex-end',
    padding: 10,
  },
  text:{
    fontFamily: 'SevenSeg',
    fontSize: 30
  },
  inputGroup: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 40,
    textAlign: 'center',
  },
  buttonGroup: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    width: '60%',
    flexWrap: 'wrap',
    rowGap: 15,
  },

  input: {
    backgroundColor: '#b5b5b5',
    margin: 10,
    height: 50,
    textAlign: 'center',
    borderRadius: 5,
    width: '30%',
  },

  button: {
    width: 50,
    height: 50,
    borderRadius: 50,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#aaaaff',
  }

});

export default PrimeiraPagina;
