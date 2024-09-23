import { View, Text, Image, StyleSheet, Pressable } from "react-native"
import { AppContext } from "../../../../scripts/AppContext";
import { useContext } from "react";

import { Link } from "expo-router"


const styles = StyleSheet.create({
    container:{
        display: 'flex',
        alignItems: 'center',
        backgroundColor: '#ffffff',
        height: 250, 
        borderRadius: 10,
        padding: 5,
        marginBottom: 10
    },
    nome:{
        alignSelf: "flex-start",
        fontSize: 15,
        fontWeight:"bold",
    },
    local:{
        alignSelf: "flex-start",
        fontSize: 12,
        color: "#afafaf"
    }



})
export default ItemIfome = ({ nome, imagem, preco, local }) => {
    return (
            <Pressable style={styles.container}>
                <Image
                style={{width: "90%", height: "80%", resizeMode: 'contain', borderRadius: 5}}
                    source={{
                        uri:imagem,
                    }}
                />
                <Text style={styles.nome}>{nome}</Text>
                <Text style={styles.local}>{local}</Text>
                <Text style={styles.local}>{preco}</Text>
            </Pressable>

    )
}