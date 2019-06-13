import React, { Component } from "react";
import { View, Text, StyleSheet, TouchableNativeFeedback } from "react-native";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { selectCard } from "../store/CardsActions";

class Card extends Component {
  onPressHnd() {
    // navigate to card edit page
    this.props.selectCard(this.props.cardItem);
    this.props.navigation.push("CardEdit");
  }

  onHoldHnd() {
    // mark card as done
  }

  render() {
    const cardOnLoadProps = StyleSheet.create({
      HeightOnLoad: {
        height: this.props.cardItem.duration
      },
      ColorOnLoad: {
        width: 6,
        borderRadius: 3,
        margin: 4,
        backgroundColor: this.props.cardItem.color
      }
    });
    return (
      <TouchableNativeFeedback
        onPress={() => this.onPressHnd()}
        onLongPress={() => this.onHoldHnd()}
      >
        <View style={[styles.Main, cardOnLoadProps.HeightOnLoad]}>
          <View style={cardOnLoadProps.ColorOnLoad} />
          <Text style={styles.CardMainText}>{this.props.cardItem.course}</Text>
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
    marginTop: 3,
    marginLeft: 3,
    marginRight: 3,
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
  return {};
};

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      selectCard
    },
    dispatch
  );

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Card);
