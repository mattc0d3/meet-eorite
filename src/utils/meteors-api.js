import axios from "axios"

const api = axios.create({ baseURL: "https://data.nasa.gov/resource/gh4g-9sfh.json"})

const getMeteors = () => {
    return api.get().then(res => res)
}

export default getMeteors