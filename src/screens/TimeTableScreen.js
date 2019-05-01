import React, { Component } from "react";
import { View, StyleSheet , Text} from "react-native";
import TimeTableEntity from "../Components/TimeTableEntity";
import { ScrollView } from "react-native-gesture-handler";

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
              <View style={{ flex: 1, borderWidth: 1}}> 
                <Text>card1</Text>
              </View>

              <View style={{ flex: 1, borderWidth: 1 }}>
                <Text>card</Text>
              </View>

              <View style={{ flex: 1, borderWidth:1 }}>
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

export default TimeTableScreen;
