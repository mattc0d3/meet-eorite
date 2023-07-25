import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet"
import showMap from "../utils/showMap"
import 'leaflet/dist/leaflet.css'

const MeteorCard = ({ meteor }) => {

    const { name, year, mass, distance, reclat, reclong } = meteor
    const age = getAge(year)
    const formattedMass = formatMass(mass)
    if (!reclat) return
    return <li className="meteor-card">
        <h3>{name} - {Math.round(distance)} miles away</h3>
        <div className="meteor-info">
            <p>{age} years old </p>
            <p>{formattedMass}</p>
        </div>
        <div className="dropdown-container" onClick={showMap}> Show Location ↓
            <div className="map-container" onClick={showMap}>
                <MapContainer center={[reclat, reclong]} zoom={5} scrollWheelZoom={false}>
                    <TileLayer
                        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    />
                    <Marker position={[reclat, reclong]}>
                        <Popup>
                            A pretty CSS3 popup. <br /> Easily customizable.
                        </Popup>
                    </Marker>
                </MapContainer>
            </div>
        </div>

    </li>
}

function getAge(year) {
    const yearNum = Number(year.split("-")[0])
    const currentDate = new Date();
    const currentYear = currentDate.getFullYear();
    return currentYear - yearNum
}

function formatMass(mass) {
    return Number(mass) > 1000 ? `${(Number(mass) / 1000).toFixed(1)} kg` : `${Number(mass)} g`
}

export default MeteorCard