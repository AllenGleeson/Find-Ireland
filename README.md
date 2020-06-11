# Find Ireland

A tourism website to explore different tourist attractions across Ireland. The website is API heavy and uses JS and Jquery to create a website to see nearby
tourist attractions to the selected towns. It will give some information about attractions and the town it is near. Also more general information about the country to give you some good reason to try to come and visit.

With this website I wanted to focus on using JS and Jquery to dynamically change the site to display new information depending on what town you click on. To help with this I also used some API for a map to diplay markers of towns and attractions and to help retrieve information about each of those locations. I used Bootstrap to style and I tried to keep to a mobile first design to keep the page responsive to different screen sizes.

Here is a link to the site through github pages: https://allengleeson.github.io/Find-Ireland/

## UX

### Strategy

I wanted to create a website to be able to show off Ireland and entice users to want to visit the country and provide information about the larger towns and cities and the attractions near them. I could have tried to display things such as bars and restaurants but I wanted to show more interesting locations that would more unique and more likely to catch someones eye when thinking of visiting.

It is designed for a general audience who is curious about visiting Ireland and what it has to offer outside the night life.

#### User Stories

- Upon visiting the home page users will be directed to click on one of the town images on the map or click on
- one of the town buttons below the map.
- When clicked a list of attraction cards will populate below as well as a description for that clicked town.

- The about page gives more information about Ireland with some select images displayed to the user.
- There is also a weather forcast for the weather of the day.

### Scope

Do achieve my goal I need the following:

#### Functional Requirements
    1. The website will have two pages, one concerning the map and attraction information and the other page as an about page
    2. Must display correctly for different devices
    3. Navigation between pages should be clear
    4. I will need a map
    5. I will want to display the weather
    6. To display some images of the country

#### Non-Functional Requirements
    1. The website will be clear to use
    2. Give useful information to the user


#### Content Requirements
    1. The website will contain images
    2. A bootstrap carousel
    3. A jumbotron
    4. A map
    5. Cards for attractions
    6. A weather API

### Structure

I am mainly trying to use Js and Jquery for this website and combined with what I want on the site I decided it would only need two pages. One to display attractions and another page to give more general information about the country.

#### Home -
    The home page will show the user a nice image from the country and then a map centered on Ireland with image icons over some towns and buttons below the map with names of towns. Clicking on a icon or a button will both center the map to that location and display below the map generated attractions from near that town.

#### About -
    The about page features a carousel of images around the country and more general information about the country such as how many visit the country each year, it's population and also the weather.
    
### Skeleton

I created some wireframes for the website which are in this repository.

### Surface

I kept most of the surface fairly simple. I let the images I found do most of the visual work. The colours I go for are based on the country. Ireland, being known for its green I thought an obvious thing so I add some simple green into the site to highlight some information.

On the Home page the user can interact with the site by clicking on the map icons or the buttons below the map to show each towns nearby attractions.

The About page has a carousel the user can click through but little other interaction there, it is mainly to display some extra information about the country.

## Features

Google Maps to create the map

Google places to get details and a photo for each attraction

Weatherbit to get a weather forcast for select cities

The header is created with the bootstrap navbar.
https://getbootstrap.com/docs/4.3/components/navbar/

The about page features a bootstrap carousel to go through a few selected images.
https://getbootstrap.com/docs/4.0/components/carousel/

The cards create when clicking on a town are done with bootstrap - card.
https://getbootstrap.com/docs/4.3/components/card/

I use icons from Maps Icons Collection for the attraction markers on the map.
https://mapicons.mapsmarker.com

Check API Used below for the API used in this website.

## Technologies Used

This project used Bootstrap4, HTML5 & CSS3, JS, Jquery.
Github is used to host the code.
It was first created and edited using Gitpod but after some time I decided to switch onto Visual Studio Code.


### API Used

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

I largely used the browsers DevTools to view what I was changing and to test.

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
First going to settings on my respository, then going down to Github Pages and choosing the master branch.
The site was then published with github pages.
https://allengleeson.github.io/Find-Ireland/

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
