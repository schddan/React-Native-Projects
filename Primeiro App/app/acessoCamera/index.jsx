import { useState, useRef } from "react"
import { View, StyleSheet, Text, Image, Button, Pressable, ImageBackground } from "react-native"
import { CameraView, useCameraPermissions } from "expo-camera" //npm install expo-camera
import * as MediaLibrary from "expo-media-library"//npm install expo-media-library
import * as Linking from "expo-linking"

export default function CameraApp() {
    const [permissao, pedirPermisao] = useCameraPermissions()
    const [foto, setFoto] = useState(null)
    const cameraRef = useRef(null)
    const [ladoCamera, setLadoCamera] = useState('back')

    const qrCodeHandle = (data) => {
        let value = data.data
        /* if (Linking.canOpenURL(value)) {
            console.log("sim")
        } */
        Linking.openURL(value).catch(() => {console.log("Não foi possível abrir")})
    }
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

    const salvarFoto = () => {
        MediaLibrary.saveToLibraryAsync(foto.uri)
        setFoto(null)
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
            {foto ?
                <ImageBackground source={{ uri: foto.uri }} resizeMode="cover" style={styles.foto}>
                    <View style={styles.postPicActions}>
                        <Pressable onPress={() => { setFoto(null) }}>
                            <Image style={{ height: 90, width: 90 }} source={{ uri: 'https://cdn-icons-png.flaticon.com/512/2067/2067754.png' }}></Image>
                        </Pressable>
                        <Pressable onPress={salvarFoto}>
                            <Image style={{ height: 50, width: 50 }} source={{ uri: 'https://static-00.iconduck.com/assets.00/save-icon-2048x2048-iovw4qr4.png' }}></Image>
                        </Pressable>
                    </View>
                </ImageBackground>

                :
                <CameraView facing={ladoCamera} style={styles.camera} ref={cameraRef} onBarcodeScanned={(data) => { qrCodeHandle(data) }} barcodeScannerSettings={{ barcodeTypes: ["qr"] }}>
                    <Pressable style={styles.shutterButton} onPress={tirarFoto}>
                        <Image style={{ height: 120, width: 120 }} source={{ uri: 'https://static.thenounproject.com/png/120101-200.png' }}></Image>
                    </Pressable>

                    <Pressable style={styles.rotateButton} onPress={trocarCamera}>
                        <Image style={{ height: 50, width: 50 }} source={{ uri: 'https://cdn-icons-png.flaticon.com/512/3594/3594866.png' }}></Image>
                    </Pressable>

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
    foto: {
        flex: 1,
    },
    shutterButton: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'flex-end',
        height: "95%",
        justifyContent: 'center',
        width: 120,
        alignSelf: 'center',
    },
    rotateButton: {
        top: -80,
        left: 20,
        width: 50,
    },
    postPicActions: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        left: -10,
        height: "180%"
    }
})