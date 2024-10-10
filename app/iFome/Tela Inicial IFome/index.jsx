import { Text, View, StyleSheet, FlatList, Pressable, Image } from "react-native";
import { AppContext } from "../../../scripts/AppContext";
import { useContext, useEffect } from "react";
import ItemIfome from "./ItemIfome";

const styles = StyleSheet.create({
    lista: {
        gap: 10,
    }
})
const PRODUTOS = [
    {id: 1, nome: "Coxinha", local: "Kobrasol", preco: 3.80, imagem: "https://www.imagensempng.com.br/wp-content/uploads/2023/04/474.png", data: "02/08/2024"},
    {id: 2, nome: "BigMac", local: "Shopping", preco: 32.80, imagem: "https://cache-backend-mcd.mcdonaldscupones.com/media/image/product$kzXCTbnv/200/200/original?country=br", data: "02/08/2024"},
]
export default TelaInicialIfome = ({navigation}) => {
    const { carrinho, setCarrinho } = useContext(AppContext)
    return (
            <View style={styles.container}>
                <Pressable onPress={() => navigation.navigate('Carrinho')} style={{display: "flex", flexDirection: 'row', alignItems: 'center', alignSelf: 'flex-end', marginTop: 10, marginRight: 10}}>
                    <Image source={{uri: "https://cdn-icons-png.flaticon.com/512/6493/6493694.png"}} style={{width: 30, height: 30}}/>
                    <Text style={{color: "#ff0000"}}>{carrinho.length} itens</Text>
                </Pressable>
                <FlatList
                    data={PRODUTOS}
                    renderItem={({ item }) => <ItemIfome imagem={item.imagem} local={item.local} nome={item.nome} preco={item.preco} />}
                    keyExtractor={item => item.id}
                    style={styles.lista}
                />

            </View>


    )
}