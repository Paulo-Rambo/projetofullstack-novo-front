import styled from "styled-components";

export const UpdateModalSection = styled.section`
  position: fixed;
  top: 0;
  left: 0;
  min-height: 100vh;
  min-width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  animation: animateModal 0.5s;

  @keyframes animateModal {
    0% {
      transform: translateY(-50%);
      opacity: 0;
    }

    100% {
      transform: translateY(0);
      opacity: 1;
    }
  }
  .modal-fade {
    position: absolute;
    min-height: 100vh;
    width: 100vw;
    background-color: var(--color-grey-1);
    opacity: 60%;
    z-index: 99;
  }
  .modalBox {
    z-index: 100;
  }
`;

export const FormStyleAdd = styled.form`
  display: flex;
  flex-direction: column;

  height: 100%;
  min-width: 295px;
  max-width: 420px;
  background: var(--color-form-background);
  padding: 12px 15px 15px 15px;
  margin: 0 12px 55px 12px;
  border-radius: 0 0 var(--border-radius-0) var(--border-radius-0);

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
  @media (min-width: 420px) {
    select {
      height: 45px;
    }
  }
`;
export const TitleFormAdd = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: auto;
  margin: 0 12px;
  padding: 0px 15px 0 15px;
  border-radius: var(--border-radius-0) var(--border-radius-0) 0 0;
  min-width: 295px;
  max-width: 420px;
  height: var(--height--input-1);

  background: var(--color-grey-2);

  @media (min-width: 420px) {
    width: 370px;
  }

  .buttonCloseModal {
    font-size: var(--size-font-title-3);
  }

  h2 {
    color: white;
  }
  p {
    color: var(--color-grey-0);
    cursor: pointer;
  }
`;
