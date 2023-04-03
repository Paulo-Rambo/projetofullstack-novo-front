import styled from "styled-components";

export const ItenCard = styled.div`
  padding: 15px 12px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  background: var(--color-grey-4);
  border-radius: var(--border-radius-2);
  transition: all 0.6s;
  box-shadow: 20px 10px 34px -15px rgba(0,0,0,0.75);
  color: var(--color-grey-1);

  :hover {
    background: var(--color-grey-2);
    color: white;
  }

  .noRegister {
    color: var(--color-grey-0);
  }

  .levelDiv {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
  }
  .levelDiv div{
  }
  h3 {
    color: var(--color-grey-0);
    font-family: Inter;
    font-size: var(--size-font-title-1);
  }
  p {
    font-size: 18px;
  }
  .trashButton {
    display: none;

    width: 30px;
    height: 30px;
    border-radius: var(--border-radius-0);
    cursor: pointer;
  }
  .trashButton > img {
    width: 15px;
    height: 15px;
  }
  @media (min-width: 420px) {
    .trashButton {
      display: flex;
      align-items: center;
      justify-content: center;
      margin-left: 18px;
      transition: all 0.4s;
    }
  }
`;
