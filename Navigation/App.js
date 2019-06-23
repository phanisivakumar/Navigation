import React from "react";
import { StyleSheet, View } from "react-native";
import { AppContainer } from "./router/router";

export default function App() {
  return (
    <View style={styles.container}>
      <AppContainer />
    </View>
  );
}

const getRandomColor = () => {
  var letters = "0123456789ABCDEF";
  var color = "#";
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: getRandomColor(),
    alignItems: "center",
    justifyContent: "center"
  }
});
