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

function handleColorPick() {
  console.log("😳 You clicked me!");
}

const colors = [
  { colorCode: "#ccc", id: crypto.randomUUID() },
  { colorCode: "#4c6ef5", id: crypto.randomUUID() },
  { colorCode: "#82c91e", id: crypto.randomUUID() },
  { colorCode: "#12b866", id: crypto.randomUUID() },
  { colorCode: "#82c91e", id: crypto.randomUUID() },
  { colorCode: "#ccc", id: crypto.randomUUID() },
];

function App() {
  const [colorsState, setColorsState] = useState(colors);
  return (
    <StyledApp>
      {colorsState.map((element) => (
        <ColorCard key={crypto.randomUUID()}>
          <StyledDivContainer color={element.colorCode}>
            <StyledDeleteButton
              onClick={() => console.log("You pressed the button")}
            >
              &#120;
            </StyledDeleteButton>
            <StyledColorName onClick={handleColorPick}>
              {element.colorCode}
            </StyledColorName>
          </StyledDivContainer>
        </ColorCard>
      ))}
    </StyledApp>
  );
}

export default App;
