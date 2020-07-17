import React, { useState, useEffect } from "react"
import axios from "axios"
import "./App.css"
import Header from "./components/header"
import Cards from "./components/cards"
import Footer from "./components/footer"

const apiKey = "https://rickandmortyapi.com/api/character/"

const App = () => {
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
