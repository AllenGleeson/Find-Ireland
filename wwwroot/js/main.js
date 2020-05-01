

function initMap() {


    var towns = [
        {
            name = "Belfast",
            lat = 54.607868,
            long = -5.926437,
            description = "Belfast, the capital and largest city of Northern Ireland, is located at the threshold of the River Lagan and is surrounded by low hills. It is a natural location for the shipping trade, one of the industries that made Belfast famous.",
            iconImage = {
                url: "https://pbs.twimg.com/profile_images/683021906732302336/mf_6n9I5_400x400.jpg", // url
                scaledSize: new google.maps.Size(50, 50) // size
            },
            attractions = [
                {
                    name = "Giants Causeway and Bushmills Railway",
                    lat = 55.21,
                    long = -6.535,
                    type = "map",
                    description = "The Giant's Causeway is an area of about 40,000 interlocking basalt columns, the result of an ancient volcanic fissure eruption. It is located in County Antrim on the north coast of Northern Ireland, about three miles northeast of the town of Bushmills. It was declared a World Heritage Site by UNESCO in 1986 and a national nature reserve in 1987 by the Department of the Environment for Northern Ireland. In a 2005 poll of Radio Times readers, the Giant's Causeway was named the fourth greatest natural wonder in the United Kingdom. The tops of the columns form stepping stones that lead from the cliff foot and disappear under the sea. Most of the columns are hexagonal, although there are also some with four, five, seven or eight sides. The tallest are about 12 metres high, and the solidified lava in the cliffs is 28 metres thick in places. Much of the Giant's Causeway and Causeway Coast World Heritage Site is owned and managed by the National Trust, and it is one of the most popular tourist attractions in Northern Ireland. Access to the Giant’s Causeway is free of charge: it is not necessary to go via the visitors centre, which charges a fee."
                },
                {
                    name = "Titanic Quarter",
                    lat = 54.6040825837,
                    long = -5.90346971944,
                    type = "city",
                    description = "Titanic Quarter in Belfast, Northern Ireland, is a large-scale waterfront regeneration, comprising historic maritime landmarks, film studios, education facilities, apartments, a riverside entertainment district, and the world's largest Titanic-themed attraction centred on land in Belfast Harbour, known until 1995 as Queen's Island. The 185-acre site, previously occupied by part of the Harland and Wolff shipyard, is named after the company's, and the city's, most famous product, RMS Titanic. Titanic Quarter is part of the Dublin-based group, Harcourt Developments, which has held the development rights since 2003."
                },
                {
                    name = "Carrick-a-Rede Rope Bridge",
                    lat = 55.2373540506,
                    long = -6.32529203216,
                    type = "map",
                    description = "The Carrick-a-Rede Rope Bridge is a rope bridge near Ballintoy in County Antrim, Northern Ireland. The bridge links the mainland to the tiny island of Carrickarede. It spans 20 metres and is 30 metres above the rocks below. The bridge is mainly a tourist attraction and is owned and maintained by the National Trust. In 2018, the bridge had 491,947 visitors. The bridge is open all year round and people may cross it for a fee. "
                },
                {
                    name = "Glenveagh Castle",
                    lat = 55.0333332,
                    long = -7.9666628,
                    type = "castle",
                    description = "Glenveagh is the second largest national park in Ireland. National parks in Ireland conform to IUCN standards. The park covers 170 square kilometres of hillside above Glenveagh Castle on the shore of Lough Veagh (Loch Ghleann Bheatha), 20 km from Gweedore in County Donegal. The network of mainly informal gardens displays a multitude of exotic and delicate plants from as far afield as Chile, Madeira and Tasmania, all sheltered by windbreaks of pine trees and ornamental rhododendrons."
                },
                {
                    name = "Belfast Castle",
                    lat = 54.642804,
                    long = -5.942139,
                    type = "castle",
                    description = "Belfast Castle is set on the slopes of Cavehill Country Park, Belfast, Northern Ireland, in a prominent position 400 feet above sea level. Its location provides unobstructed views of the city of Belfast and Belfast Lough."
                },
                {
                    name = "Dark Hedges",
                    lat = 55.1346929,
                    long = -6.380822,
                    type = "map",
                    description = "The Dark Hedges is an avenue of beech trees along Bregagh Road between Armoy and Stranocum in County Antrim, Northern Ireland. The trees form an atmospheric tunnel that has been used as a location in HBO's popular television series Game of Thrones, which has resulted in the avenue becoming a popular tourist attraction."
                },
            ]
        },
        {
            name = "",
            lat = 0,
            long = 0,

        }
    ]


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