import React from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
  ScrollView,
} from "react-native";
import CitiesList from "../../components/CitiesList";

export default function Cities({ navigation }) {
  return (
    <ScrollView>
      <View style={styles.container}>
        <TouchableHighlight style={styles.btnShow}>
          <Text
            style={styles.textShow}
            onPress={() => navigation.navigate("AddCity")}
          >
            Agregar ciudad
          </Text>
        </TouchableHighlight>
        <View>
          <CitiesList navigation={navigation} />
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 50,
  },
  btnShow: {
    padding: 10,
    backgroundColor: "green",
    marginVertical: 10,
  },
  textShow: {
    fontSize: 18,
    color: "#FFF",
    fontWeight: "bold",
    textAlign: "center",
  },
});
