import React, { Component } from "react";
import { View, Button } from "react-native";
import { Text } from "react-native-elements";

class ProfileScreen extends Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Text h1>Some Profile details...</Text>
        <Button
          title="Edit Courses"
          onPress={() => this.props.navigation.navigate("CourseView")}
        />
      </View>
    );
  }
}

export default ProfileScreen;
