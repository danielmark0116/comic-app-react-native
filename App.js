import React from "react";
import * as Font from "expo-font";

import { store } from "./src/store";
import { Provider } from "react-redux";
import { theme } from "./src/styled/theme";
import { ThemeProvider } from "styled-components";

import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";

import ComicsListScreen from "./src/screens/ComicsListScreen/ComicListScreen";
import ComicsDetailsScreen from "./src/screens/ComicDetailsScreen/ComicDetailsScreen";
import AboutPage from "./src/screens/AboutScreen/AboutScreen";
import HeaderTitle from "./src/common/HeaderTitle/HeaderTitle";

import Icon from "react-native-vector-icons/AntDesign";

const MainNavigator = createStackNavigator(
  {
    Home: { screen: ComicsListScreen },
    Details: { screen: ComicsDetailsScreen },
    About: { screen: AboutPage }
  },
  {
    defaultNavigationOptions: {
      headerStyle: {
        elevation: 1,
        shadowOpacity: 1,
        borderBottomWidth: 0
      },
      headerTitle: <HeaderTitle></HeaderTitle>,
      headerBackTitle: null,
      headerTintColor: "black",
      headerBackTitleStyle: { fontSize: 12 },
      headerBackImage: (
        <Icon name="back" style={{ padding: 10 }} size={20}></Icon>
      )
    }
  }
);

const App = createAppContainer(MainNavigator);

class Root extends React.Component {
  constructor() {
    super();
    this.state = {
      fontLoaded: false
    };
  }

  async componentWillMount() {
    await Font.loadAsync({
      Dosis: require("./assets/fonts/Dosis.ttf"),
      DosisBold: require("./assets/fonts/Dosis-Bold.ttf")
    });

    this.setState({
      fontLoaded: true
    });
  }

  render() {
    const { fontLoaded } = this.state;

    return (
      <ThemeProvider theme={theme}>
        <Provider store={store}>
          {fontLoaded && <App style={{ flex: 1 }} />}
        </Provider>
      </ThemeProvider>
    );
  }
}

export default Root;
