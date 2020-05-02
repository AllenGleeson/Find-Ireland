
class  LocationType{
    CHURCH = "wwwroot/js/main.js/images/icons/church-2.png";
    FOOTPRINT = "wwwroot/js/main.js/images/icons/footprint.png";
    MONUMENT = "wwwroot/js/main.js/images/icons/modernmonument.png";
    RUINS = "wwwroot/js/main.js/images/icons/ruins-2.png";
}


var locations = [
    {
        name : "Belfast",
        lat : 54.607868,
        long : -5.926437,
        description : "Belfast, the capital and largest city of Northern Ireland, is located at the threshold of the River Lagan and is surrounded by low hills. It is a natural location for the shipping trade, one of the industries that made Belfast famous.",
        iconImage : "https://pbs.twimg.com/profile_images/683021906732302336/mf_6n9I5_400x400.jpg",
        backgroundImage : "https://s3.visitbelfast.com/app/uploads/2019/05/city-hall.jpg_1557904957.jpg",
        attractions : [
            {
                name : "Giants Causeway and Bushmills Railway",
                lat : 55.21,
                long : -6.535,
                type : LocationType.FOOTPRINT,
                image : "https://thumbor.forbes.com/thumbor/960x0/https%3A%2F%2Fspecials-images.forbesimg.com%2Fdam%2Fimageserve%2F1150513069%2F960x0.jpg%3Ffit%3Dscale",
                description : "The Giant's Causeway is an area of about 40,000 interlocking basalt columns, the result of an ancient volcanic fissure eruption. It is located in County Antrim on the north coast of Northern Ireland, about three miles northeast of the town of Bushmills. It was declared a World Heritage Site by UNESCO in 1986 and a national nature reserve in 1987 by the Department of the Environment for Northern Ireland. In a 2005 poll of Radio Times readers, the Giant's Causeway was named the fourth greatest natural wonder in the United Kingdom. The tops of the columns form stepping stones that lead from the cliff foot and disappear under the sea. Most of the columns are hexagonal, although there are also some with four, five, seven or eight sides. The tallest are about 12 metres high, and the solidified lava in the cliffs is 28 metres thick in places. Much of the Giant's Causeway and Causeway Coast World Heritage Site is owned and managed by the National Trust, and it is one of the most popular tourist attractions in Northern Ireland. Access to the Giant’s Causeway is free of charge: it is not necessary to go via the visitors centre, which charges a fee."
            },
            {
                name : "Titanic Quarter",
                lat : 54.6040825837,
                long : -5.90346971944,
                type : LocationType.MONUMENT,
                image : "https://live.staticflickr.com/7291/27779258066_71da327a0f_b.jpg",
                description : "Titanic Quarter in Belfast, Northern Ireland, is a large-scale waterfront regeneration, comprising historic maritime landmarks, film studios, education facilities, apartments, a riverside entertainment district, and the world's largest Titanic-themed attraction centred on land in Belfast Harbour, known until 1995 as Queen's Island. The 185-acre site, previously occupied by part of the Harland and Wolff shipyard, is named after the company's, and the city's, most famous product, RMS Titanic. Titanic Quarter is part of the Dublin-based group, Harcourt Developments, which has held the development rights since 2003."
            },
            {
                name : "Carrick-a-Rede Rope Bridge",
                lat : 55.2373540506,
                long : -6.32529203216,
                type : LocationType.FOOTPRINT,
                image : "https://www.irishcentral.com/uploads/assets/carrick_bridge_contentpool2.jpg",
                description : "The Carrick-a-Rede Rope Bridge is a rope bridge near Ballintoy in County Antrim, Northern Ireland. The bridge links the mainland to the tiny island of Carrickarede. It spans 20 metres and is 30 metres above the rocks below. The bridge is mainly a tourist attraction and is owned and maintained by the National Trust. In 2018, the bridge had 491,947 visitors. The bridge is open all year round and people may cross it for a fee. "
            },
            {
                name : "Glenveagh Castle",
                lat : 55.0333332,
                long : -7.9666628,
                type : LocationType.RUINS,
                image : "https://i.pinimg.com/originals/30/3b/cc/303bcc47a13eddd3a1bf3b965cf5d8ca.jpg",
                description : "Glenveagh is the second largest national park in Ireland. National parks in Ireland conform to IUCN standards. The park covers 170 square kilometres of hillside above Glenveagh Castle on the shore of Lough Veagh (Loch Ghleann Bheatha), 20 km from Gweedore in County Donegal. The network of mainly informal gardens displays a multitude of exotic and delicate plants from as far afield as Chile, Madeira and Tasmania, all sheltered by windbreaks of pine trees and ornamental rhododendrons."
            },
            {
                name : "Belfast Castle",
                lat : 54.642804,
                long : -5.942139,
                type : LocationType.RUINS,
                image : "https://www.irelandhighlights.com/wp-content/uploads/2017/08/Belfast-Castle-174_4884.jpg",
                description : "Belfast Castle is set on the slopes of Cavehill Country Park, Belfast, Northern Ireland, in a prominent position 400 feet above sea level. Its location provides unobstructed views of the city of Belfast and Belfast Lough."
            },
            {
                name : "Dark Hedges",
                lat : 55.1346929,
                long : -6.380822,
                type : LocationType.FOOTPRINT,
                image : "https://theplanetd.com/images/Dark-Hedges-Ireland.jpg",
                description : "The Dark Hedges is an avenue of beech trees along Bregagh Road between Armoy and Stranocum in County Antrim, Northern Ireland. The trees form an atmospheric tunnel that has been used as a location in HBO's popular television series Game of Thrones, which has resulted in the avenue becoming a popular tourist attraction."
            },
        ]
    },
    {
        name : "Dublin",
        lat : 53.350140,
        long : -6.266155,
        description : "Dublin is a warm and welcoming city, known for the friendliness of its people and famous for its craic (“crack”)—that mixture of repartee, humour, intelligence, and acerbic and deflating insight that has attracted writers, intellectuals, and visitors for centuries. It has faded grandeur and a comfortably worn sense.",
        iconImage : "https://www.irishtimes.com/polopoly_fs/1.3957039.1563204633!/image/image.jpg_gen/derivatives/box_620_330/image.jpg",
        backgroundImage : "https://s3.visitbelfast.com/app/uploads/2019/05/city-hall.jpg_1557904957.jpg",

        attractions :[
            {
                name : "Kilmainham Gaol",
                lat : 53.338498646,
                long : -6.30583211,
                type : LocationType.MONUMENT,
                image : "https://img.grouponcdn.com/seocms/bo47ismbUjKc549zKBCMnh/Kilmainham_Gaol-600x390-600x390.jpeg",
                description : "Kilmainham Gaol is a former prison in Kilmainham, Dublin, Ireland. It is now a museum run by the Office of Public Works, an agency of the Government of Ireland. Many Irish revolutionaries, including the leaders of the 1916 Easter Rising, were imprisoned and executed in the prison by the orders of the UK Government."
            },
            {
                name : "Malahide Castle",
                lat : 53.440164906,
                long : -6.158999364,
                type : LocationType.RUINS,
                image : "https://img.grouponcdn.com/deal/4N3A17HUKdzNKHYcMopU9Fpr3HDQ/4N-790x474/v1/c700x420.jpg",
                description : "Malahide Castle, parts of which date to the 12th century, lies close to the village of Malahide, nine miles north of central Dublin in Ireland. It has over 260 acres of remaining parkland estate, forming the Malahide Demesne Regional Park."
            },
            {
                name : "Guinness Storehouse",
                lat : 53.33833198,
                long : -6.285498858,
                type : LocationType.MONUMENT,
                image : "https://www.dublinvisitorcentre.ie/wp-content/uploads/2017/03/Guinness-storehouse.jpg",
                description : "Guinness Storehouse is a tourist attraction at St. James's Gate Brewery in Dublin, Ireland. Since opening in 2000, it has received over twenty million visitors. The Storehouse covers seven floors surrounding a glass atrium shaped in the form of a pint of Guinness. The ground floor introduces the beer's four ingredients, and the brewery's founder, Arthur Guinness. Other floors feature the history of Guinness advertising and include an interactive exhibit on responsible drinking. The seventh floor houses the Gravity Bar with views of Dublin and where visitors may drink a pint of Guinness included in the price of admission."
            },
            {
                name : "Christ Church Cathedral",
                lat : 53.33916531,
                long : -6.269498922,
                type : LocationType.CHURCH,
                image : "https://www.ripplecom.net/wp-content/uploads/2018/12/Christ-Church-Cathedral-Dublin.png",
                description : "Christ Church Cathedral, more formally The Cathedral of the Holy Trinity, is the cathedral of the United Dioceses of Dublin and Glendalough and the cathedral of the ecclesiastical province of the United Provinces of Dublin and Cashel in the Church of Ireland. It is situated in Dublin, Ireland, and is the elder of the capital city's two medieval cathedrals, the other being St Patrick's Cathedral."
            },
            {
                name : "Newgrange",
                lat : 53.6899522402,
                long : -6.47168311326,
                type : LocationType.MONUMENT,
                image : "https://www.irishcentral.com/uploads/article/134276/MI_Newgrange_green_Getty.jpg?t:1565347393",
                description : "Newgrange is a prehistoric monument in County Meath, Ireland, located 8 kilometres west of Drogheda on the north side of the River Boyne. It is an exceptionally grand passage tomb built during the Neolithic period, around 3200 BC, making it older than Stonehenge and the Egyptian pyramids. The site consists of a large circular mound with an inner stone passageway and chambers. Human bones and possible grave goods or votive offerings were found in these chambers. The mound has a retaining wall at the front, made mostly of white quartz cobblestones, and it is ringed by engraved kerbstones. Many of the larger stones of Newgrange are covered in megalithic art. The mound is also ringed by a stone circle. Some of the material that makes up the monument came from as far away as the Mournes and Wicklow Mountains. There is no agreement about what the site was used for, but it is believed that it had religious significance. Its entrance is aligned with the rising sun on the winter solstice, when sunlight shines through a 'roofbox' and floods the inner chamber. Several other passage tombs in Ireland are aligned with solstices and equinoxes, and Cairn G at Carrowkeel has a similar 'roofbox'."
            },
            {
                name : "Kilkenny Castle",
                lat : 52.650164066,
                long : -7.242832362,
                type : LocationType.RUINS,
                image : "https://kclr96fm.com/media/2015/03/kilkenny-castle.jpg",
                description : "Kilkenny Castle is a 12th century castle found in the middle of Kilkenny City. Strongbow originally built a wooden castle on that site overlooking the River Nore in 1172. Around 30 years later, his son-in-law, the Earl of Pembroke built the first stone castle. Three of this castle's original four towers survive today."
            },
            {
                name : "Powerscourt Estate",
                lat : 53.18416593,
                long : -6.185499258,
                type : LocationType.FOOTPRINT,
                image : "https://www.tripsavvy.com/thmb/RR4AwUYBzardajw6fVkJMi0zKQA:/960x0/filters:no_upscale():max_bytes(150000):strip_icc()/powerscourtestate-6540ad6273a047839c6a9bb7b98b86b8.jpg",
                description : "Set in the wild Wicklow countrywide, overlooking the Sugarloaf Mountain, Powerscourt is situated just 20km south of Dublin City Centre. The Gardens stretch over 47 acres and offer visitors a sublime blend of formal gardens, sweeping terraces, statues and ornamental lakes, secret hollows and rambling walks."
            }
        ]
    },

    {

        name : "Cork",
        lat : 51.903614,
        long : -8.468399,
        description : "County Cork covers much of Ireland’s southwest. Its capital, Cork, is known for St. Fin Barre’s Cathedral, a neo-Gothic structure with tall spires and stained-glass windows. Across the River Lee is the castle-like Cork City Gaol, built in the 19th century. Northwest of Cork is the 15th-century Blarney Castle, home to the Blarney Stone, which is said to give the “gift of the gab”, or eloquence, to those who kiss it.",
        iconImage : "https://www.irishtimes.com/polopoly_fs/1.3781570.1549289520!/image/image.jpg_gen/derivatives/box_620_330/image.jpg",
        backgroundImage : "https://s3.visitbelfast.com/app/uploads/2019/05/city-hall.jpg_1557904957.jpg",

        attractions :[
            {
                name : "Killarney National Park and Muckross House & Gardens",
                lat : 52.0058447,
                long : -9.5561803,
                type : LocationType.FOOTPRINT,
                image : "https://travelguide.michelin.com/sites/default/files/styles/poi_slideshow/public/images/travel_guide/NX-34438.jpg",
                description : "Killarney National Park is in southwest Ireland close to the island's most westerly point. The Lakes of Killarney and the Mangerton, Torc, Shehy and Purple Mountains are in the park. Altitudes in the park range from 22 metres (72 ft) to 842 metres (2,762 ft). Also close by is the Muckrose House & Gardens. It was completed in 1843. It is situated close to the eastern shore of Muckross Lake, taking full advantage of the magnificent views which can be enjoyed from this location. Most of the house has been preserved as a late 19th century mansion, with furniture and artefacts from that period."
            },
            {
                name : "Blarney Castle",
                lat : 51.929092,
                long : -8.570885,
                type : LocationType.RUINS,
                image : "https://irishstudiotravel.com/uploads/tours/2018/5/61/Blarney_Castle.jpg",
                description : "Blarney Castle is a medieval stronghold in Blarney, near Cork, Ireland. Though earlier fortifications were built on the same spot, the current keep was built by the MacCarthy of Muskerry dynasty, a cadet branch of the Kings of Desmond, and dates from 1446. The Blarney Stone is among the machicolations of the castle."
            },
            {
                name : "Cliffs of Moher",
                lat : 52.93499626,
                long : -9.46916479,
                type : LocationType.FOOTPRINT,
                image : "https://img.travelawaits.com/filter:centercrop/quill/5/f/c/2/2/0/5fc2200f3f219a7ec836c3f1f668760ccdb69bc3.jpg?w:800&h:800",
                description : "The Cliffs of Moher are sea cliffs located at the southwestern edge of the Burren region in County Clare, Ireland. They run for about 14 kilometres. At their southern end, they rise 120 metres above the Atlantic Ocean at Hag's Head, and, 8 kilometres to the north, they reach their maximum height of 214 metres just north of O'Brien's Tower, a round stone tower near the midpoint of the cliffs, built in 1835 by Sir Cornelius O'Brien, then continue at lower heights. The closest settlements are the villages of Liscannor 6 km to the south, and Doolin 7 km to the north. From the cliffs, and from atop the tower, visitors can see the Aran Islands in Galway Bay, the Maumturks and Twelve Pins mountain ranges to the north in County Galway, and Loop Head to the south. The cliffs rank among the most visited tourist sites in Ireland, with around 1.5 million visits per annum."
            },
        ]
    },

    {
        name : "Limerick",
        lat : 52.668018,
        long : -8.630498,
        description : "Limerick was founded by the Vikings around 922 AD. The Vikings were great traders and craftsmen and Limerick had contacts with other Viking towns all over Europe. St Mary’s Cathedral was founded in the twelfth century and remains the oldest building in Limerick still in use for its original purpose.",
        iconImage : "https://www.ireland101.com/assets/img/logo_83a9dcb29fa1f714991bba883b991e77.jpg",
        backgroundImage : "https://s3.visitbelfast.com/app/uploads/2019/05/city-hall.jpg_1557904957.jpg",

        attractions :[
            {
                name : "St Mary's Cathedral",
                lat : 52.667663996,
                long : -8.620664184,
                type : LocationType.CHURCH,
                image : "https://media-cdn.tripadvisor.com/media/photo-s/10/f2/ed/39/st-mary-s-cathedral.jpg",
                description : "St Mary's (also known as Limerick Cathedral), is a cathedral of the Church of Ireland in Limerick city, Ireland which is dedicated to the Blessed Virgin Mary. It is in the ecclesiastical province of Dublin. Previously the cathedral of the Diocese of Limerick, it is now one of three cathedrals in the United Dioceses of Limerick and Killaloe."
            },
            {
                name : "Rock of Cashel",
                lat : 52.518664592,
                long : -7.887329784,
                type : LocationType.RUINS,
                image : "https://www.ancient-origins.net/sites/default/files/field/image/Rock-of-Cashel-Ireland.jpg",
                description : "The Rock of Cashel, also known as Cashel of the Kings and St. Patrick's Rock, is a historic site located at Cashel, County Tipperary, Ireland. Initially, the Rock of Cashel was the main royal site for the kings of Munster. During its' time as a royal site (compare Rathcroghan), most likely, there would have been a stone fort on top of the hill as the name 'cashel' means stone fort. Most likely, the site had ritual and ceremonial significance."
            },
            {
                name : "Ring of Kerry",
                lat : 52.067539,
                long : -9.523854,
                type : LocationType.FOOTPRINT,
                image : "https://alongcameanelephant.com/wp-content/uploads/2018/07/P1190564-1024x661.jpg",
                description : "The Ring of Kerry is a scenic drive around the Iveragh Peninsula in southwest Ireland’s County Kerry. Its 179km-long, circular route takes in rugged and verdant coastal landscapes and rural seaside villages. Skellig Michael, a rocky island with an abandoned 7th-century Christian monastery, is a major destination point, with several boats from Portmagee making the 12km crossing during the warmer months."
            },
        ]
    },

    {
        name : "Galway",
        lat : 53.270962,
        long : -9.062691,
        description : "Galway, a harbour city on Ireland’s west coast, sits where the River Corrib meets the Atlantic Ocean. The city’s hub is 18th-century Eyre Square, a popular meeting spot surrounded by shops and traditional pubs that often offer live Irish folk music. Nearby, stone-clad cafes, boutiques and art galleries line the winding lanes of the Latin Quarter, which retains portions of the medieval city walls.",
        iconImage : "https://i.imgur.com/PgVBGNB.jpg",
        backgroundImage : "https://s3.visitbelfast.com/app/uploads/2019/05/city-hall.jpg_1557904957.jpg",

        attractions :[
            {
                name : "Croagh Patrick",
                lat : 53.760047,
                long : -9.659536,
                type : LocationType.FOOTPRINT,
                image : "https://www.mayo.ie/news/wp-content/uploads/2015/12/mayo_IRL-MO-019-croagh_patrick_aerial.jpg",
                description : "Croagh Patrick (Irish: Cruach Phádraig, meaning '(Saint) Patrick's Stack'), nicknamed the Reek, is a 764 metres (2,507 ft) mountain and an important site of pilgrimage in County Mayo in Ireland. It is 8 kilometres (5 mi) from Westport, above the villages of Murrisk and Lecanvey. It is the third highest mountain in County Mayo after Mweelrea and Nephin. It is climbed by pilgrims on Reek Sunday every year, which is the last Sunday in July. It forms the southern part of a U-shaped valley created by a glacier flowing into Clew Bay in the last Ice Age."
            },
            {
                name : "Connemara National Park",
                lat : 53.550664464,
                long : -9.940162906,
                type : LocationType.FOOTPRINT,
                image : "https://www.connemarawildescapes.ie/wp-content/uploads/2019/09/connemara-national-park-self-guided-tour-h1-1024x600.jpg",
                description : "Situated in the West of Ireland in County Galway, Connemara National Park covers some 2,000 hectares of scenic mountains, expanses of bogs, heaths, grasslands and woodlands. Some of the Park’s mountains, namely Benbaun, Bencullagh, Benbrack and Muckanaght, are part of the famous Twelve Bens or Beanna Beola range. The park was established and opened to the public in 1980. Connemara National Park is one of six national parks in Ireland that are managed by the National Parks and Wildlife Service of the Department of Culture, Heritage and the Gaeltacht."
            },
            {
                name : "Dunguaire Castle",
                lat : 53.143,
                long : -8.939,
                type : LocationType.RUINS,
                image : "https://dailyscribbling.files.wordpress.com/2014/05/dunguaire.jpg?w:625",
                description : "Dunguaire Castle is a 16th-century tower house on the southeastern shore of Galway Bay in County Galway, Ireland, near Kinvara. The name derives from the Dun of King Guaire, the legendary king of Connacht. The castle's 75-foot tower and its defensive wall have been restored, and the grounds are open to tourists during the summer. The castle's slates are from an old school in Kinvara."
            },
        ]
    },
]