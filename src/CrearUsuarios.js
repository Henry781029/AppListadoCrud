import { 
View,
ScrollView,
SafeAreaView,
StyleSheet, 
TextInput,
Button,
Text } from 'react-native'
import React, {useState} from 'react'

export default function CrearUsuarios() {

    const [Estado, setEstado] = useState({
        nombre: " ",
        id: " ",
        celular: " ",
        email: " ",
    });

    const conservartexto =(nombre, value) =>{
        setEstado ({ ...Estado, [nombre] :value});
    };

  return (
    <ScrollView style={estilos.container}>
        <View style={estilos.vistas}>
            <TextInput
                placeholder='Ingrese Nombre Usuario'
                onChangeText={(value) => conservartexto ("nombre", value)}
            />
        </View>
        <View style={estilos.vistas}>
        <TextInput
                placeholder='Ingrese Documento Identidad'
                keyboardType='numeric'
                onChangeText={(value) => conservartexto ("id", value)}
            />
        </View>
        <View style={estilos.vistas}>    
            <TextInput
                placeholder='Ingrese Numero Celular'
                keyboardType='numeric'
                onChangeText={(value) => conservartexto ("celular", value)}
            />
        </View>
        <View style={estilos.vistas}>    
            <TextInput
                placeholder='Ingrese Email'
                onChangeText={(value) => conservartexto ("email", value)}
            />
        </View>
        <View>    
            <Button
                style={estilos.boton}
                title='Agregar Usuario'
                onPress={()=>console.log(Estado)}
            />
        </View>
    </ScrollView>
  )
}

const estilos = StyleSheet.create({
    vistas:{
        flex:1,
        padding: 0,
        color:"blue",
        fontSize: 15,
        fontWeight: 5,
        marginBottom: 15,
        borderBottomColor: "blue",
        borderBottomWidth: 1,

    },
    boton:{
        flex: 1,
        backgroundColor: "green",
        marginTop: 200,
    },
    container: {
        flex: 1,
        padding: 30,
    }
  })