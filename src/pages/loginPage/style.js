import styled from "styled-components";

export const HeaderDiv = styled.div`
  text-align: center;
  width: 295px;
  margin: 57px var(--container-margin-1) 19px var(--container-margin-1);

  img {
    height: 17px;
  }
`;

export const Section = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100vw;

  main {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  h2 {
    color: var(--color-grey-0);
  }
`;
