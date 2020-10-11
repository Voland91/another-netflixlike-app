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
height: 390px;
`;

const StyledInfoWrapper = styled.div`
display: flex;
flex-direction: column;
height: 40%;
justify-content: space-between;
padding: 15px 5px;
cursor: pointer;

&:hover {
background-color: ${({ theme }) => theme.gray}
}
`

const ListItem = ({ name, image, category, description }) => {

const shortDescription = description.substring(0, 45);
const shortTitle = name.substring(0, 17);

return (
  <StyledItemWrapper>
    <Image src={image}/>
    <StyledInfoWrapper>
      <Title>{shortTitle.length < 17 ? shortTitle : `${shortTitle}...`}</Title>
      <Description>{shortDescription.length < 45 ? shortDescription : `${shortDescription}...`}</Description>
      <Description category>{category}</Description>
    </StyledInfoWrapper>
  </StyledItemWrapper>
);}

ListItem.propTypes = {
name: PropTypes.string.isRequired,
image: PropTypes.string.isRequired,
category: PropTypes.string.isRequired,
description: PropTypes.string.isRequired
};

export default ListItem;