import React from "react";
import { ListContainer } from "./ListItem.styled";
import { CustomText } from "../CustomText/CustomText.styled";
import { withNavigation } from "react-navigation";
import { CustomTitle } from "../CustomTitle/CustomTitle.styled";
import { View } from "react-native";
import { formatDateMonthYear } from "../../utils/formatDate";

const ListItem = props => {
  const { comicData, index } = props;
  const { navigate } = props.navigation;
  const { title, month, year } = comicData;

  return (
    <ListContainer onPress={() => navigate("Details", { img: comicData.img })}>
      <View style={{ flex: 1 }}>
        <CustomText size="small">{`Added: ${formatDateMonthYear(
          month,
          year
        )}`}</CustomText>
        <CustomTitle>{title}</CustomTitle>
      </View>
      <View style={{ flex: 1 }}></View>
    </ListContainer>
  );
};

export default withNavigation(ListItem);
