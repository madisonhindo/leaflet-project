var mymap = L.map('mapid').setView([28.105, -82.773], 5.98);

L.tileLayer('https://api.mapbox.com/styles/v1/madisonhindo/cjp1g78pv0mw62slbfam0inv4/tiles/256/{z}/{x}/{y}@2x?access_token=pk.eyJ1IjoibWFkaXNvbmhpbmRvIiwiYSI6ImNqcDFnMGNhOTNmMDAzcWt3ZzE1N25sNWoifQ.y96dGGE5ySq9C-maEeI9tg', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18
}).addTo(mymap);

let marker1 = L.marker([29.646436, -82.348293]).addTo(mymap);
let marker2 = L.marker([28.597935, -81.200237]).addTo(mymap);
let marker3 = L.marker([25.757475, -80.375465]).addTo(mymap);
let marker4 = L.marker([30.438099, -84.286221]).addTo(mymap);


marker1.bindPopup("<b>University of Florida</b><br>7,908 voters")
marker2.bindPopup("<b>University of Central Florida</b><br>5,117 voters.")
marker3.bindPopup("<b>Florida International University</b><br>7,704 voters.")
marker4.bindPopup("<b>Florida State University and Florida A&M</b><br>6,113 voters.")
