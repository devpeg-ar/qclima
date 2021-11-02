import React, { useState } from "react"
import { Text, View, TextInput, TouchableHighlight, StyleSheet, Alert } from "react-native"
import shortid from "shortid"

export default function FormAddCity({ciudades, setCiudades, guardarMostrarForm}) {

    const [ city, setCity ] = useState('')

    const addCity = () => {
        if (city.trim()==='') {
            mostrarAlerta()
            return
        }
        const ciudad = { city }
        ciudad.id = shortid.generate()
        const ciudadNueva = [...ciudades, ciudad]
        setCiudades(ciudadNueva)
        console.log(ciudad)
        guardarMostrarForm()
    }

    const mostrarAlerta = () => {
        Alert.alert(
            'Error',
            'Todos los campos son obligatorios',
            [{
                text: "Aceptar"
            }]
        )
    }

    return (
        <View style={styles.form} >

            <View>
                <Text style={styles.label}>Ciudad:</Text>
                <TextInput 
                    style={styles.input} 
                    onChangeText={text=>setCity(text)} 
                />
            </View>

            <View>
                <TouchableHighlight style={styles.btnSave} onPress={()=> addCity() }>
                    <Text style={styles.textSave}>Guardar</Text>
                </TouchableHighlight>
            </View>

        </View>
    )
}

const styles = StyleSheet.create({
    form: {
        paddingHorizontal: 20,
        paddingVertical: 10,
        marginHorizontal: '2.5%'
    },
    label: {
        fontWeight: 'bold',
        fontSize: 18,
        marginTop: 20
    },
    input: {
        marginTop: 10,
        height: 50,
        borderWidth: 2,
        borderStyle: 'solid',
    },
    btnSave: {
        padding: 10,
        backgroundColor: 'green',
        marginVertical: 10
    },
    textSave: {
        fontSize: 18,
        color: '#FFF',
        fontWeight: 'bold',
        textAlign: 'center'
    }
})