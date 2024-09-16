import { View, StyleSheet, Text } from "react-native"
import LinkTelaProjetos from "./link tela projetos"

const styles = StyleSheet.create({
    container: {
        height: "100%",
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 10
    }
})

export default TelaProjetos = () => {
    return (
        <View style={styles.container}>
            <Text style={{fontSize: 40, fontWeight: "bold"}}>Projetos</Text>
            <LinkTelaProjetos caminho={"/banco"} nome={"Banco"} />
            <LinkTelaProjetos caminho={"/calculadora"} nome={"Calculadora"} />
            <LinkTelaProjetos caminho={"/calculadora simples"} nome={"Calculadora Simples"} />
            <LinkTelaProjetos caminho={"/pokemon"} nome={"Pokemón"} />
            <LinkTelaProjetos caminho={"/splashScreen"} nome={"Splash Screen"} />
            <LinkTelaProjetos caminho={"/telaLogin"} nome={"Tela de Login"} />
            <LinkTelaProjetos caminho={"/toDo"} nome={"To Do"} />
            <LinkTelaProjetos caminho={"/sobre mim"} nome={"Sobre Mim"} />

        </View>
    )
}