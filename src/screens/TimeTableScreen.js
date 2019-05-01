import React, { Component } from "react";

import { View, StyleSheet , Text} from "react-native";
import TimeTableEntity from "../Components/TimeTableEntity";
import { ScrollView } from "react-native-gesture-handler";
import { connect } from "react-redux";
import { addCard, selectCard, deselectCard, deleteCard } from '../store/CardsActions';


class TimeTableScreen extends Component {
  render() {
    this.state.onAddCard("todo", "physics", 120, new Date());
    return (
      <View style={styles.main}>


        {/* Column Capital */}
        <View style={styles.ColumnCapital}>
          <View style={styles.ColumnCapitalBox}>
            <Text style={{ textAlign: 'center', textAlignVertical:'center'}}>Yesterday</Text>
          </View>
          <View style={styles.ColumnCapitalBox}>
            <Text style={{ textAlign: 'center', textAlignVertical: 'center' }}>Today</Text>
          </View>
          <View style={styles.ColumnCapitalBox}>
            <Text style={{ textAlign: 'center', textAlignVertical: 'center' }}>Tommorow</Text>
          </View>  
        </View>

        {/* Day columns */}
        <View style={{ flex: 1 }}>
          <ScrollView style={{height: '100%'}}>
            <View style={styles.DayColumnScroll}>
              {/* columns */}
              <View style={{ flex: 1, borderWidth: 2}}> 
                <Text>card1</Text>
              </View>

              <View style={{ flex: 1, borderWidth: 2 }}>
                <Text>card</Text>
              </View>

              <View style={{ flex: 1, borderWidth:2 }}>
                <Text>card</Text>
              </View>  
              
            </View>
          </ScrollView>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  ColumnCapitalBox: {
    padding: 2,
    paddingLeft: 2,
    borderLeftWidth: 1,
    paddingTop: 10,
    paddingBottom: 10,
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    // alignItems: 'stretch',
  },
  ColumnCapital: {
    borderWidth: 1,
    paddingTop: 10,
    paddingBottom: 10,
    height: 70,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  DayColumnScroll: {
    height: 400,
    borderBottomWidth: 4,
    paddingTop: 10,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'stretch',
  },
    main: {
        flexDirection: 'column',
        flex: 1,
        // borderWidth: 1
        //width: "100%"
    },
    timeTableEntity: {
        // height: 60
    }

});


const mapStateToProps = state => {
  return {
    cards: state.cards.cards,
    selectedCard: state.cards.selectedCard
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onAddCard: (cType, cCourse, cDuration, cStartTime) => {
      return dispatch(addCard(cType, cCourse, cDuration, cStartTime))
    },
    onDeleteCard: () => dispatch(deleteCard()),
    onSelectCard: key => dispatch(selectCard(key)),
    onDeselectCard: () => dispatch(deselectCard())
  };
};

// export default TimeTableScreen;
export default connect(mapStateToProps, mapDispatchToProps)(TimeTableScreen);
