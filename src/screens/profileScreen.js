import React, { Component } from "react";
import { Button, View, Text } from "react-native";
import { createStackNavigator, createAppContainer } from "react-navigation";

class ProfileScreen extends Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Text>Details Screen</Text>
        <Button
          title="Go to Profile... again"
          onPress={() => this.props.navigation.navigate("Profile")}
        />
      </View>
    );
  }
}

export default ProfileScreen;
