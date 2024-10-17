import { Link } from "expo-router"
import { View, Text, Image, StyleSheet, Pressable } from "react-native"

const styles = StyleSheet.create({
    container:{
        display: 'flex',
        alignItems: 'center',
        backgroundColor: '#ffffff',
        height: 320, 
        borderRadius: 10,
        padding: 5,
        marginBottom: 10
    },
    nome:{
        alignSelf: "flex-start",
        fontSize: 15,
        fontWeight:"bold",
    },
    data:{
        alignSelf: "flex-start",
        fontSize: 12,
        color: "#afafaf"
    },
    lugar:{
        alignSelf: 'flex-start',
        fontSize: 15,
        display: 'flex', 
        flexDirection: 'row'
    },
    lugarText:{
        alignSelf: 'flex-start',
        fontSize: 14,

    },
    detalhes:{
        alignSelf: 'flex-start'
    }



})
export default Memoria = ({ caminho, nome, imagem, data, lugar, detalhes}) => {
    return (
            <View style={styles.container}>
                <Image
                style={{width: "90%", height: "55%", resizeMode: 'contain', borderRadius: 5}}
                    source={{
                        uri:imagem,
                    }}
                />
                <Text style={styles.nome}>{nome}</Text>
                <Text  style={styles.data}>{data}</Text>
                <View style={styles.lugar}>
                    <Image source={{uri: "https://cdn-icons-png.flaticon.com/512/7606/7606169.png"}} style={{width: 20, height: 20}}/>
                    <Text style={styles.lugarText}>{lugar}</Text>
                </View>
                <Text style={styles.detalhes}>{detalhes}</Text>
            </View>

    )
}