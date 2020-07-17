import React from "react"
import "../App.css"
import styled from "styled-components"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faGithub } from "@fortawesome/free-brands-svg-icons"

const StyledFooter = styled.div`
  font-size: 120%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 2rem;

  h3 {
    color: #fffffe;
  }

  .footer__icon {
    font-size: 200%;
    margin-bottom: 1rem;
    color: #fffffe;
  }
`

function Footer() {
  return (
    <StyledFooter>
      <h3>Made by Yue</h3>
      <a
        href="https://github.com/yue-su/web-sprint-challenge-intro-to-react"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FontAwesomeIcon icon={faGithub} className="footer__icon" />
      </a>
    </StyledFooter>
  )
}

export default Footer
