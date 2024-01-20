console.log('Hello Jee');

const API_KEY = "168771779c71f3d64106d8a88376808a";



function renderWeatherInfo(data){
    let newPara = document.createElement('p');
    newPara.textContent = `${data?.main?.temp.toFixed(2)} °C`;
    document.body.appendChild(newPara);
}
//to use await 
async function fetchWeatherInfo() {


    try{
    let city = "goa";

    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`); //yaha pr inverted commas se bhi faarak pdta hai different types k hote hai dhyan rkhna unka

    const data = await response.json();
    console.log("Weather data:-> " , data);

    renderWeatherInfo(data);
    }
    catch (err){
        console.warn(err);
    }
}
    
async function getCustomWeatherDetails() {
    try {
    let latitude = -100000000;
    let longitude = 15.67666;

    let result = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}`);

    let data = await result.json();

    console.log("Weather -> ", data);
    }
    catch(err){
        console.log("Error Found + err");
    }
    
}

function getLocation(){
    if(navigator.geolocation){
        navigator.geolocation.getCurrentPosition(showPosition);
    }
    else{
        console.log("Geolocation is not supported in this Device");
    }
}

function showPosition(position) {
    let lat = position.coords.latitude;
    let longi = position.coords.longitude;

    console.log(lat);
    console.log(longi);
}
