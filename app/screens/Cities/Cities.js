import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Keyboard,
  View,
  ScrollView,
  TextInput,
  ImageBackground,
} from "react-native";
import { FAB } from "react-native-paper";
import firebase from "../../utils/firebase";
import CitiesList from "../../components/CitiesList";
import { SearchButton } from "../../components/Buttons";

export default function Cities({ navigation }) {
  const [search, saveSearch] = useState("");
  const [cities, setCities] = useState([]);

  const clearInputText = (val) => {
    saveSearch("");
  };

  const ocultarTeclado = () => {
    Keyboard.dismiss();
  };

  useEffect(() => {
    firebase.db.collection("cities").onSnapshot((querySnapshot) => {
      const cities = [];

      querySnapshot.docs.forEach((doc) => {
        const { nameCity, latCity, lonCity } = doc.data();
        cities.push({
          id: doc.id,
          nameCity,
          latCity,
          lonCity,
        });
      });
      setCities(cities);
    });
  }, [search]);

  const citiesFilter = (search) => {
    const city = cities.filter(
      (element) => element.nameCity.indexOf(search) > -1
    );
    setCities(city);
  };

  return (
    <View style={styles.container}>
      <ImageBackground
        source={require("../../../assets/fondo.png")}
        resizeMode="cover"
        style={styles.bkgImage}
      >
        <View style={styles.searchBarContainer}>
          <TextInput
            value={search}
            style={styles.textInput}
            placeholder="Ingrese la ciudad a buscar"
            placeholderTextColor="#666"
            onChangeText={(search) => saveSearch(search)}
          />
          <SearchButton
            text="Buscar"
            onPress={() => {
              citiesFilter(search);
            }}
          />
        </View>
        <ScrollView style={styles.list}>
          <CitiesList navigation={navigation} cities={cities} />
        </ScrollView>
        <View style={styles.containerFab}>
          <FAB
            style={styles.fab1}
            icon="plus"
            onPress={() => navigation.navigate("AddCity")}
          />
          <FAB
            style={styles.fab2}
            icon="reload"
            onPress={() => {
              clearInputText(search), ocultarTeclado();
            }}
          />
        </View>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#75b4e3",
  },
  bkgImage: {
    flex: 1,
    justifyContent: "center",
  },
  searchBarContainer: {
    flex: 0.7,
  },
  textInput: {
    padding: 10,
    height: 50,
    width: "90%",
    backgroundColor: "#fff",
    fontSize: 18,
    marginVertical: 20,
    textAlign: "center",
    alignSelf: "center",
  },
  list: {
    flex: 0.5,
    width: "95%",
    alignSelf: "center",
  },
  containerFab: {
    flex: 0.2,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  fab1: {
    position: "absolute",
    right: 60,
    bottom: 0,
    margin: 16,
    backgroundColor: "#31255a",
  },
  fab2: {
    position: "absolute",
    right: 0,
    bottom: 0,
    margin: 16,
    backgroundColor: "#31255a",
  },
  containerImage: {
    flex: 0.7,
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    resizeMode: "contain",
    height: 200,
    width: 300,
  },
});
