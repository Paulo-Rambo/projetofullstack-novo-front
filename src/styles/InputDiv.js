import styled from "styled-components";

export const InputDiv = styled.div`
  height: var(--input-div-heigth-1);
  width: 100%;
  margin: 0px;
  padding: 0px;
  display: flex;
  flex-direction: column;
  align-items: baseline;
  justify-content: start;
  box-sizing: border-box;

  input {
    color: var(--color-grey-4);

    width: 100%;
    height: var(--height--input-1);

    border-radius: 5px;
    border: solid 2px var(--color-grey-2);
    padding-left: 16px;

    background: var(--color-grey-2);
    transition: all 0.6s;
  }

  input:focus {
    background: var(--color-grey-1);
    border: var(--color-grey-1);
  }
  input::placeholder {
    font-size: var(--input-placeholder-1);
  }

  label {
    margin-bottom: 8px;
    font-size: var(--button-font-size-1);
    color: var(--color-grey-0);
    font-weight: 700px;
  }
  select {
    height: var(--height--input-1);
  }
`;
