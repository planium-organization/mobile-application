import React, { Component } from "react";

import { View, StyleSheet , Text} from "react-native";
import TimeTableEntity from "../Components/TimeTableEntity";
import DayColumn from './../Components/DayColunm';
import { ScrollView } from "react-native-gesture-handler";
import { connect } from "react-redux";
import { addCard, selectCard, deselectCard, deleteCard } from '../store/CardsActions';
import Card from "../Components/Card";


class TimeTableScreen extends Component {
  render() {
    return (
      <View style={styles.main}>


        {/* Column Capital */}
        <View style={styles.ColumnCapital}>
          <View style={styles.ColumnCapitalBox}>
            <Text style={{ textAlign: 'center', textAlignVertical:'center'}}>Yesterday</Text>
          </View>
          <View style={[styles.ColumnCapitalBox, { borderLeftWidth: 1, borderRightWidth: 1}]}>
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
              <DayColumn name={'sdgfd'} allCards={[card2, card1,card3,card1]}/>
             

              <DayColumn name={'name2'} allCards={[card1, card3, card2, card1, card3]}/>
            

              <DayColumn name={'name3'} allCards={[card2, card3, card1]}/>
                
              
            </View>
          </ScrollView>
        </View>
      </View>
    );
  }
}
var card1 = {
  name:'Physics',
  height: 100,
  color: 'red'
};
var card2 = {
  name: 'Biology',
  height: 130,
  color: 'green'
};
var card3 = {
  name: 'Math',
  height: 80,
  color: '#a3523f'
}
const styles = StyleSheet.create({
  ColumnCapitalBox: {
    padding: 2,
    paddingLeft: 2,
    //borderLeftWidth: 1,
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
    paddingBottom: 5,
    height: 70,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  DayColumnScroll: {
    height: 800,
    borderBottomWidth: 1,
    // paddingTop: 10,
    flexDirection: 'row',
    justifyContent: 'space-around',
    // alignItems: 'stretch',
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
