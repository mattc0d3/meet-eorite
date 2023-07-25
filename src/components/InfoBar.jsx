const InfoBar = ({ searchLocation }) => {
    
    const message = searchLocation ? `Top results for ${searchLocation}: ` : "Enter a location to see your results!"

    return <div id="infobar-container">
        <p>{message}</p>
    </div>
}

export default InfoBar