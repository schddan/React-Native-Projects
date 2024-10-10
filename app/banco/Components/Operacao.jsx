import { Text, Pressable, StyleSheet } from "react-native"

const Operacao = function ({texto, onPress}) {
    return (
        <Pressable style={styles.operacao} onPress={onPress}><Text style={{color: '#ffffff'}}>{texto}</Text></Pressable>
    )
}

const styles = StyleSheet.create({
    operacao: {
        backgroundColor: '#ec0000',
        width: '80%',
        height: 50,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 3,
    },
})


export default Operacao