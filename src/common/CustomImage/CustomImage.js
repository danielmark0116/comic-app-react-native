import React, { useState, useEffect } from "react";
import { Animated } from "react-native";

import { CustomImg } from "./CustomImage.styled";

const CustomImage = props => {
  const [animatedValue] = useState(new Animated.Value(0));
  const { source } = props;

  useEffect(() => {
    Animated.timing(animatedValue, {
      toValue: 1,
      duration: 1000
    }).start();
  }, [""]);

  return (
    <Animated.View
      style={[
        { flex: 1 },
        {
          opacity: animatedValue
        }
      ]}
    >
      <CustomImg source={{ uri: source }} resizeMode="contain" />
    </Animated.View>
  );
};

export default CustomImage;
