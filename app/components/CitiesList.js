import React, { useState, useEffect } from "react";
import { ScrollView, TouchableHighlight } from "react-native";
import { ListItem } from "react-native-elements";
import firebase from "../utils/firebase";

export default function CitiesList({ navigation }) {
  const [cities, setCities] = useState([]);
  const [result, saveResult] = useState({});

  useEffect(() => {
    firebase.db.collection("cities").onSnapshot((querySnapshot) => {
      const cities = [];

      querySnapshot.docs.forEach((doc) => {
        const { nameCity } = doc.data();
        cities.push({
          id: doc.id,
          nameCity,
        });
      });
      setCities(cities);
    });
  }, []);

  return (
    <ScrollView>
      {cities.map((city) => {
        return (
          <ListItem
            key={city.id}
            bottomDivider
            onPress={() =>
              navigation.navigate("CityWeather", {
                city: city.nameCity,
              })
            }
          >
            <ListItem.Chevron />
            <ListItem.Content>
              <ListItem.Title>{city.nameCity}</ListItem.Title>
              <ListItem.Subtitle>Temperatura: 25°</ListItem.Subtitle>
            </ListItem.Content>
          </ListItem>
        );
      })}
    </ScrollView>
  );
}
