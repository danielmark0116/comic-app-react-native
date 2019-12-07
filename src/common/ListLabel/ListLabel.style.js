import styled from "styled-components";

export const ListLabel = styled.View`
  position: absolute;
  bottom: -8px;
  left: 20px;
  background-color: ${props => props.theme.colorBlack};
  padding: 3px 10px;
  box-shadow: 0 0 10px ${props => props.theme.colorShadow};
  border-radius: 5px;
  border: 1px solid ${props => props.theme.colorDark};
`;
