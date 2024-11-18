// Menu Section


document.querySelector("#open-nav-menu").addEventListener("click", function(){
    document.querySelector("header nav .wrapper").classList.add("nav-open");
})

document.querySelector("#close-nav-menu").addEventListener("click", function(){
    document.querySelector("header nav .wrapper").classList.remove("nav-open");
})

var customer = "John";

console.log(customer)

// Greeting Section

const greetingText = "Good Afternoon"
const weatherCondition = "sunny";
const userLocation = "New York";
let temperature = 22.4391;
let weatherText = `The weather is ${weatherCondition} in ${userLocation} and it's ${temperature.toFixed(1)}°C outside.`;

console.log(weatherText);

document.querySelector("#greeting").innerHTML = greetingText;
document.querySelector("p#weather").innerHTML = weatherText;

