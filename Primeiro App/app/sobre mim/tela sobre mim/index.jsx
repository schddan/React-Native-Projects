import React from "react";
import { Text, View } from "react-native";

export default TelaSobreMim = () => {
    return (
        <View style={{gap: 10, display: "flex", alignItems: 'center', justifyContent: 'center', height: "100%", width: "80%", alignSelf: 'center'}}>
            <Text style={{fontSize: 18, fontWeight: "bold"}}>Daniel Alexandre Schmitz</Text>
            <Text>Idade: 18 anos</Text>
            <Text style={{textAlign: 'center'}}>Olá, meu nome é Daniel, mas geralmente as pessoas me chamam de Dan. Gosto bastante de computadores, principalmente programação de baixo nível.</Text>
            <Text style={{textAlign: 'center'}}>Além disso, participo do torneio F1 in Schools pela equipe Interlagos. E, claro, acompanho a Fórmula 1.</Text>
        </View>

    )
}