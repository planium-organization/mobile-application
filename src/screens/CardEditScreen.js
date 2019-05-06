import React, { Component } from "react";
import { Button, View, Text, Picker, TimePickerAndroid } from "react-native";
import { createStackNavigator, createAppContainer } from "react-navigation";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import {
  addCard,
  editCard,
  selectCard,
  deselectCard,
  deleteCard
} from "../store/CardsActions";

class CardEditScreen extends Component {
  static navigationOptions = {
    headerTitle: <Text>Edit To-Do Card</Text>,
    headerRight: (
      <Button
        onPress={() => alert("Changes Saved")}
        title="Save Changes"
        style={{ margin: 3 }}
      />
    )
  };

  async openTimePickerDialog() {
    try {
      let initHour, initMinute;
      if (this.props.selectedCard.startTime != null) {
        initHour = this.props.selectedCard.startTime.hour;
        initMinute = this.props.selectedCard.startTime.minute;
      } else {
        const now = new Date();
        initHour = now.getHours();
        initMinute = now.getMinutes();
      }
      const { action, hour, minute } = await TimePickerAndroid.open({
        hour: initHour,
        minute: initMinute,
        is24Hour: true // Will display '2 PM'
      });
      if (action !== TimePickerAndroid.dismissedAction) {
        // Selected hour (0-23), minute (0-59)
        this.props.selectCard.startTime = { hour: hour, minute: minute };
      }
    } catch ({ code, message }) {
      console.warn("Cannot open time picker", message);
    }
  }

  render() {
    let currentStartTime;
    if (this.props.selectedCard.startTime != null) {
      currentStartTime = (
        <Text>
          Selected Start Time: {this.props.selectedCard.startTime.hour}:
          {this.props.selectedCard.startTime.minute}
        </Text>
      );
    } else {
      currentStartTime = <Text>Not Selected</Text>;
    }

    console.log(this.props.selectedCard);
    // console.log("HERE");

    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Text>{this.props.selectedCard.course}</Text>
        <Picker
          selectedValue={this.props.selectedCard.course}
          style={{ height: 50, width: "100%" }}
          mode="dialog"
          onValueChange={(itemValue, itemIndex) =>
            this.props.editCard(this.props.selectCard.key, {})
          }
        >
          <Picker.Item label="Physics" value="Physics" />
          <Picker.Item label="Maths" value="Maths" />
        </Picker>

        {currentStartTime}

        <Button
          title="Select Start Time"
          onPress={() => this.openTimePickerDialog()}
        />
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
      editCard,
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
