

function initMap() {


    /* var towns = [
        {
            name = "",
            logtitude = 0,
            description = "",
            iconImage = "",
            attractions = {
                aname = "",
                long = 0,
                lat = 0,
                description = ""
            }
        },
        {
            name = "",
            lat = 0,
            long = 0,

        }
    ] */


    //let searchedTown = towns.find(t => t.name == searchTerm);

    //let allAttractions = towns.map(t => t.attractions).find;

    //allAttractions.find

    /* for( let town of towns){
        for( let attraction of town.attractions){
        
        }
    } */

    var locations = [
      ['Limerick', 52.668018, -8.630498, 4],
      ['Galway', 53.270962, -9.062691, 5],
      ['Cork', 51.903614, -8.468399, 3],
      ['Dublin', 53.350140, -6.266155, 2],
      ['Belfast', 54.607868, -5.926437, 1],
        




      // Near Belfast
      ['Giants Causeway and Bushmills Railway', 55.21, -6.535, 1],
      ['Titanic Quarter', 54.6040825837, -5.90346971944, 1],
      ['Carrick-a-Rede Rope Bridge', 55.2373540506, -6.32529203216, 1],
      ['Glenveagh Castle', 55.0333332, -7.9666628, 1],
      ['Belfast Castle', 54.642804, -5.942139, 1],
      ['Dark Hedges', 55.1346929, -6.380822, 1],

      // Near Galway
      ['Croagh Patrick', 53.760047, -9.659536, 1],
      ['Connemara National Park', 53.550664464, -9.940162906, 1],
      ['Dunguaire Castle', 53.143, -8.939, 1],

      // Near Limerick
      ['Cliffs of Moher', 52.93499626, -9.46916479, 1],
      ['Rock of Cashel', 52.518664592, -7.887329784, 1],
      ['Ring of Kerry', 52.067539, -9.523854, 1],
      

      // Near Cork
      ['Killarney National Park and Muckross House & Gardens', 52.0058447, -9.5561803, 1],
      ['Blarney Castle', 51.929092, -8.570885, 1],
      ['Cliffs of Moher', 52.93499626, -9.46916479, 1],

      // Dublin
      ['Trinity College', 53.343792, -6.254572, 1],
      ['St. Stephens Green', 53.336165322, -6.255498978, 1],
      ['Guinness Storehouse', 53.33833198, -6.285498858, 1],
      ['Christ Church Cathedral', 53.33916531, -6.269498922, 1],
      ['Newgrange', 53.6899522402, -6.47168311326, 1],
      ['Kilkenny Castle', 52.650164066, -7.242832362, 1],
      ['Powerscourt Estate', 53.18416593, -6.185499258, 1],
    ];

    var map = new google.maps.Map(document.getElementById('map'), {
      zoom: 7,
      center: new google.maps.LatLng(53.350140, -6.266155),
      mapTypeId: google.maps.MapTypeId.ROADMAP
    });

    var infowindow = new google.maps.InfoWindow();

    var marker, i;
    var icon = {
        url: 'https://cloudfour.com/examples/img-currentsrc/images/kitten-small.png', // url
        scaledSize: new google.maps.Size(50, 50), // size
    };

    for (i = 0; i < locations.length; i++) {  
      marker = new google.maps.Marker({
        position: new google.maps.LatLng(locations[i][1], locations[i][2]),
        map: map,
        icon: icon
      });

      google.maps.event.addListener(marker, 'click', (function(marker, i) {
        return function() {
          infowindow.setContent(locations[i][0]);
          infowindow.open(map, marker);
        }
      })(marker, i));
    }
}      