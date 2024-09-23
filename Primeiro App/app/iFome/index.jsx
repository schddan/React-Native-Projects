import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import TelaInicialIfome from './Tela Inicial IFome';
import TelaCarrinhoIfome from './Tela Carrinho IFome';

const Stack = createNativeStackNavigator();

function iFome() {
    return (
        <NavigationContainer independent={true}>
            <Stack.Navigator>
                <Stack.Screen name="iFome" component={TelaInicialIfome} />
                <Stack.Screen name="Carrinho" component={TelaCarrinhoIfome} />
            </Stack.Navigator>

        </NavigationContainer>
    );
}

export default iFome;