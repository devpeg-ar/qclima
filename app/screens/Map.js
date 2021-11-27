import React, { useState, useEffect } from "react";
import MapView, { Marker } from "react-native-maps";
import firebase from "../utils/firebase";
import { StyleSheet, Text, View, Dimensions, Image } from "react-native";

export default function Map() {
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

  return (
    <View style={styles.container}>
      <MapView
        style={styles.map}
        initialRegion={{
          latitude: -38.416097,
          longitude: -63.616672,
          latitudeDelta: 20,
          longitudeDelta: 20,
        }}
      >
        {cities.map((city) => {
          return (
            <Marker
              key={city.id}
              description={city.nameCity}
              coordinate={{ latitude: city.latCity, longitude: city.lonCity }}
            >
              <Image
                style={styles.icon}
                source={require("../../assets/carrito.png")}
              />
            </Marker>
          );
        })}
      </MapView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  map: {
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height,
  },
  icon: {
    width: 64,
    height: 64,
  },
});
