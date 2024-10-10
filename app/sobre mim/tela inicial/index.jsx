import React from "react";
import { View, Text, StyleSheet, Button, Pressable } from "react-native";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const styles = StyleSheet.create({
    welcomeText:{
        fontWeight: "bold",
        fontSize: 21,
    },
    navButton: {
        backgroundColor: '#ffffff',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        height: 35,
        width: 150,
        borderRadius: 5
    },
    buttons:{
        display: 'flex',
        flexDirection: "column",
        alignItems: 'center',
        gap: 10

    },
    container:{
        width: "100%",
        display: "flex",
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: "100%",
        gap: 20
    }
})
export default TelaInicial = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <Text style={styles.welcomeText}>Bem vindo ao meu app</Text>
            <Text style={{textAlign: 'center'}}>Aqui você tem acesso aos projetos que fiz utilizando React Native, além de informações sobre mim</Text>
            <View style={styles.buttons}>
                <Pressable style={styles.navButton} onPress={() => navigation.navigate('Projetos')}><Text>Projetos</Text></Pressable>
                <Pressable style={styles.navButton} onPress={() => navigation.navigate('Sobre Mim')}><Text>Sobre mim</Text></Pressable>
            </View>

        </View>
    )
}