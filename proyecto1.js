
function initMap() {
  const uluru = { lat: -34.60359757847554, lng: -58.38130218352239 };
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 14,
    center: uluru,
  });
	const marker = new google.maps.Marker({
    position: uluru,
    map: map,
    icon: {
      url: 'https://media.istockphoto.com/id/1345321343/vector/argentina-famous-obelisk.jpg?s=612x612&w=0&k=20&c=PFK8D3T6mfADjcl_7IVP9_veHeAP9Oq_nPK0Pmf2hLQ=',
      scaledSize: new google.maps.Size(50,50)
    }
  });
  window.map = map;
}

  window.initMap = initMap;
  window.map = null;

var loc = document.getElementById('geolocalización'); 

function getlocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition)
  }
  else {
    alert("Sorry! Geolocation API is not supported.")  
  }
}  

function showPosition (position){
  const loc = "La localización actual es (Latitude: " + position.coords.latitude + ", Longitude: " +    position.coords.longitude + ")";  
  document.getElementById("geolocalizacion").innerHTML = loc;

  const map = window.map;

  const redir = { lat: position.coords.latitude, lng: position.coords.longitude };
  const marker = new google.maps.Marker({
    position: redir,
    map: map,
  });
  map.setCenter(redir);
} 

