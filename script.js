var time = new Date().getHours();
var messageText;
var noon = 12;
var evening = 18; // 6PM
var wakeUpTime = 9; // 9AM
var lunchTime = 12; // 12PM
var partyTime = 17; // 5PM
var napTime = lunchTime + 2; // 2PM
var partyTimeButton = document.getElementById("partyTimeButton"); 
var isPartyTime = false;

var updateClock = function() 
{
	var timeEventJS = document.getElementById("timeEvent");
	var image = "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/08/wakeUpTime.jpg";
	var lolcatImage = document.getElementById('lolcat');

	if (time == partyTime){
		image = "https://i.pinimg.com/originals/89/9e/71/899e7132fd5125067051104e5e3e3073.jpg";
    messageText = "IZ PARTEE TIME!!";
} 
	else if (time == napTime) {
	image = "http://www.dumpaday.com/wp-content/uploads/2013/02/funny-cat-nap3.jpg";
    messageText = "IZ NAP TIME...";
} 
	else if (time == lunchTime) {
	image = "https://i.pinimg.com/736x/52/bc/39/52bc3928fd63daa22ebfb555f9ae07dd.jpg";
    messageText = "IZ NOM NOM NOM TIME!!";
} 
	else if (time == wakeUpTime) {
	image = "https://www.top13.net/wp-content/uploads/2015/10/perfectly-timed-cat-photos-funny-cover.jpg";
    messageText = "IZ TIME TO GETTUP.";
} 
	else if (time < noon) {
    messageText = "Good morning!";
} 
	else if (time > evening) {
    messageText = "Good Evening!";
} 
	else {
	image = "https://i.ebayimg.com/images/g/1bUAAOxyMxpRpV6F/s-l300.jpg";
    messageText = "Good afternoon!";
	}

	timeEventJS.innerText = messageText;
	lolcatImage.src = image;

	var showCurrentTime = function()
	{
    	// display the string on the webpage
    	var clock = document.getElementById('clock');
 
    	var currentTime = new Date();
 
    	var hours = currentTime.getHours();
    	var minutes = currentTime.getMinutes();
    	var seconds = currentTime.getSeconds();
    	var meridian = "AM";
 
    	// Set hours 
    	if (hours >= noon) 
    	{ 
        	meridian = "PM"; 
    	}  
    	if (hours > noon) 
    	{ 
        	hours = hours - 12; 
    	}
 
    	// Set Minutes
    	if (minutes < 10)
    	{
       	  	minutes = "0" + minutes;
    	}
 
    	// Set Seconds
    	if (seconds < 10)
    	{
        	seconds = "0" + seconds;
    	}
 
    	// put together the string that displays the time
    	var clockTime = hours + ":" + minutes + ":" + seconds + " " + meridian + "!";
 
    	clock.innerText = clockTime;
	};
	showCurrentTime();
};
	
/*moved in code, delete if it works- updateClock(); 
var oneSecond = 1000; 
setInterval( updateClock, oneSecond);*/

/*moved in code, delete if it works-var partyTimeButton = document.getElementById("partyTimeButton"); 
var isPartyTime = false;*/

var partyEvent = function() {  
   if (isPartyTime === false) {
      isPartyTime = true;
      time = partyTime;
	  partyTimeButton.innerText = "Party Over";
	  partyTimeButton.style.backgroundColor = "#0A8DAB";
      // text in the button should read "Party Over"
      // color of the button should be "#0A8DAB" (bonus!)
   }
   else {
      isPartyTime = false;
      time = new Date().getHours();
	  partyTimeButton.innerText = "PARTY TIME!";
	  partyTimeButton.style.backgroundColor = "#222";
      // text in the button should read "PARTY TIME!"
      // color of the button should be "#222" (bonus!)
   }
	
};
//select wakeup time
var wakeUpTimeSelector =  document.getElementById("wakeUpTimeSelector");

var wakeUpEvent = function() 
{
    wakeUpTime = wakeUpTimeSelector.value;
};

//select lunch time
var lunchTimeSelector =  document.getElementById("lunchTimeSelector");

var lunchTimeEvent = function()
{
    lunchTime = lunchTimeSelector.value;
};
//select nap time
var  napTimeSelector =  document.getElementById("napTimeSelector");

var napTimeEvent = function()
{
    napTime = napTimeSelector.value;
};

var oneSecond = 1000;
updateClock(); 
setInterval( updateClock, oneSecond);
partyTimeButton.addEventListener('click', partyEvent);
wakeUpTimeSelector.addEventListener('change', wakeUpEvent);
lunchTimeSelector.addEventListener('change', lunchTimeEvent);
napTimeSelector.addEventListener('change', napTimeEvent);