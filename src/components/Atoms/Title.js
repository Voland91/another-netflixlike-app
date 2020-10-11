import styled from "styled-components";

const Title = styled.p`
  color: ${({ theme }) => theme.white};
  font-size: 14px;
  font-weight: ${({ theme }) => theme.bold};
  text-transform: uppercase;
`;

export default Title;