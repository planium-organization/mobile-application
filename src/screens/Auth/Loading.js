import React, { Component } from "react";
import {
  Platform,
  StyleSheet,
  Text,
  View,
  ActivityIndicator
} from "react-native";
import AsyncStorage from "@react-native-community/async-storage";
import CookieManager from "react-native-cookies";
import { getCookie, setCookie } from "../../util/cookie";
const axios = require("axios");

const baseUrl = "http://178.63.162.108:8090/api";

class LoadingScreen extends Component {
  state = {
    checking: true,
    loginUser: "",
    loginPass: ""
  };

  // async getData(validCookieCb) {
  // try {
  //   const store_username = await AsyncStorage.getItem("@auth_username");
  //   const store_password = await AsyncStorage.getItem("@auth_password");
  //   if (store_username !== null) {
  //     fetch("http://178.63.162.108:8080/api/shared/account/login", {
  //       method: "POST",
  //       headers: {
  //         Accept: "application/json",
  //         "Content-Type": "application/json",
  //         Authorization: `Bearer ${value}`
  //       },
  //       body: JSON.stringify({
  //         email: store_username,
  //         password: store_password
  //       })
  //     })
  //       .then(response => {
  //         if (response.status === 204) {
  //           await AsyncStorage.setItem("@auth_cookie", )
  //           validCookieCb(true);
  //         } else {
  //           validCookieCb(false);
  //         }
  //       })
  //       .catch(err => {
  //         alert(`cookie ${err}`);
  //         validCookieCb(false);
  //       });
  //   } else {
  //     validCookieCb(false);
  //   }
  // } catch (e) {
  //   alert("no storage available");
  //   validCookieCb(false);
  // }
  // }

  render() {
    // this.checkCookie();
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
    // checkCookie() {
    // this.storeData();

    CookieManager.get(baseUrl).then(res => {
      if (Object.entries(res).length !== 0) {
        // axios({
        //   method: "post",
        //   url: baseUrl + "/shared/account/login",
        //   data: {
        //     email: "supervisor@gmail.com",
        //     password: "supervisor123"
        //   },
        //   headers: {
        //     Accept: "application/json",
        //     "Content-Type": "application/json"
        //   }
        // });
        //   fetch(baseUrl + "/shared/account/login", {
        //     method: "POST",
        //     body: JSON.stringify({
        //       email: "supervisor@gmail.com",
        //       password: "supervisor123",
        //       role: "student"
        //     }),
        //     headers: {
        //       Accept: "application/json",
        //       "Content-Type": "application/json",
        //       "content-length": "95",
        //       "Cache-Control": "no-cache",
        //       Host: "178.63.162.108:8090"
        //     }
        //   })
        //     .then(response => {
        //       if (response.status === 204) {
        //         const setCookie = response.headers["Set-Cookie"];
        //         console.warn(setCookie);
        //       }
        //     })
        //     .catch(err => console.warn(`Fail Request: ${err}`));
        //   // this.props.navigation.navigate("Auth");
        // } else {
        //   fetch(baseUrl + "/shared/user/name", {
        //     method: "GET",
        //     headers: {
        //       Accept: "application/json",
        //       "Content-Type": "application/json",
        //       cookie: res
        //     }
        //   }).then(res => {
        //     console.warn(res);
        //   });
      }
    });

    // this.getData(cookieValid => {
    //   if (cookieValid) {
    //     this.props.navigation.navigate("App");
    //   } else {
    //     this.props.navigation.navigate("Auth");
    //   }
    // });
    // setTimeout(() => {
    //   this.props.navigation.navigate("Auth");
    // }, 2000);
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
