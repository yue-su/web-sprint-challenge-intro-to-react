import React from 'react';
import '../App.css';
import styled from 'styled-components'

const StyledHeader = styled.div`
  img {
    width: 10rem;
  }

  h1 {
    color: #fffffe;
  }
`


function Header(props) {
    return (
      <StyledHeader>
        <img src={require("../images/pngwing.png")} alt="icon" />
        <h1>Rick and Morty</h1>
      </StyledHeader>
    )
}

export default Header