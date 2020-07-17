import React, { useState, useEffect } from "react"
import axios from "axios"
import "./App.css"
import Header from "./components/header"
import Cards from "./components/cards"
import Footer from "./components/footer"

const apiKey = "https://rickandmortyapi.com/api/character/"

const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the API in an effect hook. Remember, anytime you have a
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

  const [characters, setCharaters] = useState([])

  useEffect(() => {
    axios
      .get(apiKey)
      .then((res) => {
        setCharaters(res.data.results)
        console.log(res.data.results)
      })
      .catch((err) => console.log(err))
  }, [])

  return (
    <div className="App">
      <Header />
      <Cards characters={characters} />
      <Footer />
    </div>
  )
}

export default App
