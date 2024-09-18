import { View, StyleSheet, Text, FlatList } from "react-native"
import LinkTelaProjetos from "./link tela projetos"


const PROJETOS = [
    {id: 1, caminho: "/banco", nome: "Banco", imagem: "https://www.meioemensagem.com.br/wp-content/uploads/2018/03/Santander_NovaMarca_575.png", data: "02/08/2024"},
    {id: 2, caminho: "/calculadora", nome: "Calculadora", imagem: "https://www.lojaellos.com.br/img/5660/produtos/800/82bf414cbbb782b40a4fafaea3850b95.jpg", data: "02/08/2024"},
    {id: 3, caminho: "/calculadora simples", nome: "Calculadora Simples", imagem: "https://images.tcdn.com.br/img/img_prod/1140357/calculadora_de_mesa_bazze_12_digitos_b3562_3783_1_b1f668f74aa134c0a0003f945dda5df9.jpg", data: "02/08/2024"},
    {id: 4, caminho: "/pokemon", nome: "Pokemon", imagem: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/International_Pok%C3%A9mon_logo.svg/640px-International_Pok%C3%A9mon_logo.svg.png", data: "02/08/2024"},
    {id: 5, caminho: "/splashScreen", nome: "Splash Screen", imagem: "https://static-assets.bamgrid.com/product/disneyplus/images/share-default.8bf3102623e935e7bc126df36b956b98.jpg", data: "02/08/2024"},
    {id: 6, caminho: "/telaLogin", nome: "Tela de Login", imagem: "https://img.uxcel.com/tags/login-1698251086462-2x.jpg", data: "02/08/2024"},
    {id: 7, caminho: "/toDo", nome: "Lista de Tarefas", imagem: "https://grupos.moodle.ufsc.br/pluginfile.php/997967/mod_book/chapter/2616/tarefa.png", data: "02/08/2024"},
]
const styles = StyleSheet.create({
    container: {
        height: "100%",
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
    },
    lista: {
        maxHeight: "95%",
        width: "90%",
        gap: 10,


    }
})

export default TelaProjetos = () => {
    return (
        <View style={styles.container}>
            <FlatList
                data={PROJETOS}
                renderItem={({ item }) => <LinkTelaProjetos imagem={item.imagem} caminho={item.caminho} nome={item.nome} data={item.data} />}
                keyExtractor={item => item.id}
                style={styles.lista}
            />

        </View>
    )
}