import ColorPickerInput from "./ColorPickerInput";
import StyledForm from "./ColorForm";

export default function ColorPickerForm(color, onHandleSubmit) {
  function submitHandler(e) {
    e.preventDefault();
    const formData = new FormData();
    const data = Object.fromEntries(formData);
    console.log("Submit data", data);
  }

  return (
    <StyledForm onSubmit={submitHandler}>
      <label htmlFor="colorPicker">Pick a color: </label>
      <ColorPickerInput
        type={"color"}
        value={color.color}
        name="colorPicker"
      ></ColorPickerInput>
    </StyledForm>
  );
}
