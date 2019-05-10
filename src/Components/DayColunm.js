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
          cardItem={cardItem}
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
    borderRightWidth: 1,
    paddingTop: 0,
    flex: 1
  }
});

export default DayColumn;
