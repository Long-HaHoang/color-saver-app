import styled from "styled-components";
import useLocalStorageState from "use-local-storage-state";

import { initialColors } from "./util/initialColors";
import handleDelete from "./util/handleDelete";
import handleColorPick from "./util/handleColorCard";

import ColorCard from "./component/ColorCard";
import ColorPickerForm from "./component/ColorPickerForm";

console.clear();

const StyledApp = styled.div`
  text-align: center;
  display: flex;
  padding: 20px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 30px;
`;

const StyledCardContainer = styled.div`
  display: flex;
  gap: 20px;
  justify-content: flex-start;
  align-items: center;
  flex-wrap: wrap;
`;

function App() {
  const [colorsState, setColorsState] = useLocalStorageState("colorsState", {
    defaultValue: initialColors,
  });

  function createNewCard(data) {
    setColorsState([
      ...colorsState,
      { colorCode: data.colorInput, id: crypto.randomUUID() },
    ]);
  }

  return (
    <StyledApp>
      <ColorPickerForm onNewCard={createNewCard} />
      <StyledCardContainer>
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
      </StyledCardContainer>
    </StyledApp>
  );
}

export default App;
