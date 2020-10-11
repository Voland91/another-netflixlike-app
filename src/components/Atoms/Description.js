import styled, { css } from "styled-components";

const Description = styled.p`
  color: ${({ theme }) => theme.description};
  font-size: 12px;
  font-weight: ${({ theme }) => theme.thin};

  ${({ category }) =>
    category &&
    css`
      font-weight: ${({ theme }) => theme.bold};
      font-size: 10px;
    `};

    ${({ duration }) =>
    duration &&
    css`
      font-size: 10px;
    `};
`;

export default Description;