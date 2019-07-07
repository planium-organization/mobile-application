import React, { Component } from "react";
import { View, ScrollView, ActivityIndicator } from "react-native";
import { Text, Card, ListItem, Button, Input } from "react-native-elements";
import Icon from "react-native-vector-icons/FontAwesome";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import { getCoursesFulfilled } from "./../store/ProfileActions";

class CourseEditScreen extends Component {
  state = {
    loading: true,
    courseId: "-1",
    courseTitle: "NO COURSE",
    courseTitleInit: "NO COURSE",
    courseColor: "#000000",
    courseColorInit: "#000000"
  };

  onFetchCourse() {
    // fetch(
    //   `http://178.63.162.108:8080/api/student/course/${this.state.courseId}`,
    //   {
    //     method: "GET",
    //     headers: {
    //       Accept: "application/json",
    //       "Content-Type": "application/json"
    //     },
    //     timeout: 5000
    //   }
    // )
    //   .then(response => response.json())
    //   .then(response => {
    //     this.setState(prevState => {
    //       return {
    //         ...prevState,
    //         loading: false,
    //         course: response
    //       };
    //     });
    //   })
    //   .catch(err => {
    //     alert(err.toString());
    //     this.props.navigation.goBack();
    //   });

    this.setState(prevState => {
      return {
        ...prevState,
        loading: false,
        courseTitle: "This Course",
        courseTitleInit: "This Course",
        courseColor: "#4345df",
        courseColorInit: "#4345df"
      };
    });
  }

  componentWillMount() {
    this.setState(prevState => {
      return {
        ...prevState,
        courseId: this.props.navigation.getParam("courseId", "-1"),
        loading: true
      };
    });

    this.onFetchCourse();
  }

  submitCourse() {}

  render() {
    let pageContent = (
      <View style={{ height: "100%", alignItems: "center", justifyContent: "center" }}>
        <ActivityIndicator size="large" color="#0000ff" />
      </View>
    );

    if (!this.state.loading) {
      pageContent = (
        <View>
          <Input
            placeholder={this.state.courseTitleInit}
            leftIcon={<Icon name="book" size={24} color="black" />}
            onChangeText={newText =>
              this.setState(prevState => ({
                ...prevState,
                courseTitle: newText
              }))
            }
          />
          <Input
            placeholder={this.state.courseColorInit}
            leftIcon={<Icon name="tint" size={24} color="black" />}
            onChangeText={text =>
              this.setState(prevState => ({ ...prevState, courseColor: text }))
            }
          />
          <View
            style={{
              backgroundColor: this.state.courseColor,
              height: 20,
              borderRadius: 10,
              margin: 15
            }}
          />

          <View style={{ marginLeft: 15, marginRight: 15 }}>
            <Button
              title="Submit"
              type="outline"
              onPress={() => this.submitCourse()}
            />
          </View>
        </View>
      );
    }

    return pageContent;
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
)(CourseEditScreen);
