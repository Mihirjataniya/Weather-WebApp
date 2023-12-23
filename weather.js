const options = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': '1968e3ac81msh983f9ac8c1424c6p137507jsndf5a071ba10f',
        'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
    }
};
const getweather = (city) => {
fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city='+city, options)
    .then(response => response.json())
    .then(response => {
        cityName.innerHTML = city
        console.log(response)
        cloud_pct.innerHTML = response.cloud_pct
        temp.innerHTML = response.temp
        feels_like.innerHTML = response.feels_like
        humidity.innerHTML = response.humidity
        min_temp.innerHTML = response.min_temp
        max_temp.innerHTML = response.max_temp
        wind_speed.innerHTML = response.wind_speed
        wind_degrees.innerHTML = response.wind_degrees
        sunrise.innerHTML = response.sunrise
        sunset.innerHTML = response.sunset
    })
    .catch(err => console.error(err))
}

submit.addEventListener('click', (e)=>{
    e.preventDefault()
    getweather(city.value)
})  
getweather('Mangalore')

const weatherofotherA = (cityname) =>{
    fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city='+cityname, options)
        .then(response => response.json())
        .then(response => {
            ahmdtemp.innerHTML = response.temp + '°C'
            ahmdhumidity.innerHTML = response.humidity + '%'
            ahmdwind.innerHTML = response.wind_speed + ' km/h'
        })
        .catch(err => console.error(err))
}
weatherofotherA('ahmedabad')

const weatherofotherB = (cityname) =>{
    fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city='+cityname, options)
        .then(response => response.json())
        .then(response => {
            bangtemp.innerHTML = response.temp + '°C'
            banghumidity.innerHTML = response.humidity   + '%'
            bangwind.innerHTML = response.wind_speed + ' km/h'
        })
        .catch(err => console.error(err))
}
weatherofotherB('Bangalore')

const weatherofotherC = (cityname) =>{
    fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city='+cityname, options)
        .then(response => response.json())
        .then(response => {
            chentemp.innerHTML = response.temp + '°C'
            chenhumidity.innerHTML = response.humidity + '%'
            chenwind.innerHTML = response.wind_speed + ' km/h'
        })
        .catch(err => console.error(err))
}
weatherofotherC('Chennai')

const weatherofotherD = (cityname) =>{
    fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city='+cityname, options)
        .then(response => response.json())
        .then(response => {
            delhitemp.innerHTML = response.temp + '°C'
            delhihumidity.innerHTML = response.humidity  + '%'
            delhiwind.innerHTML = response.wind_speed + ' km/h'
        })
        .catch(err => console.error(err))
}
weatherofotherD('Delhi')

const weatherofotherE = (cityname) =>{
    fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city='+cityname, options)
        .then(response => response.json())
        .then(response => {
            mumtemp.innerHTML = response.temp + '°C'
            mumhumidity.innerHTML = response.humidity  + '%'
            mumwind.innerHTML = response.wind_speed + ' km/h'
        })
        .catch(err => console.error(err))
}
weatherofotherE('Mumbai')

const weatherofotherF = (cityname) =>{
    fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city='+cityname, options)
        .then(response => response.json())
        .then(response => {
            koltemp.innerHTML = response.temp + '°C'
            kolhumidity.innerHTML = response.humidity  + '%'
            kolwind.innerHTML = response.wind_speed + ' km/h'
        })
        .catch(err => console.error(err))
}
weatherofotherF('Kolkata')
