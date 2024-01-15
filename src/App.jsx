import { Route, Routes } from "react-router-dom"
import Navbar from "./Components/Navbar"
import Home from "./Components/Home"
import Comics from "./Components/Comics"
import Characters from "./Components/Characters"
import Movies from "./Components/Movies"
import TvShows from "./Components/TvShows"



function App() {
    
    const pass = 'ts=1&apikey=df55fde8b5a6c752a915b56b56145706&hash=6e0505263cca7382a5cf7a6cd52d9048'
    const api = `http://gateway.marvel.com/v1/public/comics?${pass}`

    fetch(api)
        .then(res => res.json())
        .then(data => {
            console.log(data)
        })

  return (
    <>
        <Navbar/>
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/comics" element={<Comics/>}/>
            <Route path="/characters" element={<Characters/>}/>
            <Route path="/movies" element={<Movies/>}/>
            <Route path="/tvshows" element={<TvShows/>}/>
        </Routes>
    </>
  )
}

export default App
