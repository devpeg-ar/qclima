import React from "react";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import MaterialCommunityIcon from "react-native-vector-icons/MaterialCommunityIcons";

import Home from "../screens/Home";
import About from "../screens/About";
import Cities from "../navigation/CitiesStack";
import Map from "../screens/Map";

const Tab = createMaterialBottomTabNavigator();

export default function Navigation() {
  return (
    <Tab.Navigator
      barStyle={{ backgroundColor: "#31255a" }}
      activeColor="#75b4e3"
      initialRouteName="Home"
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          title: "Inicio",
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcon name="home" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="CitiesStack"
        component={Cities}
        options={{
          title: "Listado",
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcon
              name="format-list-bulleted"
              color={color}
              size={26}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Map"
        component={Map}
        options={{
          title: "Mapa",
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcon name="map" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="About"
        component={About}
        options={{
          title: "Quienes somos?",
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcon
              name="information-outline"
              color={color}
              size={26}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
