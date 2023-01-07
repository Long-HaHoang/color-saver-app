import { useState } from "react";
import styled from "styled-components";

import StyledColorInput from "./StyledColorPickerInput";
import StyledForm from "./StyledColorForm";
import StyledSubmitButton from "./StyledSubmitButton";

const StyledHeader = styled.div.attrs((props) => ({
  style: {
    background: props.backgroundColor,
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
