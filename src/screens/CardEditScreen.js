import React, { Component } from "react";
import { Button, View, Text } from "react-native";
import { createStackNavigator, createAppContainer } from "react-navigation";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import {
  addCard,
  selectCard,
  deselectCard,
  deleteCard
} from "../store/CardsActions";

class CardEditScreen extends Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Text>{this.props.selectedCard.course}</Text>
        <Button
          title="Go to Time Table"
          onPress={() => this.props.navigation.navigate("TimeTable")}
        />
      </View>
    );
  }
}

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

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CardEditScreen);

// export default CardEditScreen;
