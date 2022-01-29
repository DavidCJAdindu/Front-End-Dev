function initMap() {

  // Map options
  var options = {
    zoom: 11,
    center: {lat: 53.3498, lng: -6.2603}
  }

  // New Map
  var map = new google.maps.Map(document.getElementById('map'),
  options);

  /* Manually Adding Markers & Info Window

    // Add Marker
    var marker = new google.maps.Marker({
      position:{lat: 53.3842, lng: -6.3760},
      map:map,
      //custom icon
      icon: 'https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png'
    });

    // Info Window
    var infoWindow = new google.maps.InfoWindow({
      content:'<h3>D15</h3>'
    });

    marker.addListener('click', function() {
      infoWindow.open(map, marker);
    });

  */

  // Add Marker Function
  function addMarker(props) {

    var marker = new google.maps.Marker({
    position: props.coords,
    map:map,
    // icon: props.iconImage
    });

    // Check for custom icon
    if(props.iconImage) {
      // set icon image
      marker.setIcon(props.iconImage);
    }

    // Check content
    if(props.content) {

      // Info Window
      var infoWindow = new google.maps.InfoWindow({
        content: props.content
      });

      marker.addListener('click', function() {
        infoWindow.open(map, marker);
      });
    }

  }

  /*

    // Call Market Function to add Marker 
    addMarker({
      coords:{lat: 53.3842, lng: -6.3760},
      iconImage: 'https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png',
      content:'<h3>D15</h3>'
    }); // Blanchardstown

    addMarker({
      coords:{lat: 53.3903, lng: -6.2984},
      iconImage: '',
      content:'<h3>D11</h3>'
    }); // Finglas

    addMarker({
      coords:{lat: 53.3572, lng: -6.4498},
      iconImage: '',
      content:'<h3>D20</h3>'
    }); // Lucan

    addMarker({
      coords:{lat: 53.2888, lng: -6.3557},
      iconImage: '',
      content:'<h3>D24</h3>'
    }); // Tallaght
  
  */

  // Array of Markers
  var markers = [

    { // Blanchardstown
      coords:{lat: 53.3842, lng: -6.3760},
      iconImage: 'https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png',
      content:'<h3>D15</h3>'
    },

    { // Finglas
      coords:{lat: 53.3903, lng: -6.2984},
      iconImage: '',
      content:'<h3>D11</h3>'
    }, 

    { // Lucan
      coords:{lat: 53.3572, lng: -6.4498},
      iconImage: '',
      content:'<h3>D20</h3>'
    }, 

    { // Tallaght
      coords:{lat: 53.2888, lng: -6.3557},
      iconImage: '',
      content:'<h3>D24</h3>'
    }

  ];

  // Loop Through Markets
  for(var i = 0; i < markers.length; i++){
    addMarker(markers[i]);
  }


  // Listen for click on map 
  google.maps.event.addListener(map, 'click', function(event){
    // Add Marker
    addMarker({coords:event.latLng})
  });

}