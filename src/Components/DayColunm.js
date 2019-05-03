import React, { Component } from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import Card from "./Card";

class DayColumn extends Component {
  render() {
    return (
      <View style={styles.DayColumnStyle}>
        {/* <Text>{this.props.name}</Text> */}
        {/* card component */}
        {this.props.dayCards.map(val => {
          return <Card card={val} navigation={this.props.navigation} />;
        })}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  DayColumnStyle: {
    borderColor: "#dbdbdb",
    // borderLeftWidth: 1,
    borderRightWidth: 1,
    paddingTop: 0,
    // width: '33%'
    flex: 1
  }
});

export default DayColumn;
