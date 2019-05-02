import React, { Component } from "react";
import { View, StyleSheet, Text, Button } from "react-native";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import TimeTableEntity from "../Components/TimeTableEntity";
import { ScrollView } from "react-native-gesture-handler";
import {
  addCard,
  selectCard,
  deselectCard,
  deleteCard
} from "../store/CardsActions";


const dateToDayString = date => {
  return date.getYear().toString();
};


class TimeTableScreen extends Component {
  addCard() {
    this.props.addCard("todo", "physics", 120, new Date());
  }

  render() {
    console.log(this.props.cards);

    return (
      <View style={styles.main}>
        {/* Column Capital */}
        <View style={styles.ColumnCapital}>
          <View style={styles.ColumnCapitalBox}>
            <Text style={{ textAlign: "center", textAlignVertical: "center" }}>
              Yesterday
            </Text>
          </View>
          <View
            style={[
              styles.ColumnCapitalBox,
              { borderLeftWidth: 1, borderRightWidth: 1 }
            ]}
          >
            <Text style={{ textAlign: "center", textAlignVertical: "center" }}>
              Today
            </Text>
          </View>
          <View style={styles.ColumnCapitalBox}>
            <Text style={{ textAlign: "center", textAlignVertical: "center" }}>
              Tommorow
            </Text>
          </View>
        </View>

        {/* Day columns */}
        <View style={{ flex: 1 }}>
          <ScrollView style={{ height: "100%" }}>
          </ScrollView>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  ColumnCapitalBox: {
    padding: 2,
    paddingLeft: 2,
    //borderLeftWidth: 1,
    paddingTop: 10,
    paddingBottom: 10,
    flex: 1,
    flexDirection: "column",
    justifyContent: "center"
    // alignItems: 'stretch',
  },
  ColumnCapital: {
    borderWidth: 1,
    paddingTop: 10,
    paddingBottom: 5,
    height: 70,
    flexDirection: "row",
    justifyContent: "center"
  },
  DayColumnScroll: {
    height: 800,
    borderBottomWidth: 1,
    paddingTop: 10,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "stretch"
  },
  main: {
    flexDirection: "column",
    flex: 1
    // borderWidth: 1
    //width: "100%"
  },
  timeTableEntity: {
    // height: 60
  }
});

const mapStateToProps = state => {
  return {
    cards: state.cards.cards,
    selectedCard: state.cards.selectedCard
  };
};

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      addCard,
      deleteCard,
      selectCard,
      deselectCard
    },
    dispatch
  );

// export default TimeTableScreen;
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TimeTableScreen);
