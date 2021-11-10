import React, { useState } from "react";
import { StyleSheet, Text, View, TouchableHighlight } from "react-native";
import CitiesList from "../components/CitiesList"
import FormAddCity from "../components/FormAddCity"

export default function Cities() {
  
  const [ showForm, setShowForm ] = useState(false)

  const showForm1 = () => {
    setShowForm(!showForm)
  }

  return (
    <>
    <View>
      <TouchableHighlight style={styles.btnShow}>
        <Text style={styles.textShow} onPress={()=>showForm1() }>{ showForm ? "Cancelar" : "Agregar ciudad" }</Text>
      </TouchableHighlight>
    </View>

    { showForm ? 
      (<>
        <Text style={styles.titulo}>Agregar ciudad</Text>
        <FormAddCity setShowForm={setShowForm} />
      </>) : 
      (<>
        <Text style={styles.titulo}>Listado de ciudades</Text>
        <CitiesList />
      </>)
      }
      
    </>
  );
}

const styles = StyleSheet.create({
  titulo: {
    marginTop: 20 ,
    marginBottom: 20,
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center'
  },
  btnShow: {
    padding: 10,
    backgroundColor: 'green',
    marginVertical: 10
  },
  textShow: {
      fontSize: 18,
      color: '#FFF',
      fontWeight: 'bold',
      textAlign: 'center'
  }
});
