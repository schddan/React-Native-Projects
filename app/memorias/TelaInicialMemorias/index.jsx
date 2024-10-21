import { View, StyleSheet, Text, FlatList, Pressable, Image } from "react-native";
import Memoria from "./Memoria";
import AsyncStorage from '@react-native-async-storage/async-storage'; // npx expo install @react-native-async-storage/async-storage
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
});

export default TelaMemorias = ({ navigation }) => {
    const [memorias, setMemorias] = useState([]);

    const loadMemorias = async () => {
        try {
            const jsonValue = await AsyncStorage.getItem('memorias');
            if (jsonValue != null) {
                setMemorias(JSON.parse(jsonValue)); 
            } else {
                setMemorias([]); 
            }
        } catch (e) {
            console.log("Erro ao carregar memórias do AsyncStorage:", e);
        }
    };

    useEffect(() => {
        loadMemorias(); 
    }, []);
    console.log(memorias)
    return (
        <View style={styles.container}>
            {memorias.length > 0 ? (
                <FlatList
                    data={memorias}
                    renderItem={({ item }) => (
                        <Memoria
                            imagem={item.imagem}
                            nome={item.titulo}
                            data={item.ano}
                            lugar={item.lugar}
                            detalhes={item.detalhes}
                        />
                    )}
                    keyExtractor={item => item.id.toString()}
                    style={styles.lista}
                />
            ) : (
                <Text>Adicione memórias</Text>
            )}

            <Pressable onPress={() => { navigation.navigate('Adicionar Memória'); }}>
                <Image source={{ uri: "https://cdn.icon-icons.com/icons2/1391/PNG/512/add_96266.png" }} style={{ width: 60, height: 60, margin: 10 }} />
            </Pressable>
        </View>
    );
};
