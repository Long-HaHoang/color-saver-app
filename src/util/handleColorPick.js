export default function handleColorPick(colorCode) {
  console.log("🥳 You copied the color:", colorCode);
  navigator.clipboard.writeText(colorCode);
}
