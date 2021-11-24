import React from "react";
import {
  StyleSheet,
  Image,
  View,
  ScrollView,
  SafeAreaView,
} from "react-native";
import { FAB } from "react-native-paper";
import CitiesList from "../../components/CitiesList";

export default function Cities({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
      <Image style={styles.image} source={require("../../../assets/map.png")} />
      <ScrollView>
        <View style={styles.list}>
          <CitiesList navigation={navigation} />
        </View>
      </ScrollView>
      <View style={styles.btn}>
        <FAB
          style={styles.fab}
          icon="plus"
          onPress={() => navigation.navigate("AddCity")}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 3,
    backgroundColor: "#186CA1",
  },
  list: {
    flex: 1,
  },
  btn: {
    flex: 1,
  },
  fab: {
    position: "absolute",
    right: 0,
    bottom: 0,
    margin: 16,
  },
  image: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    width: "80%",
    height: "50%",
    margin: 20,
  },
});
