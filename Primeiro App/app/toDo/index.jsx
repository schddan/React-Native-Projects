import React, { Pressable } from "react-native";
import { useState } from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";

const TAREFAS = [
    { id: 1, descricao: 'Acordar', feito: false, date: '15/08/2024' },
    { id: 2, descricao: 'Tomar Café', feito: false, date: '15/08/2024' },
    { id: 3, descricao: 'Comprar Pão', feito: true, date: '15/08/2024' },
    { id: 4, descricao: 'Dar comida pro cachorro', feito: true, date: '15/08/2024' },
    { id: 5, descricao: 'Sair', feito: true, date: '15/08/2024' },
    { id: 6, descricao: 'Pegar Guarda-Chuva', feito: true, date: '15/08/2024' },
    { id: 7, descricao: 'Pegar Casaco', feito: true, date: '15/08/2024' },
    { id: 8, descricao: 'Comprar um carro', feito: true, date: '15/08/2024' },
    { id: 9, descricao: 'Arrumar o telhado', feito: true, date: '15/08/2024' },
    { id: 10, descricao: 'Plantar', feito: true, date: '15/08/2024' },
    { id: 11, descricao: 'Almoçar', feito: true, date: '15/08/2024' },
    { id: 12, descricao: 'Comer sobremesa', feito: true, date: '15/08/2024' },
    { id: 13, descricao: 'Almoçar', feito: true, date: '15/08/2024' },
    { id: 14, descricao: 'Ler', feito: true, date: '15/08/2024' },
    { id: 15, descricao: 'Comprar arroz', feito: true, date: '15/08/2024' },
    { id: 16, descricao: 'Comprar feijão', feito: true, date: '15/08/2024' },
    { id: 17, descricao: 'Comprar soja', feito: true, date: '15/08/2024' },

]


const toDo = function () {
    const [_tarefas, setTarefas] = useState(TAREFAS)

    const concluirTarefa = function({item}){
        TAREFAS[TAREFAS.indexOf(item)].feito = !TAREFAS[TAREFAS.indexOf(item)].feito
        setTarefas([...TAREFAS]) //Necessário pois sem isso o React ignora a alteração, já que o endereço de memória seria o mesmo. Isso faz uma cópia em outro endereço, basicamente
    }
    
    const Item = ({ item }) => (
        <Pressable style={styles.tarefa} onPress={() => concluirTarefa({item})}>
            <View style={styles.item} >
                {!item.feito
                    ? <Text style={styles.listItem}>{item.descricao}</Text>
                    : <Text style={[styles.listItem, { textDecorationLine: 'line-through' }]}>{item.descricao}</Text>
                }
            </View>
        </Pressable >
    );
    
    return (
        <View style={styles.container}>
            <View style={styles.content}>
                <Text style={styles.title}>Lista de Tarefas</Text>
                <FlatList
                    data={_tarefas}
                    renderItem={({ item }) => <Item item={item} />}
                    keyExtractor={item => item.id}
                    style={styles.lista}
                />
            </View>

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    listItem: {
        fontSize: 18
    },
    item: {
        paddingBottom: 10,
        paddingTop: 10,
        borderBottomColor: '#dddddd',
        borderBottomWidth: 1,

    },
    title: {
        fontSize: 35,
        fontWeight: 'bold',
        marginBottom: 20,
    },
    content: {
        width: '80%',
        marginTop: 50,
    },
    tarefa: {
        backgroundColor: '#ffffff',
    },

    lista: {
        height: '90%',
    }
});

export default toDo