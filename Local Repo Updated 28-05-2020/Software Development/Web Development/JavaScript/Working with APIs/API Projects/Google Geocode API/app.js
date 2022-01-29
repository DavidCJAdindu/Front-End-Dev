// Get Location Form
var locationForm = document.getElementById('location-form')
locationForm.addEventListener('submit', geocode);

function geocode(e) {

  // Prevent submit form
  e.preventDefault();

  var location = document.getElementById('location-input').value;

  axios.get('https://maps.googleapis.com/maps/api/geocode/json', {
    params: {
      address: location,
      key: 'AIzaSyB41WG0D6UkAdLBXYeWXm1iGVVJgu1ItW8'

    }
  })
  .then(function(response){
    
    // Log full response
    console.log(response);

    // Formatted Address
    var formattedAddress = response.data.results[0].formatted_address;
    var formattedAddressOutput = `
      <ul class="list-group">
        <li class="list-group-item">${formattedAddress}</li>
      </ul>
    `;

    // Address Components
    var addressComponents = response.data.results[0].address_components;
    var addressComponentsOutput = '<ul class="list-group">';
    for(var i = 0; i < addressComponents.length; i++) {
      addressComponentsOutput += `
        <li class="list-group-item"><strong>${addressComponents[i].types[0]}</strong>: ${addressComponents[i].long_name}</li>
      `;
    }
    addressComponentsOutput += '</ul>'

    // Geometry
    var lat = response.data.results[0].geometry.location.lat;
    var lng = response.data.results[0].geometry.location.lng;
    var geometryOutput = `
      <ul class="list-group">
        <li class="list-group-item"><strong>Latitude: </strong>${lat}</li>
        <li class="list-group-item"><strong>Longitude: </strong>${lng}</li>
      </ul>
    `;

    // Output to App
    document.getElementById('formatted-address').innerHTML = formattedAddressOutput;
    document.getElementById('address-components').innerHTML = addressComponentsOutput;
    document.getElementById('geometry').innerHTML = geometryOutput;

  })
  .catch(function(error){
    console.error(error);
  });
}