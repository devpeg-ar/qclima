import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Col, Row, Grid } from "react-native-easy-grid";
import ReadApi from "../utils/readApi";

export default function otherWeatherData({ city }) {
  const kelvin = 273;
  const data = ReadApi(city, true);
  const otherData = {
    feels: parseInt(data[3] - kelvin),
    humidity: data[4],
    pressure: data[5],
    max: parseInt(data[6] - kelvin),
    min: parseInt(data[7] - kelvin),
  };
  return (
    <View style={styles.container}>
      <View style={styles.colTitle}>
        <Text style={styles.textTitle}>Información actual</Text>
        <View style={styles.colVal}>
          <Text style={styles.text}>Sensación térmica:</Text>
          <Text style={styles.text}>Humedad:</Text>
          <Text style={styles.text}>Presión atmosférica:</Text>
          <Text style={styles.text}>Temperatura máxima:</Text>
          <Text style={styles.text}>Temperatura mínima:</Text>
        </View>
      </View>
      <View>
        <Text style={styles.textTitle}></Text>
        <View style={styles.colVal}>
          <Text style={styles.text}>{otherData.feels}&#x2103;</Text>
          <Text style={styles.text}>{otherData.humidity}%</Text>
          <Text style={styles.text}>{otherData.pressure} mb</Text>
          <Text style={styles.text}>{otherData.max}&#x2103;</Text>
          <Text style={styles.text}>{otherData.min}&#x2103;</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    marginHorizontal: 20,
    paddingHorizontal: 10,
    paddingVertical: 10,
    backgroundColor: "rgba(84,65,109,0.6)",
    borderRadius: 20,
  },
  colTitle: {
    marginBottom: 10,
  },
  textTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#f1f1f1",
  },
  colVal: {
    flex: 1,
    justifyContent: "center",
    marginVertical: 10,
  },
  text: {
    color: "#f1f1f1",
    fontSize: 16,
    marginVertical: 10,
  },
});
