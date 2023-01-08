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
        <StyledColorInput
          type={"text"}
          value={color}
          onChange={(e) => {
            e.stopPropagation();
            return onHandleColorInput(id, e.target.value);
          }}
        ></StyledColorInput>
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
  flex-direction: column;
  justify-content: center;
  align-items: center;
  transition: 0.3s ease-in-out;

  &:hover {
    filter: saturate(2);
    transition: 0.3s ease-in-out;
  }
`;

const StyledName = styled.p`
  width: 92%;
  height: 1.5em;
  font-weight: bold;
  font-size: 1.1em;
  color: white;
  background-color: rgba(0, 0, 0, 0.4);
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const StyledColorInput = styled.input`
  height: 20%;
  width: 50%;
  border: 2px solid #424242;
  border-radius: 5px;
  background-color: rgba(0, 0, 0, 0.4);
  color: #eaeaea;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  font-size: 20px;
  font-weight: bold;
`;

const StyledDeleteButton = styled.button`
  position: absolute;
  top: 5px;
  right: 5px;
  border: 2px solid #424242;
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
