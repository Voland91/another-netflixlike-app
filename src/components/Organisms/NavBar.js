import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import Logo from '../Atoms/Logo'
import TextInput from '../Atoms/TextInput';
import logo from '../../asssets/logo.svg'

const StyledNavWrapper = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
margin: 20px 0;
`;

const NavBar = ({searchFn, value}) => (
    <StyledNavWrapper>
      <Logo src={logo}/>
      <TextInput type="text" placeholder="search..." onChange={searchFn} value={value}/>
    </StyledNavWrapper>
  );

  NavBar.propTypes = {
    value: PropTypes.string.isRequired,
    searchFn: PropTypes.func.isRequired,
  };

export default NavBar;