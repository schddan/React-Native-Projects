import React from 'react';
import { Button, View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import TelaInicial from './sobre mim/tela inicial';
import TelaProjetos from './sobre mim/tela projetos';
import TelaSobreMim from './sobre mim/tela sobre mim';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer independent={true}>
      <Stack.Navigator>
      <Stack.Screen name="Meu App" component={TelaInicial} />        
      <Stack.Screen name="Projetos" component={TelaProjetos} />
      <Stack.Screen name="Sobre Mim" component={TelaSobreMim} />
      </Stack.Navigator>

    </NavigationContainer>
  );
}

export default App;