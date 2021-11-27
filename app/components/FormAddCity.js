import React, { useState } from "react";
import {
  Text,
  View,
  TextInput,
  TouchableHighlight,
  StyleSheet,
  Alert,
} from "react-native";

import { SearchButton } from "../components/Buttons";

export default function FormAddCity({ search, saveSearch, saveQuery, result }) {
  const { cod } = result;
  const { city } = search;

  const searchCity = () => {
    if (city.trim() === "") {
      showAlertCity();
      return;
    } else if (cod === "404") {
      showAlertCod();
    }
    saveQuery(true);
  };

  const showAlertCity = () => {
    Alert.alert("Error", "El campo ciudad no puede esta vacio", [
      { text: "Volver" },
    ]);
  };

  const showAlertCod = () => {
    Alert.alert("Atención", "Su busqueda no arrojó ningun resultado", [
      { text: "Volver" },
    ]);
  };
  return (
    <View style={styles.form}>
      <View>
        <TextInput
          value={city}
          style={styles.input}
          onChangeText={(city) => saveSearch({ ...search, city })}
          placeholder="Ingrese la ciudad a buscar"
          placeholderTextColor="#666"
        />
      </View>
      <View>
        <SearchButton text="Buscar" onPress={() => searchCity()} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  form: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    marginHorizontal: "2.5%",
  },
  label: {
    fontWeight: "bold",
    fontSize: 18,
    marginTop: 20,
  },
  input: {
    padding: 10,
    height: 50,
    backgroundColor: "#fff",
    fontSize: 18,
    marginBottom: 20,
    textAlign: "center",
  },
  btnSave: {
    padding: 10,
    backgroundColor: "green",
    marginVertical: 10,
  },
  textSave: {
    fontSize: 18,
    color: "#FFF",
    fontWeight: "bold",
    textAlign: "center",
  },
});
