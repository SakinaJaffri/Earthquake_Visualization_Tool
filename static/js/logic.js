// Define the URL to fetch earthquake data.
let queryUrl = "https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_week.geojson";

// Fetch earthquake data using d3.
d3.json(queryUrl).then(function (data) {
    console.log(data.features);

    // Create a GeoJSON layer for earthquakes.
    let earthquakes = L.geoJSON(data, {
        // Customize data markers to reflect magnitude of earthquake by size and depth by color.
        pointToLayer: function (feature, layer) {
            let radius = Math.max(feature.properties.mag) * 4; // Set marker radius based on earthquake magnitude.
            let depth = feature.geometry.coordinates[2]; // Get earthquake depth.
            let color = getColor(depth); // Determine marker color based on earthquake depth.
            
            let markerOptions = {
                radius: radius,
                fillColor: color,
                color: "black",
                weight: 1,
                opacity: 1,
                fillOpacity: 0.6
            };

            return L.circleMarker(layer, markerOptions);
        },
        // Binding a popup to each layer to display detailed information.
        onEachFeature: function (feature, layer) {
            layer.bindPopup(`<h3>Place:</h3> ${feature.properties.place} <br/> 
                            <h3>Magnitude:</h3> ${feature.properties.mag} <br/>
                            <h3>Depth:</h3> ${feature.geometry.coordinates[2]} <br/>
                            <h3>Time:</h3> ${new Date(feature.properties.time)}`);
        }
    });

    // Create the tile layer for the map background.
    var Stadia_AlidadeSmooth = L.tileLayer('https://tiles.stadiamaps.com/tiles/alidade_smooth/{z}/{x}/{y}{r}.{ext}', {
        minZoom: 0,
        maxZoom: 20,
        attribution: '&copy; <a href="https://www.stadiamaps.com/" target="_blank">Stadia Maps</a> &copy; <a href="https://openmaptiles.org/" target="_blank">OpenMapTiles</a> &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
        ext: 'png'
    });

    // Create the map object with options.
    let myMap = L.map("map", {
        center: [37.0902, -95.7129], // Centered in the United States.
        zoom: 5,
        layers: [Stadia_AlidadeSmooth, earthquakes] // Include tile layer and earthquake data layer.
    });

    // Define legend control.
    var legend = L.control({ position: "bottomright" });

    // Define legend content and style.
    legend.onAdd = function (map) {
        var div = L.DomUtil.create("div", "info legend");
        var depths = [-10, 10, 30, 50, 70, 90]; // Define depth ranges
    
        // Set legend style.
        div.style.backgroundColor = 'white';
        div.style.padding = '10px';
        
        // Add depth ranges and corresponding colors to legend.
        for (var i = 0; i < depths.length; i++) {
            div.innerHTML +=
            `<i style="background: ${getColor(depths[i])}; color: ${getColor(depths[i])} ">" "</i> ` +
                depths[i] + (depths[i+1] ? '&ndash;' + depths[i + 1] : '+') + '<br>';
        }
        return div;
    };

    // Add legend to the map.
    legend.addTo(myMap);

    // Function to determine marker color based on earthquake depth.
    function getColor(d) {
        return d < 10 ? 'lime' :
               d < 30 ? 'greenyellow' :
               d < 50 ? 'gold' :
               d < 70 ? 'orange' :
               d < 90 ? 'darkorange' :
               'red';
    }
});
