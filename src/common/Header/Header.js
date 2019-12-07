import React from "react";
import { Image, Dimensions, Animated } from "react-native";

import HeaderPic from "../../../assets/header_unsplash.jpeg";

const Header = props => {
  const deviceWidth = Dimensions.get("window").width;
  const deviceHeight = Dimensions.get("window").height;

  return (
    <>
      <Animated.Image
        style={[
          {
            width: deviceWidth,
            height: deviceHeight * 0.4,
            position: "absolute",
            top: -100
          },
          { transform: [{ scale: props.offset }] }
        ]}
        source={HeaderPic}
      />
    </>
  );
};

export default Header;
