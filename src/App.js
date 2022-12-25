import styled from "styled-components";
import { initialColors } from "./util/initialColors";
import ColorCard from "./component/ColorCard";
import { useState } from "react";
import handleDelete from "./util/handleDelete";
import handleColorPick from "./util/handleColorPick";
import ColorPickerForm from "./component/ColorPickerForm";

console.clear();

const StyledApp = styled.div`
  text-align: center;
  border: solid red;
  display: flex;
  padding: 20px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 30px;
`;

const StyledHeader = styled.div`
  height: 200px;
  aspect-ratio: 1;
  cursor: pointer;
  border: 2px solid;
  border-radius: 5px;
  background-color: ${({ color }) => {
    return color;
  }};
  display: flex;
  justify-content: center;
  align-items: center;
`;

const StyledCardContainer = styled.div`
  border: solid;

  display: flex;
  gap: 10px;
  justify-content: space-evenly;
  align-items: center;
  flex-wrap: wrap;
`;

function App() {
  const [colorsState, setColorsState] = useState(initialColors);
  const [colorPick, setColorPick] = useState("#cccccc");

  return (
    <StyledApp>
      <StyledHeader>
        <ColorPickerForm color={colorPick}></ColorPickerForm>
      </StyledHeader>

      <StyledCardContainer>
        {colorsState.map((element) => (
          <ColorCard
            key={element.id}
            color={element.colorCode}
            id={element.id}
            colorsState={colorsState}
            onSetColorsState={setColorsState}
            onHandleColorPick={handleColorPick}
            onHandleDelete={handleDelete}
          />
        ))}
      </StyledCardContainer>
    </StyledApp>
  );
}

export default App;
