import React from "react";
import { StyleSheet, Text, View, Image, ImageBackground } from "react-native";
import GetTemp from "../../utils/readApi";
import OtherData from "../../components/otherWeatherData";
import CodeWeather from "../../utils/const";

let desc = "";

export default function CityWeather({ route }) {
  const { city } = route.params;
  const kelvin = 273;

  const data = GetTemp(city, true);
  const temp = parseInt(data[0] - kelvin);
  const code = data[2];

  for (const key in CodeWeather) {
    if (parseInt(key) === code) {
      desc = CodeWeather[key];
    }
  }

  return (
    <View style={styles.container}>
      <ImageBackground
        source={require("../../../assets/fondo.png")}
        resizeMode="cover"
        style={styles.bkgImage}
      >
        <View style={styles.containerTitle}>
          <Text style={styles.title}>{city}</Text>
        </View>
        <View style={styles.data}>
          <Image
            style={styles.image}
            source={{
              uri: `http://openweathermap.org/img/w/${data[1]}.png`,
            }}
          />
          <Text style={styles.description}>{desc}</Text>
          <View style={styles.temp}>
            <Text style={styles.number}>{temp}</Text>
            <Text style={styles.celcius}>&#x2103;</Text>
          </View>
        </View>
        <View style={styles.otherData}>
          <OtherData city={city} />
        </View>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
  },
  bkgImage: {
    flex: 1,
  },
  containerTitle: {
    flex: 0.3,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: 32,
    textAlign: "center",
    fontWeight: "bold",
    color: "#f1f1f1",
    backgroundColor: "rgba(84,65,109,0.6)",
    borderRadius: 10,
    padding: 10,
    width: "90%",
    shadowColor: "#2b235a",
    elevation: 20,
  },
  data: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center",
    backgroundColor: "rgba(84,65,109,0.6)",
    marginVertical: 10,
    width: "90%",
    borderRadius: 20,
  },
  temp: {
    flexDirection: "row",
  },
  number: {
    fontSize: 120,
    color: "#f1f1f1",
    fontWeight: "bold",
  },
  celcius: {
    fontSize: 40,
    color: "#f1f1f1",
    lineHeight: 120,
  },
  image: {
    width: 100,
    height: 90,
  },
  otherData: {
    flex: 1,
    marginVertical: 10,
  },
  description: {
    color: "#f1f1f1",
    fontSize: 16,
  },
});
