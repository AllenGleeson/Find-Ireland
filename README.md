# Find Ireland

A tourism website to explore different tourist attractions across Ireland. The website is API heavy and uses JS and Jquery to create a website to see nearby
tourist attractions to the selected towns.

## UX

It is designed for a general audience who is curious about visiting Ireland.

- Upon visiting the home page users will be directed to click on one of the town images on the map or click on
- one of the town buttons below the map.
- When clicked a list of attraction cards will populate below as well as a description for that clicked town.

- The about page gives more information about Ireland with some select images displayed to the user.
- There is also a weather forcast for the weather of the day.



## Features

The header is created with the bootstrap navbar.
https://getbootstrap.com/docs/4.3/components/navbar/

The about page features a bootstrap carousel to go through a few selected images.
https://getbootstrap.com/docs/4.0/components/carousel/

The cards create when clicking on a town are done with bootstrap - card.
https://getbootstrap.com/docs/4.3/components/card/

Check API Used below for the API used in this website.

## Technologies Used

This project used Bootstrap4, HTML5 & CSS3, JS, Jquery.
Github is used to host the code.
It was first created and edited using Gitpod but after some time I decided to switch onto Visual Studio Code.


## API Used

This application is largely API based. Here are the api that I choose to use:

Google Maps API
https://developers.google.com/maps/documentation

Google Places API
https://developers.google.com/places/web-service/intro

Wikipedia API
https://www.mediawiki.org/wiki/MediaWiki

Weatherbit by weatherio
https://www.weatherbit.io/


## Testing

1. Home Page:
    1. Click on marker Image:
        Creates appopiate town and cards below map
    2. Click on town button:
        Creates appopiate town and cards below map

2. About Page:
    1. Click on carosel to next or previous image
    2. Weather forcast is displayed on page start up

Head:
    Navigation buttons bring to correct page
Footer:
    Clicking email will let you create an email

The project was tested in different screen sizes and will be mobile friendly with help from bootstrap.

## Deployment

I added all my code and images to github and then deployed my project through Github Pages.

### Content
- The content of the home page is created with google maps, google places and wikipedia to create attraction cards for each town.

### Media
- The images used in the carosel and the main image on the main page were found through google
- The card images were taken from Google Places API
- Map markers were created with the Maps Icons Collection, credited below.
- The weather forecast icons were taken from Weatherbit.io

### Credits

Maps Icons Collection https://mapicons.mapsmarker.com
Weatherbit https://www.weatherbit.io/

### Future Additions

I am planning to add more cities available to search their nearby attractions. Also adding an itenerary list to take selected attraction and download them as a pdf or email them to yourself. Possible other addictions would be to add a hotel and a flight api that would allow users to see cheap flights going to Ireland and also hotels.

### Prerequisites

Git
python 3
