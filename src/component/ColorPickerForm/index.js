import ColorForm from "./ColorForm";
import ColorPickerInput from "./ColorPickerInput";

export default function ColorPickerForm() {
  return (
    <ColorForm>
      <ColorPickerInput type={"color"} value={"#cccccc"}></ColorPickerInput>
    </ColorForm>
  );
}
