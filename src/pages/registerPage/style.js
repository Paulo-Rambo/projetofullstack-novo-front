import styled from "styled-components";

export const Navbar = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 295px;
  margin: 57px var(--container-margin-1) 39px var(--container-margin-1);
  color: var(--color-grey-3);

  .navButtons{
    width: 40%;
    display:flex;
    justify-content: space-between;
  }

  @media (min-width: 420px) {
    width: 370px;
  }

  img {
    height: 17px;
  }
`;
export const Section = styled.section`
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
