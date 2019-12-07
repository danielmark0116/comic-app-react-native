import React from "react";
import { View, Text } from "react-native";

import { store } from "./src/store";
import { Provider } from "react-redux";

import ComicsListScreen from "./src/screens/ComicsListScreen/ComicListScreen";
import ComicsDetailsScreen from "./src/screens/ComicDetailsScreen/ComicDetailsScreen";

import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";

const MainNavigator = createStackNavigator(
  {
    Home: { screen: ComicsListScreen },
    Details: { screen: ComicsDetailsScreen }
  },
  {
    defaultNavigationOptions: {
      headerTitle: (
        <View style={{ backgroundColor: "red" }}>
          <Text>XKCD</Text>
        </View>
      )
    }
  }
);

const App = createAppContainer(MainNavigator);

const Root = () => (
  <Provider store={store}>
    <App />
  </Provider>
);

export default Root;
