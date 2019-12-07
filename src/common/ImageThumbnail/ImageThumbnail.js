import React from "react";
import { View, Dimensions } from "react-native";

import { ThumbImage } from "./ImageThumbnail.styled";

const ImageThumbnail = props => {
  const { picSource } = props;

  return (
    <View style={{ flex: 1, alignItems: "center" }}>
      <ThumbImage
        width={Dimensions.get("window").width / 3}
        source={{ uri: picSource }}
        resizeMode="contain"
      />
    </View>
  );
};

export default ImageThumbnail;
