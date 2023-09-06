# Meet-eorite

Link to hosted app: https://meet-eorite.netlify.app/

This React project uses two public APIs by NASA and Geocode to serve the user information about the closest meteorite landings to their location. The user inputs a place name and the app makes a call to the Geocoding API service using Axios. This converts the human-readable address into latitude and longitude co-ordinates and in turn sources map data from the Google Maps API. These co-ordinates are then used to filter meteorite data from NASA's API into a list of the 10 nearest meteorite landings, before presenting the user with a brief info card on each meteorite, in addition to a visual map.

# Use Guide:
- Download project from https://github.com/mattc0d3/nc-news
- Clone in terminal with following command: ‘git clone https://github.com/mattc0d3/nc-news.git’
- Open in code editor
- Install dependencies
  - Install npm package manager for Javascript
  - Install Axios
- Run app locally with command 'npm run dev'

# Minimum Requirements:
- Visual Studio Code or alternative source-code editor
- JavaScript
- npm
- Axios version 1.4.0 or higher

# Authors
- Matt Sheehan
