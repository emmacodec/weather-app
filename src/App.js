import React, {useState} from "react";
import axios from "axios";

function App() {
  const [data, setData] = useState({});
  const [location, setLocation] = useState('');

const url ='https://api.openweathermap.org/data/2.5/weather?q=${location},nigeria&APPID=959e70ce52d49f591068ad7debc47a20'

const searchLocation = (event) => {
  if(event.key === 'Enter') {
    axios.get(url).then((Response) =>{
      setData(Response.data)
      console.log(Response.data)
    })
  }
  
}

  return (
    <div className="app">
      <div className="container">
        <div className="top">
          <div className="location">
            <p>Lagos</p>
          </div>
          <div className="temp">
            <h1>298.33°F</h1>
          </div>
          <div className="description">
            <p>Clouds</p>
          </div>
        </div>
        <div className="bottom">
          <div className="feels">
            <p className="bold">299.31°F</p>
            <p>Feels Like</p>
          </div>
          <div className="humidity">
            <p className="bold">92%</p>
            <p>Humidity</p>
          </div>
          <div className="wind">
            <p className="bold">1.17MPH</p>
            <p>Wind Speed</p>
          </div>
        </div>
      </div>
    </div>
  );
  }


export default App;
