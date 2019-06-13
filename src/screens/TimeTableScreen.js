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
  hideComments,
  tableCurrentDate
} from "../store/CardsActions";

function areInSameDay(date1, date2) {
  const result =
    date1.getFullYear() == date2.getFullYear() &&
    date1.getMonth() == date2.getMonth() &&
    date1.getDay() == date2.getDay();
  return result;
}

class TimeTableScreen extends Component {
  addCard() {
    this.props.addCard("todo", "physics", 120, new Date());
  }

  getDateForColumn(columnIndex) {
    let retVal = new Date(this.props.currDate);
    retVal.setDate(retVal.getDate() + columnIndex);
    return retVal;
  }

  getDateForColumnString(columnIndex) {
    const current = this.getDateForColumn(columnIndex);
    return current.toLocaleDateString("en-US", {
      timeZone: "Asia/Tehran"
    });
  }

  getVisualWeekday(columnIndex) {
    const current = this.getDateForColumn(columnIndex);
    return current.toLocaleDateString("en-US", {
      timeZone: "Asia/Tehran",
      weekday: "long"
    });
  }

  showComments(ofDay) {
    this.props.showComments(ofDay);
  }

  getDayCards(date) {
    const result = this.props.cards.filter(cardItem =>
      areInSameDay(cardItem.date, date)
    );
    return result;
  }

  render() {
    return (
      <View style={styles.main}>
        {/* Column Capital */}
        <View style={styles.ColumnCapital}>
          <View style={styles.ColumnCapitalBox}>
            <TouchableNativeFeedback
              onPress={() => this.showComments(this.getDateForColumn(0))}
            >
              <View>
                <Text
                  style={{ textAlign: "center", textAlignVertical: "center" }}
                >
                  {this.getVisualWeekday(0)}
                </Text>
                <Text
                  style={{ textAlign: "center", textAlignVertical: "center" }}
                >
                  {this.getDateForColumnString(0)}
                </Text>
              </View>
            </TouchableNativeFeedback>
          </View>
          <View
            style={[
              styles.ColumnCapitalBox,
              { borderLeftWidth: 1, borderRightWidth: 1 }
            ]}
          >
            <TouchableNativeFeedback
              onPress={() => this.showComments(this.getDateForColumn(1))}
            >
              <View>
                <Text
                  style={{ textAlign: "center", textAlignVertical: "center" }}
                >
                  {this.getVisualWeekday(1)}
                </Text>
                <Text
                  style={{ textAlign: "center", textAlignVertical: "center" }}
                >
                  {this.getDateForColumnString(1)}
                </Text>
              </View>
            </TouchableNativeFeedback>
          </View>
          <View style={styles.ColumnCapitalBox}>
            <TouchableNativeFeedback
              onPress={() => this.showComments(this.getDateForColumn(2))}
            >
              <View>
                <Text
                  style={{ textAlign: "center", textAlignVertical: "center" }}
                >
                  {this.getVisualWeekday(2)}
                </Text>
                <Text
                  style={{ textAlign: "center", textAlignVertical: "center" }}
                >
                  {this.getDateForColumnString(2)}
                </Text>
              </View>
            </TouchableNativeFeedback>
          </View>
        </View>

        {/* Day columns */}
        <View style={{ flex: 1 }}>
          <ScrollView style={{ height: "100%" }}>
            <View style={styles.DayColumnScroll}>
              {/* columns */}
              <DayColumn
                navigation={this.props.navigation}
                dayCards={this.getDayCards(this.getDateForColumn(0))}
                date={this.getDateForColumn(0)}
              />
              <DayColumn
                navigation={this.props.navigation}
                dayCards={this.getDayCards(this.getDateForColumn(1))}
                date={this.getDateForColumn(1)}
              />
              <DayColumn
                navigation={this.props.navigation}
                dayCards={this.getDayCards(this.getDateForColumn(2))}
                date={this.getDateForColumn(2)}
              />
            </View>
          </ScrollView>
        </View>

        <ViewCommentsModal />
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
    visibleComments: state.cards.visibleComments,
    currDate: state.cards.currDate
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
      hideComments,
      tableCurrentDate
    },
    dispatch
  );

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TimeTableScreen);
