///////////////////////////////////////////////////////////////////////////
// Enter your mapbox map id here to reference it for the base layer

var mapId = 'will-breitkreutz.k6fj4l3f'; //<- this references the ugly green map that I made
var token = 'pk.eyJ1IjoiY2hyaXNkaXZlbHkiLCJhIjoiVkE5a2FTayJ9.Nxm6_TKyp0a1CTKuj0t7PA'; //<- this is my token, use yours.

//Create the map object with your mapId and token
L.mapbox.accessToken = token;
var map = L.mapbox.map('map', 'chrisdively.25bdc8f3');

//Set the view of the map to the whole US
map.setView([39, -96], 4);

var datafiletoadd = 'data/test.geojson';

var featurelayer = L.mapbox.featurelayer().loadurl (datafiletoadd).addto(map);

featureLayer.on('ready', function(){
  this.setstyle({
    'color':"#ec008c",
    'fillcolor':'#ec008c',
    'weight':4,
    'opacity':.7
  });
  map.fitbounds(featurelayer.getbounds());
});
