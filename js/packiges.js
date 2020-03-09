'use strict'
// the "packages-generator" is teh id of a section inside the packges.html page that we want to fill 
var packgesGenerator = document.getElementById('packages-generator');
// array to fill out the images 
var trips = ["deadSea.jpg", "hiking.jpg", "jordanSky.jpg", "river.jpg", "wadiRam.jpg", "walking.jpg"];
var titleAndDuration = ["Dead sea,5 Days", "Wadi ram,3 Daysm", "Om Qais,1 Day", "Seel al Zarqa,7 Days", "Al Aqaba,3 Days", "Jarash,2 Days"];
//array of the pricess , always note the element of each array (trips/titleAndDuration/prices) should all match eachotehr
var prices = ["150JD", "100JD", "50JD", "450JD", "300JD", "120JD"];

var cusInfo = []


function Trips(trip) {
    this.tripName = trip;
    this.price = 0;
    this.tripImage = `img/${this.tripName}`;
    this.tripDuration = "";
    Trips.all.push(this);

}

Trips.all = [];

// fucntion to get data from the booking page 
function getData() {

    var newBroughtData = localStorage.getItem('customerBooking');
    if (newBroughtData) {
        cusInfo = JSON.parse(newBroughtData);
        Trips.all.peopleGoing = cusInfo.nnoOfPeople;
        console.log(Trips.all);
    }
}

// filling the Trips.all array of object with the trips i want 
for (let i = 0; i < trips.length; i++) {
    new Trips(trips[i]);
}

// a fucntion to render the packges the way i want 
function tripsGenerator() {

    for (let i = 0; i < Trips.all.length; i++) {
        // pointer at the array of objects 
        var imageHolder = Trips.all[i];
        //created a div and filling it with an image / title/ price /duration usnig DOM 
        var divE2 = document.createElement('div');
        packgesGenerator.appendChild(divE2);
        var imageHolder2 = document.createElement('img');
        // putting attributes for the image so we can show it properly 
        imageHolder2.setAttribute('src', imageHolder.tripImage);
        imageHolder2.setAttribute('alt', imageHolder.tripName);
        imageHolder2.setAttribute('title', imageHolder.tripName);
        //  just apened the image to the dive without anything else to show it (otehr than that u will get imageObjectHTML)
        divE2.appendChild(imageHolder2);
        // the title created 
        var title = document.createElement('h1');
        divE2.appendChild(title);
        title.textContent = `${titleAndDuration[i].split(',')[0].toUpperCase()}`
        // PRice of the trip
        var tripPrice = document.createElement('h2');
        divE2.appendChild(tripPrice);
        tripPrice.textContent = `${prices[i]}`;
        // trip duration 
        var tripDuration1 = document.createElement('h2');
        divE2.appendChild(tripDuration1);
        tripDuration1.textContent = `${titleAndDuration[i].split(',')[1]}`

        //  updating the constructor with the duratino and the price of the trip
        imageHolder.tripDuration = titleAndDuration[i].split(',')[1];
        imageHolder.price = prices[i];

        //creating the learn more button 
        var btnE1 = document.createElement('input');
        btnE1.setAttribute('type', "button");
        btnE1.value = "Learn more"
        divE2.appendChild(btnE1);

        // updating the data into a local storage 
        var packString = JSON.stringify(Trips.all);
        localStorage.setItem('Packges', packString);


    }
}

// calling the function to render the page 
tripsGenerator();