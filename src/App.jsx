import Navbar from "./Components/Navbar"



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
    </>
  )
}

export default App
