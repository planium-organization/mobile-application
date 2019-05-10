import React, { Component } from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import Card from "./Card";

class DayColumn extends Component {
  render() {
    const comps = [];
    this.props.dayCards.map(cardItem => {
      comps.push(
        <Card
          key={cardItem.key}
          cardKey={cardItem.key}
          navigation={this.props.navigation}
        />
      );
    });

    return <View style={styles.DayColumnStyle}>{comps}</View>;
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
