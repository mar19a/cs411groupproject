Website made by Mariano Majano Amaya and Gary Dong.

You can find the demo here: https://youtu.be/PlX1SiR-Ezk

Clone the repository

Do " npm install " to install the dependencies

Do " npm install react-google-login --legacy-peer-deps " to install the Google Oauth dependencies

Do " npm start " to start the website

How to run the Backend server

Change Directory to Backend 

Do " node server.js ". If successful, "Running backend server" will appear.

Have XAMPP installed

This project was completed on May 3, 2023. We made a real estate website, named Seekers with the help of three API's. Zillow API, Local Business Data from RapidAPI, and News API. The Website consists of a home for sale lookup using the Zillow API, Local Business based on the user's desire business type and city, that are open for the user to visit, and lastly, Massachusetts news. The user can contact our agent's services or if they have any question by putting their name, email, subject, and description on a form. We will get a copy of everything the user wrote on our email, mariano@bu.edu. We use mySQL database. to save the user's login and also used Google Oauth as another way for the user to login. The website has a backend and front end. This was a class project for CS 411, Software Engineering, Boston University.

This is the criteria for the project:
1. It must utilize a database. A simple way to meet this requirement is to require a user to store profile information in the database. You’ll also be using it as a cache.
2. It must correlate at least two publicly available data sets via API from the Internet. Examples might be weather/climate data from NOAA, crime statistics from the FBI, and so on. A great place to get started is https://apigee.com/providers?apig_cc=1, which is a repository of datasets, and Postman's list at postman.com. Another good place to search for data is http://data.gov. The City of Boston also has data available at data.cityofboston.gov. Your application must correlate these data sets in some way; for example, pull a user’s playlist from Spotify and correlate it with a feed that has concert dates to alert the user of bands that they like that are playing nearby. Use of the Google Maps or Geolocation service does not count toward your two APIs (it's a few simple lines of code, usually).
3. It must use third-party authentication, for example logging in with Google or Facebook using OAuth.
4. It must have a decoupled architecture, similar to what we looked at in class during the ‘dogfooding’ lecture. The implication is that you’ll need a front end and a back end, and the two will communicate via a RESTful interface. It’s too early to discuss technologies, but this does mean that there will be JavaScript in the front end. Since the back end is responding to requests and just returning data, it doesn’t necessarily need to be in JavaScript...Python, Java, PHP, and so on would work.
