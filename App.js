import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Operacion from './operacion'
import Listado from './listado'
import Inicio from './inicio'
import Nuevo from './nuevo';

//app principal
const Stack = createStackNavigator();

function App() {
  
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Inicio} />
        <Stack.Screen name="Listado" component={Listado} />
        <Stack.Screen name="Nuevo" component={Nuevo} />
        <Stack.Screen name="Operacion" component={Operacion} />
        
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;



