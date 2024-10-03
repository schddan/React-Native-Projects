import { useState, useRef } from "react"
import { View, StyleSheet, Text, Image, Button } from "react-native"
import { CameraView, useCameraPermissions } from "expo-camera" //npm install expo-camera

export default function CameraApp() {
    const [permissao, pedirPermisao] = useCameraPermissions()
    const [foto, setFoto] = useState(null)
    const cameraRef = useRef(null)
    const [ladoCamera, setLadoCamera] = useState('back')

    const tirarFoto = async () => {
        const foto_base64 = await cameraRef.current?.takePictureAsync({
            quality: 0.05,
            base64: true,
        })
        setFoto(foto_base64)

    }

    const trocarCamera = () => {
        setLadoCamera(ladoCamera == 'back' ? 'front' : 'back')
    }
    if (!permissao) {
        return (
            <View></View>
        )
    }
    if (!permissao.granted) {
        return (
            <View style={styles.container}>
                <Text style={styles.textoPermissao}>Você precisa permitir o uso da câmera</Text>
                <Button title="Pedir permissão" onPress={pedirPermisao} />


            </View>
        )
    }

    return (
        <View style={styles.container}>
            {foto?
                <View style={styles.container}>
                    <Image source={{uri: foto.uri}} style={styles.foto}></Image>
                    <Button title="Limpar Foto" onPress={() => {setFoto(null)}}/>
                </View>
                :
                <CameraView facing={ladoCamera} style={styles.camera} ref={cameraRef}>
                    <Button title="Tirar foto" onPress={tirarFoto} />
                    <Button title="Trocar Câmera" onPress={trocarCamera} />
                </CameraView>}
        </View>

    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center'
    },
    textoPermissao: {
        textAlign: 'center',

    },
    camera: {
        flex: 1
    },
    foto:{
        width: "100%",
        height: "100%"
    }
})