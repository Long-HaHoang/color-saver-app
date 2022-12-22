import styled from "styled-components";
import ColorCard from "./component/ColorColor";

console.clear();

const StyledApp = styled.div`
  text-align: center;
  border: solid red;
  display: flex;
  justify-content: center;
  align-items: center;
`;

function handleColorPick() {
  console.log("😳 You clicked me!");
}

function App() {
  return (
    <StyledApp>
      <ColorCard color={"#ccc"} onHandleClick={handleColorPick} />
    </StyledApp>
  );
}

export default App;
