import React, { useState } from "react";
import { Text, View, StyleSheet, BackHandler, TextInput, Image } from 'react-native'
import Operacao from "./Components/Operacao";

const Banco = function () {
    const [saldo, setSaldo] = useState(7320.92)
    return (
        <View style={styles.container}>
            <Image
                style={styles.logo}
                source={{ uri: 'https://logosmarcas.net/wp-content/uploads/2020/11/Santander-Logo.png' }} />
            <Text style={{color:"#777777"}}>SALDO ATUAL NA CONTA</Text>
            <Text style={{fontSize: 50, fontWeight: 'bold'}}>R${saldo}</Text>
            <Text style={{textAlign: 'center', width: '80%'}}>Digite o valor abaixo e escolha uma das operações bancárias:</Text>
            <View style={styles.inputArea}>
                <Image
                    style={{ width: 50, height: 65 }}
                    source={{ uri: 'https://endlessicons.com/wp-content/uploads/2012/11/money-icon-614x460.png' }} />
                <TextInput keyboardType="numeric" style={styles.valorInput} placeholder="RS" />
            </View>

            <Operacao texto={'Sacar'} />
            <Operacao texto={'Depositar'} />
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
    logo: {
        width: 270,
        height: 80,
    },
    inputArea:{
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
        borderRadius: 2,
    }
})

export default Banco