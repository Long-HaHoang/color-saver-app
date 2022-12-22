import styled from "styled-components";
const StyledDiv = styled.div`
  height: 200px;
  width: 200px;
  border: 2px solid;
  border-radius: 5px;
  cursor: pointer;
  background-color: ${({ color }) => {
    return color;
  }};
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default StyledDiv;
