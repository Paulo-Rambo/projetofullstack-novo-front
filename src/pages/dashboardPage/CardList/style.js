import styled from "styled-components";

export const CardsSection = styled.section`
  display: flex;
  flex-direction: column;
  min-width: 320px;
  width: 100vw;
  padding: 0px var(--container-margin-1) 0px var(--container-margin-1);
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (min-width: 520px) {
    padding: 0px var(--container-margin-2) 0px var(--container-margin-2);
  }

  .mainTitle {
    font-size: var(--size-font-paragraph-1);
  }

  .noRegister {
    font-size: var(--size-font-title-1);
    text-align: center;
    color: var(--color-grey-0);
  }

  .tecnology {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: var(--color-grey-0);
    margin: 19px 0px;
  }
  .tecnology > h2 {
    font-size: var(--size-font-title-1);
  }
  .addButton {
    cursor: pointer;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: var(--add-button-size);
    height: var(--add-button-size);
    background: var(--color-grey-3);
    border-radius: var(--border-radius-2);
  }
  .addButton > p {
    font-size: var(--size-font-title-3);
    color: var(--color-grey-0);
    padding-bottom: 4px;
  }

  .sectionDiv {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: var(--itens-gap);
    background: var(--color-background);
    width: 100%;
    border-radius: var(--border-radius-2);
    padding: 15px 8px;
    border-style: dotted;
    border-color: var(--color-grey-0);
  }
`;
