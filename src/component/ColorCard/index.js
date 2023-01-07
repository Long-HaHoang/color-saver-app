import StyledDeleteButton from "./StyledDeleteButton";
import StyledDivContainer from "./StyledDivContainer";
import StyledColorName from "./SyledColorName";
import StyledName from "./StyledName";

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
