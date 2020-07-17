import React from "react"
import "../App.css"
import styled from "styled-components"

const StyledCard = styled.div`
  background-color: #004643;
  display: flex;
  margin: 2rem;
  width: 450px;
  border-radius: 10px;

  &:hover {
    background-color: #f9bc60;
    color: #001e1d;
    transform: translate(0, -5px);
    box-shadow: 3px 5px #004643;
    transition-duration: 500ms;
  }

  figure {
    padding: 0;

    img {
      border-radius: 100%;
      width: 150px;
      margin: 0;
      padding: 0;
    }
  }

  div {
    text-align: left;

    h3 {
      color: #fffffe;
    }
  }
`

function Character(props) {
  const { character } = props

  return (
    <StyledCard>
      <figure>
        <img src={character.image} alt="avatar" />
      </figure>
      <div>
        <h3>{character.name}</h3>
        <p>Status: {character.status}</p>
        <p>Species: {character.species}</p>
        <p>Gender: {character.gender}</p>
        <p>Origin: {character.origin.name}</p>
      </div>
    </StyledCard>
  )
}

export default Character
