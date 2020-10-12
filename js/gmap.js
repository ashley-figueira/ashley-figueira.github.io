function initialize() 
{
	//Create an array of styles
	var styles = [
    {
        "featureType": "all",
        "stylers": [
            {
                "saturation": 0
            },
            {
                "hue": "#e7ecf0"
            }
        ]
    },
    {
        "featureType": "road",
        "stylers": [
            {
                "saturation": -70
            }
        ]
    },
    {
        "featureType": "transit",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "poi",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "water",
        "stylers": [
            {
                "visibility": "simplified"
            },
            {
                "saturation": -60
            }
        ]
    }
	];

	var styledMap = new google.maps.StyledMapType(styles,{name: "Styled Map" });

    var myCenter = new google.maps.LatLng(41.3762325,2.1663184);
  	
  	var mapProp = {
    center:myCenter,
    zoom:12,
    scrollwheel: false,
    mapTypeControlOptions: {
      mapTypeIds: [google.maps.MapTypeId.ROADMAP, "map_style"]
    }
  	};
	
	var map = new google.maps.Map(document.getElementById("googleMap"), mapProp);
	
	map.mapTypes.set("map_style", styledMap);
  	map.setMapTypeId("map_style");

    var image = 'img/mapicon.png';
	var marker = new google.maps.Marker(
        {
            position:myCenter,
            icon: image
        });
	marker.setMap(map);

	var infowindow = new google.maps.InfoWindow({content:"Hello World!"});
	infowindow.open(map,marker);
}
google.maps.event.addDomListener(window, 'load', initialize);