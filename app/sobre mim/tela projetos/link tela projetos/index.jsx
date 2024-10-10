import { Link } from "expo-router"
import { View, Text, Image, StyleSheet, Pressable } from "react-native"

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
    data:{
        alignSelf: "flex-start",
        fontSize: 12,
        color: "#afafaf"
    }



})
export default LinkTelaProjetos = ({ caminho, nome, imagem, data }) => {
    return (
        <Link href={caminho} asChild>
            <Pressable style={styles.container}>
                <Image
                style={{width: "90%", height: "80%", resizeMode: 'contain', borderRadius: 5}}
                    source={{
                        uri:imagem,
                    }}
                />
                <Text style={styles.nome}>{nome}</Text>
                <Text  style={styles.data}>{data}</Text>
            </Pressable>

        </Link>
    )
}