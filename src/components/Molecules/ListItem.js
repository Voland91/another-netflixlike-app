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
padding: 30px 20px;
height: 100%;
width: 100%;
max-width: 235px;
&:hover {
background-color: ${({ theme }) => theme.gray};
padding: 10px;
}
`;

const StyledInfoWrapper = styled.div`
display: flex;
flex-direction: column;
justify-content: space-between;
height: 100%;
min-height: 90px;
padding-top: 15px;
cursor: pointer;
`

const ListItem = ({ name, image, category, description }) => {

const shortDescription = description.substring(0, 45);
const shortTitle = name.substring(0, 19);

return (
  <StyledItemWrapper>
    <Image src={image}/>
    <StyledInfoWrapper>
      <Title>{shortTitle.length < 19 ? shortTitle : `${shortTitle}...`}</Title>
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