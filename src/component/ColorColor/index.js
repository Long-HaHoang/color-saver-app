import styled from "styled-components";

export default function ColorCard({ color, onHandleClick }) {
  const StyledDiv = styled.div`
    height: 200px;
    width: 200px;
    border: 2px solid;
    border-radius: 5px;
    cursor: pointer;
    background-color: ${color};
    display: flex;
    justify-content: center;
    align-items: center;
  `;

  const StyledColorName = styled.div`
    height: 20%;
    width: 50%;
    border: 2px solid;
    border-radius: 5px;
    background-color: #c7ced4;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 20px;
    font-weight: bold;
  `;
  return (
    <StyledDiv onClick={onHandleClick}>
      <StyledColorName>{color}</StyledColorName>
    </StyledDiv>
  );
}
