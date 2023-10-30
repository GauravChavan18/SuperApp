import { useCallback, useEffect, useState } from "react";

const DateCard = () => {
  const [dated, setdated] = useState([]);
  const getCurrentDate = useCallback(() => {
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
  }, []);
  useEffect(() => {
    getCurrentDate();
  }, [getCurrentDate]);
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-around",
        alignItems: "center",
        height: "100%",
        fontFamily: "Roboto",
        fontWeight: "500",
        color: "white",
        fontSize: "20px",
        letterSpacing: "1.5px",
      }}
    >
      {<p style={{ margin: "0" }}>{dated[0]}</p>}
      {<p style={{ margin: "0" }}>{dated[1]}</p>}
    </div>
  );
};

export default DateCard;
