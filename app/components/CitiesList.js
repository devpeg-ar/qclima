import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, Alert } from "react-native";
import { ListItem } from "react-native-elements";
import firebase from "../utils/firebase";
import CityListTemp from "../components/CityListTemp";
import { color } from "react-native-elements/dist/helpers";

export default function CitiesList({ navigation }) {
  const [cities, setCities] = useState([]);

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
  }, []);

  const deleteCity = async (city) => {
    const dbRef = firebase.db.collection("cities").doc(city.id);
    await dbRef.delete();
  };

  const alertDeleteCity = (city) => {
    Alert.alert(
      "Cuidado...",
      "Esta a punto de eliminar una ciudad del listado. Esta seguro?",
      [
        {
          text: "Cancelar",
        },
        {
          text: "Ok",
          onPress: () => deleteCity(city),
        },
      ]
    );
  };

  return (
    <View>
      {cities.map((city) => {
        return (
          <ListItem
            key={city.id}
            bottomDivider
            containerStyle={styles.container}
            onPress={() =>
              navigation.navigate("CityWeather", {
                city: city.nameCity,
              })
            }
            onLongPress={() => alertDeleteCity(city)}
            style={styles.list}
          >
            <ListItem.Chevron />
            <ListItem.Content style={styles.content}>
              <ListItem.Title style={styles.title}>
                {city.nameCity}
              </ListItem.Title>
              <ListItem.Subtitle style={styles.subtitle}>
                <CityListTemp city={city.nameCity} />
              </ListItem.Subtitle>
            </ListItem.Content>
          </ListItem>
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#54416d",
    borderRadius: 10,
  },
  content: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  list: {
    marginVertical: 5,
  },
  title: {
    fontSize: 25,
    color: "#f1f1f1",
  },
  subtitle: {
    flexDirection: "row",
    color: "#f1f1f1",
  },
  textTemp: {
    lineHeight: 30,
  },
});
