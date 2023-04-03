import styled from "styled-components";

export const Button = styled.button`
  padding: 0 10px;
  cursor: pointer;
  font-size: var(--button-font-size-1);
  font-weight: 500;
  height: var(--height--button-1);
  border-radius: 2px;
  width: ${({ width }) => `${width}`};
  box-sizing: border-box;
  color: black;
  border: var(--color-grey-4);;
  background: var(--color-grey-4);
  transition: all 1s;

  :hover {
    background: ${({ hover }) => `${hover}`};
    border-color: ${({ hover }) => `${hover}`};
    color: white;
  }
`;
