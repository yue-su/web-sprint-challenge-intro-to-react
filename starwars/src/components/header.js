import React from "react"
import "../App.css"
import styled from "styled-components"

const StyledHeader = styled.div`
  img {
    width: 10rem;
  }

  h1 {
    color: #fffffe;
    font-size: 300%;
    font-style: italic;
  }
`

function Header(props) {
  return (
    <StyledHeader>
      <img src={require("../images/pngwing.png")} alt="icon" clasName="icon" />
      <h1>Rick and Morty</h1>
    </StyledHeader>
  )
}

export default Header
