import React from "react-native";
import { View, Text, StyleSheet, FlatList } from "react-native";
const TAREFAS = [
    { id: 1, descricao: 'Acordar', feito: false },
    { id: 2, descricao: 'Tomar Café', feito: false },
    { id: 3, descricao: 'Comprar Pão', feito: true },
    { id: 4, descricao: 'Dar comida pro cachorro', feito: true },
    { id: 5, descricao: 'Sair', feito: true },
    { id: 6, descricao: 'Pegar Guarda-Chuva', feito: true },
    { id: 7, descricao: 'Pegar Casaco', feito: true },
    { id: 8, descricao: 'Comprar um carro', feito: true },
    { id: 9, descricao: 'Arrumar o telhado', feito: true },
    { id: 10, descricao: 'Plantar', feito: true },
    { id: 11, descricao: 'Almoçar', feito: true },
    { id: 12, descricao: 'Comer sobremesa', feito: true },
    { id: 13, descricao: 'Almoçar', feito: true },
    { id: 14, descricao: 'Ler', feito: true },
    { id: 15, descricao: 'Comprar arroz', feito: true },
    { id: 16, descricao: 'Comprar feijão', feito: true },
    { id: 17, descricao: 'Comprar soja', feito: true },
    { id: 18, descricao: 'Comprar trigo', feito: true },
    { id: 19, descricao: 'Arrumar a casa', feito: true },
    { id: 20, descricao: 'Consertar a pia', feito: true },
    { id: 21, descricao: 'Lavar a louça', feito: true },

]

const Item = ({ item }) => (
    <View style={styles.item}>
        {item.feito
            ? <Text style={styles.listItem}>{item.descricao}</Text>
            : <Text style={[styles.listItem, { textDecorationLine: 'line-through' }]}>{item.descricao}</Text>
        }
    </View>
);

const toDo = function () {
    return (
        <View style={styles.container}>
            <View style={styles.content}>
                <Text style={styles.title}>Lista de Tarefas</Text>
                <FlatList
                    data={TAREFAS}
                    renderItem={({ item }) => <Item item={item} />}
                    keyExtractor={item => item.id}
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
    listItem:{
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
    content:{
        width: '80%',
        marginTop: 50,
    }
});

export default toDo