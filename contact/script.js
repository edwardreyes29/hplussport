var bMapAPIKey = 'AoMjEXGiqX1gbho2GToCgNl97GlXdgF885S1Mtw4ZR9fR3T3lvc9M1x6TwLUgwwK'; // API Key
// set map in global namespace to see its value
var map;
// call back function that the script tag refers to in the HTML file
function initMap() {
    "use strict";

    var storeLocation = new Microsoft.Maps.Location(34.103106, -118.326337);
    var storeLocation2 = new Microsoft.Maps.Location(34.072324, -118.247936);
    var centerPoint = new Microsoft.Maps.Location(34.0937772394951, -118.27888622568359);
    map = new Microsoft.Maps.Map('#hplus-map', {
        credentials: bMapAPIKey,
        center: centerPoint,
        mapTypeId: Microsoft.Maps.MapTypeId.road,
        zoom: 12,
        disableScrollWheelZoom: true,
        disablePanning: true
    });

    //Create an infobox at the center of the map but don't show it.
    var infobox = new Microsoft.Maps.Infobox(map.getCenter(), {
        visible: false
    });

    //Assign the infobox to a map instance.
    infobox.setMap(map);

    //Create custom Pushpin
    var pin = new Microsoft.Maps.Pushpin(storeLocation, {
        title: 'H+ Sport in Hollywood',
        subTitle: '(Actually Capitol Records)'
    });

    var pin2 = new Microsoft.Maps.Pushpin(storeLocation2, {
        title: 'H+ Sport in Chavez Ravine',
        subTitle: '(Actually Dodger Stadium)'
    });

    //Store some metadata with the pushpin.
    pin.metadata = {
        title: 'H+ Sport in Hollywood',
        description: '1750 Vine St, Los Angeles, CA'
    };
    //Store some metadata with the pushpin.
    pin2.metadata = {
        title: 'H+ Sport in Chavez Ravine',
        description: '1000 Vin Scully Ave<br>Los Angeles, CA'
    };

    //Add a click event handler to the pushpin.
    Microsoft.Maps.Events.addHandler(pin, 'click', function pushpinClicked(e) {
        //Make sure the infobox has metadata to display.
        if (e.target.metadata) {
            //Set the infobox options with the metadata of the pushpin.
            infobox.setOptions({
                location: e.target.getLocation(),
                title: e.target.metadata.title,
                description: e.target.metadata.description,
                visible: true
            });
        }
    });
    //Add a click event handler to the pushpin.
    Microsoft.Maps.Events.addHandler(pin2, 'click', function pushpinClicked(e) {
        //Make sure the infobox has metadata to display.
        if (e.target.metadata) {
            //Set the infobox options with the metadata of the pushpin.
            infobox.setOptions({
                location: e.target.getLocation(),
                title: e.target.metadata.title,
                description: e.target.metadata.description,
                visible: true
            });
        }
    });

    //Add the pushpin to the map
    map.entities.push(pin);
    map.entities.push(pin2);

}