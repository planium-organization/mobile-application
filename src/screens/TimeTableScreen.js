import React, { Component } from "react";
import {
  View,
  StyleSheet,
  Text,
  Button,
  Modal,
  TouchableNativeFeedback
} from "react-native";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import DayColumn from "./../Components/DayColunm";
import { ScrollView } from "react-native-gesture-handler";
import ViewCommentsModal from "./../modals/ViewComments";

import {
  addCard,
  selectCard,
  deselectCard,
  deleteCard,
  showComments,
  hideComments
} from "../store/CardsActions";

class TimeTableScreen extends Component {
  state = {
    modalVisible: false
  };

  addCard() {
    this.props.addCard("todo", "physics", 120, new Date());
  }

  showComments(ofDay) {
    this.props.showComments(ofDay);
  }

  getDayCards(dayId) {
    const result = this.props.cards.filter(cardItem => cardItem.date == dayId);
    return result;
  }

  render() {
    return (
      <View style={styles.main}>
        {/* Column Capital */}
        <View style={styles.ColumnCapital}>
          <View style={styles.ColumnCapitalBox}>
            <TouchableNativeFeedback
              onPress={() => this.showComments(new Date())}
            >
              <Text
                style={{ textAlign: "center", textAlignVertical: "center" }}
              >
                Yesterday
              </Text>
            </TouchableNativeFeedback>
          </View>
          <View
            style={[
              styles.ColumnCapitalBox,
              { borderLeftWidth: 1, borderRightWidth: 1 }
            ]}
          >
            <Text style={{ textAlign: "center", textAlignVertical: "center" }}>
              Today
            </Text>
          </View>
          <View style={styles.ColumnCapitalBox}>
            <Text style={{ textAlign: "center", textAlignVertical: "center" }}>
              Tommorow
            </Text>
          </View>
        </View>

        {/* Day columns */}
        <View style={{ flex: 1 }}>
          <ScrollView style={{ height: "100%" }}>
            <View style={styles.DayColumnScroll}>
              {/* columns */}
              <DayColumn
                name={"sdgfd"}
                navigation={this.props.navigation}
                dayCards={this.getDayCards("day1")}
              />

              <DayColumn
                name={"name2"}
                navigation={this.props.navigation}
                dayCards={this.getDayCards("day2")}
              />

              <DayColumn
                name={"name3"}
                navigation={this.props.navigation}
                dayCards={this.getDayCards("day3")}
              />
            </View>
          </ScrollView>
        </View>

        <ViewCommentsModal/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  ColumnCapitalBox: {
    padding: 2,
    paddingLeft: 2,
    paddingTop: 10,
    paddingBottom: 10,
    flex: 1,
    flexDirection: "column",
    justifyContent: "center"
  },
  ColumnCapital: {
    borderWidth: 1,
    paddingTop: 10,
    paddingBottom: 5,
    height: 70,
    flexDirection: "row",
    justifyContent: "center"
  },
  DayColumnScroll: {
    height: 800,
    borderBottomWidth: 1,
    flexDirection: "row",
    justifyContent: "space-around"
  },
  main: {
    flexDirection: "column",
    flex: 1
  },
  timeTableEntity: {}
});

const mapStateToProps = state => {
  return {
    cards: state.cards.cards,
    selectedCard: state.cards.selectedCard,
    visibleComments: state.cards.visibleComments
  };
};

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      addCard,
      deleteCard,
      selectCard,
      deselectCard,
      showComments,
      hideComments
    },
    dispatch
  );

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TimeTableScreen);
