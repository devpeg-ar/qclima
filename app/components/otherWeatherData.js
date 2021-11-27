import React from "react";
import { View, Text } from "react-native";
import { DataTable } from "react-native-paper";
import ReadApi from "../utils/readApi";

export default function otherWeatherData({ city }) {
  const kelvin = 273;
  const data = ReadApi(city, true);
  const otherData = {
    feels: parseInt(data[2] - kelvin),
    humidity: data[3],
    pressure: data[4],
    max: parseInt(data[5] - kelvin),
    min: parseInt(data[6] - kelvin),
  };
  return (
    <DataTable>
      <DataTable.Header>
        <DataTable.Title>Información actual</DataTable.Title>
        <DataTable.Title>Valores</DataTable.Title>
      </DataTable.Header>
      <DataTable.Row>
        <DataTable.Cell>Sencación térmica</DataTable.Cell>
        <DataTable.Cell numeric>{otherData.feels}</DataTable.Cell>
      </DataTable.Row>
      <DataTable.Row>
        <DataTable.Cell>Humedad</DataTable.Cell>
        <DataTable.Cell numeric>{otherData.humidity}</DataTable.Cell>
      </DataTable.Row>
      <DataTable.Row>
        <DataTable.Cell>Presión</DataTable.Cell>
        <DataTable.Cell numeric>{otherData.pressure}</DataTable.Cell>
      </DataTable.Row>
      <DataTable.Row>
        <DataTable.Cell>Temperatura máxima</DataTable.Cell>
        <DataTable.Cell numeric>{otherData.max}</DataTable.Cell>
      </DataTable.Row>
      <DataTable.Row>
        <DataTable.Cell>Temperatura mínima</DataTable.Cell>
        <DataTable.Cell numeric>{otherData.min}</DataTable.Cell>
      </DataTable.Row>
    </DataTable>
  );
}
