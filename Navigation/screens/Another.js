import React from "react";
import { View, Text, Button } from "react-native";

export const Another = ({ navigation }) => {
  return (
    <View>
      <Text>Hello Another!</Text>
      <Button
        title="Go to Nav Screen"
        onPress={() => navigation.navigate("routeNavigation")}
      />
    </View>
  );
};
