import { useState } from "react";
import { View, Text, TextInput, Pressable, Image, StyleSheet } from "react-native";
import * as ImagePicker from 'expo-image-picker'; // npm install expo-image-picker
import AsyncStorage from '@react-native-async-storage/async-storage';

function ImgPicker({ onImagePicked }) {
    const [image, setImage] = useState('');

    const pickImage = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.All,
            allowsEditing: true,
            aspect: [4, 3],
            quality: 1,
        });

        if (!result.canceled) {
            setImage(result.assets[0].uri);
            onImagePicked(result.assets[0].uri); 
        }
    };

    return (
        <View>
            <Pressable style={styles.addPhotoButton} onPress={pickImage}>
                <Image style={{ width: 20, height: 20 }} source={{ uri: 'https://i.pinimg.com/736x/ec/14/7c/ec147c4c53abfe86df2bc7e70c0181ff.jpg' }} />
                <Text>Adicionar Foto</Text>
            </Pressable>
            {image && <Image source={{ uri: image }} style={styles.image} />}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        display: "flex",
        flexDirection: 'column',
        justifyContent: 'space-between',
        height: '100%'
    },
    addPhotoButton: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        margin: 10
    },
    image: {
        width: "80%",
        height: 200,
        alignSelf: 'center'
    },
    input: {
        width: "80%",
        backgroundColor: "#EDEFF1",
        height: 40,
        padding: 10,
        margin: 5,
        alignSelf: 'center'
    },
    addMemoryButton: {
        alignSelf: 'center',
        margin: 10,
        backgroundColor: '#333333',
        width: 250,
        height: 40,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 5
    }
});

export default TelaAdicionarMemoria = ({navigation}) => {
    const [titulo, setTitulo] = useState("");
    const [ano, setAno] = useState("");
    const [lugar, setLugar] = useState("");
    const [detalhes, setDetalhes] = useState("");
    const [imageUri, setImageUri] = useState("");

    const loadMemorias = async () => {
        try {
            const jsonValue = await AsyncStorage.getItem('memorias');
            return jsonValue != null && Array.isArray(JSON.parse(jsonValue)) ? JSON.parse(jsonValue) : []; 
        } catch (e) {
            console.log("Erro ao carregar memórias:", e);
            return []; 
        }
    };

    const storeData = async (newMemory) => {
        try {
            const currentMemorias = await loadMemorias();
            const updatedMemorias = [...currentMemorias, newMemory];
            const jsonValue = JSON.stringify(updatedMemorias);
            await AsyncStorage.setItem('memorias', jsonValue);
            console.log("Memória adicionada com sucesso!");
        } catch (e) {
            console.log("Erro ao salvar memória:", e);
        }
    };

    const addMemoria = () => {
        const newMemory = {
            id: Date.now(), 
            titulo,
            ano,
            lugar,
            detalhes,
            imagem: imageUri, 
        };

        storeData(newMemory);
        navigation.navigate('Memórias')
    };

    return (
        <View style={styles.container}>
            <View>
                <TextInput style={styles.input} keyboardType='text' placeholder='Título' value={titulo} onChangeText={setTitulo} />
                <TextInput style={styles.input} keyboardType='text' placeholder='Ano que aconteceu' value={ano} onChangeText={setAno} />
                <TextInput style={styles.input} keyboardType='text' placeholder='Onde aconteceu?' value={lugar} onChangeText={setLugar} />
                <TextInput style={styles.input} keyboardType='text' placeholder='Forneça Detalhes' value={detalhes} onChangeText={setDetalhes} />

                <ImgPicker onImagePicked={setImageUri} />
            </View>

            <Pressable style={styles.addMemoryButton} onPress={addMemoria}>
                <Text style={{ color: "#ffffff" }}>Adicionar Memória</Text>
            </Pressable>
        </View>
    );
};
