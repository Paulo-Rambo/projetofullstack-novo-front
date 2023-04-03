import styled from "styled-components";

export const Navbar = styled.nav`
  min-width: 320px;
  width: 100vw;
  height: 73px;
  padding: 0px var(--container-margin-1) 0px var(--container-margin-1);
  display: flex;
  justify-content: space-between;
  align-items: center;

  .adjust_Nav{
    display:flex;
    justify-content: space-between;
    height: 73px;
    align-items: center;
  }

  @media (min-width: 520px) {
    padding: 0px var(--container-margin-2) 0px var(--container-margin-2);
  }
  img {
    height: 17px;
  }
`;

export const LoadingDiv = styled.div`
  padding: 0px var(--container-margin-1) 0px var(--container-margin-1);
  font-size: var(--size-font-paragraph-1);
  color: var(--color-grey-0);
  margin-top: 20px;
  @media (min-width: 420px) {
    padding: 0px var(--container-margin-2) 0px var(--container-margin-2);
  }
`;

export const Header = styled.header`
  
  font-weight: 600;
  padding: 1rem;
  border-top: solid 3px var(--color-grey-3);
  border-bottom: solid 3px var(--color-grey-3);
  border-style: dotted;
  border-color: var(--color-grey-0);
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 17rem;
  transition: all 1s;

  .user_container{
    display:flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    height: 15rem;
  }

  .user_card {
    display: flex-box;
    flex-direction: column;
    justify-content: space-between;
    height: 50%;
  }
  @media (min-width: 520px) {
    section {
      flex-direction: row;
      align-items: center;
    }
  }
  h2 {
    font-size: var(--size-font-title-2);
  }
  p {
    color: var(--color-grey-0);
    font-size: var(--size-font-paragraph-1);
  }
`;
export const Denied = styled.h1`
  color: var(--color-grey-0);
`;
