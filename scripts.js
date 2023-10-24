let mapAPIKey = "AsKWiJorCz4QNCqQNibOvU6U5NvWGxRb6lDNWutx3FyPTT373heQanUGM8NAy3QK";

let map;

function GetMap() {
    
    "use strict";

    let centerPoint = new Microsoft.Maps.Location(
        58.38005275455375, 
        26.721952466578557
    );

    map = new Microsoft.Maps.Map("#map", {
        credentials: mapAPIKey,
        center: centerPoint,
        zoom: 14,
        mapTypeId: Microsoft.Maps.MapTypeId.road,
        disablePanning: true
    });
        
    let pushpin = new Microsoft.Maps.Pushpin(centerPoint, {
        title: 'Laura Laanet',
        subTitle: 'Lapsehoidja',
    });

    map.entities.push(pushpin);

    let locations = [centerPoint];
    let bounds = Microsoft.Maps.LocationRect.fromLocations(locations);
    map.setView({ bounds: bounds });


}

