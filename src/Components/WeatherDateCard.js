import React, { useEffect, useState } from "react";
import "./WeatherDateCard.css";
import DateCard from "./DateCard";
import WeatherCard from "./WeatherCard";
const WeatherDateCard = () => {
  const [alldata, setalldata] = useState([]);
  const [datedata, setdatedata] = useState([]);
  const [weatherdata, setweatherdata] = useState(null);
  let url =
    "http://api.weatherapi.com/v1/forecast.json?key=83563ae7d5f14070b8e203915231910&q=mumbai&days=1&aqi=yes&alerts=yes";

  async function fetchdata() {
    try {
      let response = await fetch(url);
      let data = await response.json();
      setalldata(data);
      //setdatedata(data.location);
      setweatherdata(data.current);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  }

  function getCurrentDate() {
    var ampm = hours >= 12 ? "pm" : "am";
    let newDate = new Date();
    let day = newDate.getDate();
    let year = newDate.getFullYear();
    let month = newDate.getMonth();
    let date = day + "-" + month + "-" + year;

    var hours = newDate.getHours();
    var minutes = newDate.getMinutes();
    var ampm = hours >= 12 ? "PM" : "AM";
    hours = hours % 12;
    hours = hours ? hours : 12;
    minutes = minutes < 10 ? "0" + minutes : minutes;
    var strTime = hours + ":" + minutes + " " + ampm;
    let arr = [date, strTime];
    setdatedata(...datedata, arr);
  }
  useEffect(() => {
    fetchdata();
    getCurrentDate();
  }, []);

  return (
    <div className="WeatherCardDiv">
      <div className="DateCard">{<DateCard datedata={datedata} />}</div>
      <div className="WeatherCard">
        {<WeatherCard weatherdata={weatherdata} />}
      </div>
    </div>
  );
};

export default WeatherDateCard;
