import React from "react";
import { View, Text } from "react-native";
import { withNavigation } from "react-navigation";

const ComicDetails = props => {
  const { navigation } = props;

  return (
    <View>
      <Text>Comic pic</Text>
      <Text>{navigation.getParam("img", null)}</Text>
    </View>
  );
};

export default withNavigation(ComicDetails);
