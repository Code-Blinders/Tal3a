var packgesGenerator = document.getElementById('packages-generator');

var trips = ["deadSea.jpg", "hiking.jpg", "jordanSky.jpg", "river.jpg", "wadiRam.jpg", "walking.jpg"];
var titleAndDuration = ["Dead sea,5 Days", "Wadi ram,3 Days", "Om Qais,1 Day", "Seel al Zarqa,7 Days", "Al Aqaba,3 Days", "Jarash,2 Days"];


function Trips(trip) {
    this.tripName = trip;
    this.price = 0;
    this.tripImage = `img/${this.tripName}`;
    this.peopleGoing = 0;
    this.tripDestination = "";
    this.DiscountValue = 0;

    Trips.all.push(this);

}

Trips.all = [];

for (let i = 0; i < trips.length; i++) {
    new Trips(trips[i]);

}


function tripsGenerator() {

    for (let i = 0; i < Trips.all.length; i++) {
        var imageHolder = Trips.all[i];

        var divE2 = document.createElement('div');

        packgesGenerator.appendChild(divE2);

        var imageHolder2 = document.createElement('img');
        imageHolder2.setAttribute('src', imageHolder.tripImage);
        imageHolder2.setAttribute('alt', imageHolder.tripName);
        imageHolder2.setAttribute('title', imageHolder.tripName);

        divE2.appendChild(imageHolder2);
        var title = document.createElement('h1');
        divE2.appendChild(title);
        title.textContent = `${titleAndDuration[i].split(',')[0].toUpperCase()}`
        var tripDuration= document.createElement('h2');
        divE2.appendChild(tripDuration);
        tripDuration.textContent= `${titleAndDuration[i].split(',')[1]}`


        var btnE1 = document.createElement('input');
 

        btnE1.setAttribute('type', "button");
        btnE1.value = "Learn more"
        divE2.appendChild(btnE1);

    }
}

tripsGenerator();