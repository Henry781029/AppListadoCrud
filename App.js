import { 
  View,
  StyleSheet,
  TextInput,
  Button, 
  Text } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

function MisPantallas(){
  return(
    <View style ={estilos.vistas}>
      <Text>
        Crear listas
      </Text>
    </View>
  )
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name='LISTADO'
          component={MisPantallas}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

const estilos = StyleSheet.create({
  vistas:{
    flex: 1,
    alignItems:"center",
    justifyContent:"center"
  }
})
