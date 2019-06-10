import React, { Component } from "react";
import { Button, View, Text } from "react-native";
import { createStackNavigator, createAppContainer } from "react-navigation";
import { ScrollView } from "react-native-gesture-handler";

class ChannelScreen extends Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <ScrollView style={{ flex: 1 }} >
          <View>
            
          </View>
        </ScrollView>
      </View>
    );
  }
}

export default ChannelScreen;
