import React, { Component } from "react";
import { View, ScrollView } from "react-native";
import { Text, Card, ListItem, Button, Icon } from "react-native-elements";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import { getCoursesFulfilled } from "./../store/ProfileActions";

class CourseViewScreen extends Component {
  componentWillMount() {
    setInterval(() => {
      this.onFetchCourses();
    }, 10000);
  }

  onFetchCourses() {
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
    return (
      <View>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            marginLeft: 15,
            marginRight: 15,
            marginTop: 15
          }}
        >
          <Text style={{ flex: 1, fontSize: 18 }}>
            {this.props.courses.length} Courses
          </Text>
          <Button
            title="New Course"
            type="outline"
            onPress={() => {
              this.props.navigation.push("CourseEdit", {
                courseId: "-1",
                newCourse: true
              });
            }}
          />
        </View>
        <ScrollView>
          <Card containerStyle={{ padding: 0 }}>
            {this.props.courses.map((u, i) => {
              return (
                <ListItem
                  key={u.id}
                  leftAvatar={
                    <View
                      style={{
                        backgroundColor: u.color,
                        height: 30,
                        width: 30,
                        borderRadius: 15,
                        padding: 7
                      }}
                    />
                  }
                  title={u.title}
                  titleStyle={{ color: "black", fontWeight: "bold" }}
                  subtitleStyle={{ color: "gray" }}
                  subtitle="Vice Chairman"
                  chevronColor="white"
                  chevron
                  onPress={() => {
                    this.props.navigation.push("CourseEdit", {
                      courseId: u.id,
                      newCourse: false
                    });
                  }}
                />
              );
            })}
          </Card>
        </ScrollView>
      </View>
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
