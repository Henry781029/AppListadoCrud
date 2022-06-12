import { 
View,
ScrollView,
SafeAreaView,
StyleSheet, 
TextInput,
Button,
Text } from 'react-native'
import React from 'react'

export default function CrearUsuarios() {
  return (
    <ScrollView>
        <View style={estilos.vistas}>
            <TextInput
                placeholder='Ingrese Nombre Usuario'
            />
        </View>
        <View>
        <TextInput
                placeholder='Ingrese Documento Identidad'
                keyboardType='numeric'
            />
        </View>
        <View>    
            <TextInput
                placeholder='Ingrese Numero Celular'
                keyboardType='numeric'
            />
        </View>
        <View>    
            <TextInput
                placeholder='Ingrese Email'
            />
        </View>
        <View>    
            <Button
                style={estilos.boton}
                title='Agregar Usuario'
            />
        </View>
    </ScrollView>
  )
}

const estilos = StyleSheet.create({
    vistas:{
        padding: 1,
        color:"blue",
        fontSize: 15,
        fontWeight: 5,
    },
    boton:{
        padding: 2,
        marginTop: 200,
        marginBottom: 200,
    }
  })