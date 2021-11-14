import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";

import Cities from "../screens/Cities/Cities";
import AddCity from "../screens/Cities/AddCity";

const Stack = createStackNavigator();

export default function citiesStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Cities"
        component={Cities}
        options={{ title: "Listado de ciudades" }}
      />
      <Stack.Screen
        name="AddCity"
        component={AddCity}
        options={{ title: "Agregar ciudad" }}
      />
    </Stack.Navigator>
  );
}

const styles = StyleSheet.create({});
