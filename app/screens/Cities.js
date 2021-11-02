import React, { useState } from "react";
import { StyleSheet, Text, View, TouchableHighlight, FlatList } from "react-native";
import City from "../components/City";
import FormAddCity from "../components/FormAddCity";

export default function Cities() {

  const [ ciudades, setCiudades ] = useState([])

  const [ mostrarForm, guardarMostrarForm ] = useState(true)

  const showForm = () => {
    guardarMostrarForm(!mostrarForm)
  }

  return (
    <View>

      <View>
        <TouchableHighlight style={styles.btnShow}>
          <Text style={styles.textShow} onPress={()=>showForm() }>{ mostrarForm ? "Cancelar" : "Agregar ciudad" }</Text>
        </TouchableHighlight>
      </View>

      { mostrarForm ? 
      (<>
        <Text style={styles.titulo}>Agregar ciudad</Text>
        <FormAddCity ciudades={ciudades} setCiudades={setCiudades} guardarMostrarForm={guardarMostrarForm} />
      </>) : 
      (<>
        <Text style={styles.titulo}>{ciudades.length > 0 ? 'Listado de ciudades' : 'No hay ciudades, agrega una'}</Text>
        <FlatList
          data={ciudades}
          renderItem={ ({item})=> <City item={item} />}
            keyExtractor={ ciudad => ciudad.id}
        />
      </>)
      }
      
    </View>
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
