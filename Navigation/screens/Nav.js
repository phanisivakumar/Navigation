import React from "react";
import { View, Text, Button } from "react-native";

export const Nav = ({ navigation }) => {
  return (
    <View>
      <Text>Hello Nav!</Text>
      <Button
        title="Go to Another Screen"
        onPress={() => navigation.navigate("routeAnother")}
      />
    </View>
  );
};
