let map;

function initMap() {
  const gherkin = { lat: 51.5144, lng: -0.0803 };
  map = new google.maps.Map(document.getElementById('map'), {
    center: { lat: 51.5144, lng: -0.0803 },
    zoom: 15,
    center: gherkin,
  });
  const marker = new google.maps.Marker({
    position: gherkin,
    map: map,
  });
}
