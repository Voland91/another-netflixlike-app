import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import Description from '../Atoms/Description'
import Image from '../Atoms/Image'
import Title from '../Atoms/Title';

const StyledItemWrapper = styled.div`
display: flex;
flex-direction: column;
justify-content: space-between;
width: 17%;
margin-top: 60px;
height: 370px;
`;

const ListItem = ({ name, image, category, description }) => {

const shortDescription = description.substring(0, 50);

return (
  <StyledItemWrapper>
    <Image src={image}/>
    <Title>{name}</Title>
    <Description>{shortDescription}...</Description>
      <Description category>{category}</Description>
  </StyledItemWrapper>
);}

ListItem.propTypes = {
name: PropTypes.string.isRequired,
image: PropTypes.string.isRequired,
category: PropTypes.string.isRequired,
description: PropTypes.string.isRequired
};

export default ListItem;