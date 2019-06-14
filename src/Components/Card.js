import React, { Component } from "react";
import { View, Text, StyleSheet, TouchableNativeFeedback } from "react-native";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { selectCard, editCard } from "../store/CardsActions";

class Card extends Component {
  onPressHnd() {
    // navigate to card edit page
    this.props.selectCard(this.props.cardItem);
    this.props.navigation.push("CardEdit");
  }

  onHoldHnd() {
    this.props.editCard(cardKey=this.props.cardItem.key,cardType="done");
  }

  render() {
    const duration = this.props.cardItem.duration;
    return (
      <TouchableNativeFeedback
        onPress={() => {
          this.props.selectCard(this.props.cardItem);
          this.props.navigation.push("CardEdit", { newCard: false });
        }}
        onLongPress={() => this.onHoldHnd()}
      >
        <View
          style={{
            height: duration < 90 ? 90 : duration,
            borderWidth: 1,
            borderColor: "#8f8f8f",
            marginTop: 3,
            marginLeft: 3,
            marginRight: 3,
            borderBottomStartRadius: 5,
            borderBottomEndRadius: 5,
            borderTopEndRadius: 5,
            flexDirection: "row"
          }}
        >
          <View
            style={{
              width: 6,
              borderRadius: 3,
              margin: 4,
              backgroundColor: this.props.cardItem.color
            }}
          />
          <View
            style={{
              flex: 1,
              justifyContent: "center"
            }}
          >
            <Text style={{ textAlign: "center" }}>
              {this.props.cardItem.course}
            </Text>
            <Text style={{ textAlign: "center" }}>
              ({this.props.cardItem.duration} min)
            </Text>
            <Text style={{ textAlign: "center" }}>
              {this.props.cardItem.type}
            </Text>
          </View>
        </View>
      </TouchableNativeFeedback>
    );
  }
}

const mapStateToProps = state => {
  return {};
};

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      selectCard,
      editCard
    },
    dispatch
  );

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Card);
