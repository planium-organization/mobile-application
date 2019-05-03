import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableNativeFeedback
} from "react-native";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import {
  addCard,
  selectCard,
  deselectCard,
  deleteCard
} from "../store/CardsActions";

class Card extends Component {
  onPressHnd() {
    // navigate to card edit page
    console.log(this.props.navigation);
    this.props.selectCard(this.props.card);
    this.props.navigation.push("CardEdit");
  }

  onHoldHnd() {
    // mark card as done
  }

  render() {
    const cardOnLoadProps = StyleSheet.create({
      HeightOnLoad: {
        height: this.props.card.duration
      },
      ColorOnLoad: {
        width: 6,
        borderRadius: 3,
        margin: 4,
        backgroundColor: this.props.card.color
      }
    });
    return (
      <TouchableNativeFeedback
        onPress={() => this.onPressHnd()}
        onLongPress={() => this.onHoldHnd()}
      >
        <View style={[styles.Main, cardOnLoadProps.HeightOnLoad]}>
          <View style={cardOnLoadProps.ColorOnLoad} />
          <Text style={styles.CardMainText}>{this.props.card.course}</Text>
        </View>
      </TouchableNativeFeedback>
    );
  }
}

const styles = StyleSheet.create({
  Main: {
    alignSelf: "stretch",
    borderWidth: 1,
    borderColor: "#8f8f8f",
    margin: 3,
    borderBottomStartRadius: 5,
    borderBottomEndRadius: 5,
    borderTopEndRadius: 5,
    flexDirection: "row"
  },
  CardMainText: {
    textAlign: "center",
    textAlignVertical: "center",
    flex: 1
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

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Card);

// export default Card;
