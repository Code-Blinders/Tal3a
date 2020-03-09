'use strict';

var test = [];
var cusInfo = [];

function infoTrip (){
    var informationTrip = localStorage.getItem('Packges');
    if(informationTrip) {
        test = JSON.parse(informationTrip);
      
    }
   }
  

// var informations = [];
// function infoTrip (){
//     var informationTrip =localStorage.getItem('Packges');
//     test= JSON.parse(informationTrip);
// }
function infoUser (){
    
    var informationUser = localStorage.getItem('customerBooking');
    if (informationUser) {

    
        cusInfo = JSON.parse(informationUser);
        
        var ticket = document.getElementById('ticket');
        // cusInfo[i];
        var ulE1 =document.createElement('ul');
        ticket.appendChild(ulE1);
        for (var i=0;i<7;i++) {
    var liE1 = document.createElement('li');
    ulE1.appendChild(liE1);
        liE1.textContent = `name: ${cusInfo[i].name}`;
        var liE1 = document.createElement('li');
    ulE1.appendChild(liE1);
        liE1.textContent = `phone: ${cusInfo[i].phone}`;
        var liE1 = document.createElement('li');
        ulE1.appendChild(liE1);
        liE1.textContent = `email: ${cusInfo[i].email}`;
        var liE1 = document.createElement('li');
         ulE1.appendChild(liE1);
            liE1.textContent = `country: ${cusInfo[i].country}`;
        var liE1 = document.createElement('li');
            ulE1.appendChild(liE1);
           liE1.textContent = `noOfPeople: ${cusInfo[i].noOfPeople}`;
           var liE1 = document.createElement('li');
           ulE1.appendChild(liE1);
          liE1.textContent = `messageTA: ${cusInfo[i].finalPrice}`;
    // }
        // console.log(cusInfo);
        // cusInfo[i];
        
    }
}
}
// function infoUser (){
    //     var informationUser = localStorage.getItem('customerBooking');
    //     cusInfo=JSON.parse(informationUser);
    // }
    
    // var ulE1 =document.createElement('ul');
    // ticket.appendChild(ulE1);
    // var liE1 = document.createElement('li');
    // ulE1.appendChild(liE1);
    // liE1.textContent = `name :  ${cusInfo}` ;


// infoTrip();
infoUser();
//console.log(cusInfo);

