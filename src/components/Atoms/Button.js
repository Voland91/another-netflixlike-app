import styled from "styled-components";

const Button = styled.button`
position: absolute;
width: 30px;
height: 30px;
right: 10px;
top: 10px;
z-index: 999;
  color: ${({ theme }) => theme.gray};
  font-size: 13px;
  background-color: rgba(255, 255, 255, 0.5);
  border: none;
  border-radius: 50%;
  cursor: pointer;
  &:hover {
    color: ${({ theme }) => theme.black};
    background-color: rgba(255, 255, 255, 1);
  }
`;

export default Button;