//your JS code here. If required.
const btn = document.querySelector("button")
btn.addEventListener("click",function(){
 fetch("https://api.openweathermap.org/data/2.5/weather?q=London,uk&appid=e467712b257e418838be97cc881a71de")	
	.then(response=>response.json())
	.then(data=>{
	 const weatherDiv = document.getElementById("weatherData");
		weatherDiv.innerHTML =`Current weather in London: ${response.weather[0].main}`
	});
}