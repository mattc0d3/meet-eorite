import axios from "axios"

const api = axios.create({ baseURL: "https://geocode.maps.co"})

const getCoordinates = (location) => {
    return api.get(`/search?q=${location}`).then(({ data }) => data[0])
}

export default getCoordinates