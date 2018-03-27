/* *************************************
*  Weather Site JavaScript Functions
************************************* */
//console.log('My javascript is being read.');
//My API key
//d3e5f139fafcc77d
//Variables for Function Use


//this will calculate the function
function buildWC(speed, curTemp) {
  
    // Compute the windchill
 let wc = 35.74 + 0.6215 * curTemp - 35.75 * Math.pow(speed, 0.16) + 0.4275 * curTemp * Math.pow(speed, 0.16);
 console.log(wc);
    // Round the answer down to integer
 wc = Math.floor(wc);
    // If chill is greater than temp, return the temp
 wc = (wc > curTemp)?curTemp:wc;
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
    if (phrase.includes('Cloudy') || phrase.includes('Overcast') || phrase.includes('clouds')) {
        let keyword='clouds';
        console.log(keyword);
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
    //const curWeather = document.getElementById('curWeather');
    
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
    }

// Get Data from API
function getData(LOCALE) {
  const WU_API_KEY = 'd3e5f139fafcc77d';
  const URL = "https://api.wunderground.com/api/" + WU_API_KEY + "/conditions/q/" + LOCALE + ".json";
  fetch(URL)
   .then(response => response.json())
   .then(function (data) {
    console.log('Json object from getData function:');
    console.log(data);
    displayData(data);
    })
   .catch(error => console.log('There was an error: ', error))
} // end getData function

function getHourly(LOCALE) {
    const WU_API_KEY = 'd3e5f139fafcc77d';
  const URL = "https://api.wunderground.com/api/" + WU_API_KEY + "/hourly/q/" + LOCALE + ".json";
  fetch(URL)
   .then(response => response.json())
   .then(function (data) {
    console.log('Json object from getHourly function:');
    console.log(data);
    })
   .catch(error => console.log('There was an error: ', error))
}
function getSat(LOCALE) {
     const WU_API_KEY = 'd3e5f139fafcc77d';
  const URL = "https://api.wunderground.com/api/" + WU_API_KEY + "/satellite/q/" + LOCALE + ".json";
  fetch(URL)
   .then(response => response.json())
   .then(function (data) {
    console.log('Json object from getSat function:');
    console.log(data);
      document.getElementById("satImg").src = data.satellite.image_url;
    })
   .catch(error => console.log('There was an error: ', error))
}
function getForecast(LOCALE) {
     const WU_API_KEY = 'd3e5f139fafcc77d';
  const URL = "https://api.wunderground.com/api/" + WU_API_KEY + "/forecast/q/" + LOCALE + ".json";
  fetch(URL)
   .then(response => response.json())
   .then(function (ralph) {
    console.log('Json object from forecast function:');
    console.log(ralph);
    document.getElementById("hi").innerHTML = ralph.forecast.simpleforecast.forecastday["0"].high.fahrenheit + '&deg;F';
    document.getElementById("lo").innerHTML = ralph.forecast.simpleforecast.forecastday["0"].low.fahrenheit  + '&deg;F';
    
    })
   .catch(error => console.log('There was an error: ', error))
}

function displayData(data) {
    let curTemp = data.current_observation.temp_f;
    
    let curLoc = data.current_observation.display_location.full;
    
    let curCondition = data.current_observation.weather;
    
    console.log(curCondition);
    document.getElementById("curCondition").innerHTML = curCondition;
    console.log(curTemp);
    document.getElementById("curTemp").innerHTML= Math.round(curTemp) + "&deg;F";
    console.log(curLoc);
    document.getElementById("location").innerHTML = curLoc;
    document.getElementById("curLoc").innerHTML = curLoc;
    let phrase = data.current_observation.weather;
    let speed = data.current_observation.wind_mph;
    let direction = data.current_observation.wind_dir;
    let keyword = getCondition(phrase);
    let img2 = data.current_observation.icon_url;
    buildWC(speed,curTemp);
    windDial(direction);
    changeSummaryImage(keyword);
    document.getElementById("vidImg").src = img2;
    document.getElementById("wind-speed").innerHTML = Math.round(data.current_observation.wind_mph) + 'mph';
    document.getElementById("wind-gust").innerHTML = Math.round(data.current_observation.wind_gust_mph);
    document.getElementById("wind-dir").innerHTML = data.current_observation.wind_dir;
    document.getElementById("zip").innerHTML = data.current_observation.display_location.zip;
    document.getElementById("elevation").innerHTML = Math.round(lengthConverter(data.current_observation.display_location.elevation));
    document.getElementById("curLat").innerHTML = data.current_observation.display_location.latitude + '&deg; N, ';
    document.getElementById("curLong").innerHTML = data.current_observation.display_location.longitude + '&deg; W';
}

/*let TEMP = 41.1;
roundTemp(TEMP);
const elev = 1511;
convertFeet(elev);
function roundTemp(temp) {
    let x=Math.round(temp);
    console.log(x);
    return x;
}*/
function lengthConverter(elevation) {
    let feet = Math.round(elevation*3.2808);
    console.log(feet);
    return feet;
}
