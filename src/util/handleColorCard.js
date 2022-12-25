export default function handleColorCard(colorCode) {
  console.log("🥳 You copied the color:", colorCode);
  navigator.clipboard.writeText(colorCode);
}
