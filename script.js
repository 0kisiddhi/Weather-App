const API_KEY="f69f7c694f3d72a4f90f1a2aab179245";
const showCity=()=>{
    const inputBox=document.querySelector(".input");
    const city=inputBox.value;

    const url=`https://api.openweathermap.org/data/2.5/weather?q=${city}
    &appid=${API_KEY}&units=metric`;

    fetch(url)
    .then(response=>{
        if(!response.ok){
            throw new Error("City not found")
        }
        return response.json();
    })
    .then(data=>{
        const cityName=data.name;
        const country=data.sys.country;
        const temp=data.main.temp;
        const humidity=data.main.humidity;
        const wind=data.wind.speed;
        const description=data.weather[0].description;

        const resultBox = document.getElementById("result");

// Lowercase the description to make checking easier
const sky = description.toLowerCase();

if (sky.includes("clear")) {
  resultBox.style.backgroundColor = "#ffe066"; // sunny yellow
} else if (sky.includes("cloud")) {
  resultBox.style.backgroundColor = "#d3d3d3"; // grayish
} else if (sky.includes("rain")) {
  resultBox.style.backgroundColor = "#a0c4ff"; // light blue
} else if (sky.includes("thunderstorm")) {
  resultBox.style.backgroundColor = "#adb5bd"; // dark gray
} else if (sky.includes("snow")) {
  resultBox.style.backgroundColor = "#f0f8ff"; // light snow
} else {
  resultBox.style.backgroundColor = "#e0e0e0"; // default
}


        //display result

        document.getElementById("result").innerHTML=
        `<strong>🏙️${cityName}, 🌍${country}</strong><br>
        🌡️Temperature: ${temp}°C <br>
        💧humidity: ${humidity}% <br>
        🌬️wind: ${wind}km/h<br>
        ☁️sky: ${description}
        `
        inputBox.value="";
    })
    .catch(error=>{
        document.getElementById("result").innerText=error.message
    })


    const resultBox=document.querySelector(".result");
    resultBox.innerText=`${city}`;
    inputBox.value="";
};
 
