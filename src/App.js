import styled from "styled-components";
import ColorCard from "./component/ColorCard";
import StyledDivContainer from "./component/ColorCard/StyledDivContainer";
import StyledColorName from "./component/ColorCard/SyledColorName";
import StyledDeleteButton from "./component/ColorCard/StyledDeleteButton";
import { useState } from "react";

console.clear();

const StyledApp = styled.div`
  text-align: center;
  border: solid red;
  display: flex;
  padding: 10px;
  justify-content: flex-start;
  align-items: center;
  flex-wrap: wrap;
  gap: 5px;
`;

function handleColorPick(colorCode) {
  console.log("🥳 You copied the color:", colorCode);
  navigator.clipboard.writeText(colorCode);
}

const initialColors = [
  { colorCode: "#ccc", id: crypto.randomUUID() },
  { colorCode: "#4c6ef5", id: crypto.randomUUID() },
  { colorCode: "#82c91e", id: crypto.randomUUID() },
  { colorCode: "#12b866", id: crypto.randomUUID() },
  { colorCode: "#82c91e", id: crypto.randomUUID() },
  { colorCode: "#ccc", id: crypto.randomUUID() },
];

function App() {
  const [colorsState, setColorsState] = useState(initialColors);

  function handleDelete(id) {
    setColorsState(colorsState.filter((element) => element.id !== id));
  }

  return (
    <StyledApp>
      {colorsState.map((element) => (
        <ColorCard key={element.id}>
          <StyledDivContainer
            color={element.colorCode}
            onClick={(e) => {
              // e.stopPropagation();
              return handleColorPick(element.colorCode);
            }}
          >
            <StyledDeleteButton
              onClick={(e) => {
                e.stopPropagation();
                return handleDelete(element.id);
              }}
            >
              &#120;
            </StyledDeleteButton>
            <StyledColorName>{element.colorCode}</StyledColorName>
          </StyledDivContainer>
        </ColorCard>
      ))}
    </StyledApp>
  );
}

export default App;
