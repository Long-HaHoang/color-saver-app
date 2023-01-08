import styled from "styled-components";

export default function ColorCard({
  color,
  id,
  colorsState,
  onSetColorsState,
  onHandleColorPick,
  onHandleDelete,
  onHandleColorInput,
  name,
}) {
  return (
    <>
      <StyledDivContainer
        backgroundColor={color}
        onClick={(e) => {
          e.stopPropagation();
          return onHandleColorPick(color);
        }}
      >
        <StyledName>{`${name}`}</StyledName>
        <StyledColorName
          type={"text"}
          value={color}
          onChange={(e) => {
            e.stopPropagation();
            return onHandleColorInput(id, e.target.value);
          }}
        ></StyledColorName>
        <StyledDeleteButton
          onClick={(e) => {
            e.stopPropagation();
            return onHandleDelete(id, colorsState, onSetColorsState);
          }}
        >
          &#120;
        </StyledDeleteButton>
      </StyledDivContainer>
    </>
  );
}

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

const StyledDeleteButton = styled.button`
  position: absolute;
  top: 5px;
  right: 5px;
  border: solid;
  border-radius: 50%;
  cursor: pointer;
  height: 40px;
  aspect-ratio: 1;
  font-size: 22px;
  font-weight: bold;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const StyledColorName = styled.input`
  height: 20%;
  width: 50%;
  border: 2px solid;
  border-radius: 5px;
  background-color: #c7ced4;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  font-size: 20px;
  font-weight: bold;
  z-index: 3;
  position: absolute;
`;

const StyledName = styled.p`
  align-self: flex-start;
`;
