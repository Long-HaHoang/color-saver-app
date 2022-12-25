import styled from "styled-components";
import { initialColors } from "./util/initialColors";
import ColorCard from "./component/ColorCard";
import { useState } from "react";
import handleDelete from "./util/handleDelete";
import handleColorPick from "./util/handleColorCard";
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
  border: 2px solid;
  border-radius: 5px;
  background-color: ${({ bgcolor }) => {
    return bgcolor;
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

function handleColorSubmit(color, setColorPick) {
  console.log("this is handleColorSubmit");
  console.table(color, setColorPick);
}

function App() {
  const [colorsState, setColorsState] = useState(initialColors);
  const [colorPick, setColorPick] = useState("#cccccc");

  return (
    <StyledApp>
      <StyledHeader bgcolor={colorPick}>
        <form>
          <label htmlFor="colorPicker">Choose a color:</label>
          <input
            type="color"
            name="colorPicker"
            id="colorPicker"
            value={colorPick}
            onChange={(event) => setColorPick(event.target.value)}
          />
        </form>
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
