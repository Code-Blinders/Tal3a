var deadSea = ["deadsea1.jpg", "deadsea2.jpg", "deadsea3.jpg", "deadsea4.jpg", "deadsea5.jpg", "deadsea6.jpg", "deadsea7.jpg"

    , "deadsea8.jpg", "deadsea9.jpg", "deadsea10.jpg", "deadsea11.jpg", "deadsea12.jpg", "deadsea13.jpg", "deadsea14.jpg", "deadsea15.jpg", "deadsea16.jpg", "deadsea17.jpg", "deadsea18.jpg"]

var aquba = ["aqaba1.jpg", "aqaba2.jpg", "aqaba3.jpg", "aqaba4.jpg", "aqaba5.jpg", "aqaba6.jpg", "aqaba7.jpg", "aqaba8.jpg", "aqaba9.jpg", "aqaba10.jpg", "aqaba11.jpg", "aqaba12.jpg", "aqaba13.jpg"];
var petra=["petra1.jpg","petra2.jpg","petra3.jpg","petra4.jpg","petra5.jpg"];
var wadirum=['rum1.jpg','rum2.jpg','rum3.jpg','rum4.jpg','rum5.jpg','rum6.jpg'];
var jarsh = ['jarash1.jpg', 'jarash2.jpg', 'jarash3.jpg', 'jarash4.jpg', 'jarash5.jpg', 'jarash6.jpg', 'jarash7.jpg', 'jarash8.jpg', 'jarash9.jpg','jarash10.jpg'];
var gallery = document.getElementById("gellary-section");
function Deadsea(location) {
    this.tripName = location;
    this.deadseaImage = `images/deadsea/${this.tripName}`;
    deadSea.all.push(this);
}
function Aquba(location) {
    this.tripName = location;
    this.aqubaImage = `images/aqaba/${this.tripName}`;
    aquba.all.push(this);
}
function Jarsh(location) {
    this.tripName = location;
    this.jarshImage = `images/jarash/${this.tripName}`;
    jarsh.all.push(this);
}
function Rum(location) {
    this.tripName = location;
    this.rumImage = `images/rum/${this.tripName}`;
    Rum.all.push(this);
}
function Petra(location) {
    this.tripName = location;
    this.PetraImage = `images/petra/${this.tripName}`;
    Petra.all.push(this);
}

deadSea.all = [];
aquba.all = [];
jarsh.all = [];
Rum.all=[];
Petra.all=[];





var deadSeabtn = document.getElementById("deadsea-filter-btn");
var aqubaeabtn = document.getElementById("aquba-filter-btn");
var jarshabtn = document.getElementById("jarsh-filter-btn");
var rumbtn=document.getElementById("rum-filter-btn")
var petrabtn=document.getElementById("petra-filter-btn");
aqubaeabtn.addEventListener("click", aqubaGenerator);
deadSeabtn.addEventListener("click", DeadseaGenerator);
jarshabtn.addEventListener("click", jarshGenerator);
rumbtn.addEventListener("click",rumGenerator);
petrabtn.addEventListener("click",petraGenerator);


function DeadseaGenerator() {
    for (let i = 0; i < deadSea.length; i++) {
        new Deadsea(deadSea[i]);

    }
    gallery.innerHTML = "";


    console.log("enter the function");
    for (let i = 0; i < deadSea.length; i++) {
        imageholder = deadSea.all[i];

        console.log(imageholder);
        var divE2 = document.createElement('div');

        gallery.appendChild(divE2);

        var imageHolder2 = document.createElement("img");
        divE2.appendChild(imageHolder2);
        divE2.classList.add("image-container");
        imageHolder2.classList.add("deadsea-gallery-img");
        if (imageHolder2.classList.contains("deadsea-gallery-img"))

            imageHolder2.setAttribute('src', imageholder.deadseaImage);
        imageHolder2.setAttribute('alt', imageholder.tripName.split('.')[0]);
        imageHolder2.setAttribute('title', imageholder.tripName.split('.')[0]);




    }
}
function aqubaGenerator() {
    gallery.innerHTML = "";
    console.log("enter the function");
    for (let i = 0; i < aquba.length; i++) {
        new Aquba(aquba[i]);

    }
    for (let i = 0; i < aquba.all.length; i++) {
        var imageholder = aquba.all[i];
        console.log(imageholder);
        var divE2 = document.createElement('div');

        gallery.appendChild(divE2);

        var imageHolder3 = document.createElement("img");
        divE2.appendChild(imageHolder3);
        divE2.classList.add("image-container");
        imageHolder3.classList.add("aquba-gallery-img");
        imageHolder3.setAttribute('src', imageholder.aqubaImage);
        imageHolder3.setAttribute('alt', imageholder.tripName.split('.')[0]);
        imageHolder3.setAttribute('title', imageholder.tripName.split('.')[0]);

    }
}
function jarshGenerator() {
    gallery.innerHTML = "";
    console.log("enter the function");
    for (let i = 0; i < jarsh.length; i++) {
        new Jarsh(jarsh[i]);

    }
    for (let i = 0; i < jarsh.all.length; i++) {
        var imageholder = jarsh.all[i];
        console.log(imageholder);
        var divE4 = document.createElement('div');

        gallery.appendChild(divE4);

        var imageHolder4 = document.createElement("img");
        divE4.appendChild(imageHolder4);
        divE4.classList.add("image-container");
        imageHolder4.classList.add("aquba-gallery-img");
        imageHolder4.setAttribute('src', imageholder.jarshImage);
        imageHolder4.setAttribute('alt', imageholder.tripName.split('.')[0]);
        imageHolder4.setAttribute('title', imageholder.tripName.split('.')[0]);

    }
}

function rumGenerator() {
    gallery.innerHTML = "";
    console.log("enter the function");
    for (let i = 0; i < wadirum.length; i++) {
        new Rum(wadirum[i]);

    }
    for (let i = 0; i < Rum.all.length; i++) {
        var imageholder = Rum.all[i];
        console.log(imageholder);
        var divE5 = document.createElement('div');

        gallery.appendChild(divE5);

        var imageHolder6 = document.createElement("img");
        divE5.appendChild(imageHolder6);
        divE5.classList.add("image-container");
        imageHolder6.classList.add("aquba-gallery-img");
        imageHolder6.setAttribute('src', imageholder.rumImage);
        imageHolder6.setAttribute('alt', imageholder.tripName.split('.')[0]);
        imageHolder6.setAttribute('title', imageholder.tripName.split('.')[0]);

    }
}
function petraGenerator() {
    gallery.innerHTML = "";
    console.log("enter the function");
    for (let i = 0; i < petra.length; i++) {
        new Petra(petra[i]);

    }
    for (let i = 0; i < Petra.all.length; i++) {
        var imageholder = Petra.all[i];
        console.log(imageholder);
        var divE6 = document.createElement('div');

        gallery.appendChild(divE6);

        var imageHolder7 = document.createElement("img");
        divE6.appendChild(imageHolder7);
        divE6.classList.add("image-container");
        imageHolder7.classList.add("aquba-gallery-img");
        imageHolder7.setAttribute('src', imageholder.PetraImage);
        imageHolder7.setAttribute('alt', imageholder.tripName);
        imageHolder7.setAttribute('title', imageholder.tripName);

    }
}
