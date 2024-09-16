import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

export default TelaInicial = ({navigation}) => {
    return(
        <View>
            <Text>Bem vindo ao meu app</Text>
            <Text>Aqui você tem acesso aos projetos que fiz utilizando React Native, além de informações sobre mim</Text>
            <Button title="Projetos" 
            onPress={() => navigation.navigate('Projetos')}
            />
            <Button title="Sobre Mim" 
            onPress={() => navigation.navigate('Sobre Mim')}/>
        </View>
    )
}