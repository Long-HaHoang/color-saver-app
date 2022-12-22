import styled from "styled-components";
const StyledDivContainer = styled.div`
  height: 200px;
  width: 200px;
  cursor: pointer;
  border: 2px solid;
  border-radius: 5px;
  background-color: ${({ color }) => {
    return color;
  }};
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default StyledDivContainer;
