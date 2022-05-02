"usage strict";
/*
   New Perspectives on HTML5 and CSS3, 7th Edition
   Tutorial 9
   Case Problem 1

   Planisphere Script
   Author: Samantha Finks
   Date:   5/1/2022

*/
// Store the current date and time
//*Declare a variable named thisTime containing a Date object for February 3, 2018 at 3:15:28 AM.*/
var thisTime = new Date('February 3, 2018 3:15:28 AM');
/**Use the toLocaleString() method to save the text of the thisTime variable in the timeStr variable.*/
var timeStr = thisTime.toLocaleString();

// Display the current date and time
/**Change the inner HTML code of the page element with the ID “timestamp” to the value of the timeStr variable.*/
document.getElementById("timeStamp").innerHTML = timeStr;

// Sky Map
/**Next, you will determine which sky map to show in the web page. First, create a variable named thisHour, using the getHours() method to extract the hour value from the thisTime variable.*/
var thisHour = thisTime.getHours();
/**Create a variable named thisMonth using the getMonth() method to extract the month number from the thisTime variable. */
var thisMonth = thisTime.getMonth();

/**The number of the map to use with the given hour and month is calculated with the formula (2×month + hour) % 24 where month is the value of the thisMonth variable and hour is the value of the thisHour variable. Store the value of this formula in the mapNum variable.*/
var mapNum = (thisMonth *2 + thisHour) % 24; 

// Determines the sky image based on the time
/**You will use JavaScript to write the HTML code for the inline element showing the sky image to use in the web page. Create a variable named imgStr that stores the following text string
<img src='sd_skyMap.png' />
where Map is the value of the mapNum variable. (Hint: Use the + operator to combine text strings together and be sure to include the single quote character within the text strings.) */
var imgStr = "<img src='sd_sky" + mapNum + ".png' />";

/**For the page element with the ID planisphere, use the insertAdjacentHTML() to insert the value of the imgStr variable directly after the element’s opening tag. */
document.getElementById("planisphere").insertAdjacentHTML('afterBegin', imgStr);
