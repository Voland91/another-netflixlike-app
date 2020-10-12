import React, { useEffect } from 'react';
import {connect} from 'react-redux';
import styled, { ThemeProvider } from 'styled-components';
import PropTypes from 'prop-types';
import GlobalStyle from '../../theme/GlobalStyle';
import { fetchMovies } from '../../data/actions/moviesAction';
import { theme } from '../../theme/mainTheme';

import MovieList from '../../components/Organisms/MovieList'
import Logo from '../../components/Atoms/Logo';
import logo from '../../asssets/logo.svg'

const StyledMainWrapper = styled.div`
max-width: 1280px;
width: 100%;
margin: 0 auto;
`;

const Root = ({ movies, fetchList }) => {
  useEffect(() => {
    fetchList();
  }, [fetchList]);

  return ( 
  <>
    <GlobalStyle/>
      <ThemeProvider theme={theme}>
        <StyledMainWrapper>
          <Logo src={logo}/>
          <MovieList movies={movies}/>
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