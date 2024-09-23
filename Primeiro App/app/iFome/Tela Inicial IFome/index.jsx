import { Text, View } from "react-native";
import { AppContext } from "../../../scripts/AppContext";
import { useContext } from "react";
import ItemIfome from "./ItemIfome";

export default TelaInicialIfome = () => {
    const {carrinho, setCarrinho} = useContext(AppContext)

    return(
        <View>
        <Text>Olá</Text>
        <ItemIfome nome={"Coxinha"} imagem={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLigfyds3_5OSm0C4_VTYXDa5g6e32kV9h7g&s"} preco={"RS2,80"} local={"Kobrasol"}/>
        </View>

        
    )
}