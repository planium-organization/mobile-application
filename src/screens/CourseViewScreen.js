import React, { Component } from "react";
import { Button, View, Text, ScrollView } from "react-native";
import { createStackNavigator, createAppContainer } from "react-navigation";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import { getCoursesFulfilled } from "./../store/ProfileActions";

class CourseViewScreen extends Component {
  componentWillMount() {
    fetch(`http://178.63.162.108:8080/api/student/course/`, {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      timeout: 5000
    })
      .then(response => response.json())
      .then(response => {
        // this.props.getCardsFulfilled(result);
      });
    // .catch(err => this.props.getCardsRejected(err.toString()));
    this.props.getCoursesFulfilled([
      {
        id: "546456",
        title: "Test",
        color: "#786587"
      },
      {
        id: "23654",
        title: "Intertainment",
        color: "#ff0000"
      }
    ]);
  }

  render() {
    let courses = [];

    this.props.courses.forEach((value, index) => {
      courses.push(
        <View
          key={value.id}
          style={{
            borderColor: "black",
            borderWidth: 1,
            width: "100%",
            flexDirection: "row",
            padding: 7
          }}
        >
          <View
            style={{
              backgroundColor: value.color,
              height: 30,
              width: 30,
              borderRadius: 15,
              padding: 7
            }}
          />
          <Text
            style={{
              fontSize: 18,
              color: "black",
              flex: 1,
              paddingLeft: 10,
              paddingRight: 10
            }}
          >
            {index} - {value.title}
          </Text>
          <View style={{ width: 60 }}>
            <Button title="Edit" />
          </View>
        </View>
      );
    });

    return (
      <ScrollView>
        <View
          style={{ flex: 1, alignItems: "center", justifyContent: "center" }}
        >
          {courses}
        </View>
      </ScrollView>
    );
  }
}

const mapStateToProps = state => {
  return {
    courses: state.profile.courses
  };
};

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      getCoursesFulfilled
    },
    dispatch
  );

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CourseViewScreen);
