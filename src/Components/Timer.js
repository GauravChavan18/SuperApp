import React, { useRef, useState } from "react";
import upperpart from "../Assests/uppart.png";
import downpart from "../Assests/downpart.png";
import "./Timer.css";
import song from "../Assests/complete.mp3";
import { CountdownCircleTimer } from "react-countdown-circle-timer";
const Timer = () => {
  const [hourtime, sethourtime] = useState(0);
  const [mintime, setmintime] = useState(0);
  const [sectime, setsectime] = useState(0);

  const audioRef = useRef(null);
  const playSound = () => {
    audioRef.current.play();
  };
  function hrincehandler() {
    if (hourtime >= 0) {
      sethourtime(parseInt(hourtime) + 1);
    }
  }
  function hrdeschandler() {
    if (hourtime == 0) {
      sethourtime(0);
    } else if (hourtime <= 10) {
      sethourtime(parseInt(hourtime) - 1);
    } else {
      sethourtime(parseInt(hourtime) - 1);
    }
  }
  function mindeschandler() {
    if (mintime == 0) {
      setmintime(0);
    } else if (mintime <= 10) {
      setmintime(parseInt(mintime) - 1);
    } else {
      setmintime(parseInt(mintime) - 1);
    }
  }
  function minincehandler() {
    if (mintime > 0) {
      setmintime(parseInt(mintime) + 1);
    } else if (mintime < 60) {
      setmintime(parseInt(mintime) + 1);
    }
  }
  function secdeschandler() {
    if (sectime == 0) {
      setsectime(0);
    } else if (sectime <= 10) {
      setsectime(parseInt(sectime) - 1);
    } else {
      setsectime(parseInt(sectime) - 1);
    }
  }
  function secincehandler() {
    if (sectime < 9) {
      setsectime(parseInt(sectime) + 1);
    } else if (sectime < 60) {
      setsectime(parseInt(sectime) + 1);
    }
  }
  const remainingTime = ({ remainingTime }) => {
    const hours = Math.floor(remainingTime / 3600);
    const minutes = Math.floor((remainingTime % 3600) / 60);
    const seconds = remainingTime % 60;

    return `${hours}:${minutes}:${seconds}`;
  };

  const [timerstate, settimerstate] = useState(false);
  const [duration, setduration] = useState(0);
  function timerstart() {
    settimerstate(true);
    setduration(hourtime * 3600 + mintime * 60 + sectime);
  }
  function timerpause() {
    settimerstate(false);
  }
  return (
    <div className="maindiv">
      <div className="circletimerdiv">
        <CountdownCircleTimer
          size={150}
          strokeWidth={8}
          trailColor={"#181D37"}
          isPlaying={timerstate}
          duration={duration}
          colors={["#FF6A6A", "#181D37", "#FFFFFF"]}
          onComplete={() => {
            console.log("complete");
            playSound();
            setTimeout(() => {
              audioRef.current.pause();
              settimerstate(false);
              sethourtime(0);
              setsectime(0);
              setmintime(0);
              // setduration(2);
            }, 5000);
          }}
        >
          {remainingTime}
        </CountdownCircleTimer>
        <audio ref={audioRef} src={song} />
      </div>
      <div className="timerleftcard">
        <div className="timersection">
          <div>
            <p className="texttime">Hours</p>
            <img src={upperpart} onClick={hrdeschandler} />
            <p className="time">{hourtime}</p>
            <img src={downpart} onClick={hrincehandler} />
          </div>
          <p className="colon">:</p>
          <div>
            <p className="texttime">Minutes</p>
            <img src={upperpart} onClick={mindeschandler} />
            <p className="time">{mintime}</p>
            <img src={downpart} onClick={minincehandler} />
          </div>
          <p className="colon">:</p>
          <div>
            <p className="texttime">Seconds</p>
            <img src={upperpart} onClick={secdeschandler} />
            <p className="time">{sectime}</p>
            <img src={downpart} onClick={secincehandler} />
          </div>
        </div>
        {timerstate ? (
          <button onClick={timerpause} className="timerbtnstate">
            pause
          </button>
        ) : (
          <button onClick={timerstart} className="timerbtnstate">
            Start
          </button>
        )}
      </div>
    </div>
  );
};

export default Timer;
