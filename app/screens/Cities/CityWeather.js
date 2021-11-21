import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View } from "react-native";
import GetTemp from "../../utils/readApi";

export default function CityWeather({ route }) {
  const { city } = route.params;
  const kelvin = 273;

  let celcius = parseInt(GetTemp(city, true) - kelvin);

  return (
    <View style={styles.container}>
      <Text> Consultando clima de {city}</Text>
      <Text>La temperatura actual es {celcius}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
