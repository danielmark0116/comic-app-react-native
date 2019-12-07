import styled from "styled-components";

export const CustomText = styled.Text`
  font-family: ${props => props.theme.fontPrimary};
  color: ${props => props.theme.colorBlack};
  font-size: ${props => (props.size === "small" ? 14 : 18)}px;
`;
