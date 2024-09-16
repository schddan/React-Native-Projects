import { Link } from "expo-router"
import { View, Text } from "react-native"

export default LinkTelaProjetos = ({caminho, nome}) => {
    return (
        <Link href={caminho} asChild>
            <Text>{nome}</Text>
        </Link>
    )
}