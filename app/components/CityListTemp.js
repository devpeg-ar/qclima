import React from "react";
import { View, Text, StyleSheet } from "react-native";
import ReadApi from "../utils/readApi";

export default function CityListTemp({ city }) {
  const kelvin = 273;
  const temp = parseInt(ReadApi(city, true)[0] - kelvin);
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.text}>{temp}</Text>
        <Text style={styles.celcius}>&#x2103;</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#75b4e3",
    borderRadius: 50,
  },
  content: {
    flexDirection: "row",
    alignItems: "flex-start",
    margin: 10,
  },
  text: {
    justifyContent: "center",
    alignItems: "center",
    color: "#f1f1f1",
    fontSize: 25,
  },
  celcius: {
    color: "#f1f1f1",
    fontSize: 10,
    lineHeight: 25,
  },
});
