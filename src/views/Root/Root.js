import React, { useEffect } from 'react';
import {connect} from 'react-redux';
import { ThemeProvider } from 'styled-components';
import PropTypes from 'prop-types';
import GlobalStyle from '../../theme/GlobalStyle';
import { fetchMovies } from '../../data/actions/moviesAction';
import { theme } from '../../theme/mainTheme';

import MovieList from '../../components/Organisms/MovieList'

const Root = ({ movies, fetchList }) => {
  useEffect(() => {
    fetchList();
  }, [fetchList]);

  return ( 
  <>
    <GlobalStyle/>
    <ThemeProvider theme={theme}>
<MovieList movies={movies}/>
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