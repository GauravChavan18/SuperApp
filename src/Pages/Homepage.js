import React from "react";
import "./HomePage.css";
import UserCard from "../Components/UserCard";
import WeatherDateCard from "../Components/WeatherDateCard";
import NewsCard from "../Components/NewsCard";
import NotesDiv from "../Components/NotesDiv";
import { useNavigate } from "react-router-dom";
import Timer from "../Components/Timer";
const HomePage = () => {
  const navigate = useNavigate();
  function buttonclickhandler() {
    navigate("/entertainment");
  }
  return (
    <div className="MainBody">
      <div className="MainContent">
        <div className="MainLeftDiv">
          <div className="topDiv">
            <div className="topleftdiv">
              <UserCard />
              <WeatherDateCard />
            </div>
            <div className="notesdiv">
              notes div
              <NotesDiv />
            </div>
          </div>
          <div className="BottomDiv">
            <Timer />
          </div>
        </div>
        <div className="NewsCard">
          <NewsCard />
        </div>
      </div>
      <button className="browsebutton" onClick={buttonclickhandler}>
        Browse
      </button>
    </div>
  );
};

export default HomePage;
