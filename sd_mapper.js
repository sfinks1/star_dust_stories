"usage strict";

/*
   New Perspectives on HTML5 and CSS3, 7th Edition
   Tutorial 9
   Case Problem 1

   Planisphere Script
   Author: Lani Hurley
   Date: 8/4/2021  

*/
// Store the current date and time
var thisTime = new Date();
var timeStr = thisTime.toLocaleString();

// Display the current date and time
document.getElementById("timeStamp").innerHTML = timeStr;

// Sky Map
var thisHour = thisTime.getHours();
var thisMonth = thisTime.getMonth();

var mapNum = (thisMonth *2 + thisHour) % 24; 

// Determines the sky image based on the time

var imgStr = "<img src='sd_sky" + mapNum + ".png' />";

document.getElementById("planisphere").insertAdjacentHTML('afterBegin', imgStr);

