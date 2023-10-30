import React from "react";
import logoimg from "../Assests/logoimg.png";
import GenreComponet from "../Components/GenreComponet";
import { useNavigate } from "react-router-dom";
const Entertainment = () => {
  const navigate = useNavigate();
  function ClickHandler() {
    navigate("/homepage");
  }

  return (
    <div
      style={{
        // width: "100vw",
        height: "100vh",
        backgroundColor: "black",
        overflow: "hidden",
      }}
    >
      <div
        style={{
          width: "85%",
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          margin: "auto",
          paddingTop: "20px",
        }}
      >
        <p
          style={{
            fontFamily: "Single Day",
            color: "#72DB73",
            fontSize: "30px",
            fontWeight: "400",
            margin: "0",
          }}
        >
          Super App
        </p>
        <img
          src={logoimg}
          onClick={ClickHandler}
          alt="img data"
          style={{ width: "60px", margin: "0", cursor: "pointer" }}
        />
      </div>
      <GenreComponet />
    </div>
  );
};

export default Entertainment;
