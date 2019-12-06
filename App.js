import ComicsList from "./src/screens/ComicsList/ComicList";
import ComicsDetails from "./src/screens/ComicDetails/ComicDetails";

import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";

const MainNavigator = createStackNavigator({
  Home: { screen: ComicsList },
  Details: { screen: ComicsDetails }
});

const App = createAppContainer(MainNavigator);

export default App;
