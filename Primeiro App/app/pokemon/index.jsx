import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import { Picker } from '@react-native-picker/picker'; // Foi necessário instalar com npm install @react-native-picker/picker --save

const styles = StyleSheet.create({
    // Adicione estilos aqui se necessário
});

const Pokemon = () => {
    const [pokemon, setPokemon] = useState('');
    const [tipo, setTipo] = useState('');
    const [listaPokemons, setListaPokemons] = useState([]);
    const [listaTipos, setListaTipos] = useState([]);

    useEffect(() => {
        fetch("https://pokeapi.co/api/v2/type")
            .then(resposta => resposta.json())
            .then(dados => setListaTipos(dados.results))
            .catch(error => console.log("aconteceu um erro", error));
    }, []);

    useEffect(() => {
        if (tipo) {
            fetch(`https://pokeapi.co/api/v2/type/${tipo}`)
                .then(resposta => resposta.json())
                .then(dados => setListaPokemons(dados.pokemon))
                .catch(error => console.log("aconteceu um erro tipos", error));
        }
    }, [tipo]);

    return (
        <View>
            <Text>Selecione o tipo</Text>
            <Picker selectedValue={tipo} onValueChange={(item) => setTipo(item)}>
                {listaTipos.map((item) => (
                    <Picker.Item key={item.name} label={item.name} value={item.name} />
                ))}
            </Picker>

            {tipo && (
                <View>
                    <Text>Selecione o Pokemon</Text>
                    <Picker selectedValue={pokemon} onValueChange={(item) => setPokemon(item)}>
                        {listaPokemons.map((item) => (
                            <Picker.Item key={item.pokemon.name} label={item.pokemon.name} value={item.pokemon.name} />
                        ))}
                    </Picker>
                </View>

            )}

            {pokemon && <Text>Você selecionou {pokemon} do tipo {tipo}</Text>}
        </View>
    );
}

export default Pokemon;