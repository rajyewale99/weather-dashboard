import { useState } from "react";
import SearchBox from "./SearchBox";
import InfoBox from "./InfoBox";

export default function WeatherApp(){
    const [weatherInfo, setWeatherInfo] = useState({
        city : "Delhi",
        feelsLike: 29.14,
        temp: 30.64,
        tempMin: 30.64,
        tempMax: 30.64,
        humidity: 27,
        weather: "Clear Sky",
    });
    let updateInfo = (newInfo )=>{
        setWeatherInfo(newInfo); 
    };
 return(
    <div style={{textAlign : "center"}}>
        <h2>Weather App by Pruthvi</h2>
        <SearchBox updateInfo={updateInfo}/>
        <InfoBox info={weatherInfo}/>
    </div>
 );
}
