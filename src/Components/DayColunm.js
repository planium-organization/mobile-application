import React, { Component } from "react";
import { View, Text, StyleSheet, Image, Button } from "react-native";
import Card from "./Card";
import { addingCardToggle, selectCard } from "./../store/CardsActions";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

class DayColumn extends Component {
  render() {
    const cards = [];
    this.props.dayCards.forEach(cardItem => {
      cards.push(
        <Card
          key={cardItem.key}
          cardItem={cardItem}
          navigation={this.props.navigation}
        />
      );
    });

    return (
      <View style={styles.DayColumnStyle}>
        {cards}
        <View style={{ margin: 3 }}>
          <Button
            title="+"
            onPress={() => {
              this.props.selectCard(null);
              this.props.navigation.push("CardEdit", { newCard: true });
            }}
          />
        </View>
      </View>
    );
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

const mapStateToProps = state => {
  return {};
};

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      selectCard,
      addingCardToggle
    },
    dispatch
  );

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DayColumn);

// export default DayColumn;
