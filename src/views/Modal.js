import React from 'react';
import { createPortal } from 'react-dom';
import MovieDetails from '../components/Organisms/MovieDetails';

const Modal = () =>
  createPortal(
    <MovieDetails/>,
    // eslint-disable-next-line no-undef
    document.querySelector('#modal'),
  );

export default Modal;