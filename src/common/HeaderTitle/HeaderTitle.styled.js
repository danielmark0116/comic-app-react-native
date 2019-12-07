import styled from "styled-components";

export const HTitle = styled.Text`
  font-family: ${props => props.theme.fontPrimary};
  color: ${props => props.theme.colorBlack};
  font-size: 20;
  /* text-shadow: 0 0 10px ${props => props.theme.colorShadow}; */
`;
