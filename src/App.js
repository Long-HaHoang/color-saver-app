import styled from "styled-components";
import { initialColors } from "./util/initialColors";
import ColorCard from "./component/ColorCard";
import { useState } from "react";
import handleDelete from "./util/handleDelete";
import handleColorPick from "./util/handleColorPick";

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

function App() {
  const [colorsState, setColorsState] = useState(initialColors);

  return (
    <StyledApp>
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
    </StyledApp>
  );
}

export default App;
