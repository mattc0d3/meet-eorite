const showMap = (event) => {
    const map = event.target.querySelector("div.map-container")
    if (map.style.display === "none" || !map.style.display) {
        map.style.display = "block";
      } else {
        map.style.display = "none";
      }
}

export default showMap