import React, { useState, useEffect } from "react";
import {
  View,
  StyleSheet,
  ImageBackground,
  TouchableWithoutFeedback,
  Keyboard,
  Alert,
} from "react-native";
import Formulario from "../../components/FormAddCity";
import CitySearch from "../../components/CitySearch";

export default function AddCity({ navigation }) {
  const [search, saveSearch] = useState({
    city: "",
  });

  const [query, saveQuery] = useState(false);
  const [result, saveResult] = useState({});

  const { city } = search;

  useEffect(() => {
    const citySearch = async () => {
      if (query) {
        const apiKey = "fabb124a7a5fe78b3dbeb5078846da0b";
        const urlApi = `http://api.openweathermap.org/data/2.5/weather?q=${city},{"AR"}&appid=${apiKey}`;

        try {
          const answer = await fetch(urlApi);
          const result = await answer.json();
          saveResult(result);
          console.log(result);
          saveQuery(false);
        } catch (error) {
          console.log(error);
          showAlert();
        }
      }
    };
    citySearch();
  }, [query]);

  const showAlert = () => {
    Alert.alert(
      "Error",
      "No hay resultados para tu busqueda. Intenta con otro nombre",
      [{ text: "Volver" }]
    );
  };

  const ocultarTeclado = () => {
    Keyboard.dismiss();
  };

  return (
    <TouchableWithoutFeedback onPress={() => ocultarTeclado()}>
      <View style={styles.container}>
        <ImageBackground
          source={require("../../../assets/fondo.png")}
          resizeMode="cover"
          style={styles.bkgImage}
        >
          <View>
            <Formulario
              search={search}
              saveSearch={saveSearch}
              saveQuery={saveQuery}
              result={result}
            />
          </View>
          <View style={styles.result}>
            <CitySearch result={result} navigation={navigation} />
          </View>
        </ImageBackground>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#75b4e3",
    justifyContent: "center",
  },
  result: {
    marginVertical: 20,
  },
  bkgImage: {
    flex: 1,
    justifyContent: "center",
  },
});
