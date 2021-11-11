import React, { useState } from "react"
import { Text, View, TextInput, TouchableHighlight, StyleSheet } from "react-native"
import firebase from "../utils/firebase"

export default function FormAddCity({setShowForm}) {

    const [cities, setCities] = useState({
        nameCity: ''
    })

    const handleChangeText = (name, value) => {
        setCities({...cities, [name]: value})
    }

    const saveNewCity = async () => {
        if (cities.nameCity === ''){
            alert('Completa el campo')
        } else {
            try {
                await firebase.db.collection('cities').add({
                    nameCity: cities.nameCity
                })
                setShowForm(false)
            } catch (error) {
                console.log(error)
            }
            
        }
    }

    return (
        <View style={styles.form} >

            <View>
                <Text style={styles.label}>Ciudad:</Text>
                <TextInput 
                    style={styles.input}
                    onChangeText={text=>handleChangeText('nameCity', text)}  
                />
            </View>

            <View>
                <TouchableHighlight style={styles.btnSave} onPress={()=> saveNewCity()}>
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