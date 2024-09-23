import { Text } from "react-native";
import { AppContext } from "../../../scripts/AppContext";
import { useContext } from "react";

export default TelaCarrinhoIfome = () => {
    const {carrinho, setCarrinho} = useContext(AppContext)

    return(
        <Text>Olá</Text>
    )
}