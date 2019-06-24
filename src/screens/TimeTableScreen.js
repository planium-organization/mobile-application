import React, { Component } from "react";
import {
  View,
  StyleSheet,
  Text,
  Button,
  Modal,
  ScrollView,
  Dimensions,
  TouchableNativeFeedback,
  ActivityIndicator
} from "react-native";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import DayColumn from "./../Components/DayColunm";
import ViewCommentsModal from "./../modals/ViewComments";
import NewCardModal from "./../modals/ViewComments";

import {
  showComments,
  tableCurrentDate,
  addingCardToggle,
  setAllCards,
  reloadAllCards
} from "../store/CardsActions";

function areInSameDay(date1, date2) {
  console.log("tmp");
  const result =
    date1.getFullYear() == date2.getFullYear() &&
    date1.getMonth() == date2.getMonth() &&
    date1.getDay() == date2.getDay();
  return result;
}

class TimeTableScreen extends Component {
  static navigationOptions = {
    headerTitle: (
      <View
        style={{
          flex: 1,
          margin: 5,
          flexDirection: "row"
        }}
      >
        <View style={{ width: 100 }}>
          <Button style={{}} title="Prev" onPress={() => {}} />
        </View>
        <Text
          style={{
            flex: 1,
            fontSize: 16,
            textAlignVertical: "center",
            textAlign: "center"
          }}
        >
          Time Table
        </Text>
        <View style={{ width: 100 }}>
          <Button style={{}} title="Next" onPress={() => {}} />
        </View>
      </View>
    )
  };

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

  getDayCards(date) {
    const result = this.props.cards.filter(cardItem =>
      areInSameDay(cardItem.date, date)
    );
    return result;
  }

  componentDidMount() {
    this.props.reloadAllCards();
    fetch("http://178.63.162.108:8080/api/student/card/2019-06-06/3", {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      }
    })
      .then(response => response.json())
      .then(response => {
        const result = response.map(item => ({
          ...item,
          date: new Date(item.dueDate),
          key: item.id,
          duration: 180,
          course: item.course.title,
          color: item.course.color
        }));
        this.props.setAllCards(result);
      })
      .catch(err => console.error(err));
  }

  render() {
    return (
      <View style={styles.main}>
        {/* Column Capital */}
        <View style={styles.ColumnCapital}>
          <View style={styles.ColumnCapitalBox}>
            <TouchableNativeFeedback
              onPress={() => this.props.showComments(this.getDateForColumn(0))}
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
              onPress={() => this.props.showComments(this.getDateForColumn(1))}
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
              onPress={() => this.props.showComments(this.getDateForColumn(2))}
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
        <ScrollView style={{ flex: 1 }}>
          {this.props.dayColumnLoading === 1 ? (
            <View style={{ flex: 1 }}>
              <ActivityIndicator
                style={{ margin: 40 }}
                size="large"
                color="#0000ff"
              />
            </View>
          ) : (
            <View style={styles.DayColumnScroll}>
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
          )}

          {/* </View> */}
        </ScrollView>

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
    borderBottomWidth: 1,
    paddingTop: 10,
    paddingBottom: 5,
    height: 50,
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
    currDate: state.cards.currDate,
    addingCard: state.cards.addingCard,
    dayColumnLoading: state.cards.dayColumnLoading
  };
};

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      showComments,
      tableCurrentDate,
      addingCardToggle,
      setAllCards,
      reloadAllCards
    },
    dispatch
  );

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TimeTableScreen);
