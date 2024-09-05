import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import { Picker } from '@react-native-picker/picker'; //Foi necessário instalar com npm install @react-native-picker/picker --save


const styles = StyleSheet.create({

})

export default Pokemon = () => {
    const [pokemon, setPokemon] = useState('')

    const listaPokemons = [
        { nome: 'Charizard', id: 1 },
        { nome: 'Blastoise', id: 2 },
        { nome: 'Venossaur', id: 3 }
    ]
    useEffect(()=>{
        console.log("Dentro")
    }, [pokemon])

    return (
        <View>
            <Text>Selecione</Text>
            <Picker selectedValue={pokemon} onValueChange={(item) => setPokemon(item)}>
                {listaPokemons.map((item, index) => (
                    <Picker.Item key={index} label={item.nome} value={item.nome} />
                ))}
            </Picker>
            {pokemon ? <Text>Você selecionou {pokemon}</Text> : ''}
        </View>
    )
}