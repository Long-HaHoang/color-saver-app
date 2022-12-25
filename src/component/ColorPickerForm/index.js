import ColorPickerInput from "./ColorPickerInput";

export default function ColorPickerForm(color) {
  console.log(color);
  return (
    <form>
      <label htmlFor="colorPicker">Pick a color: </label>
      <ColorPickerInput
        type={"color"}
        value={color.color}
        name="colorPicker"
      ></ColorPickerInput>
    </form>
  );
}
