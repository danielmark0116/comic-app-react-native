import styled from "styled-components";

export const ListContainer = styled.TouchableOpacity`
  padding: 20px;
  box-shadow: 0 5px 5px ${props => props.theme.colorShadow};
  background-color: ${props => props.theme.colorWhite};
  border-radius: 10px;
  margin: 10px;
  flex-direction: row;
  min-height: 150px;
`;
