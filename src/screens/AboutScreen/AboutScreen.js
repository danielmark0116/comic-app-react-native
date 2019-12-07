import React from "react";
import { View } from "react-native";

import { Center } from "../../common/Center/Center.styled";
import { CustomText } from "../../common/CustomText/CustomText.styled";
import { CustomTitle } from "../../common/CustomTitle/CustomTitle.styled";

const AboutScreen = () => {
  return (
    <Center>
      <CustomTitle>About</CustomTitle>
      <View style={{ height: 20 }}></View>
      <CustomText size="small">Comics from:</CustomText>
      <CustomText>xkcd.com</CustomText>
      <View style={{ height: 20 }}></View>
      <CustomText>
        It is always fun to see something funny, isn't it?
      </CustomText>
    </Center>
  );
};

export default AboutScreen;
