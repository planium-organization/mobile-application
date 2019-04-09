import React, { Component } from "react";
import {
  Platform,
  StyleSheet,
  Text,
  View,
  TextInput,
  Button
} from "react-native";

class LoginScreen extends Component {
  render() {
    return (
      <View style={styles.loginView}>
        <Text style={styles.pageTitle}>Login</Text>
        <View style={styles.credentialsView}>
          <TextInput
            placeholder="Phone number"
            textContentType="telephoneNumber"
            keyboardType="phone-pad"
            autoCorrect={false}
            selectTextOnFocus={true}
            returnKeyType="next"
          />
          <TextInput
            placeholder="Password"
            textContentType="password"
            autoCorrect={false}
            secureTextEntry={true}
            selectTextOnFocus={true}
            autoCapitalize="none"
            returnKeyType="done"
          />
          <Button
            title="Login"
            onPress={() => {
              this.props.navigation.navigate("App");
            }}
          />
        </View>
        <Text
          style={styles.textOptions}
          onPress={() => {
            this.props.navigation.navigate("SignUp");
          }}
        >
          create an account if you don't have one
        </Text>
        <Text>
          ----------------------------------- OR
          -----------------------------------
        </Text>
        <Text
          style={styles.textOptions}
          onPress={() => {
            this.props.navigation.navigate("ResetPassword");
          }}
        >
          reset password if you forgot your password
        </Text>
      </View>
    );
  }
}

styles = StyleSheet.create({
  loginView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  pageTitle: {
    color: "black"
  },
  credentialsView: {
    width: "80%",
    marginBottom: 10
  },
  textOptions: {
    padding: 7
  }
});

export default LoginScreen;
