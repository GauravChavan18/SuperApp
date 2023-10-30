import React, { useCallback, useEffect, useState } from "react";
import "./WeatherDateCard.css";
import DateCard from "./DateCard";
import WeatherCard from "./WeatherCard";
const WeatherDateCard = () => {
  const [weatherdata, setweatherdata] = useState(null);
  let url =
    "https://api.weatherapi.com/v1/forecast.json?key=83563ae7d5f14070b8e203915231910&q=mumbai&days=1&aqi=yes&alerts=yes";

  const fetchData = useCallback(async () => {
    try {
      let response = await fetch(url);
      let data = await response.json();

      setweatherdata(data.current);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  }, [url, setweatherdata]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return (
    <div className="WeatherCardDiv">
      <div className="DateCard">{<DateCard />}</div>
      <div className="WeatherCard">
        {<WeatherCard weatherdata={weatherdata} />}
      </div>
    </div>
  );
};

export default WeatherDateCard;
