import styled, { css } from "styled-components";

const Button = styled.button`
  color: ${({ theme }) => theme.black};
  text-decoration: none;
  font-size: 13px;
  background-color: transparent;
  border: none;
  cursor: pointer;
  &:hover {
    color: ${({ theme }) => theme.blue};
  }
  ${({ cartSmall }) =>
    cartSmall &&
    css`
      background-color: ${({ theme }) => theme.blue};
      margin: 10px;
      padding: 4px 10px;
      color: ${({ theme }) => theme.white};
      border: 2px solid ${({ theme }) => theme.blue}
      transition: 0.2s;
      border-radius: 5px;
      &:hover {
        background-color: transparent;
        color: ${({ theme }) => theme.blue};
      }
    `};
  ${({ close }) =>
    close &&
    css`
      font-weight: ${({ theme }) => theme.bold};
      width: 20px;
      height: 20px;
      padding: 0;
    `};
`;

export default Button;