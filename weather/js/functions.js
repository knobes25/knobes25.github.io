/* *************************************
*  Weather Site JavaScript Functions
************************************* */
//console.log('My javascript is being read.');
//My API key
//d3e5f139fafcc77d
//Variables for Function Use
const temp = 31;
const speed = 5;
buildWC(speed, temp);
const direction ="NE";
const phrase = 'it is snowing';
windDial(direction);
let keyword = getCondition(phrase);
changeSummaryImage(keyword);
//this will calculate the function
function buildWC(speed, temp) {
 const feelTemp = document.getElementById('feelTemp'); 
    // Compute the windchill
 let wc = 35.74 + 0.6215 * temp - 35.75 * Math.pow(speed, 0.16) + 0.4275 * temp * Math.pow(speed, 0.16);
 console.log(wc);
    // Round the answer down to integer
 wc = Math.floor(wc);
    // If chill is greater than temp, return the temp
 wc = (wc > temp)?temp:wc;
// Display the windchill
 console.log(wc);
 feelTemp.innerHTML = wc;
}
// Wind Dial Function
function windDial(direction){
// Get the wind dial container
const dial = document.getElementById("dial");
    console.log(direction);
    // Determine the dial class
 switch (direction){
  case "North":
  case "N":
   dial.setAttribute("class", "north"); //"north" is the CSS rule selector
   break;
  case "NE":
  case "NNE":
  case "ENE":
   dial.setAttribute("class", "ne");
   break;
  case "NW":
  case "NNW":
  case "WNW":
   dial.setAttribute("class", "nw");
   break;
  case "South":
  case "S":
   dial.setAttribute("class", "south");
   break;
  case "SE":
  case "SSE":
  case "ESE":
   dial.setAttribute("class", "se");
   break;
  case "SW":
  case "SSW":
  case "WSW":
   dial.setAttribute("class", "sw");
   break;
  case "East":
  case "E":
   dial.setAttribute("class", "east");
   break;
  case "West":
  case "W":
   dial.setAttribute("class", "west");
   break;
 }
}

//Function that determines the weather condition
function getCondition(phrase) {
    if (phrase.includes('Cloudy') || phrase.includes('Overcast')) {
        let keyword='clouds';
        console.log(keyword)
        return  keyword;
    }
    else if (phrase.includes('foggy') || phrase.includes('fog')) {                               
         let keyword = "fog";
         console.log(keyword);
    return keyword;
    }
    else if (phrase.includes('clear') || phrase.includes('sunny') || phrase.includes('sun')) {
        let keyword = 'clear';
        console.log(keyword);
        return keyword;
    }
    else if (phrase.includes('rain') || phrase.includes('rainy') || phrase.includes('wet') || phrase.includes('showers')) {
             let keyword = 'rain';
             console.log(keyword);
        return keyword;
             }
    else if (phrase.includes('snow') || phrase.includes('snowy') || phrase.includes('snowing') || phrase.includes('blizzard')) {
        let keyword = 'snow';
        console.log(keyword);
        return keyword;
    }
}

/*function getCondition(phrase) {
    if(phrase.include('Cloudy') || phrase.include('Overcast')) {
        return 'Cloud';
    }
}*/

//This function changes the background image
function changeSummaryImage(keyword) {
    const curWeather = document.getElementById('curWeather');
    
    switch(keyword) {
            case "clouds":
            curWeather.setAttribute("class", "clouds"); // clouds is the css rule that changes the background image to reflect current weather condition
            break;
        case "rain":
            curWeather.setAttribute("class", "rain");
            break;
        case "fog":
            curWeather.setAttribute("class", "fog");
            break;
        case "clear":
            curWeather.setAttribute("class", "clear");
            break;
        case "snow":
            curWeather.setAttribute("class", "snow");
            break;
    }
    }}
