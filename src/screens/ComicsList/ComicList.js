import React from "react";

import { View, Text, Button } from "react-native";

export default class ComicList extends React.Component {
  render() {
    const { navigate } = this.props.navigation;

    return (
      <View>
        <Text>Comic List</Text>
        <Button
          onPress={() => navigate("Details", { tests: "Pass img url here" })}
          title="Go to comic detail page"
        ></Button>
      </View>
    );
  }
}
