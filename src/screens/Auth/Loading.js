import React, { Component } from "react";
import {
  Platform,
  StyleSheet,
  Text,
  View,
  ActivityIndicator
} from "react-native";
import AsyncStorage from "@react-native-community/async-storage";

class LoadingScreen extends Component {
  render() {
    let activityIndicatorSize = 80;
    if (Platform.OS === "ios") activityIndicatorSize = "large";

    return (
      <View style={styles.mainView}>
        <ActivityIndicator size={activityIndicatorSize} color="#1155aa" />
        <Text>Please Wait</Text>
      </View>
    );
  }

  componentDidMount() {
    setTimeout(() => {
      this.props.navigation.navigate("Auth");
    }, 2000);
  }
}

const styles = StyleSheet.create({
  mainView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    color: "rgb(255, 50, 50)"
  }
});

export default LoadingScreen;
