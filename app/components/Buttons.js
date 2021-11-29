import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { FAB, Portal, Provider } from "react-native-paper";

export function SearchButton(props) {
  const { onPress, text } = props;
  return (
    <TouchableOpacity
      style={{
        ...styles.button,
        backgroundColor: "#31255a",
      }}
      onPress={onPress}
    >
      <Text
        style={{
          ...styles.buttonText,
          color: "#f1f1f1",
        }}
      >
        {text}
      </Text>
    </TouchableOpacity>
  );
}

export function IconButton(props) {
  const { onPress, text, bgColor, txColor } = props;
  return (
    <TouchableOpacity
      style={{
        ...styles.button,
        backgroundColor: bgColor,
      }}
      onPress={onPress}
    >
      <Text
        style={{
          ...styles.buttonText,
          color: txColor,
        }}
      >
        {text}
      </Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    alignSelf: "center",
    paddingVertical: 10,
    borderRadius: 10,
    width: "90%",
  },
  buttonText: {
    textAlign: "center",
    fontSize: 25,
    fontWeight: "bold",
  },
});
