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
      labeled={false}
      barStyle={{ backgroundColor: "black" }}
      activeColor="white"
      initialRouteName="Home"
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcon name="home" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="CitiesStack"
        component={Cities}
        options={{
          tabBarIcon: ({ color, size }) => (
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
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcon name="map" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="About"
        component={About}
        options={{
          tabBarIcon: ({ color, size }) => (
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
