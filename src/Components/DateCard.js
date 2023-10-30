import React, { useEffect, useState } from "react";

const DateCard = ({ datedata }) => {
  // const [date, setdate] = useState();
  // const [time, settime] = useState("");
  // console.log(datedata);
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
      {<p style={{ margin: "0" }}>{datedata[0]}</p>}
      {<p style={{ margin: "0" }}>{datedata[1]}</p>}
    </div>
  );
};

export default DateCard;
