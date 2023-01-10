import styled from "styled-components";
import useLocalStorageState from "use-local-storage-state";
import { useEffect } from "react";
import { useImmer } from "use-immer";
import useSWR from "swr";

import { initialColors } from "./util/initialColors";
import handleDelete from "./util/handleDelete";
import handleColorPick from "./util/handleColorCard";

import ColorCard from "./component/ColorCard";
import ColorPickerForm from "./component/ColorPickerForm";

console.clear();

const URL = "https://www.thecolorapi.com/id?hex=cccccc";

const fetcher = async (url) => {
  const res = await fetch(url);

  // If the status code is not in the range 200-299,
  // we still try to parse and throw it.
  if (!res.ok) {
    const error = new Error("An error occurred while fetching the data.");
    // Attach extra info to the error object.
    error.info = await res.json();
    error.status = res.status;
    throw error;
  }

  return res.json();
};

function App() {
  const [colorsState, setColorsState] = useLocalStorageState("colorsState", {
    defaultValue: initialColors,
  });

  const [trigger, setTrigger] = useImmer(false);

  const {
    data: color,
    isLoading,
    error,
  } = useSWR("https://www.thecolorapi.com/id?hex=cccccc", fetcher);

  // fetch color names
  useEffect(() => {
    let active = true;

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
      if (active) {
        setColorsState(colorNameList);
      }
    }
    fetchEachColor();
    return () => {
      active = false;
    };

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [trigger]);

  function createNewCard(data) {
    setColorsState([
      ...colorsState,
      { colorCode: data.colorInput, id: crypto.randomUUID() },
    ]);
  }

  // TODO: FIX ME
  function handleInputEdit(id, eventValue) {
    console.log(eventValue);
    let tempArray = [];

    colorsState.map((element) => {
      if (element.id === id) {
        if (element.colorCode.length === 7) {
          setTrigger(!trigger);
          return tempArray.push({
            ...element,

            colorCode: eventValue,
          });
        } else {
          return tempArray.push({
            ...element,
            colorName: "Waiting...",
            colorCode: eventValue,
          });
        }
      } else {
        setTrigger(!trigger);
        return tempArray.push(element);
      }
    });
    setColorsState(tempArray);
  }

  if (isLoading || !color || error) {
    return null;
  }

  return (
    <StyledApp>
      <h2>Color Palette 1</h2>
      <StyledCardContainer>
        <ColorPickerForm onNewCard={createNewCard} />
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
  flex-wrap: wrap;
  margin-left: 35px;
`;

export default App;
