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
  getCardsPending,
  getCardsFulfilled,
  getCardsRejected,
  goTableNext,
  goTablePrev
} from "../store/CardsActions";

function areInSameDay(date1, date2) {
  const result =
    date1.getFullYear() == date2.getFullYear() &&
    date1.getMonth() == date2.getMonth() &&
    date1.getDay() == date2.getDay();
  return result;
}

function timeStrToMinutes(timeStr) {
  let hours = timeStr.split(":")[0];
  let minutes = timeStr.split(":")[1];
  hours = Number.parseInt(hours);
  minutes = Number.parseInt(minutes);
  const total = hours * 60 + minutes;
  return total < 360 ? total : 360;
}

class TimeTableScreen extends Component {
  static navigationOptions = {
    header: null
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

  lastCardFetch = undefined;

  fetchCards() {
    // no fetchCard more frequent than one per 5 seconds
    if (
      this.lastCardFetch !== undefined &&
      (Date.now() - this.lastCardFetch).getSeconds() < 5
    )
      return;
    if (this.props.cardsLoading) return;
    lastCardFetch = Date.now();

    this.props.getCardsPending();

    let tmpDate = new Date(this.props.currDate);
    // fetch from 3 days before to three days after current shown cards
    tmpDate.setDate(tmpDate.getDate() - 3);

    const year = 1900 + tmpDate.getYear();
    const month = 1 + tmpDate.getMonth();
    const day = tmpDate.getDate();
    fetch(
      `http://178.63.162.108:8080/api/student/card/${year}-${month}-${day}/9`,
      {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json"
        },
        timeout: 5000
      }
    )
      .then(response => response.json())
      .then(response => {
        const result = response.map(item => ({
          ...item,
          date: new Date(item.dueDate),
          key: item.id,
          duration: timeStrToMinutes(item.duration),
          course: item.course.title,
          color: item.course.color
        }));
        this.props.getCardsFulfilled(result);
      })
      .catch(err => this.props.getCardsRejected(err.toString()));
  }

  componentDidMount() {
    this.fetchCards();
    setInterval(() => {
      this.fetchCards();
    }, 10000);
  }

  onPressNext() {
    this.props.goTableNext();
    this.fetchCards();
  }

  onPressPrev() {
    this.props.goTablePrev();
    this.fetchCards();
  }

  render() {
    let loadingBar;

    if (this.props.cardsLoading === true) {
      loadingBar = (
        <View
          style={{
            height: 40,
            flexDirection: "row",
            backgroundColor: "#eeeeee"
          }}
        >
          <ActivityIndicator
            style={{ margin: 5, marginLeft: 10, width: 30 }}
            size="large"
            color="#0000ff"
          />
          <View style={{ justifyContent: "center", marginLeft: 10 }}>
            <Text>Loading</Text>
          </View>
        </View>
      );
    }

    return (
      <View style={styles.main}>
        <View
          style={{
            height: 50,
            borderColor: "black",
            borderBottomWidth: 1,
            flexDirection: "row",
            justifyContent: "space-between"
          }}
        >
          <View style={{ margin: 5 }}>
            <Button title="Prev" onPress={() => this.onPressPrev()} />
          </View>
          <View style={{ justifyContent: "center" }}>
            <Text style={{ fontSize: 16, color: "black", fontWeight: "bold" }}>
              Time Table
            </Text>
          </View>
          <View style={{ margin: 5 }}>
            <Button title="Next" onPress={() => this.onPressNext()} />
          </View>
        </View>
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

          {/* </View> */}
        </ScrollView>

        {loadingBar}

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
    dayColumnLoading: state.cards.dayColumnLoading,
    cardsLoading: state.cards.cardsLoading
  };
};

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      showComments,
      tableCurrentDate,
      addingCardToggle,
      getCardsPending,
      getCardsFulfilled,
      getCardsRejected,
      goTableNext,
      goTablePrev
    },
    dispatch
  );

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TimeTableScreen);
