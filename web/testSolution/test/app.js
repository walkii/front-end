﻿//import { myTimer, openCity} from "./appExport.js";
document.addEventListener(
    "DOMContentLoaded",
    function () {
        var app = new Vue({
            el: "#app",
            data: {
                isMainOpen: true,
                isBackOpen: true,
                isSidebarOpen: true,
                sidebarContentToShow: null
            }
        });
    }
);

function openCity(evt, cityName) {
    // Declare all variables
    var i, tabcontent, tablinks;

    // Get all elements with class="tabcontent" and hide them
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }

    // Get all elements with class="tablinks" and remove the class "active"
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }

    // Show the current tab, and add an "active" class to the link that opened the tab
    document.getElementById(cityName).style.display = "block";
    evt.currentTarget.className += " active";
};

// Set the date we're counting down to
var countDownDate = new Date("Jan 5, 2019 15:37:25").getTime();

// Update the count down every 1 second
var x = setInterval(function () {

    // Get todays date and time
    var now = new Date().getTime();

    // Find the distance between now and the count down date
    var distance = countDownDate - now;
     // Time calculations for days, hours, minutes and seconds
    const date = {
         day: Math.floor(distance / (1000 * 60 * 60 * 24)),
         hour: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
         minute: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
         second: Math.floor((distance % (1000 * 60)) / 1000)
    }
    let { day, hour, minute, second } = date;
    // Display the result in the element with id="demo"
    document.getElementById("timer").innerHTML = myTimer(day, hour, minute, second);

    // If the count down is finished, write some text 
    if (distance < 0) {
        clearInterval(x);
        document.getElementById("timer").innerHTML = "EXPIRED";
    }
}, 1000);

function myTimer(days=2, hours, minutes, seconds) {
    return `Next : ${days}d ${hours}h ${minutes}m ${seconds}s`;
}

function openNav() {
    document.getElementById("myNav").style.width = "100%";
}

function closeNav() {
    document.getElementById("myNav").style.width = "0%";
}