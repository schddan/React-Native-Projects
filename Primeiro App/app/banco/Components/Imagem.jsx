import { Image } from "react-native"

const Imagem = function ({ src, height, width }) {
    return (
        <Image
            style={{ height: height, width: width }}
            source={{ uri: src }} />
    )
}


export default Imagem