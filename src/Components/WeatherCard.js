import React from "react";
import pressureimg from "../Assests/pressure.png";
import windimg from "../Assests/wind.png";
import humidityimg from "../Assests/humidity.png";
import "./WeatherCard.css";
const WeatherCard = ({ weatherdata }) => {
  return (
    <div className="weathercardbody">
      {weatherdata && (
        <div className="weathercardcompo">
          <img
            src={weatherdata.condition.icon}
            style={{ width: "75px", height: "75px" }}
            alt="img data"
          />
          <p className="weatherpara">{weatherdata.condition.text}</p>
        </div>
      )}
      <div className="verticalline"></div>
      {weatherdata && (
        <div className="weathercardcompo">
          <p className="degreepara">{weatherdata.temp_c} °C</p>
          <div className="pressurediv">
            <img src={pressureimg} style={{ height: "25px" }} alt="img data" />

            <span className="pressurepara">
              {weatherdata.pressure_mb} mbar <br /> pressure
            </span>
          </div>
        </div>
      )}
      <div className="verticalline"></div>
      {weatherdata && (
        <div className="weathercardcompo">
          <div className="winddiv">
            <img src={windimg} style={{ height: "25px" }} alt="img data" />
            <span className="pressurepara">
              {weatherdata.wind_kph} km/h <br /> wind
            </span>
          </div>
          <div className="humiditydiv">
            <img src={humidityimg} style={{ height: "25px" }} alt="img data" />
            <span className="pressurepara">
              {weatherdata.humidity} % <br /> Humidity
            </span>
          </div>
        </div>
      )}
    </div>
  );
};

export default WeatherCard;
