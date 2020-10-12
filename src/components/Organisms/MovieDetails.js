import React from 'react';
import styled from 'styled-components';
import { useHistory } from 'react-router-dom';


import Button from '../Atoms/Button';


const StyledCartWrapper = styled.aside`
  position: fixed;
  height: 100%;
  width: 100%;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.5);
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 100;
`;

const StyledContentWrapper = styled.div`
  background-color: ${({ theme }) => theme.white};
  width: 600px;
  max-height: 700px;
  box-shadow: 0px 0px 20px -5px rgba(11, 16, 43, 1);
  display: flex;
  flex-direction: column;
  overflow-x: auto;
`;

const StyledNavWrapper = styled.div`
  display: flex;
  align-self: flex-end;
`;

const MovieDetails = () => {
  const history = useHistory();
  const handleClose = (e) => {
    e.stopPropagation();
    history.goBack();
  };

  return (
    <StyledCartWrapper onClick={handleClose}>
      <StyledContentWrapper onClick={(e) => e.stopPropagation()}>
        <StyledNavWrapper>
          <Button cartSmall close onClick={handleClose}>
            X
          </Button>
        </StyledNavWrapper>
      </StyledContentWrapper>
    </StyledCartWrapper>
  );
};


export default MovieDetails;