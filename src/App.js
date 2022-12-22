import styled from "styled-components";
import ColorCard from "./component/ColorCard";
import StyledDiv from "./component/ColorCard/StyledDiv";
import StyledColorName from "./component/ColorCard/SyledColorName";

console.clear();

const StyledApp = styled.div`
  text-align: center;
  border: solid red;
  display: flex;
  padding: 10px;
  justify-content: flex-start;
  align-items: center;
  flex-wrap: wrap;
  gap: 5px;
`;

function handleColorPick() {
  console.log("😳 You clicked me!");
}

const colors = ["#ccc", "#4c6ef5", "#82c91e", "#12b866", "#82c91e", "#ccc"];

function App() {
  return (
    <StyledApp>
      {colors.map((element) => (
        <ColorCard>
          <StyledDiv color={element}>
            <StyledColorName>{element}</StyledColorName>
          </StyledDiv>
        </ColorCard>
      ))}
    </StyledApp>
  );
}

export default App;
