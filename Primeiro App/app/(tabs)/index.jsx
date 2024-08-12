import React from 'react'
import { Text, View, StyleSheet, BackHandler, Pressable, TextInput } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient'

const PrimeiraPagina = function () {
  const [number1, setNumber1] = React.useState('');
  const [number2, setNumber2] = React.useState('');
  const [operacao, setOperacao] = React.useState('');
  const [resultado, setResultado] = React.useState('');
  const [displayNumber, setDisplayNumber] = React.useState(''); 

  //Operações
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

  const calcular = function () {
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
    exibirValores()
  }

  const concatenarDigito = function (digito) {
    if (operacao == '') {
      if(digito != '.'){
        setNumber1(number1 + digito)
      } else if(!number1.includes('.')){
        setNumber1(number1 +digito)
      }
    } else {
      if(digito != '.'){
        setNumber2(number2 + digito)
      } else if(!number2.includes('.')){
        setNumber2(number2 +digito)
      }
    }
  }

  const exibirValores = function(){
    if(resultado != ''){
      setDisplayNumber(resultado)
    } else if(number2 != ''){
      setDisplayNumber(number2)
    } else {
      setDisplayNumber(number1)
    }
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Calculadora</Text>
      <View style={styles.display}>
        <Text>{displayNumber}</Text>
      </View>
      <View style={styles.inputGroup}>
        <TextInput style={styles.input} keyboardType='numeric' placeholder='Valor 1' value={number1} onChangeText={setNumber1} />
        <TextInput style={styles.input} keyboardType='numeric' placeholder='Valor 2' value={number2} onChangeText={setNumber2} />
      </View>
      <View style={styles.buttonGroup}>
        <Pressable style={styles.button} onPress={() => concatenarDigito('9')}><Text>9</Text></Pressable>
        <Pressable style={styles.button} onPress={() => concatenarDigito('8')}><Text>8</Text></Pressable>
        <Pressable style={styles.button} onPress={() => concatenarDigito('7')}><Text>7</Text></Pressable>
        <Pressable style={styles.button} onPress={() => setOperacao('soma')}><Text>+</Text></Pressable>
        <Pressable style={styles.button} onPress={() => concatenarDigito('6')}><Text>6</Text></Pressable>
        <Pressable style={styles.button} onPress={() => concatenarDigito('5')}><Text>5</Text></Pressable>
        <Pressable style={styles.button} onPress={() => concatenarDigito('4')}><Text>4</Text></Pressable>
        <Pressable style={styles.button} onPress={() => setOperacao('subtracao')}><Text>-</Text></Pressable>
        <Pressable style={styles.button} onPress={() => concatenarDigito('3')}><Text>3</Text></Pressable>
        <Pressable style={styles.button} onPress={() => concatenarDigito('2')}><Text>2</Text></Pressable>
        <Pressable style={styles.button} onPress={() => concatenarDigito('1')}><Text>1</Text></Pressable>
        <Pressable style={styles.button} onPress={() => setOperacao('multiplicacao')}><Text>*</Text></Pressable>
        <Pressable style={styles.button} onPress={calcular}><Text>=</Text></Pressable>
        <Pressable style={styles.button} onPress={() => concatenarDigito('0')}><Text>0</Text></Pressable>
        <Pressable style={styles.button} onPress={() => concatenarDigito('.')}><Text>.</Text></Pressable>
        <Pressable style={styles.button} onPress={() => setOperacao('divisao')}><Text>/</Text></Pressable>
      </View>

      <Text>{resultado}</Text>
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
  display:{
    backgroundColor: '#b5b5b5',
    margin: 10,
    height: 50,
    textAlign: 'center',
    borderRadius: 5,
    width: '60%',
    display: 'flex',
    justifyContent:'center',
    alignItems: 'flex-end',
    padding: 10,
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
    justifyContent: 'space-between',
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
