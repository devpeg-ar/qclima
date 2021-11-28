import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Image,
  View,
  ScrollView,
  SafeAreaView,
  ImageBackground,
} from "react-native";
import { FAB } from "react-native-paper";
import CitiesList from "../../components/CitiesList";

export default function Cities({ navigation }) {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require("../../../assets/fondo.png")}
        resizeMode="cover"
        style={styles.bkgImage}
      >
        <View style={styles.containerImage}>
          <Image
            source={require("../../../assets/carrito.png")}
            style={styles.image}
          />
        </View>
        <ScrollView style={styles.list}>
          <CitiesList navigation={navigation} />
        </ScrollView>
        <View style={styles.containerFab}>
          <FAB
            style={styles.fab}
            icon="plus"
            onPress={() => navigation.navigate("AddCity")}
          />
        </View>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#75b4e3",
  },
  bkgImage: {
    flex: 1,
    justifyContent: "center",
  },
  list: {
    flex: 1,
    width: "95%",
    alignSelf: "center",
  },
  containerFab: {
    flex: 0.3,
  },
  fab: {
    position: "absolute",
    right: 0,
    bottom: 0,
    margin: 16,
    backgroundColor: "#31255a",
  },
  containerImage: {
    flex: 0.7,
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    resizeMode: "contain",
    height: 200,
    width: 300,
  },
});
