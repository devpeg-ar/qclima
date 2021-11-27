import React from "react";
import { StyleSheet, Text, View, ImageBackground } from "react-native";

export default function Home() {
  return (
    <View style={styles.container}>
      <ImageBackground
        style={styles.img}
        source={require("../../assets/fondo.png")}
        resizeMode="cover"
      >
        <Text>Home</Text>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  img: {
    flex: 1,
    justifyContent: "center",
  },
});
