import React from "react";
import { StyleSheet, Text, View, ImageBackground, Image } from "react-native";

export default function About() {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require("../../assets/about.png")}
        resizeMode="cover"
        style={styles.bkgImage}
      >
        <View style={styles.containerImg}>
          <Image source={require("../../assets/logo.png")} style={styles.img} />
        </View>
        <View style={styles.containerText}>
          <Text style={styles.text}>
            Somos un equipo que se formo para el desarrollo de esta app. El
            diseño de la interfaz fue un desarrollo en conjunto entre Caludine
            Mayer y Pablo Grilletti. Diego Barale estuvo a cargo del desarrollo
            de la interacción de la app con la base de datos. El sistema de
            navegación y la comunicación con la api de openweathermap.org estuvo
            a cargo de Pablo Grilletti.
          </Text>
        </View>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  bkgImage: {
    flex: 1,
    justifyContent: "flex-end",
    paddingBottom: 50,
  },
  containerText: {
    width: "90%",
    alignSelf: "center",
  },
  text: {
    fontSize: 18,
    color: "#f1f1f1",
    padding: 15,
  },
  containerImg: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
  },
  img: {
    width: 250,
    height: 250,
  },
});
