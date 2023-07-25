import { useState } from 'react'
import { MapContainer, Marker, Popup, TileLayer, useMap } from "react-leaflet"
import Header from "./components/Header"
import InfoBar from './components/InfoBar'
import ResultsList from './components/ResultsList'
import SearchBar from "./components/SearchBar"
import './App.css'

function App() {
  const [searchLocation, setSearchLocation] = useState("")
  return (
    <main id="app-container">
      < Header />
      <section id="results-container">
        < InfoBar searchLocation={searchLocation} />
        < ResultsList searchLocation={searchLocation} />
      </section>
      < SearchBar setSearchLocation={setSearchLocation} />
    </main>
  )
}

export default App
