import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";

import Home from "../screens/Home";
import About from "../screens/About";
import Cities from "../screens/Cities";
import Map from "../screens/Map";

const drawer = createDrawerNavigator();

export default function Navigation() {
  return (
    <drawer.Navigator>
      <drawer.Screen
        name="home"
        component={Home}
        options={{ title: "Inicio" }}
      />
      <drawer.Screen
        name="cities"
        component={Cities}
        options={{ title: "Listado de ciudades" }}
      />
      <drawer.Screen
        name="map"
        component={Map}
        options={{ title: "Mapa de ciudades" }}
      />
      <drawer.Screen
        name="about"
        component={About}
        options={{ title: "Acerca de" }}
      />
    </drawer.Navigator>
  );
}
