import React, { Component } from "react";
import { View, StyleSheet, Text, Button, Modal } from "react-native";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import { addingCardToggle } from "../store/CardsActions";

class NewCardModal extends Component {
  render() {
    // console.warn(`value of adding card: ${this.props.addingCard}`);
    return (
      <Modal visible={this.props.addingCard}>
        <View style={{ heigt: 50 }}>
          <Text
            style={{
              textAlign: "center",
              fontSize: 20,
              fontWeight: "bold",
              margin: 7
            }}
          >
            New Card
          </Text>
          <View
            style={{
              borderBottomColor: "black",
              borderBottomWidth: 1
            }}
          />
        </View>
        <View>
          <Button
            title="Close"
            // onPress={() => this.props.addingCardToggle(false)}
          />
        </View>
      </Modal>
    );
  }
}

const mapStateToProps = state => {
  return {
    addingCard: state.cards.addingCard
  };
};

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      addingCardToggle
    },
    dispatch
  );

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NewCardModal);
