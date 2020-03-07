'use strict'
var Humbergerbtn=document.getElementById("humrger-btn");
Humbergerbtn.addEventListener("click",onclickMenu);
var nav=document.getElementById("nav");
var menu=document.getElementById("menu-bg");


function onclickMenu()
{
    Humbergerbtn.classList.toggle("change");
    nav.classList.toggle("change");
    menu.classList.toggle("change-bg");

}