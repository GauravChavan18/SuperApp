import React from "react";
import vectorimg from "../Assests/Vector.png";

const CategoryPageLeftDiv = (props) => {
  let Category = props.Category;
  let setCategory = props.setCategory;
  let nextcondition = props.nextcondition;
  function ClickHandler(item) {
    // console.log(item);
    setCategory(
      //   ...Category,

      Category.filter(function (element) {
        return element !== item;
      })
    );
  }
  //   console.log(Category);
  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        textAlign: "left",
        marginLeft: "100px",
        marginTop: "0",
        // backgroundColor: "aqua",
      }}
    >
      <h1
        style={{
          color: "rgba(114, 219, 115, 1)",
          fontFamily: "Single Day",
          fontSize: "40px",
          fontWeight: "500",
          marginBottom: "0",
          marginTop: "50px",
        }}
      >
        Super app
      </h1>
      <h1
        style={{
          color: "white",
          width: "65%",
          fontSize: "50px",
          fontWeight: "700",
          fontFamily: "Roboto",
          lineHeight: "70px",
        }}
      >
        Choose your entertainment category
      </h1>

      <div
        style={{
          width: "60%",
          display: "flex",
          flexDirection: "row",
          flexWrap: "wrap",
        }}
      >
        {Category.map((item, index) => (
          <div
            key={index}
            style={{
              width: "150px",
              height: "40px",
              backgroundColor: "#148A08",
              borderRadius: "20px",
              paddingLeft: "20px",
              boxSizing: "border-box",
              position: "relative",
              margin: "10px 15px 10px 0px",
            }}
          >
            <span
              style={{
                color: "white",
                position: "absolute",
                top: "8px",
                fontSize: "17px",
                textAlign: "left",
                fontWeight: "500",
                fontFamily: "Roboto",
                padding: "0",
              }}
            >
              {item}
            </span>
            <span
              onClick={() => ClickHandler(item)}
              style={{
                color: "#085C00",
                position: "absolute",
                right: "25px",
                top: "8px",
                fontFamily: "Roboto",
                fontSize: "20px",
                fontWeight: "600",
                cursor: "pointer",
              }}
            >
              X
            </span>
          </div>
        ))}
      </div>

      {nextcondition && (
        <p style={{ marginTop: "20px" }}>
          <img src={vectorimg} alt="imgage" style={{ height: "15px" }} />{" "}
          <span style={{ color: "red", fontFamily: "Roboto" }}>
            Minimum 3 category required
          </span>
        </p>
      )}
    </div>
  );
};

export default CategoryPageLeftDiv;
