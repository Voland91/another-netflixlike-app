import React from 'react';
import { createPortal } from 'react-dom';
import MovieDetails from '../components/Organisms/MovieDetails';

const Modal = ({movies, itemId}) => 
(
  createPortal(
    <MovieDetails movies={movies} itemId={itemId} />,
    // eslint-disable-next-line no-undef
    document.querySelector('#modal')
  ))

export default Modal;