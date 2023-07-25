import { useEffect, useState } from 'react'
import MeteorCard from './MeteorCard'
import getMeteors from '../utils/meteors-api'
import getCoordinates from '../utils/coordinates-api'
import findClosestMeteorites from '../utils/findClosestMeteorites'

const ResultsList = ({ searchLocation }) => {
    const [meteors, setMeteors] = useState([])
    const [coords, setCoords] = useState({})
    const [isLoading, setIsLoading] = useState(true)
    const [isError, setIsError] = useState(false)
    let topResults = []

    useEffect(() => {
        getMeteors()
            .then(({ data }) => {
                setMeteors(data)
                setIsLoading(false)
            })
            .catch(err => {
                setIsError(true)
            })
    }, [])

    useEffect(() => {
        if (searchLocation) {
            getCoordinates(searchLocation)
                .then(response => {
                    setCoords({ lat: Number(response.lat), lon: Number(response.lon) })
                })
                .catch(err => {
                    setIsError(true)
                })
        }
    }, [searchLocation])


    if (isError) <p>Error!</p>
    else if (isLoading) <p>Loading...</p>

    if (coords.lat) {
        topResults = findClosestMeteorites(meteors, coords)
    }

    return <section id="list-container">
        <ul>
            {topResults.map((meteor) => {
                return < MeteorCard key={meteor.id} meteor={meteor} />
            })}
        </ul>
    </section>
}

export default ResultsList