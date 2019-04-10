import React, { Component } from "react";
import { View, StyleSheet } from "react-native";
import TimeTableEntity from "../Components/TimeTableEntity";

class TimeTableScreen extends Component {
  render() {
    return (
      <View style={styles.main}>
        <TimeTableEntity styles={styles.timeTableEntity} />
        <TimeTableEntity styles={styles.timeTableEntity} />
        <TimeTableEntity styles={styles.timeTableEntity} />
        {/* <TimeTableEntity styles={styles.timeTableEntity} /> */}
        {/* <TimeTableEntity styles={styles.timeTableEntity} /> */}
      </View>
    );
  }
}

const styles = StyleSheet.create({
    main: {
        flex: 1,
        width: "100%"
    },
    timeTableEntity: {
        // height: 60
    }
});

export default TimeTableScreen;
