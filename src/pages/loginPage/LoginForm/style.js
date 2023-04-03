import styled from "styled-components";

export const FormStyle = styled.form`
  font-family: Inter;
  display: flex;
  flex-direction: column;

  height: 100%;
  min-width: 295px;
  max-width: 420px;
  background: var(--color-background);
  padding: 17px 15px;
  margin: 0 12px 55px 12px;
  border-radius: var(--border-radius-0);
  border-style: dotted;

  button{
    border-style: solid;
    border-color: var(--color-grey-0)
  }

  @media (min-width: 420px) {
    width: 370px;
  }
  a {
    width: 100%;
  }

  label {
    margin-bottom: 8px;
    font-size: var(--size-font-paragraph-1);
    color: var(--color-grey-0);
    font-weight: 700px;
  }
  select {
    color: var(--color-grey-0);

    width: 100%;
    height: 35px;

    border-radius: var(--border-radius-1);
    border: solid 2px var(--color-grey-2);
    padding-left: 16px;

    background: var(--color-grey-2);
  }
`;
export const TitleForm = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: auto;
  margin: 15px 0px 25px 0px;

  h3 {
    font-size: var(--size-font-title-1);
    color: var(--color-grey-0);
  }
  p {
    margin: 20px 0px;
    font-size: var(--size-font-paragraph-small);
    color: var(--color-grey-1);
  }
`;
