import React, { useState } from "react";
import "./App.css";

const App = () => {
  const [city, setCity] = useState("");

  //to store the temperature
  const [result, setResult] = useState("");

  const changeHandler = (e) => {
    setCity(e.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=d885aa1d783fd13a55050afeef620fcb`
    )
      .then((response) => response.json())
      .then((data) => {
        const kelvin = data.main.temp;
        const celsius = kelvin - 273.15;
        //console.log(celsius);
        //Math.round() used to remove the decimal places
        setResult(
          "TEMPERATURE AT " + " " + city + "\n" + Math.round(celsius) + "°C"
        );
        setCity("");
      });
  };
  return (
    <center>
      <div className="card">
        <div className="card-body">
          <h4 className="title">WEATHER APP</h4>
          <form onSubmit={submitHandler}>
            <input
              type="text"
              name="city"
              placeholder="ENTER CITY"
              value={city}
              onChange={changeHandler}
            />
            <br />
            <br />
            <input type="submit" value="GET TEMPERATURE" />
          </form>
          <h1>{result}</h1>
        </div>
      </div>
    </center>
  );
};

export default App;
