import { Text, FlatList } from "react-native";
import { AppContext } from "../../../scripts/AppContext";
import { useContext, useEffect, useState } from "react";
import { View } from "react-native";

const ItemCarrinho = ({ item }) => {
    return (
        <View style={{ display: 'flex', flexDirection: 'row', justifyContent: "space-between", alignItems: 'center', width: 300, alignSelf: "center", borderBottomWidth: 1, borderBottomColor: "#afafaf", padding: 10 }}>
            <View>
                <Text>{item.nome}</Text>
                <Text style={{color: '#afafaf'}}>{item.local}</Text>
            </View>

            <Text style={{fontWeight: 'bold', fontSize: 16}}>R${item.preco.toFixed(2)}</Text>
        </View>
    )
}
export default TelaCarrinhoIfome = () => {
    const { carrinho, setCarrinho } = useContext(AppContext)
    const [total, setTotal] = useState(0)
    useEffect(() => {
        let totalCopia = total
        carrinho.forEach((element) => {totalCopia += element.preco})
        setTotal(totalCopia)
    },[carrinho])
    return (
        <View>
            <FlatList
                data={carrinho}
                // renderItem={({ item }) => <ItemIfome imagem={item.imagem} local={item.local} nome={item.nome} preco={item.preco} />}
                renderItem={({ item }) => <ItemCarrinho item={item} />}
                keyExtractor={item => item.id}
                style={{ maxHeight: 500 }}
            />
            <View style={{ alignSelf: 'center', marginTop: 100, alignItems: "center" }}>
                <Text>Total</Text>
                <Text style={{fontWeight: 'bold', fontSize: 20}}>RS{total.toFixed(2)}</Text>
            </View>

        </View>

    )
}