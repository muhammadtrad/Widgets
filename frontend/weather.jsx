import React from 'react';

class Weather extends React.Component{
    constructor(props){
        super(props);
        this.state = {
             weather: null 
            };
        this.pollWeather = this.pollWeather.bind(this);
    }

    componentDidMount(){
        navigator.geolocation.getCurrentPosition(this.pollWeather);
    }

    pollWeather(location){
        const API_KEY = 'be3dc70c08755e42bc8b5998132c5cc3';
        const WEATHER_ENDPOINT = 'api.openweathermap.org/data/2.5/weather?';
        let lat = location.coords.latitude;
        let lon = location.coords.longitude;
        let url = `http://${WEATHER_ENDPOINT}lat=${lat}&lon=${lon}&appid=${API_KEY}`;
        
        const xmlhttp = new XMLHttpRequest();
        xmlhttp.onreadystatechange = () => {
            //ready state of DONE means this is complete
            if (xmlhttp.status === 200 && xmlhttp.readyState === XMLHttpRequest.DONE){
                const data = JSON.parse(xmlhttp.responseText);
                this.setState({weather: data});
            }
        };

        xmlhttp.open("GET", url, true);
        xmlhttp.send();
    }
//retrieve weather data via API request
//render the weather data, current city, and the temperature
//retrieve the data in Fahrenheit
// add CSS to the weather box, make sure elements are spaced evenly
    render(){
        const { weather } = this.state;
        let content = <div></div>;
        if (weather){
            const temp = (weather.main.temp - 273.15)*1.8 + 32;
            content = <div>
                <p>{weather.name}</p>
                <p>{temp.toFixed(1)} degrees</p>
            </div>
        }else{
            content = <div className='loading'><p>Loading Weather....</p></div>
        }
        return(
        <div>
            <h1>Weather</h1>
            <div className="weather">
                {content}
            </div>
        </div>
        );
    }
}

export default Weather;