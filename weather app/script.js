const button=document.getElementById("search-button");
const input=document.getElementById("city-input");
const cityName=document.getElementById('city-name');
const cityTemp=document.getElementById('city-temp');
const cityTime=document.getElementById('city-time');
async function getData(cityname){
  const promise= await fetch(`http://api.weatherapi.com/v1/current.json?key=167a1814900f4813b74113846242808&q=${cityname}&aqi=yes`);
   return await promise.json();
}

button.addEventListener("click", async()=>{
    const value=input.value;
    const result= await getData(value);
    cityName.innerText=`${result.location.name},${result.location.region}-${result.location.country}`
    cityTemp.innerText=result.current.temp_c;
    cityTime.innerText=result.location.localtime;
})