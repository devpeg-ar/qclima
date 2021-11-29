import React from "react";
import { StyleSheet, Text, View, ImageBackground, Image } from "react-native";

export default function Home() {
  return (
    <View style={styles.container}>
      <ImageBackground
        style={styles.bkgImage}
        source={require("../../assets/fondo.png")}
        resizeMode="cover"
      >
        <View style={styles.containerImg}>
          <Image source={require("../../assets/logo.png")} style={styles.img} />
        </View>
        <View style={styles.containerText}>
          <Text style={styles.text}>
            Q Clima es una app de consulta meteorológica que ofrece información
            en tiempo real del clima de una ciudad especifica. Puede realizar
            busquedas de ciudades, agregarlas a un listado y mostrar la
            ubicación en un mapa. Nuestro objetivo es adaptarnos a las
            necesidades del usuario y para ello creamos un diseño accesible e
            intuitivo, facil de usar y sin publicidad invasiva, pensado para que
            la navegación le permita una experiencia amena
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
    justifyContent: "center",
  },
  containerImg: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  img: {
    width: 300,
    height: 300,
  },
  containerText: {
    width: "90%",
    alignSelf: "center",
    backgroundColor: "rgba(84, 65, 109, 0.6)",
    marginBottom: 20,
    borderRadius: 15,
  },
  text: {
    fontSize: 18,
    color: "#f1f1f1",
    padding: 15,
  },
});
