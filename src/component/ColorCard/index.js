import StyledDeleteButton from "./StyledDeleteButton";
import StyledDivContainer from "./StyledDivContainer";
import StyledColorName from "./SyledColorName";

export default function ColorCard({
  color,
  id,
  colorsState,
  onSetColorsState,
  onHandleColorPick,
  onHandleDelete,
}) {
  return (
    <>
      <StyledDivContainer
        color={color}
        onClick={() => {
          return onHandleColorPick(color);
        }}
      >
        <StyledColorName>{color}</StyledColorName>
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
