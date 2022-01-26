var map = L.map('mapid').setView([41.85, -88.31], 10);

L.tileLayer('https://stamen-tiles-{s}.a.ssl.fastly.net/watercolor/{z}/{x}/{y}.{ext}', {
	attribution: 'Map tiles by <a href="http://stamen.com">Stamen Design</a>, <a href="http://creativecommons.org/licenses/by/3.0">CC BY 3.0</a> &mdash; Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
	subdomains: 'abcd',
	minZoom: 0,
	maxZoom: 20,
	ext: 'jpg'
}).addTo(map);

var marker = L.marker([41.85, -88.210]).addTo(map);
var marker2 = L.marker([41.85, -88.310]).addTo(map);
var marker3 = L.marker([41.85, -88.410]).addTo(map);

var circle = L.circle([41.85, -88.310], {
    color: 'purple',
    fillColor: '#000099',
    fillOpacity: 0.9,
    radius: 5000
}).addTo(map);

var polygon = L.polygon([
    [41.85, -88.210],
    [41.8, -88.210],
    [41.85, -88.310],
]).addTo(map);

marker.bindPopup("<b>Hello world!</b><br>I am a popup.").openPopup();
marker2.bindPopup("<b>Hello world!</b><br>I am a second popup.").openPopup();
marker3.bindPopup("<b>Hello world!</b><br>I am a third popup.").openPopup();
circle.bindPopup("I am a circle.");
polygon.bindPopup("I am a polygon.");

/*var popup = L.popup()
    .setLatLng([41.85, -88.210])
    .setContent("I am a standalone popup.")
    .openOn(map);*/

function onMapClick(e) {
    alert("You clicked the map at " + e.latlng);
}

map.on('click', onMapClick);

