import React, { Component } from "react";
import { Button, View, Text, ScrollView } from "react-native";
import { createStackNavigator, createAppContainer } from "react-navigation";
import ChannelPost from "./../Components/ChannelPost";

class ChannelScreen extends Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <ScrollView style={{ flex: 1, width: "100%" }}>
          <View>
            <ChannelPost />
            <ChannelPost />
            <ChannelPost />
            <ChannelPost />
          </View>
        </ScrollView>
      </View>
    );
  }
}

export default ChannelScreen;
