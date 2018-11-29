var mymap = L.map('jasonMap').setView([29.657, -82.348], 11.54);

L.tileLayer('https://api.mapbox.com/styles/v1/madisonhindo/cjp1ru9ab0jqi2sn2ben6p3p1/tiles/256/{z}/{x}/{y}@2x?access_token=pk.eyJ1IjoibWFkaXNvbmhpbmRvIiwiYSI6ImNqcDFnMGNhOTNmMDAzcWt3ZzE1N25sNWoifQ.y96dGGE5ySq9C-maEeI9tg', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18
}).addTo(mymap);

for ( let i = 0; i < places.length; i++) {
  L.marker( [ places[i].latitude, places[i].longitude ] )
  .bindPopup( '<h3>' + places[i].placeName + '</h3>' + '<p>' +
      places[i].descrip + '</p>')
  .addTo( mymap );
}
