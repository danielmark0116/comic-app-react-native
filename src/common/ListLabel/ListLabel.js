import React from "react";

import { ListLabel as Label } from "./ListLabel.style";
import { CustomText } from "../CustomText/CustomText.styled";

const ListLabel = () => {
  return (
    <Label>
      <CustomText color="white" size="small">
        Click to enlarge
      </CustomText>
    </Label>
  );
};

export default ListLabel;
