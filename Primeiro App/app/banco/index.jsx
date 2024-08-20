import React, { useState } from "react";
import { Text, View, StyleSheet, BackHandler, TextInput, Image } from 'react-native'
import Operacao from "./Components/Operacao";
import { TextInputMask } from 'react-native-masked-text';
import Imagem from "./Components/Imagem";

const Banco = function () {
    const [saldo, setSaldo] = useState(7320.92)
    const [inputOperacao, setInputOperacao] = useState('0')
    const [valorOperacao, setValorOperacao] = useState(0)

    const Sacar = function () {
        if (valorOperacao != 0) {
            multa = (saldo - valorOperacao) * 0.025
            setSaldo(saldo - valorOperacao - multa)
            setInputOperacao('0')
            setValorOperacao(0)
        }

    }
    const Depositar = function () {
        setSaldo(saldo + valorOperacao + valorOperacao * 0.01)
        setInputOperacao('0')
        setValorOperacao(0)
    }
    return (
        <View style={styles.container}>
            <Imagem
                src={'https://logosmarcas.net/wp-content/uploads/2020/11/Santander-Logo.png'}
                height={80}
                width={270} />
            <Text style={{ color: "#777777" }}>SALDO ATUAL NA CONTA</Text>
            <Text style={{ fontSize: 50, fontWeight: 'bold' }}>{saldo.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })}</Text>
            <Text style={{ textAlign: 'center', width: '80%' }}>Digite o valor abaixo e escolha uma das operações bancárias:</Text>
            <View style={styles.inputArea}>
                <Imagem
                    src={'https://endlessicons.com/wp-content/uploads/2012/11/money-icon-614x460.png'}
                    height={65}
                    width={50} />
                <TextInputMask
                    type="money"
                    style={styles.valorInput}
                    value={inputOperacao}
                    maxLength={12}
                    onChangeText={value => {
                        setInputOperacao(value);
                        value = value.replace('R$', '');
                        value = value.replace('.', '');
                        value = value.replace(',', '.');
                        setValorOperacao(Number(value))
                    }} />
            </View>

            <Operacao onPress={Sacar} texto={'Sacar'} />
            <Operacao onPress={Depositar} texto={'Depositar'} />
        </View>

    )
}

const styles = StyleSheet.create({
    container: {
        display: "flex",
        flexDirection: "column",
        justifyContent: 'space-around',
        alignItems: 'center',
        height: '75%'
    },

    inputArea: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        width: "85%"
    },
    valorInput: {
        backgroundColor: '#EFEFEF',
        width: '80%',
        height: 50,
        borderBottomColor: '#CFCFCF',
        borderBottomWidth: 2,
        borderRadius: 2
    }
})

export default Banco