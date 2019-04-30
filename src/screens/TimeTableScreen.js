import React, { Component } from "react";
import { View, StyleSheet, Text, Button } from "react-native";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import TimeTableEntity from "../Components/TimeTableEntity";
import {
  addCard,
  selectCard,
  deselectCard,
  deleteCard
} from "../store/CardsActions";

class TimeTableScreen extends Component {
  addCard() {
    this.props.addCard("todo", "physics", 120, new Date());
  }

  render() {
    console.log("test");
    return (
      <View style={styles.main}>
        <Text>{this.props.cards.length}</Text>
        <Button
          title="CLICK ME!"
          onPress={() => {
            this.addCard();
          }}
        />
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

// const mapDispatchToProps = dispatch => {
//   return {
//     onAddCard: (cType, cCourse, cDuration, cStartTime) => {
//       return dispatch(addCard(cType, cCourse, cDuration, cStartTime))
//     },
//     onDeleteCard: () => dispatch(deleteCard()),
//     onSelectCard: key => dispatch(selectCard(key)),
//     onDeselectCard: () => dispatch(deselectCard())
//   };
// };

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
