import styled from "styled-components";
import ColorCard from "./component/ColorCard";
import StyledDivContainer from "./component/ColorCard/StyledDivContainer";
import StyledColorName from "./component/ColorCard/SyledColorName";
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

function handleColorPick() {
  console.log("😳 You clicked me!");
}

const colors = [
  { colorHex: "#ccc", id: crypto.randomUUID() },
  { colorHex: "#4c6ef5", id: crypto.randomUUID() },
  { colorHex: "#82c91e", id: crypto.randomUUID() },
  { colorHex: "#12b866", id: crypto.randomUUID() },
  { colorHex: "#82c91e", id: crypto.randomUUID() },
  { colorHex: "#ccc", id: crypto.randomUUID() },
];

function App() {
  const [colorsState, setColorsState] = useState(colors);
  return (
    <StyledApp>
      {colors.map((element) => (
        <ColorCard key={crypto.randomUUID()} id={crypto.randomUUID()}>
          <StyledDivContainer
            color={element.colorHex}
            onClick={handleColorPick}
          >
            <button>&#120;</button>
            <StyledColorName>{element.colorHex}</StyledColorName>
          </StyledDivContainer>
        </ColorCard>
      ))}
    </StyledApp>
  );
}

export default App;
