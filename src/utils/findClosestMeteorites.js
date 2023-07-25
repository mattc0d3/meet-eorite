const radius = 3963 // radius of Earth in miles

const findClosestMeteorites = (meteors, coords) => {

    const meteorsByDistance = meteors.map(meteor => {
        meteor.distance = calculateDistance(Number(meteor.reclat), Number(meteor.reclong), coords.lat, coords.lon)
        return meteor
    })

    const sortedMeteors = meteorsByDistance.sort((a, b) => {
        if (a.distance === NaN) return -1
        return (a.distance > b.distance) ? 1 : -1
    })
    return sortedMeteors.slice(0, 10)
}

const calculateDistance = (meteorLat, meteorLon, searchLat, searchLon) => {
    // Convert to radians
    const meteorLatRadians =  meteorLat * Math.PI / 180;
    const meteorLonRadians = meteorLon * Math.PI / 180;
    const searchLatRadians = searchLat * Math.PI / 180;
    const searchLonRadians = searchLon * Math.PI / 180;

    // Haversine formula
    let dlon = searchLonRadians - meteorLonRadians;
    let dlat = searchLatRadians - meteorLatRadians;
    let a = Math.pow(Math.sin(dlat / 2), 2)
             + Math.cos(meteorLatRadians) * Math.cos(searchLatRadians)
             * Math.pow(Math.sin(dlon / 2),2);
           
    let c = 2 * Math.asin(Math.sqrt(a));

    return(c * radius);
}

export default findClosestMeteorites