import React, { useEffect, useState } from 'react';
import {connect} from 'react-redux';
import styled, { ThemeProvider } from 'styled-components';
import PropTypes from 'prop-types';
import GlobalStyle from '../../theme/GlobalStyle';
import { fetchMovies } from '../../data/actions/moviesAction';
import { theme } from '../../theme/mainTheme';

import MovieList from '../../components/Organisms/MovieList';
import NavBar from '../../components/Organisms/NavBar';


const StyledMainWrapper = styled.div`
max-width: 1280px;
width: 100%;
margin: 0 auto;
`;

const Root = ({ movies, fetchList }) => {
  const [search, setSearch] = useState('');
  const [value, setValue] = useState('');

  useEffect(() => {
    fetchList();
  }, [fetchList]);

  const searchingProduct = (event) => {
    setSearch(event.target.value);
    setValue(event.target.value);
  };

  const filteredProducts = movies.filter(
    (movie) =>
      movie["im:name"].label.toLowerCase().indexOf(search.toLowerCase()) !== -1);

  return ( 
  <>
    <GlobalStyle/>
      <ThemeProvider theme={theme}>
        <StyledMainWrapper>
          <NavBar searchFn={searchingProduct} value={value}/>
          <MovieList movies={filteredProducts}/>
        </StyledMainWrapper>
      </ThemeProvider>
  </>
  )};

  Root.propTypes = {
    movies: PropTypes.arrayOf(PropTypes.shape).isRequired,
    fetchList: PropTypes.func.isRequired,
  };
  
  
  export default connect(
    (state) => {
      return {
        movies: state.movies.movies
      };
    },
    { fetchList: fetchMovies },
  )(Root);