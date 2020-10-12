import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { useHistory } from 'react-router-dom';


import Button from '../Atoms/Button';
import Description from '../Atoms/Description'
import Video from '../Atoms/Video'
import Title from '../Atoms/Title';


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
  background-color: ${({ theme }) => theme.black};
  width: 90%;
  max-width: 1100px;
  max-height: 1000px;
  box-shadow: 0px 0px 20px -5px rgba(11, 16, 43, 1);
  display: flex;
  flex-direction: column;
  overflow-x: auto;
`;

const StyledCloseWrapper = styled.div`
 position: relative;
`;

const StyledInfoWrapper = styled.div`
display: flex;
flex-direction: column;
justify-content: space-between;
height: 100%;
padding: 30px 15px;
`

const MovieDetails = ({movies, itemId}) => {
  const history = useHistory();
  const handleClose = (e) => {
    e.stopPropagation();
    history.goBack();
  };

  const movie = movies.find(item => item.id.attributes["im:id"] === itemId);

  return (
    <StyledCartWrapper onClick={handleClose}>
      <StyledContentWrapper onClick={(e) => e.stopPropagation()}>
        <StyledCloseWrapper>
          <Button cartSmall close onClick={handleClose}>
          &#10006;
          </Button>
        </StyledCloseWrapper>
        <Video autoPlay controls width='500'><source src={movie.link[1].attributes.href}/></Video>
    <StyledInfoWrapper>
      <Title>{movie["im:name"].label}</Title>
      <Description video>{movie.summary.label}</Description>
      <Description video>Cast: {movie["im:artist"].label}</Description>
    </StyledInfoWrapper>
      </StyledContentWrapper>
    </StyledCartWrapper>
  );
};


MovieDetails.propTypes = {
    movies: PropTypes.arrayOf(PropTypes.shape).isRequired,
    itemId: PropTypes.string.isRequired,
  };

export default MovieDetails;