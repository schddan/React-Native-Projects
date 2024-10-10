import { View, Text, Image, StyleSheet, Pressable } from "react-native"
import { AppContext } from "../../../../scripts/AppContext";
import { useContext } from "react";


const styles = StyleSheet.create({
    container: {
        display: 'flex',
        alignItems: 'center',
        backgroundColor: '#ffffff',
        height: 290,
        borderRadius: 10,
        padding: 5,
        marginBottom: 10,
        width: "90%",
        alignSelf: 'center',
        marginTop: 10,
    },
    nome: {
        alignSelf: "flex-start",
        fontSize: 15,
        fontWeight: "bold",
    },
    local: {
        alignSelf: "flex-start",
        fontSize: 12,
        color: "#afafaf"
    }



})


export default ItemIfome = ({ nome, imagem, preco, local }) => {
    const {carrinho, setCarrinho} = useContext(AppContext)



    return (
        <View style={styles.container}>
            <Image
                style={{ width: "90%", height: 220, resizeMode: 'contain', borderRadius: 5 }}
                source={{
                    uri: imagem,
                }}
            />
            <View style={{ display: 'flex', flexDirection: "row", justifyContent: 'space-between', alignItems: "center", width: '90%' }}>
                <View>
                    <Text style={styles.nome}>{nome}</Text>
                    <Text style={styles.local}>{local}</Text>
                    <Text style={styles.local}>R${preco.toFixed(2)}</Text>
                </View>
                <Pressable onPress={() => {
                        var carrinhoCopia = [...carrinho]
                        carrinhoCopia.push({"nome": nome, "local": local, "preco": preco})
                        setCarrinho(carrinhoCopia)
}
                    } style={{backgroundColor: "#ffffff", padding: 5, borderRadius: 5, borderColor: "#ff0000", borderWidth: 1}}><Text style={{color: '#ff0000'}}>COMPRAR</Text></Pressable>
            </View>


        </View>

    )
}