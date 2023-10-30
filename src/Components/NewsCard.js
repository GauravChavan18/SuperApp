import React, { useEffect, useState } from "react";
import "./NewsCard.css";
const NewsCard = () => {
  const [randomnews, setrandomnews] = useState(0);
  const [sdata, setdata] = useState([]);
  const [dated, setdated] = useState([]);
  let url =
    "https://newsapi.org/v2/top-headlines?" +
    "country=us&" +
    "apiKey=c88136c8d6684baba4ff546228218d1b";

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
    setdated(arr);
  }
  async function fetchData() {
    try {
      const response = await fetch(url);
      const data = await response.json();
      const articles = await data.articles;
      setdata(...sdata, articles);
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    fetchData();
    getCurrentDate();
    let num = Math.floor(Math.random() * 20);
    setrandomnews(num);
  }, []);

  return (
    <div className="NewsCardDiv">
      <div className="image-div">
        {sdata.length > 0 && (
          <img className="image" src={sdata[randomnews].urlToImage} />
        )}
        <div className="headlinediv">
          {sdata.length > 0 && (
            <p className="headlinepara">{sdata[randomnews].title}</p>
          )}
          {<p className="datepara">{dated[0] + " | " + dated[1]}</p>}
        </div>
      </div>
      {sdata.length > 0 && (
        <p
          className="newspara"
          style={{ padding: "20px", textAlign: "justify", lineHeight: "1.6" }}
        >
          {sdata[randomnews].description}
        </p>
      )}
    </div>
  );
};

export default NewsCard;
