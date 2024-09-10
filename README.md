# Earthquake Visualization Tool

![Earthquake Visualization](https://github.com/SakinaJaffri/Leaflet-challenge/assets/146900226/8ff1909e-de17-4aaa-963c-15a67610f479)

## Project Overview

This project uses Leaflet.js to build an interactive map that visualizes earthquake data provided by the United States Geological Survey (USGS). The map helps to educate the public and government entities about earthquake activities, with markers representing earthquakes' magnitude and depth.

## Background

The USGS is responsible for providing scientific data about natural hazards. To improve public awareness of earthquake activities, the USGS needed an improved earthquake data visualization tool. This project helps visualize earthquake data based on magnitude, depth, and location, providing a clear representation of seismic activity over the last 7 days.

## Instructions

### Steps to Build the Earthquake Visualization

1. **Retrieve Earthquake Data:**
   - Visit the USGS GeoJSON Feed page [here](https://earthquake.usgs.gov/earthquakes/feed/v1.0/geojson.php).
   - Download the dataset, such as "All Earthquakes from the Past 7 Days."
   - Use the JSON data in your visualization.

2. **Visualizing Earthquakes with Leaflet:**
   - Use Leaflet to create an interactive map displaying earthquake locations.
   - Customize markers based on earthquake magnitude (marker size) and depth (marker color).
   - **Marker customization:**
     - **Size:** Larger markers represent stronger earthquakes.
     - **Color:** Darker markers represent deeper earthquakes.
   - Add popups that display specific details for each earthquake when the marker is clicked.
   - Include a legend explaining marker size and color coding.

## Features

- **Interactive Map:** Displays all earthquake events based on their geographical coordinates.
- **Dynamic Markers:** Earthquake magnitude is represented by marker size, and depth is indicated by color.
- **Detailed Popups:** Each marker displays information about the earthquake when clicked.
- **Legend:** Provides context about the magnitude and depth represented by the markers.

## Tools Used

- **Leaflet.js**: JavaScript library for interactive maps.
- **GeoJSON**: Earthquake data provided by USGS in GeoJSON format.
- **JavaScript**: For handling data and creating interactive features.

## How to Run

1. Clone this repository.
2. Retrieve earthquake data from the USGS GeoJSON Feed.
3. Open `index.html` in your browser to visualize the earthquake data on the interactive map.

## Contributors

- **Sakina Jaffri** - Developed the earthquake visualization tool using Leaflet and GeoJSON data.
