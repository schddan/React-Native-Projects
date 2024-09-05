import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import { Picker } from '@react-native-picker/picker'; //Foi necessário instalar com npm install @react-native-picker/picker --save


const styles = StyleSheet.create({

})

export default Pokemon = () => {
    const [pokemon, setPokemon] = useState('')
    const [listaPokemons, setListaPokemons] = useState([])

    useEffect(() => {
        fetch("https://pokeapi.co/api/v2/pokemon")
            .then(resposta => resposta.json())
            .then(dados => setListaPokemons(dados.results))
            .catch(console.log("aconteceu um erro"))
    }, [pokemon])

    return (
        <View>
            <Text>Selecione</Text>
            <Picker selectedValue={pokemon} onValueChange={(item) => setPokemon(item)}>
                {listaPokemons.map((item, index) => (
                    <Picker.Item key={index} label={item.name} value={item.name} />
                ))}
            </Picker>
            {pokemon ? <Text>Você selecionou {pokemon}</Text> : ''}
        </View>
    )
}