import React, { useState, useEffect } from "react";
import { View, Animated } from "react-native";
import { withNavigation } from "react-navigation";

import { ListContainer } from "./ListItem.styled";
import { CustomText } from "../CustomText/CustomText.styled";
import { CustomTitle } from "../CustomTitle/CustomTitle.styled";
import ImageThumbnail from "../ImageThumbnail/ImageThumbnail";
import ListLabel from "../ListLabel/ListLabel";

import { formatDateMonthYear } from "../../utils/formatDate";

const ListItem = props => {
  const [animatedValue] = useState(new Animated.Value(0));

  const { comicData, index } = props;
  const { navigate } = props.navigation;
  const { title, month, year, img } = comicData;

  useEffect(() => {
    Animated.timing(animatedValue, {
      toValue: 1,
      duration: 500,
      delay: index * 300
    }).start();
  }, [""]);

  return (
    <Animated.View style={[{}, { opacity: animatedValue }]}>
      <ListContainer
        onPress={() => navigate("Details", { img: comicData.img })}
      >
        <View style={{ flex: 1 }}>
          <CustomText size="small">{`Added: ${formatDateMonthYear(
            month,
            year
          )}`}</CustomText>
          <CustomTitle>{title}</CustomTitle>
        </View>
        <View style={{ flex: 1 }}>
          <ImageThumbnail picSource={img} />
        </View>
        <ListLabel />
      </ListContainer>
    </Animated.View>
  );
};

export default withNavigation(ListItem);
