'use strict';

var cusInfo = [];

function infoUser (){
    
    var informationUser = localStorage.getItem('customerBooking');
    if (informationUser) {

    
        cusInfo = JSON.parse(informationUser);
        
        var ticket = document.getElementById('ticket');
        // cusInfo[i];
        var ulE1 =document.createElement('ul');
        ticket.appendChild(ulE1);
        for (var i=0;i<cusInfo.length;i++) {

            var liE5 = document.createElement('li');
            liE5.classList.add("travel");
              ulE1.appendChild(liE5);
               liE5.textContent = ` ${cusInfo[i].city}`;
               
            var liE1 = document.createElement('li');
            ulE1.appendChild(liE1);
            liE1.classList.add("name");
            liE1.textContent = `Name : ${cusInfo[i].name}`;

            var liE2 = document.createElement('li');
            liE2.classList.add("phone");
            ulE1.appendChild(liE2);
            liE2.textContent = `phone: ${cusInfo[i].phone}`;

            var liE3 = document.createElement('li');
            liE3.classList.add("email");
            ulE1.appendChild(liE3);
            liE3.textContent = `Email : ${cusInfo[i].email}`;

            var liE4 = document.createElement('li');
            liE4.classList.add("Address");
            ulE1.appendChild(liE4);
            liE4.textContent = `User Address : ${cusInfo[i].addres}`;
       
            var liE6 = document.createElement('li');
            liE6.classList.add("numPeople");
            ulE1.appendChild(liE6);
            liE6.textContent = `Number Of People: ${cusInfo[i].noOfPeople}`;

           var liE7 = document.createElement('li');
           liE7.classList.add("finalPrice");
           ulE1.appendChild(liE7);
           
          liE7 .textContent = `Total: ${cusInfo[i].finalPrice}JD `;
   
    }
}
}

infoUser();

