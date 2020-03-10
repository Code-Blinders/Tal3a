'use strict'
var Customer = [];
var myform = document.getElementById('info');
console.log(myform);
var tripName = localStorage.getItem('selectedTrip');
var packages =250; 
// add Event Listener
myform.addEventListener('submit', function (event) {
    event.preventDefault();
    var city = event.target.city.value;
    var name = event.target.name.value;
    var phone = event.target.phone.value;
    var email = event.target.email.value;
    var addres = event.target.addres.value;
    var noOfPeople = event.target.noOfPeople.value;
    var messageTA = event.target.messageTA.value;
    // create new object
    var cust = new Booking (city,name,phone,email,addres,noOfPeople,messageTA);
    cust.sale();
    // make the local storage
    var custString = JSON.stringify(Customer);
  localStorage.setItem('customerBooking', custString);
    // empty the form
  event.target.city.value= "";
  event.target.name.value= "";
  event.target.phone.value= "";
  event.target.email.value= "";
  event.target.addres.value= "";
  event.target.noOfPeople.value="";
  event.target.messageTA.value="";

});
// make constructor
function Booking (city, name,phone,email,addres,noOfPeople,messageTA){
this.city = city;    
this.name = name;
this.phone = phone;
this.email = email;
this.addres = addres;
this.noOfPeople = noOfPeople;
this.messageTA = messageTA;
this.finalPrice=0;
// make if clause to make discount
Booking.prototype.sale = function(){
    if (this.noOfPeople < 3) {
        packages = packages - (packages * 10/100) ;
    }else if (this.noOfPeople < 5){
        packages = packages - (packages * 20/100) ;
    }else if (this.noOfPeople < 7){
        packages = packages - (packages * 30/100) ;
    }else if (this.noOfPeople > 7){
        packages = packages - (packages * 40/100) ;
    }
    this.finalPrice=packages*noOfPeople;
}
Customer.push(this);
}
var step = 'step1';

var step1 = document.getElementById('step1');
var step2 = document.getElementById('step2');
var step3 = document.getElementById('step3');
var step4 = document.getElementById('step4');
var step1Content = document.getElementById('step1-content');
var step2Content = document.getElementById('step2-content');
var step3Content = document.getElementById('step3-content');
var step4Content = document.getElementById('step4-content');
var submitButton = document.getElementById('submit');
var nextButton = document.getElementById('next');
function next() {
  if (step === 'step1') {
    step = 'step2';
    step1.classList.remove("is-active");
    step1.classList.add("is-complete");
    step2.classList.add("is-active");
    step1Content.classList.remove("active");
    step2Content.classList.add("active");

  } else if (step === 'step2') {
    step = 'step3';
    step2.classList.remove("is-active");
    step2.classList.add("is-complete");
    step3.classList.add("is-active");
    step2Content.classList.remove("active");
    step3Content.classList.add("active");

  } else if (step === 'step3') {
    step = 'step4d';
    step3.classList.remove("is-active");
    step3.classList.add("is-complete");
    step4.classList.add("is-active");
    step3Content.classList.remove("active");
    step4Content.classList.add("active");
    submitButton.classList.remove("hidden");
    nextButton.classList.add("hidden");


  } else if (step === 'step4d') {
    step = 'complete';
    step4.classList.remove("is-active");
    step4.classList.add("is-complete");

  }
}
function getCity(name){
    document.getElementById("city").value = name;
    
    }
    function getNoOfPersons(no){
    document.getElementById("noOfPeople").value = no;
    }
function checkCity(){
  if (tripName){
    document.getElementById("city").value = tripName;
    next();
    localStorage.clear();
  } else {
    step = 'step1'
    localStorage.clear();
  
  }

}