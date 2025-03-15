//your JS code here. If required.
const btn = document.querySelector("button")
btn.addEventListener("click",function(){
 fetch('https://api.openweathermap.org/data/2.5/weather?q=London&appid=678813de961756d6eb594f200e842b6f
')	
	.then(response=>response.json())
	.then(data=>{
	 const weatherDiv = document.getElementById("weatherData");
		weatherDiv.innerHTML = `Current weather in London:${data.weather[0].main}`
	});
}