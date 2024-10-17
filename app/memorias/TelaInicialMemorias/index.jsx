import { View, StyleSheet, Text, FlatList, Pressable, Image } from "react-native"
import Memoria from "./Memoria"
import AsyncStorage from '@react-native-async-storage/async-storage'; //npx expo install @react-native-async-storage/async-storage
import { useEffect, useState } from "react";

const styles = StyleSheet.create({
    container: {
        height: "100%",
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
    },
    lista: {
        maxHeight: "95%",
        width: "90%",
        gap: 10,
        flex: 1,

    }
})


export default TelaMemorias = ({ navigation }) => {
    const [memorias, setMemorias] = useState("")
    useEffect(() => {
        try {
            const jsonValue = AsyncStorage.getItem('memorias');
            setMemorias(jsonValue != null ? JSON.parse(jsonValue) : null);
        } catch (e) {
            console.log("Erro", e)
        }
    }, [])

    return (
        <View style={styles.container}>
            {memorias ?
                <FlatList
                    data={memorias}
                    renderItem={({ item }) => <Memoria imagem={item.imagem} caminho={item.caminho} nome={item.nome} data={item.data} lugar={item.lugar} detalhes={item.detalhes} />}
                    keyExtractor={item => item.id}
                    style={styles.lista}
                /> :
                <Text>Adicione memórias</Text>}

            <Pressable onPress={() => { navigation.navigate('Adicionar Memória'); console.log(memorias) }}>
                <Image source={{ uri: "https://cdn.icon-icons.com/icons2/1391/PNG/512/add_96266.png" }} style={{ width: 60, height: 60, margin: 10 }} />

            </Pressable>

        </View>
    )
}