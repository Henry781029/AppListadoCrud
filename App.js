import { 
  View,
  StyleSheet,
  TextInput,
  Button, 
  Text } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ListadoUsusarios from './src/ListadoUsusarios';
import CrearUsuarios from './src/CrearUsuarios';
import DetalleUsuario from './src/DetalleUsuario';

const Stack = createNativeStackNavigator();

function MisPantallas(){
  return(
    <Stack.Navigator>
        <Stack.Screen
          name='CREAR USUARIO'
          component={CrearUsuarios}
        />
        <Stack.Screen
          name='LISTADO USUARIOS'
          component={ListadoUsusarios}
        />
        <Stack.Screen
          name='EDITAR USUARIOS'
          component={DetalleUsuario}
        />
      </Stack.Navigator>
  )
}

export default function App() {
  return (
    <NavigationContainer>
      <MisPantallas
      />
    </NavigationContainer>
  )
}


