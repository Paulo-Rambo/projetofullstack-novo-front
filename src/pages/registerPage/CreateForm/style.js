import styled from "styled-components";

export const FormStyle = styled.form`
  font-family: Inter;
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 295px;
  background: var(--color-background);
  padding: 17px 15px;
  margin: 0 12px 55px 12px;
  border-radius: var(--border-radius-0);
  border-style: dotted;

  button{
    border-radius: var(--border-radius-0);
    border-style: solid;
    border-color: var(--color-grey-0)
  }

  @media (min-width: 420px) {
    width: 370px;
    padding: 17px 21px;
  }
  .titleForm {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 22px;
  }
  .titleForm > h3 {
    margin: 17px 0px;
    font-size: var(--size-font-title-1);
    color: var(--color-grey-0);
  }
  .titleForm > p {
    font-size: var(--size-font-paragraph-small);
    color: var(--color-grey-1);
  }
  select {
    color: var(--color-grey-0);
    font-size: var(--input-placeholder-1);
    width: 100%;
    height: var(--height--input-1);

    border-radius: var(--border-radius-1);
    border: solid 2px var(--color-grey-2);
    padding-left: 16px;

    background: var(--color-grey-2);
  }
`;
