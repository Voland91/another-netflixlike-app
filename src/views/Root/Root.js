import React, { useEffect } from 'react';
import {connect} from 'react-redux';
import GlobalStyle from '../../theme/GlobalStyle';
import { fetchMovies } from '../../data/actions/moviesAction';

const Root = ({ movies, fetchMovies }) => {
  useEffect(() => {
    fetchMovies();
  }, [fetchMovies]);

  return ( 
  <>
    <GlobalStyle/>
{movies.map(element => (<div>{element['im:name'].label}</div>)
)}
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