import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import TelaInicialMemorias from './TelaInicialMemorias';
import TelaAdicionarMemoria from './TelaAdicionarMemoria';

const Stack = createNativeStackNavigator();

function Memorias() {
    return (
        <NavigationContainer independent={true}>
            <Stack.Navigator>
                <Stack.Screen name="Memórias" component={TelaInicialMemorias} />
                <Stack.Screen name="Adicionar Memória" component={TelaAdicionarMemoria} /> 
            </Stack.Navigator>

        </NavigationContainer>
    );
}

export default Memorias;