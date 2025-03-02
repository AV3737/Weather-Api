let btn= document.querySelector("button")

btn.addEventListener("click",async ()=>{
  let input= document.querySelector("input").value;
  const apiKey = 'e855171c6d6a4bbbb8965830242907';
  let response= await fetch(`http://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${input}&aqi=yes`);
  console.log(response);
  
  let data= await response.json();
  console.log(data);
  let cont= document.querySelector(".weather-info");
  cont.innerHTML=`<h3>${data.location.name}, ${data.location.country}</h3>
  <p>Temperature: ${data.current.temp_c}°C</p>
  <p>Condition: ${data.current.condition.text}</p>
  <img src="${data.current.condition.icon}" alt="Weather Icon">`


})