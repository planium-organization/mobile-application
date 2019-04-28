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

import HomeScreen from "./src/screens/homeScreen";
import TimeTableScreen from "./src/screens/TimeTableScreen";
import ProfileScreen from "./src/screens/profileScreen";
import LoginScreen from "./src/screens/Auth/Login";
import LoadingScreen from "./src/screens/Auth/Loading";
import SignUpScreen from "./src/screens/Auth/SignUp";
import ResetPasswordScreen from "./src/screens/Auth/ResetPassword";

const AppTabNavigator = createBottomTabNavigator(
  {
    Home: { screen: HomeScreen },
    TimeTable: { screen: TimeTableScreen },
    Analysis: { screen: HomeScreen },
    Channels: { screen: HomeScreen },
    Profile: { screen: ProfileScreen }
  },
  {
    defaultNavigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, horizontal, tintColor }) => {
        const { routeName } = navigation.state;
        let iconName;
        switch (routeName) {
          case "Home": {
            iconName = "calendar-multiple-check";
            break;
          }
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
            iconName = "account-settings";
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

export default class App extends React.Component {
  render() {
    return <AppContainer />;
  }
}
