/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from "react";
import { Platform, StyleSheet, Text, View } from "react-native";
import {
  createStackNavigator,
  createAppContainer,
  createBottomTabNavigator,
  createSwitchNavigator
} from "react-navigation";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

import TimeTableScreen from "./src/screens/TimeTableScreen";
import CardEditScreen from "./src/screens/CardEditScreen";
import AnalysisScreen from "./src/screens/AnalysisScreen";
import ChannelScreen from "./src/screens/ChannelScreen";
import ProfileScreen from "./src/screens/profileScreen";
import CourseViewScreen from "./src/screens/CourseViewScreen";
import CourseEditScreen from "./src/screens/CourseEditScreen";

import LoginScreen from "./src/screens/Auth/Login";
import LoadingScreen from "./src/screens/Auth/Loading";
import SignUpScreen from "./src/screens/Auth/SignUp";
import ResetPasswordScreen from "./src/screens/Auth/ResetPassword";

const TimeTableNavigator = createStackNavigator(
  {
    TimeTable: { screen: TimeTableScreen },
    CardEdit: { screen: CardEditScreen }
  },
  {
    initialRouteName: "TimeTable"
  }
);

const profileScreenNavigation = createStackNavigator({
  ProfileDetails: { screen: ProfileScreen },
  CourseView: { screen: CourseViewScreen },
  CourseEdit: { screen: CourseEditScreen }
});

const AppTabNavigator = createBottomTabNavigator(
  {
    TimeTable: TimeTableNavigator,
    Analysis: { screen: AnalysisScreen },
    Channels: { screen: ChannelScreen },
    Profile: profileScreenNavigation
  },
  {
    defaultNavigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, horizontal, tintColor }) => {
        // find icons here https://materialdesignicons.com/
        const { routeName } = navigation.state;
        let iconName;
        switch (routeName) {
          case "TimeTable": {
            iconName = "timetable";
            break;
          }
          case "Analysis": {
            iconName = "chart-donut-variant";
            break;
          }
          case "Channels": {
            iconName = "forum";
            break;
          }
          case "Profile": {
            iconName = "account-badge-horizontal";
            break;
          }
        }

        return <Icon name={iconName} size={25} color={tintColor} />;
      }
    }),
    tabBarOptions: {
      activeTintColor: "red",
      inactiveTintColor: "black"
    }
  }
);

const AppAuthNavigator = createStackNavigator(
  {
    Login: { screen: LoginScreen },
    SignUp: { screen: SignUpScreen },
    ResetPassword: { screen: ResetPasswordScreen }
  },
  {
    initialRouteName: "Login"
  }
);

//TODO: fix init routname
const AppMainSwitch = createSwitchNavigator(
  {
    AuthLoading: LoadingScreen,
    App: AppTabNavigator,
    Auth: AppAuthNavigator
  },
  {
    initialRouteName: "App"
  }
);

const AppContainer = createAppContainer(AppMainSwitch);


console.disableYellowBox = true;

export default class App extends React.Component {
  render() {
    return <AppContainer />;
  }
}
