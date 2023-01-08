import styled from "styled-components";
import useLocalStorageState from "use-local-storage-state";

import { initialColors } from "./util/initialColors";
import handleDelete from "./util/handleDelete";
import handleColorPick from "./util/handleColorCard";

import ColorCard from "./component/ColorCard";
import ColorPickerForm from "./component/ColorPickerForm";
import { useEffect } from "react";

console.clear();

function App() {
  const [colorsState, setColorsState] = useLocalStorageState("colorsState", {
    defaultValue: initialColors,
  });

  useEffect(() => {
    async function fetchEachColor() {
      // creating a temp Array, to avoid unnecessary rerender when setting states
      let colorNameList = [];

      // Using the normal for-loop, mapping doesn't resove promises in order
      for (let i = 0; i < colorsState.length; i++) {
        try {
          const response = await fetch(
            `https://www.thecolorapi.com/id?hex=${colorsState[
              i
            ].colorCode.slice(1)}`
          );

          if (!response.ok) {
            throw new Error("Aargh! Almost had it!");
          }
          const data = await response.json();

          colorNameList.push({ ...colorsState[i], colorName: data.name.value });
        } catch (error) {
          console.error("Error :", error.message);
        }
      }

      console.log(colorNameList);
      setColorsState(colorNameList);
    }
    fetchEachColor();
  }, [colorsState, setColorsState]);

  function createNewCard(data) {
    setColorsState([
      ...colorsState,
      { colorCode: data.colorInput, id: crypto.randomUUID() },
    ]);
  }

  // TODO: FIX ME
  function handleInputEdit(id, eventValue) {
    console.log(eventValue);
    setColorsState(
      colorsState.map((element) => {
        if (element.id === id) {
          return {
            ...element,
            colorCode: eventValue,
          };
        }
        return element;
      })
    );
  }

  return (
    <StyledApp>
      <ColorPickerForm onNewCard={createNewCard} />
      <StyledCardContainer>
        {colorsState.map((element) => {
          return (
            <ColorCard
              key={element.id}
              color={element.colorCode}
              id={element.id}
              colorsState={colorsState}
              onSetColorsState={setColorsState}
              onHandleColorPick={handleColorPick}
              onHandleDelete={handleDelete}
              onHandleColorInput={handleInputEdit}
              name={
                element.colorName === undefined
                  ? "Loading..."
                  : element.colorName
              }
            />
          );
        })}
      </StyledCardContainer>
    </StyledApp>
  );
}

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

export default App;
