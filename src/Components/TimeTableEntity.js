import React, { Component } from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import { ScrollView } from "react-native-gesture-handler";

class TimeTableEntity extends Component {
  render() {
    return (
        <View style={styles.mainView}>
          <View style={{flex: 1,margin: 5}}>
            <Image
              style={styles.entityIcon}
              source={require("../res/images/physics.png")}
            />
          </View>
          <View style={styles.entityDesc}>
            <Text style={styles.textTile}>Social Media</Text>
            <Text style={styles.textTimeSpan}>11:26 AM - 13:15 PM</Text>
            <Text style={styles.textDesc}>2 comments (1 unread)</Text>
          </View>
          <View style={styles.entityDuration}>
            <Text>1 h</Text>
            <Text>18 min</Text>
          </View>
        </View>
    );
  }
}

const styles = StyleSheet.create({
  mainView: {
    // flex: 1,
    flexDirection: "row",
    // height: 100,
    borderWidth: 1,
    borderColor: "#333333",
    paddingTop: 10,
    paddingBottom: 10
  },
  entityIcon: {
    // flex: 1,
    width: "100%",
    resizeMode: "cover",
    // margin: 5
  },
  entityDesc: {
    paddingLeft: 10,
    flex: 4,
    height: "100%"
  },
  textTile: {
    color: "#000000",
    fontSize: 18
  },
  textTimeSpan: {
    color: "#000000",
    fontSize: 16
  },
  textDesc: {
    color: "#888888",
    fontSize: 14
  },
  entityDuration: {
    flex: 1,
    height: "100%"
  }
});

export default TimeTableEntity;
