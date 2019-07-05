import React from "react";
import { AppRegistry } from "react-native";
import App from "./App";
import { name as appName } from "./app.json";
import { Provider } from "react-redux";
import configureStore from "./src/store/ConfigureStore";
import { ThemeProvider, Button } from "react-native-elements";

const store = configureStore();

const RNRedux = () => (
//   <Provider store={store}>
    <ThemeProvider>
        <Button title="Amir"></Button>
      {/* <App /> */}
    </ThemeProvider>
//   </Provider>
);

AppRegistry.registerComponent(appName, () => RNRedux);
