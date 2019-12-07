import React from "react";
import { withNavigation } from "react-navigation";
import { TouchableOpacity } from "react-native-gesture-handler";

import { CustomText } from "../../common/CustomText/CustomText.styled";

const AboutBtn = props => {
  const { navigate } = props.navigation;

  return (
    <TouchableOpacity onPress={() => navigate("About")}>
      <CustomText sized size="small">
        About
      </CustomText>
    </TouchableOpacity>
  );
};

export default withNavigation(AboutBtn);
