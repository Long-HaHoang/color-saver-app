import { useState } from "react";
import styled from "styled-components";

export default function ColorPickerForm({ onNewCard }) {
  const [colorPick, setColorPick] = useState("#cccccc");

  function handleColorSubmit(event, setFunction) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData);
    console.log("submit data", data);
    setFunction(data.colorInput);
    onNewCard(data);
  }

  function handleColorInput(event, setColorPick) {
    event.preventDefault();
    setColorPick(event.target.value);
  }

  return (
    <StyledHeader backgroundColor={colorPick}>
      <StyledForm onSubmit={(event) => handleColorSubmit(event, setColorPick)}>
        <label htmlFor="colorPicker">Choose a color:</label>
        <StyledColorInput
          type="color"
          name="colorPicker"
          id="colorPicker"
          value={colorPick}
          onChange={(event) => handleColorInput(event, setColorPick)}
        />
        <label htmlFor="colorInput">ColorInput:</label>
        <StyledColorInput
          type="text"
          name="colorInput"
          id="colorInput"
          value={colorPick}
          onChange={(event) => handleColorInput(event, setColorPick)}
          required
        />
        <StyledSubmitButton>ADD</StyledSubmitButton>
      </StyledForm>
    </StyledHeader>
  );
}

// TODO: converting hex to rgb for card border
// make feature. conditional card border
function hexToRgb(hex) {
  const hexArray = hex.slice(1).match(/.{1,2}/g);
  return [
    parseInt(hexArray[0], 16),
    parseInt(hexArray[1], 16),
    parseInt(hexArray[2], 16),
  ];
}
console.log(hexToRgb("#000000"));
const StyledHeader = styled.div.attrs((props) => ({
  style: {
    background: props.backgroundColor,
    border: `2px solid rgba(0, 0, 0, 0.3)`,
  },
}))`
  height: 200px;
  aspect-ratio: 1;
  border: 2px solid;
  border-radius: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
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
  background-color: #fff;
  font-size: 20px;
  font-weight: bold;
  text-align: center;
  cursor: pointer;
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
