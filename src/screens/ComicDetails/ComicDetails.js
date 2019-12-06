import React from "react";

import { View, Text } from "react-native";

export default class ComicDetails extends React.Component {
  static navigationOptions = {
    title: "Comics Details"
  };

  render() {
    return (
      <View>
        <Text>Comic details</Text>
        <Text>{this.props.navigation.getParam("tests", "no value")}</Text>
      </View>
    );
  }
}
