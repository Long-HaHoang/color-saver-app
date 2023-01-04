import styled from "styled-components";
const StyledDivContainer = styled.div.attrs((props) => ({
  style: {
    background: props.backgroundColor,
  },
}))`
  height: 200px;
  aspect-ratio: 1;
  cursor: pointer;
  border: 2px solid;
  border-radius: 5px;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: 0.3s ease-in-out;

  &:hover {
    filter: saturate(2);
    transition: 0.3s ease-in-out;
  }
`;

export default StyledDivContainer;
