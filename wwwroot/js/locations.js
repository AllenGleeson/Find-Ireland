
// Types of icons to use for different types of attractions
const locationType = [
    {
        point_of_interest: {
            name: "",
            iconUrl: "./wwwroot/images/icons/church-2.png"
        },
    }
]

// Array of cities and attractions near those cities. Contains data for markers and cards
var towns = [
    {
        name: "Belfast",
        lat: 54.607868,
        long: -5.926437,
        description: "Belfast, the capital and largest city of Northern Ireland, is located at the threshold of the River Lagan and is surrounded by low hills. It is a natural location for the shipping trade, one of the industries that made Belfast famous.",
        iconImage: "https://pbs.twimg.com/profile_images/683021906732302336/mf_6n9I5_400x400.jpg",
        backgroundImage: "https://s3.visitbelfast.com/app/uploads/2019/05/city-hall.jpg_1557904957.jpg"
    },
    {
        name: "Sligo",
        lat: 54.26969,
        long: -8.46943,
        description: "Renowned for its history, culture and magical mythology Sligo is the vibrant heart of the north-west. Incredible mountains form a stunning backdrop to the town, including Benbulben which oversees the Atlantics roar and King Mountains.",
        iconImage: "https://pbs.twimg.com/profile_images/683021906732302336/mf_6n9I5_400x400.jpg",
        backgroundImage: "https://s3.visitbelfast.com/app/uploads/2019/05/city-hall.jpg_1557904957.jpg"
    },
    {
        name: "LondonDerry",
        lat: 55.006763,
        long: -7.318268,
        description: "Londonderry, or simply Derry, is a large city in North Ireland, with about 85,000 residents. The city is very old and has a great deal of tourist attractions, starting from old fortifications and ending up with numerous museum of arts and exhibitions. Other famous landmarks include St Eugene's Cathedral, the Amelia Earhart Centre And Wildlife Sanctuary, Long Tower Church, O'Doherty Tower, the Apprentice Boys Memorial Hall, the Foyle Valley Railway Centre, and many more.",
        iconImage: "https://pbs.twimg.com/profile_images/683021906732302336/mf_6n9I5_400x400.jpg",
        backgroundImage: "https://s3.visitbelfast.com/app/uploads/2019/05/city-hall.jpg_1557904957.jpg"
    },
    {
        name: "Waterford",
        lat: 52.25833,
        long: -7.11194,
        description: `Waterford (from Old Norse Veðrafjǫrðr, meaning "ram (wether) fjord"; Irish: Port Láirge, meaning "Lárag's port") is a city in Ireland. It is in the South-East of Ireland and is part of the province of Munster. It is the oldest and the fifth most populous city within Ireland. It is the eighth most populous city on the island of Ireland.`,
        iconImage: "https://pbs.twimg.com/profile_images/683021906732302336/mf_6n9I5_400x400.jpg",
        backgroundImage: "https://s3.visitbelfast.com/app/uploads/2019/05/city-hall.jpg_1557904957.jpg"
    },
    {
        name: "Dublin",
        lat: 53.350140,
        long: -6.266155,
        description: "Dublin is a warm and welcoming city, known for the friendliness of its people and famous for its craic (“crack”)—that mixture of repartee, humour, intelligence, and acerbic and deflating insight that has attracted writers, intellectuals, and visitors for centuries. It has faded grandeur and a comfortably worn sense.",
        iconImage: "https://www.irishtimes.com/polopoly_fs/1.3957039.1563204633!/image/image.jpg_gen/derivatives/box_620_330/image.jpg",
        backgroundImage: "https://s3.visitbelfast.com/app/uploads/2019/05/city-hall.jpg_1557904957.jpg"
    },
    {

        name: "Cork",
        lat: 51.903614,
        long: -8.468399,
        description: "County Cork covers much of Ireland’s southwest. Its capital, Cork, is known for St. Fin Barre’s Cathedral, a neo-Gothic structure with tall spires and stained-glass windows. Across the River Lee is the castle-like Cork City Gaol, built in the 19th century. Northwest of Cork is the 15th-century Blarney Castle, home to the Blarney Stone, which is said to give the “gift of the gab”, or eloquence, to those who kiss it.",
        iconImage: "https://www.irishtimes.com/polopoly_fs/1.3781570.1549289520!/image/image.jpg_gen/derivatives/box_620_330/image.jpg",
        backgroundImage: "https://s3.visitbelfast.com/app/uploads/2019/05/city-hall.jpg_1557904957.jpg"
    },
    {
        name: "Limerick",
        lat: 52.668018,
        long: -8.630498,
        description: "Limerick was founded by the Vikings around 922 AD. The Vikings were great traders and craftsmen and Limerick had contacts with other Viking towns all over Europe. St Mary’s Cathedral was founded in the twelfth century and remains the oldest building in Limerick still in use for its original purpose.",
        iconImage: "https://www.ireland101.com/assets/img/logo_83a9dcb29fa1f714991bba883b991e77.jpg",
        backgroundImage: "https://s3.visitbelfast.com/app/uploads/2019/05/city-hall.jpg_1557904957.jpg"
    },
    {
        name: "Galway",
        lat: 53.270962,
        long: -9.062691,
        description: "Galway, a harbour city on Ireland’s west coast, sits where the River Corrib meets the Atlantic Ocean. The city’s hub is 18th-century Eyre Square, a popular meeting spot surrounded by shops and traditional pubs that often offer live Irish folk music. Nearby, stone-clad cafes, boutiques and art galleries line the winding lanes of the Latin Quarter, which retains portions of the medieval city walls.",
        iconImage: "https://www.ireland101.com/assets/img/logo_83a9dcb29fa1f714991bba883b991e77.jpg",
        backgroundImage: "https://s3.visitbelfast.com/app/uploads/2019/05/city-hall.jpg_1557904957.jpg"
    }
]