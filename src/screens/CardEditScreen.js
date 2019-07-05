import React, { Component } from "react";
import { Button, View, Text, Picker, TimePickerAndroid } from "react-native";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import {
  addCard,
  editCard,
  selectCard,
  deselectCard,
  deleteCard
} from "../store/CardsActions";

import { courses } from "./../res/colors";

function dateToStandard(inp) {
  return `${inp.getFullYear()}-${inp.getMonth() + 1}-${inp.getDate()}T${
    inp.toTimeString().split(" ")[0]
  }`;
}

function minutesToHourStr(minutes) {
  let h = Math.floor(minutes / 60);
  let m = minutes % 60;
  return `${h}:${m}`;
}

class CardEditScreen extends Component {
  static navigationOptions = {
    tabBarVisible: false,
    headerTitle: (
      <View
        style={{
          flex: 1,
          margin: 5,
          flexDirection: "row"
        }}
      >
        <Text style={{ flex: 1, fontSize: 16, textAlignVertical: "center" }}>
          Edit To-Do Card
        </Text>
      </View>
    )
  };

  constructor(props) {
    super(props);

    this.state = {
      selectedCard: {
        key: parseInt(Math.random() * 10000),
        type: "todo",
        course: "Literature",
        color: "#c12418",
        date: new Date(),
        duration: 90,
        startTime: false
      }
    };
  }

  async openTimePickerDialog() {
    try {
      let initHour, initMinute;
      if (this.state.selectedCard.startTime) {
        initHour = this.state.selectedCard.date.getHours();
        initMinute = this.state.selectedCard.date.getMinutes();
      } else {
        const now = new Date();
        initHour = now.getHours();
        initMinute = now.getMinutes();
      }
      const { action, hour, minute } = await TimePickerAndroid.open({
        hour: initHour,
        minute: initMinute,
        is24Hour: true
      });
      if (action !== TimePickerAndroid.dismissedAction) {
        // Selected hour (0-23), minute (0-59)
        this.state.selectedCard.date.setHours(hour, minute);
        this.setState((prevState, props) => ({
          ...prevState,
          selectedCard: {
            ...prevState.selectedCard,
            startTime: true
          }
        }));
      }
    } catch ({ code, message }) {
      console.warn("Cannot open time picker", message);
    }
  }

  generateCoursePickerItems() {
    const items = [];
    courses.forEach(item =>
      items.push(
        <Picker.Item label={item.identifier} value={item.identifier} />
      )
    );
    return items;
  }

  componentWillMount() {
    const newCard = this.props.navigation.getParam("newCard", false);

    if (!newCard) {
      this.setState(prevState => ({
        ...prevState,
        selectedCard: {
          ...this.props.selectedCard
        }
      }));
    } else {
      this.setState(prevState => ({
        ...prevState,
        selectedCard: {
          ...prevState.selectedCard,
          date: this.props.navigation.getParam("newCardDate", new Date())
        }
      }));
    }
  }

  render() {
    let currentStartTime;
    if (this.state.selectedCard.startTime) {
      currentStartTime = (
        <Text>Start Time: {this.state.selectedCard.date.toString()}</Text>
      );
    } else {
      currentStartTime = (
        <Text style={{ marginTop: 10, fontSize: 16 }}>
          Start Time: Not Selected
        </Text>
      );
    }

    return (
      <View style={{ flex: 1, margin: 5 }}>
        <Text style={{ marginTop: 10, fontSize: 16 }}>
          Course: {this.state.selectedCard.course}
        </Text>
        <Picker
          selectedValue={this.state.selectedCard.course}
          style={{ height: 50, width: "100%", marginTop: 10 }}
          onValueChange={(itemValue, itemIndex) => {
            this.setState((prevState, props) => ({
              ...prevState,
              selectedCard: {
                ...prevState.selectedCard,
                course: itemValue
              }
            }));
          }}
        >
          {this.generateCoursePickerItems()}
        </Picker>

        <Text style={{ marginTop: 10, fontSize: 16 }}>
          Duration: {this.state.selectedCard.duration} minutes
        </Text>
        <Picker
          selectedValue={this.state.selectedCard.duration.toString()}
          style={{ height: 50, width: "100%", marginTop: 10 }}
          onValueChange={(itemValue, itemIndex) => {
            this.setState((prevState, props) => ({
              ...prevState,
              selectedCard: {
                ...prevState.selectedCard,
                duration: parseInt(itemValue)
              }
            }));
          }}
        >
          <Picker.Item label="0:15" value="15" />
          <Picker.Item label="0:30" value="30" />
          <Picker.Item label="0:45" value="45" />
          <Picker.Item label="1:00" value="60" />
          <Picker.Item label="1:15" value="75" />
          <Picker.Item label="1:30" value="90" />
          <Picker.Item label="2:00" value="120" />
          <Picker.Item label="2:30" value="150" />
          <Picker.Item label="3:00" value="180" />
          <Picker.Item label="3:30" value="210" />
        </Picker>

        {currentStartTime}

        <View style={{ margin: 5, marginTop: 10 }}>
          <Button
            title="Select Start Time"
            onPress={() => this.openTimePickerDialog()}
          />
        </View>

        <View style={{ marginTop: 0, flexDirection: "row" }}>
          <View style={{ flex: 1, margin: 5 }}>
            <Button
              title="Close and Discard"
              style={{ flex: 1, margin: 5 }}
              onPress={() => this.props.navigation.goBack()}
            />
          </View>
          <View style={{ flex: 1, margin: 5 }}>
            <Button
              title="Close and Save"
              onPress={() => this.onPressCloseSave()}
            />
          </View>
        </View>
      </View>
    );
  }

  onPressCloseSave() {
    const newCard = this.props.navigation.getParam("newCard", false);
    if (newCard) {
      this.addNewCard();
      this.props.addCard(
        this.state.selectedCard.type,
        this.state.selectedCard.course,
        this.state.selectedCard.duration,
        this.state.selectedCard.date,
        this.state.selectedCard.startTime
      );
    } else {
      this.props.editCard(
        this.state.selectedCard.key,
        this.state.selectedCard.type,
        this.state.selectedCard.course,
        this.state.selectedCard.duration,
        this.state.selectedCard.date,
        this.state.selectedCard.startTime
      );
    }
    this.props.navigation.goBack();
  }

  addNewCard() {
    const selDateStr = dateToStandard(this.state.selectedCard.date);

    fetch("http://178.63.162.108:8080/api/student/card", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        course: {
          title: this.state.selectedCard.course,
          color: "#000000"
        },
        duration: minutesToHourStr(this.state.selectedCard.duration),
        startTime: this.state.selectedCard.startTime ? selDateStr : null,
        dueDate: selDateStr,
        description: "no description"
      })
    })
      .then(response => {
        if (!response.ok) {
          alert(`could not create new card on server: ${response.statusText}`);
        }
      })
      .catch(error => {
        alert(error);
      });
  }
}

const mapStateToProps = state => {
  return {
    // cards: state.cards.cards,
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
