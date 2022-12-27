import styled from "styled-components";
import { initialColors } from "./util/initialColors";
import ColorCard from "./component/ColorCard";
import { useState } from "react";
import handleDelete from "./util/handleDelete";
import handleColorPick from "./util/handleColorCard";
import StyledColorName from "./component/ColorCard/SyledColorName";

console.clear();

// TODO: refactor styled components

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

//TODO: add props to background-color
const StyledHeader = styled.div.attrs((props) => ({
  style: {
    color: props.color,
  },
}))`
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
  gap: 20px;
  justify-content: flex-start;
  align-items: center;
  flex-wrap: wrap;
`;

const StyledSubmitButton = styled.button`
  height: 20%;
  width: 50%;
  border: 2px solid;
  border-radius: 5px;
  background-color: #cccccc;
  font-size: 20px;
  font-weight: bold;
  text-align: center;
  cursor: pointer;
`;

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
`;

const StyledColorInput = styled.input`
  width: 50%;
  border: 2px solid;
  border-radius: 5px;
  background-color: #cccccc;
  font-size: 20px;
  font-weight: bold;
  text-align: center;
  cursor: pointer;
`;

function handleColorSubmit(event, colorState, setFunction, setColorArray) {
  event.preventDefault();
  const formData = new FormData(event.target);
  const data = Object.fromEntries(formData);
  console.log("submit data", data);
  setFunction(data.colorInput);
  setColorArray([
    ...colorState,
    { colorCode: data.colorInput, id: crypto.randomUUID() },
  ]);
  event.target.colorInput.value = "";
}

function handleColorWheel(event, setColorPick) {
  event.preventDefault();
  setColorPick(event.target.value);
  document.getElementById("colorInput").value = event.target.value;
}

function App() {
  const [colorsState, setColorsState] = useState(initialColors);
  const [colorPick, setColorPick] = useState("#cccccc");

  return (
    <StyledApp>
      <StyledHeader bgcolor={colorPick}>
        <StyledForm
          onSubmit={(event) =>
            handleColorSubmit(event, colorsState, setColorPick, setColorsState)
          }
        >
          <label htmlFor="colorPicker">Choose a color:</label>
          <StyledColorInput
            type="color"
            name="colorPicker"
            id="colorPicker"
            value={colorPick}
            onChange={(event) => handleColorWheel(event, setColorPick)}
          />
          <label htmlFor="colorInput">ColorInput:</label>
          <StyledColorInput
            type="text"
            name="colorInput"
            id="colorInput"
            placeholder={colorPick}
            required
          />
          <StyledSubmitButton>ADD</StyledSubmitButton>
        </StyledForm>
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
