import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableHighlight,
  Image,
} from "react-native";
import firebase from "../utils/firebase";
import { Alert } from "react-native";

const CitySearch = ({ result, navigation }) => {
  const { name, coord, main } = result;
  if (!name) return null;

  const kelvin = 273.15;

  const saveNewCity = async () => {
    try {
      await firebase.db.collection("cities").add({
        nameCity: name,
        latCity: coord.lat,
        lonCity: coord.lon,
      });
      goBack();
    } catch (error) {
      console.log(error);
    }
  };

  const alertAddCity = () => {
    Alert.alert(
      "Añadir ciudad",
      "Se va a proceder a añadir la ciudad seleccionada. Continuar?",
      [
        {
          text: "Cancelar",
        },
        {
          text: "Ok",
          onPress: () => saveNewCity(),
        },
      ]
    );
  };

  const goBack = () => {
    navigation.navigate("Map");
  };

  return (
    <TouchableHighlight onPress={() => alertAddCity()} style={styles.container}>
      <View>
        <Text style={styles.text}>
          {name}
          <Text> </Text>
          <Text> </Text>
          <Text style={styles.temp}>
            {parseInt(main.temp - kelvin)}
            <Text>&#x2103;</Text>
            <Image
              style={{ width: 66, height: 58 }}
              source={{
                uri: `http://openweathermap.org/img/w/${result.weather[0].icon}.png`,
              }}
            />
          </Text>
        </Text>
      </View>
    </TouchableHighlight>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "90%",
    height: 100,
    backgroundColor: "#54416d",
    alignSelf: "center",
    borderRadius: 10,
  },
  text: {
    textAlign: "center",
    color: "#f1f1f1",
    fontSize: 30,
    fontWeight: "bold",
  },
  temp: {
    flex: 1,
    alignItems: "center",
  },
});

export default CitySearch;
