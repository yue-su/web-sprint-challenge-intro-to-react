import React from "react"
import "../App.css"
import Character from "./character"
import styled from "styled-components"

const StyledCards = styled.div`
  background-color: #abd1c6;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
`

function Cards(props) {
  const { characters } = props

  return (
    <StyledCards>
      {characters.map((item) => {
        return <Character key={item.id} character={item} />
      })}
    </StyledCards>
  )
}

export default Cards
