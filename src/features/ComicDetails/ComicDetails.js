import React from "react";
import { withNavigation } from "react-navigation";

import CustomImage from "../../common/CustomImage/CustomImage";

const ComicDetails = props => {
  const { navigation } = props;

  return <CustomImage source={navigation.getParam("img", null)} />;
};

export default withNavigation(ComicDetails);
