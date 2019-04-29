import React, { Component } from "react";
import { View, StyleSheet } from "react-native";
import { connect } from "react-redux";

import TimeTableEntity from "../Components/TimeTableEntity";
import { addCard, selectCard, deselectCard, deleteCard } from '../store/CardsActions';

class TimeTableScreen extends Component {
  render() {
    this.state.onAddCard("todo", "physics", 120, new Date());
    return (
      <View style={styles.main}>
        <Text>{this.state.cards.cards.length}</Text>
        {/* <TimeTableEntity styles={styles.timeTableEntity} /> */}
        {/* <TimeTableEntity styles={styles.timeTableEntity} /> */}
        {/* <TimeTableEntity styles={styles.timeTableEntity} /> */}
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


const mapStateToProps = state => {
  return {
    cards: state.cards.cards,
    selectedCard: state.cards.selectedCard
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onAddCard: (cType, cCourse, cDuration, cStartTime) => {
      return dispatch(addCard(cType, cCourse, cDuration, cStartTime))
    },
    onDeleteCard: () => dispatch(deleteCard()),
    onSelectCard: key => dispatch(selectCard(key)),
    onDeselectCard: () => dispatch(deselectCard())
  };
};

// export default TimeTableScreen;
export default connect(mapStateToProps, mapDispatchToProps)(TimeTableScreen);
