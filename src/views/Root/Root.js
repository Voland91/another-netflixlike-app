import React, { useEffect } from 'react';
import {connect} from 'react-redux';
import { ThemeProvider } from 'styled-components';
import GlobalStyle from '../../theme/GlobalStyle';
import { fetchMovies } from '../../data/actions/moviesAction';
import { theme } from '../../theme/mainTheme';

import Description from '../../components/Atoms/Description'

const Root = ({ movies, fetchMovies }) => {
  useEffect(() => {
    fetchMovies();
  }, [fetchMovies]);

  return ( 
  <>
    <GlobalStyle/>
    <ThemeProvider theme={theme}>
{movies.map(element => (<Description>{element['im:name'].label}</Description>)
)}
</ThemeProvider>
  </>
  )};

  export default connect(
    (state) => {
      return {
        movies: state.movies.movies
      };
    },
    { fetchMovies },
  )(Root);