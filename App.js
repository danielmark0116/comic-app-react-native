import React from "react";
import { View, Text } from "react-native";

import { store } from "./src/store";
import { Provider } from "react-redux";
import { theme } from "./src/styled/theme";
import { ThemeProvider } from "styled-components";

import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";

import ComicsListScreen from "./src/screens/ComicsListScreen/ComicListScreen";
import ComicsDetailsScreen from "./src/screens/ComicDetailsScreen/ComicDetailsScreen";

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
  <ThemeProvider theme={theme}>
    <Provider store={store}>
      <App style={{ flex: 1 }} />
    </Provider>
  </ThemeProvider>
);

export default Root;
