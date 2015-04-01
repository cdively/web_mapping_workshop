///////////////////////////////////////////////////////////////////////////
// Enter your mapbox map id here to reference it for the base layer

var mapId = 'will-breitkreutz.k6fj4l3f'; //<- this references the ugly green map that I made
var token = 'pk.eyJ1IjoiY2hyaXNkaXZlbHkiLCJhIjoiVkE5a2FTayJ9.Nxm6_TKyp0a1CTKuj0t7PA'; //<- this is my token, use yours.

//Create the map object with your mapId and token
L.mapbox.accessToken = token;
var map = L.mapbox.map('map', 'chrisdively.25bdc8f3');

//Set the view of the map to the whole US
map.setView([39, -96], 4);

var dataFileToAdd = 'data/test.geojson';

var featureLayer = L.mapbox.featureLayer().loadURL(dataFileToAdd).addTo(map);

featureLayer.on('ready',function(){
  this.setStyle({
    'color':"#ec008c",
    'fillColor':'#ec008c',
    'weight':4,
    'opacity':.7
  });
  map.fitBounds(featureLayer.getBounds());
});

featureLayer.on ('ready',function(){
  this.eachLayer(function(layer){
    layer.bindPopup('Hi Im the State Called ' + layer.feature.properties.STATE_NAME);
  });
});

var myLocation = L.mapbox.featureLayer().addTo(map);
map.locate();
map.on('locationfound', function(e) {

    myLocation.setGeoJSON({
        type: 'Feature',
        geometry: {
            type: 'Point',
            coordinates: [e.latlng.lng, e.latlng.lat]
        },
        properties: {
            'title': 'Here I am!',
            'marker-color': '#ff8888',
            'marker-symbol': 'star'
        }
    });
});
map.locate();
