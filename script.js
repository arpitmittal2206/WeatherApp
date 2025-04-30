
async function getWeather() {
    const city = document.getElementById('cityInput').value;
    const apiKey = '38e77bc3512b732bef47077c9b3aab31'; // Replace with your actual API key
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    try {
        const response = await fetch(url);
        const data = await response.json();

        if (data.cod === 200) {
            document.getElementById('weatherResult').innerHTML = 
                `<h2>Weather in ${data.name}</h2>
                 <p>Temperature: ${data.main.temp}°C</p>
                 <p>Humidity: ${data.main.humidity}%</p>
                 <p>Condition: ${data.weather[0].description}</p>`;
        } else {
            document.getElementById('weatherResult').innerHTML = "<p>City not found!</p>";
        }
    } catch (error) {
        console.error(error);
        document.getElementById('weatherResult').innerHTML = "<p>Error fetching data</p>";
    }
}
