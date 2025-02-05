const city = document.getElementById("city-input");
const button = document.getElementById("click-button");

const cityName = document.getElementById("city-name");
const cityTime = document.getElementById("city-time");
const cityTemp = document.getElementById("city-temp");

async function getDetails(cityName) {
  const response = await fetch(
    `http://api.weatherapi.com/v1/current.json?key=3e24e3bc79ad47fea2f171216240111&q=${cityName}&aqi=yes`
  );
  return await response.json();
}

button.addEventListener("click", async () => {
  const value = city.value;
  const result = await getDetails(value);
  // console.log(result);

  cityName.innerText = `City - ${result.location.name}`;
  cityTime.innerText = `Current Time in City - ${result.location.localtime}`;
  cityTemp.innerText = `Temperature - ${result.current.temp_c} °C`;
});
