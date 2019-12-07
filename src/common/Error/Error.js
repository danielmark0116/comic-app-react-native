import React from "react";
import { Button } from "react-native";

import { Center } from "../Center/Center.styled";
import { CustomText } from "../CustomText/CustomText.styled";

const Error = props => {
  const { action } = props;

  return (
    <Center>
      <CustomText>Something went wrong...</CustomText>
      <Button title="Try again" onPress={() => action()} />
    </Center>
  );
};

export default Error;
