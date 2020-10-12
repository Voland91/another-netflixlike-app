import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import ListItem from '../Molecules/ListItem'

const StyledCatalogWrapper = styled.div`
display: flex;
flex-wrap: wrap;
justify-content: center;
`;

const MoviesList = ({ movies }) => (
      <StyledCatalogWrapper>
      {movies.map(movie => (<ListItem
      key={movie.id.attributes["im:id"]}
      image={movie["im:image"][2].label}
      name={movie["im:name"].label}
      category={movie.category.attributes.term}
      description={movie.summary.label}
      ></ListItem>)
)}
      </StyledCatalogWrapper>
  );

MoviesList.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.shape).isRequired,
};

export default MoviesList;