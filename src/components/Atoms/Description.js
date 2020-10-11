import styled from "styled-components";

const MovieDescription = styled.p`
  color: ${({ theme }) => theme.description};
  font-size: 14px;
  font-weight: ${({ theme }) => theme.thin};
`;

export default MovieDescription;